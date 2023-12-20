import {writable} from 'svelte/store'

// const notes = writable([])

// const addNote = (note) => {
//     notes.update((existingNotes) => {
//         let id = existingNotes.length
//         console.log(existingNotes)
//         return [...existingNotes, {id, ...note}]
//     })
// }

// export {addNote, notes}

function createNotes() {
    const {subscribe, set, update} = writable([])

    return {
        subscribe,
        add: (note) => update((notes) => [...notes, note]),
        remove: (id) => update((notes) => notes.filter((note) => note.id !== id)),
        reset: () => set([])
    }
}

export const notes = createNotes()