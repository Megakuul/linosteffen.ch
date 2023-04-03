<script>
    import Intersector from './lib/Intersecting.svelte'

</script>


<div id="main-interface">
    
</div>

<Intersector>
    <div class="main-container">
        <div id="welcome-container" class="intersect">
          Hallo
        </div>
    </div>
</Intersector>

<Intersector>
    <div class="main-container">
        <div id="whatido-container" class="intersect">
          Hallo
        </div>
    </div>
</Intersector>

<Intersector>
    <div class="main-container">
        <div id="sponsors-container" class="intersect">
            Hallo
        </div>    
    </div>
</Intersector> 


<style>
    #main-interface {
        height: 90vh;
    }

    .intersecting div .intersect {
        width: 80%;
        box-shadow: rgb(0, 0, 0) 3px 3px 6px 0px inset, rgba(0, 0, 0, 0.5) -3px -3px 6px 1px inset;
    }

    .main-container {
        position: relative;
        width: 100%;
        z-index: 4;
        overflow: hidden;
        display: grid;
        align-content: center;
        place-items: center;
    } 

    .main-container div {
        height: 70vh;
        padding: 20px;
        font-size: larger;
        margin: 50px 0px 50px 0px;
        transition: all ease 2s;
        background-color: #1e2124;
        width: 70%;
        box-shadow: 0px
    }
</style>