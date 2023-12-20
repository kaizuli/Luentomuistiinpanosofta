<script>
    import {notes} from '$lib/noteStore.js'
    import ShowNote from './ShowNote.svelte'

    function handleRemoveNote(event) {
        const { id } = event.detail
        notes.remove(id)
    }
</script>

<h1 class="ui header">Kirjoittamasi muistiinpanot:</h1>

{#each $notes as note}
    <ShowNote {note} on:removeNote={handleRemoveNote} />
{/each}

<style>
    @import 'semantic-ui-css/semantic.min.css';
</style>