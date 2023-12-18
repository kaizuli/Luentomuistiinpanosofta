<script>
    import {onMount} from 'svelte'
    import {setCourse} from '$lib/courseStore.js'
    import {courses} from '$lib/courseStore.js'
    import {addNote} from '$lib/noteStore.js'
    import {writable} from 'svelte/store';
    
    $: console.log($courses)

    let selectedCourse = ''
    let noteText = ''

    // Opintojakson valinta
    onMount(() => {
        setCourse(selectedCourse)
    })

    //Muistiinpanon tallennus
    function saveNote() {
        if (selectedCourse) {
            const currentTime = new Date().toISOString()
            addNote({
                course: selectedCourse,
                noteText,
                datetime: currentTime
            })
        }
    }
</script>

<div class="selection">
    <select class="ui selection dropdown" bind:value={selectedCourse}>
        {#each $courses as courseOption}
            <option value={courseOption}>{courseOption}</option>
        {/each}
    </select>
    <button class="ui button" on:click={() => setCourse(selectedCourse)}>
        Valitse
    </button>
</div>
<div class="ui form">
    <h3 class="ui header">{selectedCourse}</h3>
    <div class="field">
        <div class="ui input">
            <input type="text" placeholder="Otsikko">
        </div>
        <textarea rows="16" placeholder="Muistiinpanosi" bind:value={noteText}></textarea>
    </div>
    
    <button class="ui button" on:click={saveNote}>Tallenna</button>
</div>

<style>
    @import 'semantic-ui-css/semantic.min.css';

    .selection{
        padding: 5px;
    }
</style>

