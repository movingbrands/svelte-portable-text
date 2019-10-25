<script>
    export let url;
</script>

<style>
    video {
        max-width: 100%;
    }
</style>

<video autoplay playsinline muted>
    <source src={url} type="video/mp4"/>
</video>
