<script lang="ts">
	let email: string;
	let password: string;
	let unsuccessful: boolean | undefined = undefined;
	function action() {
		const encoded = btoa(`${email}:${password}`);
		fetch('/api/authenticate', {
			method: 'GET',
			headers: { Authorization: `Basic ${encoded}` }
		}).then((res) => {
			if (res.status != 200) {
				unsuccessful = true;
			} else {
				// Simulate an HTTP redirect:
				window.location.replace('/');
			}
		});
	}
</script>

<h1>Settings</h1>
<main class="container">
	<article class="grid">
		<div>
			<h1>Sign in</h1>
			<form>
				<input
					bind:value={email}
					type="text"
					name="login"
					placeholder="Login"
					aria-label="Login"
					autocomplete="nickname"
					aria-invalid={unsuccessful}
					required
				/>
				<input
					bind:value={password}
					type="password"
					name="password"
					placeholder="Password"
					aria-label="Password"
					autocomplete="current-password"
					aria-invalid={unsuccessful}
					required
				/>
				<!--<fieldset>
					<label for="remember">
						<input type="checkbox" role="switch" id="remember" name="remember" />
						Remember me
					</label>
				</fieldset>
                -->
				<button type="submit" class="contrast" on:click|preventDefault={action}>Login</button>
			</form>
		</div>
		<div></div>
	</article>
</main>
