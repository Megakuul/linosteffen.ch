<script lang="ts">
    import Intersecting from "./Intersecting.svelte";
    export let timelineconfiguration;
</script>

<div class="timeline">
    {#each timelineconfiguration as item}
        <h2 class="timeline-item-year">{item.year}</h2>
        <div class="timeline-item">
            <Intersecting styleOnDefault="scale: 0.7;" styleOnIntersect="scale: 1;" transition="all ease 2s;">
                <img src="{item.image}" alt="{item.alt}" style="max-width: 100%;">
                <h3 class="timeline-title">{item.content}</h3>
            </Intersecting>
        </div>
  {/each}
</div>


<style>
    .timeline {
        position: relative;
        padding: 1rem;
        margin: 0 auto;
        max-width: 1300px;
    }
    .timeline:before {
        content: "";
        z-index: 0;

        position: absolute;
        top: 0;
        height: 100%;
        right: 40px;

        border: 1px solid white;
        border-radius: 25px;
    }
    @media screen and (min-width: 1100px) {
        .timeline {
            padding: 2rem;
        }
        .timeline:before {
            left: calc(50% - 1px);
            right: auto;
        }
    }

    .timeline-item {
        border: 2px solid;
        border-image: linear-gradient(to right, rgb(135, 145, 235) 0%, white 100%);
        border-image-slice: 1;

        position: relative;
        margin: 1rem 3rem 1rem 1rem;
        padding: 1rem;

        clear: both;

        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .timeline-item:after, .timeline-item:before {
        content: "";
        position: absolute;
    }

    /* Befor element resembles the triangle (pointer) attached to the item */
    .timeline-item:before {
        right: -10px;
        top: calc(50% - 5px);
        transform: rotate(45deg);

        border-style: solid;
        border-color: white white transparent transparent;
        border-width: 10px;
    }
    /* Befor element resembles the triangle (pointer) attached to the item */

    @media screen and (min-width: 1100px) {
        .timeline-item {
            width: 44%;
            margin: 1rem;
        }
        /* Selects every 2nd element */
        .timeline-item:nth-of-type(2n) {
            float: right;
            margin: 1rem;
            border-image: linear-gradient(to right, white 0%, rgb(135, 145, 235) 100%);
            border-image-slice: 1;
        }
        /* Befor element resembles the triangle (pointer) attached to the item */
        .timeline-item:nth-of-type(2n):before {
            right: auto;
            left: -10px;
            border-color: transparent transparent white white;
        }
        /* Selects every 2nd element */
    }

    .timeline-item-year {
        text-align: center;
        font-size: 2rem;
        overflow: hidden;

        max-width: 150px;
        padding: 1rem;
        margin-left: 1rem;
        margin-right: 3rem;
        
        background-color: #36393e;
        border: 2px solid;

        /* Disables Floating items (left + right) */
        clear: both;
    }

    @media screen and (min-width: 1100px) {
        .timeline-item-year {
            margin: auto;
        }
    }

    .timeline-title {
        overflow: hidden;
        text-align: center;
        white-space: pre-wrap;
        margin: 0;
        margin-top: 1rem;
        font-family: "Raleway", sans-serif;
        font-size: 1.7em;
    }
</style>