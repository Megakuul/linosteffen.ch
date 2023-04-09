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

<div class="main-container-outer">
    <div class="main-container-inner">
        <Intersector styleOnDefault="scale: 0.7;" styleOnIntersect="scale: 1;" transition="all ease 1s">
            <h1>Über mich</h1>
        </Intersector>
        <Intersector styleOnDefault="scale: 0.7;" styleOnIntersect="scale: 1;" transition="all ease 1s">
            <p>Ich bin Lino Steffen</p>
        </Intersector>
        <Intersector styleOnDefault="scale: 0.7;" styleOnIntersect="scale: 1;" transition="all ease 1s">
            <div class="portrait-bx">
                <img class="portrait" src="/assets/portrait.png" alt="Lino Steffen Portrait">
            </div>
        </Intersector>
        <Intersector styleOnDefault="scale: 0.7;" styleOnIntersect="scale: 1;" transition="all ease 1s">
            <p>Telefon: +41 77 498 87 23<br>Email: info@linosteffen.ch</p>
        </Intersector>
        <Intersector styleOnDefault="scale: 0.7;" styleOnIntersect="scale: 1;" transition="all ease 1s">
            <p>Ich erstelle kreative Werbevideos, Filme oder Fotos<br>für einzigartige Momente</p>
        </Intersector>
        <Intersector styleOnDefault="scale: 0.7;" styleOnIntersect="scale: 1;" transition="all ease 1s">
            <p>Bei Interesse meldet euch direkt per Mail<br>Ich freue mich auf eine gute Zusammenarbeit</p>
        </Intersector>
        <Intersector styleOnDefault="scale: 0.7;" styleOnIntersect="scale: 1;" transition="all ease 1s">
            <img class="ls-icon" src=/icon.png width="25" alt="Lino Steffen Icon">
        </Intersector>
    </div>    
</div>


<Timeline timelineconfiguration={timelineConfig}/>

<style>
    .main-container-outer {
        width: 100%;
        z-index: 4;
        overflow: hidden;
        display: grid;
        align-content: center;
        place-items: center;
    }

    .main-container-outer h1 {
        margin-bottom: 10vh;
    }

    .main-container-outer p {
        margin-top: 5vh;
    }

    .main-container-outer .ls-icon {
        filter: invert(1);
    }

    .main-container-inner {
        padding: 20px;
        text-align: center;
        margin: 10vh 0 20vh 0;
        transition: all ease 2s;
        width: 70%;
    }

    .main-container-outer .portrait-bx {
        display: flex;
        justify-content: center;
    }

    .main-container-outer .portrait {
        height: 500px;
        transition: all ease 1s;
        opacity: 0.8;
    }

    .main-container-outer .portrait:hover {
        opacity: 1;
        filter: drop-shadow(0 -5px 5px rgba(255, 255, 255, 0.5));
    }

    @media screen and (max-width: 1100px) {
        .main-container-outer .portrait {
            height: 300px;
        }
    }
</style>