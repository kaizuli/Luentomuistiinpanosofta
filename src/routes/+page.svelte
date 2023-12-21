<script>
    import Main from "./Main.svelte"
    export let data
</script>

{JSON.stringify(data, null, 2)}
<Main />