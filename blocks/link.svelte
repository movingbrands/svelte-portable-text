<script>
    export let href;
</script>

<style>
    a {
        display: inline-block;
    }
</style>

<a href={href}>
	<slot/>
</a>
