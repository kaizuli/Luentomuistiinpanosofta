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
    let note = {
        id: 0,
        notetext: 'tekstiä',
        datetime: Date,
        course: {id:0, name:'Frontend'}
    }
    const {subscribe, set, update} = writable([])

    return {
        subscribe,
        add: (note) => update((notes) => [...notes, note]),
        reset: () => set([])
    }
}

export const notes = createNotes()