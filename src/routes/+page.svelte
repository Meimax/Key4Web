<script lang="ts">
	import type { Locks } from '$lib/Locks';
	import LockComponent from '$lib/components/LockComponent.svelte';
	import Settings from '$lib/components/Settings.svelte';

	let locks: Locks;
	/** @type {import('./$types').PageData} */
	export let data;
	locks = data;
	//console.log(locks);
</script>

<main class="container">
	{#if locks.locks}
		<article>
			<hgroup>
				<h1>Key4Web</h1>
				<h2>Locks</h2>
			</hgroup>
			{#each locks.locks as lock}
				<LockComponent id={lock.id} name={lock.name}></LockComponent>
			{/each}
		</article>
	{:else}
		<Settings></Settings>
	{/if}
</main>
