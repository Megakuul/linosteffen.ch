<script>
    import { setContext } from 'svelte';
    import Intersector from './lib/Intersecting.svelte'
    import Hoverable from './lib/Hoverable.svelte';
    import Trailer from './lib/Trailer.svelte'

    
</script>

<div id="main-interface">
    
</div>

<Intersector>
    <div class="main-container" style="margin-top: 0;">
        <div class="intersect">
            <h1>Willkommen</h1>
            <p>
                Ich bin Lino Steffen
            </p>
            <p>
                Leidenschaftlicher <Hoverable text="Video Creator" alt="Video Creator Meme" gifsrc="/videoediting.gif" color="red" />
                und <Hoverable text="Fotograf" alt="Fotograf Meme" gifsrc="/fotograf.png" color="lightblue" />
                aus Burgdorf in Bern
            </p>
            <p>
                In meiner Freizeit bin ich oft mit der Kamera oder am Computer zu finden
            </p>
            <img src=/icon.png width="25" alt="Lino Steffen Icon">
        </div>
    </div>
</Intersector>

<Intersector>
    <div class="main-container">
        <div class="intersect">
            <h1>Was ich euch bieten kann</h1>
            <p>
                Ich arbeite mit Grosswinkelkameras und Drohnen
            </p>
            <p>

            </p>
            <img src=/icon.png width="25" alt="Lino Steffen Icon">
        </div>
    </div>
</Intersector>

<Intersector>
    <div class="main-container">
        <div class="intersect">
            <h1>Sponsoren</h1>
            <p>
                
            </p>
            <img src=/icon.png width="25" alt="Lino Steffen Icon">
        </div>    
    </div>
</Intersector> 


<style>
    #main-interface {
        height: 90vh;
    }

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
        margin-bottom: 20vh;
    }

    .main-container p {
        margin-top: 10vh;
    }

    .main-container img {
        filter: invert(1);
    }

    .main-container div {
        padding: 20px;
        text-align: center;
        margin: 20vh 0 20vh 0;
        transition: all ease 2s;
        width: 70%;
        transform: scale(0.7);
    }
</style>