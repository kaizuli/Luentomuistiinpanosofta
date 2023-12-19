<script>
    import {notes} from '$lib/noteStore.js'
    import Note from "./Note.svelte"
    import ShowNote from './ShowNote.svelte';
</script>

<h1>Kirjoittamasi muistiinpanot:</h1>

{#each $notes as note}
    <ShowNote {note} />
{/each}