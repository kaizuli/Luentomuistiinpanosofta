import {writable} from 'svelte/store'

function createNotes() {
    const {subscribe, set, update} = writable([])

    return {
        subscribe,
        add: (note) => update((notes) => [...notes, note]),
        remove: (id) => update((notes) => notes.filter((note) => note.id !== id)),
        reset: () => set([]),
        populate: (notes) => set(notes)
    }
}

export const notes = createNotes()