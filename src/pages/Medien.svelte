<script lang="ts">
    import { onMount } from "svelte";
    import InteractiveImage from "./lib/InteractiveImage.svelte";

    let galleryConfig = [];

    //Loads the Configuration file
    onMount(async () => {
        const response = await fetch("/medien.json");
        galleryConfig = await response.json();
    });

    let lazyLoader;

    //Initializes the LazyLoader (with a rootMargin of 100px (that elements get loaded 100px befor they get observed))
    onMount(() => {
        lazyLoader = new IntersectionObserver(observeLazyloadedElements, { rootMargin: "100px" });
    });

    //Starts the Observer, this will execute the loadElement function for all Elements (if they are intersected)
    const observeLazyloadedElements = (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.dispatchEvent(new CustomEvent("loadElement"));
                lazyLoader.unobserve(entry.target);
            }
        });
    };

    //This function will add an element to the observer/Lazyloader
    const addToLazyloader = (element) => {
        if (element) {
            lazyLoader.observe(element);
        }
    };

    //This function will add an iframe element to the observer/Lazyloader
    //and set an eventhandler to set the data-src attribute to the src attribute (load the Iframe element)
    const addIframeToLazyloader = (element) => {
        addToLazyloader(element);
        element.addEventListener("loadElement", () => loadIframe(element));

        return {
            destroy() {
                element.removeEventListener("loadElement", () => loadIframe(element));
            }
        };
    };

    const loadIframe = (element) => {
    if (!element.src) {
        element.src = element.dataset.src;
    }
};
</script>

<div class="gallery">
    {#each galleryConfig as section}
        {#each section.content as image}
            {#if image.iframe}
                <div class="iframe-container">
                    <iframe
                        use:addIframeToLazyloader
                        width="100%"
                        height="100%"
                        title=""
                        data-src="https://www.youtube.com/embed/{image.youtubeid}"
                        frameborder="0"
                        allowfullscreen
                        style="cursor: pointer; z-index: 8; position: relative;"
                    ></iframe>
                    <div class="placeholder">
                        <i class="fab fa-youtube"></i>
                    </div>
                </div>
            {:else}
                <InteractiveImage src={image.src} registerElement={addToLazyloader} imageMHeight=300 />
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
        align-items: center;
    }

    .gallery > * {
        margin: 20px;
    }

    .iframe-container {
        position: relative;
        width: 533px;
        height: 300px;
    }

    .placeholder {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        border-radius: 20px;

        display: flex;
        justify-content: center;
        align-items: center;

        font-size: 100px;
        color: #424549;
        background-color: #1e2124;
    }

</style>
  