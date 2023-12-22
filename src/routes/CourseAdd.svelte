<script>
    import {courses} from '$lib/courseStore.js'

    let coursename = ''
    let message = ''

    //Kurssin lisääminen
    function saveCourse(){
        let id = $courses.length
        let course = {id, name: coursename}

        courses.add(course)
        message = `${coursename} lisätty ID:llä ${id}`
        coursename = ''
        console.log($courses)
    }

</script>

<div class="ui input">
    <input type="text" bind:value={coursename} placeholder="Opintojakson nimi">
    <button class="ui button" on:click={saveCourse}>Lisää opintojakso</button>
</div>

<!-- Viesti onnistumisesta -->
{#if message}
    <div class="ui success message">
        <i class="close icon"></i>
        <div class="header">
        {message}
        </div>
    </div>
{/if}

<style>
    @import 'semantic-ui-css/semantic.min.css';
</style>