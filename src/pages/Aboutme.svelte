<script>
    import Intersector from './lib/Intersecting.svelte'
    import Hoverable from './lib/Hoverable.svelte';
    import Timeline from './lib/Timeline.svelte';

    let timelineConfig = {
        items: [
            {
                year: "1920",
                content: "Lino ist ein Dinosaurier geworden",
                image: "/sponsors/bb.png",
                alt: "Exampleimage"
            },
            {
                year: "1944",
                content: "Dinosaurier sind ausgestorben",
                image: "/sponsors/bb.png",
                alt: "Exampleimage"
            },
            {
                year: "1999",
                content: "Ein Jahr vor dem Jahr 2000",
                image: "/sponsors/bb.png",
                alt: "Exampleimage"
            },
            {
                year: "2009",
                content: "Der erste Fotographierende Saurier wurde gesichtet",
                image: "/sponsors/bb.png",
                alt: "Exampleimage"
            },
            {
                year: "2023",
                content: "Lino hat Zahnschmerzen",
                image: "/sponsors/bb.png",
                alt: "Exampleimage"
            },
        ]
    };
</script>

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
        margin-bottom: 20vh;
    }

    .main-container p {
        margin-top: 10vh;
    }

    .main-container > div > img {
        filter: invert(1);
    }

    .main-container > div {
        padding: 20px;
        text-align: center;
        margin: 20vh 0 20vh 0;
        transition: all ease 2s;
        width: 70%;
        transform: scale(0.7);
    }

    .main-container .sponsor-list {
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        flex-wrap: wrap;
        align-items: center;
        margin-bottom: 10vh;
    }

    .main-container .sponsor-list .sponsor-bx {
        padding: 25px;
        transition: all ease 1s;
    }

    .main-container .sponsor-list img {
        width: 150px;
    }
</style>