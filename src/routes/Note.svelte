<script>
    import {onMount} from 'svelte'
    import {courses, setCourse} from '$lib/courseStore.js'
    import {notes} from '$lib/noteStore.js'
    import {writable} from 'svelte/store'
    
    // $: console.log($courses)

    let selectedCourse = ''
    let noteText = ''

    // Opintojakson valinta
    onMount(() => {
        // setCourse(selectedCourse)
        if ($courses.length > 0) {
            selectedCourse = $courses[0].name
        }
    })

    
    //Muistiinpanon tallennus
    function saveNote() {
        if (selectedCourse && noteText.length > 0) {
            const currentTime = new Date().toISOString()
            let id = $notes.length
            let datetime = currentTime
            let note = {id, notetext:noteText, datetime, course:selectedCourse}
            // addNote({
            //     id = notes.length
            //     course: selectedCourse,
            //     noteText,
            //     datetime: currentTime
            // })
            notes.add(note)
            console.log('Note saved:', note)
            console.log($notes)
        }
    }

</script>

<div class="selection">
    <select class="ui selection dropdown" bind:value={selectedCourse}>
        {#each $courses as courseOption (courseOption.id)}
            <option value={courseOption.name}>{courseOption.name}</option>
        {/each}
    </select>
    <button class="ui button" on:click={() => setCourse(selectedCourse)}>
        Valitse
    </button>
</div>
<div class="ui form">
    <h3 class="ui header">{selectedCourse}</h3>
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

