<script lang="ts">
    import { onMount } from 'svelte';
    import Intersector from './lib/Intersecting.svelte'
    import Hoverable from './lib/Hoverable.svelte';
    import Timeline from './lib/Timeline.svelte';


    let timelineConfig = [];

    onMount(async () => {
        const response = await fetch("/timeline.json");
        timelineConfig = await response.json();
    });
</script>

<Intersector>
    <div class="main-container" style="margin-top: 0;">
        <div class="intersect">
            <h1>Über mich</h1>
            <p>
                Ich bin Lino Steffen
            </p>
            <div class="portrait-bx">
                <img class="portrait" src="/assets/portrait.png" alt="Lino Steffen Portrait">
            </div>
            <p>
                Telefon: +41 77 498 87 23<br>
                Email: info@linosteffen.ch
            </p>
            <p>
                Ich erstelle Werbevideos/Filme oder Fotos
            </p>
            <p>
                Bei Interesse meldet euch direkt per Mail<br>
                Ich freue mich auf eine gute Zusammenarbeit                
            </p>
            <img class="ls-icon" src=/icon.png width="25" alt="Lino Steffen Icon">
        </div>
    </div>
</Intersector>


<Timeline timelineconfiguration={timelineConfig}/>

<style>

    .intersecting div .intersect {
        width: 80%;
        transform: scale(1);
    }

    .main-container {
        width: 100%;
        z-index: 4;
        overflow: hidden;
        display: grid;
        align-content: center;
        place-items: center;
    }

    .main-container h1 {
        margin-bottom: 10vh;
    }

    .main-container p {
        margin-top: 5vh;
    }

    .main-container > div > .ls-icon {
        filter: invert(1);
    }

    .main-container > div {
        padding: 20px;
        text-align: center;
        margin: 10vh 0 20vh 0;
        transition: all ease 2s;
        width: 70%;
        transform: scale(0.7);
    }

    .main-container .portrait-bx {
        display: flex;
        justify-content: center;
    }

    .main-container .portrait {
        height: 500px;
        transition: all ease 1s;
        opacity: 0.8;
    }

    .main-container .portrait:hover {
        opacity: 1;
        filter: drop-shadow(0 -5px 5px rgba(255, 255, 255, 0.5));
    }

    @media screen and (max-width: 1100px) {
        .main-container .portrait {
            height: 300px;
        }
    }
</style>