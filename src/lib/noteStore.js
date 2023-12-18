import {writable} from 'svelte/store'

const notes = writable([])

const addNote = (note) => {
    notes.update((existingNotes) => {
        let id = existingNotes.length
        return [...existingNotes, {id, ...note}]
    })
}

export {addNote, notes}