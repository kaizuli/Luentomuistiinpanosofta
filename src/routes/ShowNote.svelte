<script>
    import { createEventDispatcher } from "svelte";

    export let note

    const {id, notetext, datetime, course } = note

    const dispatch = createEventDispatcher()

    function handleRemoveNote() {
        dispatch('removeNote', { id: note.id })
    }
</script>

<div class="ui message">
    <button class="close icon" on:click={handleRemoveNote}>Poista</button>
    <div class="header">{course} ID: {id}</div>
    <p>{notetext}</p>
    <p>{datetime}</p>
</div>

<style>
    @import 'semantic-ui-css/semantic.min.css';
</style>
