<script>
    import Intersector from './lib/Intersecting.svelte'
</script>
  
<Intersector>
    <div class="main-container" style="margin-top: 0;">
        <div class="intersect">
            <h1>Impressum</h1>
            <h2>Betreiber der Website</h2>
            <p>Lino Steffen</p>
            <p>Schweiz, Burgdorf BE</p>
            <p>Telefon: +41 77 498 87 23</p>
            <p>E-Mail: info@linosteffen.ch</p>
            <img src=/icon.png width="25" alt="Lino Steffen Icon">
        </div>
    </div>
</Intersector>

<Intersector>
    <div class="main-container">
        <div class="intersect">
            <h2>Urheberrechtshinweise</h2>
            <p>Sämtliche auf dieser Website verwendeten Bilder und Videos sind Eigentum von Lino Steffen, sofern nicht anders angegeben. Ausgenommen hiervon sind spezielle Icons, GIFs oder Verlinkungen, deren Urheberrecht bei den jeweiligen Rechteinhabern liegt. Eine Verwendung dieser Inhalte ohne ausdrückliche schriftliche Genehmigung ist untersagt.
            </p>
            <img src=/icon.png width="25" alt="Lino Steffen Icon">
        </div>
    </div>
</Intersector>

<Intersector>
    <div class="main-container">
        <div class="intersect">
            <h2>Website-Design</h2>
            <p>Diese Website wurde von Megakuul entworfen. Für Fragen oder Anregungen zum Design wenden Sie sich bitte direkt an Lino Steffen.
            </p>
            <img src=/icon.png width="25" alt="Lino Steffen Icon">
        </div>
    </div>
</Intersector>

<Intersector>
    <div class="main-container">
        <div class="intersect">
            <h2>Haftungsausschluss</h2>
            <p>Obwohl wir uns bemühen, die Richtigkeit und Aktualität der auf dieser Website bereitgestellten Informationen sicherzustellen, übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich. 
            </p>
            <img src=/icon.png width="25" alt="Lino Steffen Icon">
        </div>
    </div>
</Intersector>


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

    .main-container > div > img {
        filter: invert(1);
    }

    .main-container > div {
        padding: 20px;
        text-align: center;
        margin: 10vh 0 10vh 0;
        transition: all ease 2s;
        width: 70%;
        transform: scale(0.7);
    }

</style>