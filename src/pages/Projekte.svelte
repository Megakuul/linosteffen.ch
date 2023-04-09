<script lang="ts">
    import { onMount } from "svelte";
    import Intersector from "./lib/Intersecting.svelte";
    let projekteConfig = [];

    //Loads the Configuration file
    onMount(async () => {
        const response = await fetch("/projekte.json");
        projekteConfig = await response.json();
    });

</script>

<div id="title">
    <Intersector styleOnDefault="scale: 0.7;" styleOnIntersect="scale: 1;" transition="all ease 1s">
        <h1>Projekte</h1>
    </Intersector>
</div>

{#each projekteConfig as section}
    <Intersector styleOnDefault="scale: 0.7;" styleOnIntersect="scale: 1;" transition="all ease 1s">
        <div class="project-inner">
            <div class="project-img-container">
                <h1 class="project-img-overlay">{section.title}</h1>
                <!-- svelte-ignore a11y-click-events-have-key-events -->
                <img class="project-img" src="{section.image}" alt="{section.alt}" on:click={() => window.open(section.redirect, "_blank")}>
            </div>
            <h2 class="project-date">{section.date}</h2>
            <p class="project-subtitle">{section.subtitle}</p>
        </div>
    </Intersector>
{/each}


<style>

    #title {
        margin-top: 100px;
        margin-bottom: 10vh;
    }

    #title h1 {
        margin-bottom: 10vh;
    }

    .project-inner {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        
        overflow: hidden;
        white-space: pre-wrap;

        margin-top: 13%;
        margin-bottom: 13%;
    }

    .project-inner > * {
        width: 80%;
    }

    .project-img-container {
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .project-img-overlay {
        z-index: 4;

        position: absolute;

        opacity: 0;
        transition: all ease 1s;
        font-family: 'Raleway', sans-serif;
    }

    .project-img {
        width: 100%;
        border-radius: 20px;
        transition: all ease 1s;
    }

    .project-img-container:hover .project-img {
        filter: brightness(40%);
    }

    .project-img-container:hover .project-img-overlay  {
        opacity: 1;
    }

    .project-title {
        text-align: center;
        font-family: 'Raleway', sans-serif;
    }

    .project-date {
        text-align: center;
        font-family: 'Raleway', sans-serif;
    }

    .project-subtitle {
        text-align: center;
        font-family: 'Raleway', sans-serif;
    }
</style>
  