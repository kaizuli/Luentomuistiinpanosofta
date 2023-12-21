<script>
    import { createEventDispatcher } from "svelte";

    export let note

    const {id, notetext, course, datetime } = note

    // const dispatch = createEventDispatcher()

    function handleRemoveNote() {
        dispatch('removeNote', { id: note.id })
    }
</script>

<h1 class="ui header">Kirjoittamasi muistiinpanot:</h1>
<div class="ui message">
    <button class="close icon" on:click={handleRemoveNote}>Poista</button>
    <div class="header">{note.course} ID: {note.id}</div>
    <p>{note.notetext}</p>
    <p>{note.datetime}</p>
</div>

<style>
    @import 'semantic-ui-css/semantic.min.css';
</style>
