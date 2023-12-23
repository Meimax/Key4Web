<script lang="ts">
	import type { Locks } from '$lib/Locks';
	import LockComponent from '$lib/components/LockComponent.svelte';
	import Settings from '$lib/components/Settings.svelte';

	let locks: Locks;
	/** @type {import('./$types').PageData} */
	export let data;
	locks = data;
</script>

<main class="container" style="padding-top:0">
	{#if locks.locks}
		<article style="margin-top:0">
			<hgroup>
				<h1>Key4Web</h1>
				<h2>Locks</h2>
			</hgroup>
			{#each locks.locks as lock}
				<LockComponent
					id={lock.id}
					name="{lock.name},"
					timeout={lock.components[0].settings.timeout ?? 0}
				></LockComponent>
			{/each}
		</article>
	{:else}
		<Settings></Settings>
	{/if}
</main>
