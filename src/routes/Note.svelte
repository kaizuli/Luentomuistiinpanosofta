<script>
    import {onMount} from 'svelte'
    import {courses} from '$lib/courseStore.js'
    import {notes} from '$lib/noteStore.js'
    import {writable} from 'svelte/store'

    // export let course
    console.log($courses)
    let selectedCourse = ''
    let noteText = ''

    // Opintojakson valinta
    // onMount(() => {
    //     // setCourse(selectedCourse)
    //     if ($courses.length > 0) {
    //         selectedCourse = $courses[0].name
    //     }
    // })

    
    //Muistiinpanon tallennus
    function saveNote() {
        if (selectedCourse && noteText.length > 0) {
            const currentTime = new Date().toISOString()
            let id = Math.floor(Math.random() * 1000000)
            while ($notes.some(note => note.id === id)) {
                id = Math.floor(Math.random() * 1000000);
            }
            let datetime = currentTime
            const note = {
                id,
                text: noteText,
                course: selectedCourse,
                timestamp: datetime 
            }
            notes.add(note)
            console.log('Note saved:', note)
            console.log($notes)
        }
    }

</script>

<!-- Opintojakson valinta -->
<div class="selection">
    <select class="ui selection dropdown" bind:value={selectedCourse}>
        {#each $courses as courseOption (courseOption.id)}
            <option value={courseOption}>{courseOption.name}</option>
        {/each}
    </select>
    <button class="ui button" on:click={() => setCourse(selectedCourse)}>
        Valitse
    </button>
</div>
<!-- Muistiinpanon kirjoitus -->
<div class="ui form">
    <h3 class="ui header">{selectedCourse.name}</h3>
    <div class="field">
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

