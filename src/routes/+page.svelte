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
	<header class="container">
		<hgroup>
			<h1>Key4Web</h1>
		</hgroup>
		{#if locks.locks}
			{#each locks.locks as lock}
				<LockComponent id={lock.id} name={lock.name}></LockComponent>
			{/each}
		{:else}
			<Settings></Settings>
		{/if}
	</header>
</main>
