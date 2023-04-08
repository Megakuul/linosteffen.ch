<script>
    import { onMount } from "svelte";
    import InteractiveImage from "./lib/InteractiveImage.svelte";

    let galleryConfig = [];

    onMount(async () => {
        const response = await fetch("/medien.json");
        galleryConfig = await response.json();
    });


    let io;

    const observeElements = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.dispatchEvent(new CustomEvent("loadElement"));
                io.unobserve(entry.target);
            }
        });
    };

    onMount(() => {
        io = new IntersectionObserver(observeElements, { rootMargin: "100px" });
    });

    const registerElement = (el) => {
        if (el) {
            io.observe(el);
        }
    };
</script>

<div class="gallery">
    {#each galleryConfig as section}
        {#each section.content as image}
            {#if image.iframe}
                <iframe
                    width="533"
                    height="300"
                    title=""
                    data-src="https://www.youtube.com/embed/{image.youtubeid}"
                    frameborder="0"
                    allowfullscreen
                
                ></iframe>
            {:else}
                <InteractiveImage src={image.src} registerElement={registerElement} />
            {/if}
        {/each}
    {/each}
</div>


<style>
    .gallery {
        margin: 5%;
        overflow: hidden;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        flex-wrap: wrap;
    }
</style>
  