<script lang="ts">
	export let id: number;
	export let name: string;
	async function openLock() {
		await fetch('/api/open-lock', { method: 'POST', body: JSON.stringify({ LockId: id }) });
	}
</script>

<button on:click={openLock}>
	<span>
		<strong>{name}</strong>
		<small>id: {id}</small>
		<span style="float:right">
			<i class="material-symbols-outlined">key</i>
		</span>
	</span>
</button>

<style>
	.material-symbols-outlined {
		vertical-align: middle;
	}
</style>
