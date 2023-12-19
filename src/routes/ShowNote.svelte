<script>
    export let note

    const {id, notetext, datetime, course } = note
</script>

<div>
    <h3>{course}</h3>
    <p>{notetext}</p>
    <p>{datetime}</p>
</div>
