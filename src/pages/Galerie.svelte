<script lang="ts" defer>
    import { onMount } from "svelte";
    import InteractiveImage from "./lib/InteractiveImage.svelte";
    import Intersector from "./lib/Intersecting.svelte";
    import Citation from "./lib/Citation.svelte";

    let galleryConfig = [];

    //Loads the Configuration file
    onMount(async () => {
        const response = await fetch("/gallery.json");
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

<div id="title">
    <Intersector styleOnDefault="scale: 0.7;" styleOnIntersect="scale: 1;" transition="all ease 1s">
        <h1>Galerie</h1>
        <Citation content="Mein Ziel ist es, die Welt durch die Bearbeitung so zu präsentieren wie ich sie sehe" author="Lino Steffen"/>
    </Intersector>
</div>

{#each galleryConfig as section}
    <h2>{section.title}</h2>
    <hr>
    <div class="gallery-inner">
        {#each section.content as image}
            <Intersector styleOnDefault="opacity: 0.2;" styleOnIntersect="opacity: 1;" transition="all ease 1s">
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
            </Intersector>
        {/each}
    </div>
{/each}


<style>

    #title {
        margin-top: 100px;
        margin-bottom: 10vh;
    }

    #title h1 {
        margin-bottom: 10vh;
    }

    hr {
        opacity: 0.2;
        
        width: 90%;
        margin-top: 20px;
        margin-bottom: 80px;
    }

    .gallery-inner {
        margin: 5%;
        margin-bottom: 20vh;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        flex-wrap: wrap;
        align-items: center;
        overflow: hidden;
    }

    .gallery-inner > * {
        margin: 20px;
    }

    .iframe-container {
        position: relative;
        max-width: 533px;
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
  