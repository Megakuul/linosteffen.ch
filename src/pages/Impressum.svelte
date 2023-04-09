<script>
    import Intersector from './lib/Intersecting.svelte'
</script>

<div class="main-container-outer" style="margin-top: 0;">
    <div class="main-container-inner">
        <Intersector styleOnDefault="scale: 0.7;" styleOnIntersect="scale: 1;" transition="all ease 1s">
            <h1>Impressum</h1>
        </Intersector>
        <Intersector styleOnDefault="scale: 0.7;" styleOnIntersect="scale: 1;" transition="all ease 1s">
            <h2>Betreiber der Website</h2>
        </Intersector>
        <Intersector styleOnDefault="scale: 0.7;" styleOnIntersect="scale: 1;" transition="all ease 1s">
            <p>Lino Steffen</p>
        </Intersector>
        <Intersector styleOnDefault="scale: 0.7;" styleOnIntersect="scale: 1;" transition="all ease 1s">
            <p>Schweiz, Burgdorf BE</p>
        </Intersector>
        <Intersector styleOnDefault="scale: 0.7;" styleOnIntersect="scale: 1;" transition="all ease 1s">
            <p>Telefon: +41 77 498 87 23</p>
        </Intersector>
        <Intersector styleOnDefault="scale: 0.7;" styleOnIntersect="scale: 1;" transition="all ease 1s">
            <p>E-Mail: info@linosteffen.ch</p>
        </Intersector>
        <Intersector styleOnDefault="scale: 0.7;" styleOnIntersect="scale: 1;" transition="all ease 1s">
            <img class="ls-icon" src=/icon.png width="25" alt="Lino Steffen Icon">
        </Intersector>
    </div>
</div>

<div class="main-container-outer" style="margin-top: 0;">
    <div class="main-container-inner">
        <Intersector styleOnDefault="scale: 0.7;" styleOnIntersect="scale: 1;" transition="all ease 1s">
            <h2>Urheberrechtshinweise</h2>
        </Intersector>
        <Intersector styleOnDefault="scale: 0.7;" styleOnIntersect="scale: 1;" transition="all ease 1s">
            <p>Sämtliche auf dieser Website verwendeten Bilder und Videos sind Eigentum von Lino Steffen, sofern nicht anders angegeben. Ausgenommen hiervon sind spezielle Icons, GIFs oder Verlinkungen, deren Urheberrecht bei den jeweiligen Rechteinhabern liegt. Eine Verwendung dieser Inhalte ohne ausdrückliche schriftliche Genehmigung ist untersagt.
            </p>
        </Intersector>
        <Intersector styleOnDefault="scale: 0.7;" styleOnIntersect="scale: 1;" transition="all ease 1s">
            <img class="ls-icon" src=/icon.png width="25" alt="Lino Steffen Icon">
        </Intersector>
    </div>
</div>

<div class="main-container-outer" style="margin-top: 0;">
    <div class="main-container-inner">
        <Intersector styleOnDefault="scale: 0.7;" styleOnIntersect="scale: 1;" transition="all ease 1s">
            <h2>Website-Design</h2>
        </Intersector>
        <Intersector styleOnDefault="scale: 0.7;" styleOnIntersect="scale: 1;" transition="all ease 1s">
            <p>Diese Website wurde von Megakuul entworfen. Für Fragen oder Anregungen zum Design wenden Sie sich bitte direkt an Lino Steffen.
            </p>
        </Intersector>
        <Intersector styleOnDefault="scale: 0.7;" styleOnIntersect="scale: 1;" transition="all ease 1s">
            <img class="ls-icon" src=/icon.png width="25" alt="Lino Steffen Icon">
        </Intersector>
    </div>
</div>

<div class="main-container-outer" style="margin-top: 0;">
    <div class="main-container-inner">
        <Intersector styleOnDefault="scale: 0.7;" styleOnIntersect="scale: 1;" transition="all ease 1s">
            <h2>Haftungsausschluss</h2>
        </Intersector>
        <Intersector styleOnDefault="scale: 0.7;" styleOnIntersect="scale: 1;" transition="all ease 1s">
            <p>Obwohl wir uns bemühen, die Richtigkeit und Aktualität der auf dieser Website bereitgestellten Informationen sicherzustellen, übernehmen wir keine Haftung für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten sind ausschließlich deren Betreiber verantwortlich. 
            </p>
        </Intersector>
        <Intersector styleOnDefault="scale: 0.7;" styleOnIntersect="scale: 1;" transition="all ease 1s">
            <img class="ls-icon" src=/icon.png width="25" alt="Lino Steffen Icon">
        </Intersector>
    </div>
</div>

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

    .main-container-outer img {
        filter: invert(1);
    }

    .main-container-inner {
        padding: 20px;
        text-align: center;
        margin: 10vh 0 10vh 0;
        transition: all ease 2s;
        width: 70%;
    }
</style>