<script>
    import { createEventDispatcher } from 'svelte'
    export let note

    const {id, text, course, timestamp } = note

//Yksittäisen muistiinpanon poistaminen
    const dispatch = createEventDispatcher()

    function handleRemoveNote() {
        dispatch('removeNote', { id: note.id })
    }
</script>

<!-- Muistiinpanojen listaus -->
<div class="ui message">
    <button class="close icon" on:click={handleRemoveNote}>Poista</button>
    <div class="header">{course.name} ID: {note.id}</div>
    <p>{note.text}</p>
    <p>{note.timestamp}</p>
</div>

<style>
    @import 'semantic-ui-css/semantic.min.css';
</style>
