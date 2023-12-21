<script>
    import {notes} from '$lib/noteStore.js'
    import ShowNote from './ShowNote.svelte'

    function handleRemoveNote(event) {
        const { id } = event.detail
        notes.remove(id)
    }
</script>


{#if $notes.length > 0}
    {#each $notes as note}
        <ShowNote {note} on:removeNote={handleRemoveNote} />
    {/each}
{:else}
    <p>Ei muistiinpanoja!</p>
{/if}

<style>
    @import 'semantic-ui-css/semantic.min.css';
</style>