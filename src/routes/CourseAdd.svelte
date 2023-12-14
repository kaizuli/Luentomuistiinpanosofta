<script>
    let coursename = ''
    let courseID = 0
    let message = ''

    function addCourse(){
        message = "${coursename} lisätty ID:llä ${courseID}"
        coursename = ''
        courseID = 0
    }
</script>

<div class="ui input">
    <input type="text" bind:value={coursename} placeholder="Opintojakson nimi">
    <input type="number" bind:value={courseID} placeholder="Opintojakson ID">
    <button class="ui button" on:click={addCourse}>Lisää opintojakso</button>
</div>

<style>
    @import 'semantic-ui-css/semantic.min.css';
</style>