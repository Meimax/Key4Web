<script lang="ts">
	import LockComponent from '$lib/components/LockComponent.svelte';
	import type { Lock } from '$lib/Locks';
	const lock: Lock = {
		id: 4,
		name: '1. OG',
		capabilities: 1,
		type: 1,
		components: [],
		state: 1,
		alarms: []
	};
</script>

<main class="container">
	<LockComponent id={lock.id} name={lock.name} timeout={25}></LockComponent>
</main>
