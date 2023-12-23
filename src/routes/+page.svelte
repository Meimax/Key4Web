<script lang="ts">
	import type { Locks, Lock } from '$lib/Locks';
	import LockComponent from '$lib/components/LockComponent.svelte';
	import Settings from '$lib/components/Settings.svelte';

	let locks: Lock[];
	/** @type {import('./$types').PageData} */
	export let data;
	let reorder: { [id: number]: number } = {
		10: 1,
		3: 2,
		8: 3,
		4: 4,
		6: 5,
		5: 6,
		2: 7
	};
	locks = data?.locks?.sort((i1: Lock, i2: Lock) => reorder[i1.id] - reorder[i2.id]);
</script>

<main class="container" style="padding-top:0">
	{#if locks}
		<article style="margin-top:0">
			<hgroup>
				<h1>Key4Web</h1>
				<h2>Locks</h2>
			</hgroup>
			{#each locks as lock}
				<LockComponent
					id={lock.id}
					name="{lock.name}"
					timeout={lock.components[0].settings.timeout ?? 0}
				></LockComponent>
			{/each}
		</article>
	{:else}
		<Settings></Settings>
	{/if}
</main>
