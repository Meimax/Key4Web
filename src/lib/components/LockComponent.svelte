<script lang="ts">
	export let id: number;
	export let name: string;
	export let timeout: number;
	const enum STATE {
		LOCKED,
		LOADING,
		OPEN
	}
	let icon: STATE = STATE.LOCKED;
	async function openLock() {
		icon = STATE.LOADING;
		await fetch('/api/open-lock', { method: 'POST', body: JSON.stringify({ LockId: id }) });
		icon = STATE.OPEN;
		setTimeout(() => {
			icon = STATE.LOCKED;
		}, timeout * 1000);
	}
</script>

<button on:click={openLock}>
	<span>
		<strong>{name}</strong>
		<small>id: {id}</small>
		<span style="float:right">
			{#if icon == STATE.LOCKED}
				<i class="material-symbols-outlined">lock</i>
			{:else if icon == STATE.LOADING}
				<div aria-busy={icon == STATE.LOADING}></div>
			{:else if icon == STATE.OPEN}
				<i class="material-symbols-outlined">key</i>
			{/if}
		</span>
	</span>
</button>

<style>
	.material-symbols-outlined {
		vertical-align: middle;
	}
</style>
