<script>
    import Intersector from './lib/Intersecting.svelte'
    import Hoverable from './lib/Hoverable.svelte';
</script>


<div id="main-interface">
    
</div>

<Intersector>
    <div class="main-container" style="margin-top: 0;">
        <div class="intersect">
            <h1>Willkommen</h1>
            <p>
                Ich bin Lino Steffen<br><br><br><br>
                Ich bin ein leidenschaftlicher <Hoverable text="Video Creator" alt="Video Creator Meme" gifsrc="/fotograf.gif" color="red" />
                und <Hoverable text="Fotograf" alt="Fotograf Meme" gifsrc="/fotograf.gif" color="lightblue" />
            </p>
        </div>
    </div>
</Intersector>

<Intersector>
    <div class="main-container">
        <div class="intersect">
            <h1>Aktuelles</h1>
            <p>

            </p>
        </div>
    </div>
</Intersector>

<Intersector>
    <div class="main-container">
        <div class="intersect">
            <h1>Sponsoren</h1>
            <p>
                
            </p>
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

    .main-container div {
        padding: 20px;
        text-align: center;
        margin: 40vh 0 40vh 0;
        transition: all ease 2s;
        width: 70%;
        transform: scale(0.7);
    }

    .main-container div span {
        color: red;
        font-weight: 600;
        font-size: small;
    }
</style>