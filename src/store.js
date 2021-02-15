import {writable} from 'svelte/store'

export const todos = writable([
    {
        name: 'faire les courses',
        completed: false,
        id: 2
    }
])