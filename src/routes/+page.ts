import type { Locks } from "$lib/Locks";
export const load = async ({ fetch }) => {
    const locks: Locks | undefined = await fetch('/api/lock-list')
        .then((list) => list.json())
        .catch(() => undefined)
    //.then((list) => (locks = list));
    return locks;
}