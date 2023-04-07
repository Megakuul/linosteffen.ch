<script>
    export let setActivePage;
    export let toggleTrailerOpacity;

    /**
    *This Element represents an object with the NavbarState inside of it
    *
    *The reason for this to be an object is, that it can be passed by reference
    *
    *Example:
    *```javascript
    *let navbarStore = {
	*	    NavbarState: false
	*};
    *
    *<Navbar setActivePage="{setActivePage}" toggleTrailerOpacity="{toggleTrailerOpacity}" navbarStateStore="{navbarStore}"/>
    *```
    */
    export let navbarStateStore;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<img class="nav-ls" src="./icon.png" width="40" height="40" alt="Lino Steffen Logo" on:click={toggleTrailerOpacity}/>
<div class="nav-bar"></div>
<input type="checkbox" id="active" bind:checked={navbarStateStore.NavbarState}>
<label for="active" class="nav-btn"><span></span></label>
<label for="active" class="nav-close"></label>

<div class="wrapper">
    <div id="nav-main" class="nav-main">
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div id="Home" class="nav-item" on:click={() => setActivePage('Home')}>
          Home
        </div>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div id="Projekte" class="nav-item" on:click={() => setActivePage('Projekte')}>
          Projekte
        </div>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div id="Medien" class="nav-item" on:click={() => setActivePage('Medien')}>
          Medien
        </div>
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div id="About" class="nav-item" on:click={() => setActivePage('About')}>
          Über mich
        </div>
    </div>
</div>

<style>
    /* Navigation Bar */
    .nav-bar {
        z-index: 8;
        position: fixed;
        height: 70px;
        width: 100%;
        background-color: #16181a;
        opacity: 0;
        transition: all ease 1s;
    }

    /* Lino Steffen Button */
    .nav-ls {
        z-index: 11;
        position: fixed;
        left: 20px;
        top: 20px;
        background-color: white;
        border-radius: 12px;
        cursor: pointer;
        user-select: none;
    }

    .nav-ls:hover {
        animation: shake 0.8s linear infinite;
    }

    /* Toggle Button */
    input[type="checkbox"]{
        display: none;
    }

    .nav-close {
        z-index: 11;
        width: 100%;
        height: 100%;
        pointer-events: none;
    }

    .nav-btn {
        position: fixed;
        z-index: 11;
        right: 20px;
        top: 8px;
        height: 60px;
        width: 60px;
        cursor: pointer;
        transition: all 0.3s ease-in-out;
    }

    .nav-btn span,
    .nav-btn:before,
    .nav-btn:after {
        content: "";
        position: absolute;
        top: calc(50% - 1px);
        left: 30%;
        width: 40%;
        border-radius: 25px;
        border-bottom: 2px solid white;
        transition: transform .6s cubic-bezier(0.200, 0.50, 0.400, 1);
    }
    .nav-btn:before{
        transform: translateY(-8px);
    }
    .nav-btn:after{
        transform: translateY(8px);
    }

    #active:checked + .nav-btn span {
	    transform: scaleX(0);
    }
    #active:checked + .nav-btn:before {
        transform: rotate(45deg);
        border-color: black;
    }
    #active:checked + .nav-btn:after {
        transform: rotate(-45deg);
        border-color: black;
    }

    .nav-btn:hover {
        width: 70px;
    }

    /* Wrapper */
    .wrapper{
        z-index: 10;
        position: fixed;
        top: 0;
        right: -30%;
        height: 100vh;
        width: 30%;
        background: white;
        transition: all ease-in-out 1s;
    }

    .wrapper .nav-main {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: 80vh;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
    }

    .wrapper .nav-main .nav-item {
        color: black;
        font-size: 40px;
        font-weight: 800;
        font-family: 'Raleway', sans-serif;
        cursor: pointer;

        -webkit-user-select: none; /* Safari and Chrome */
        -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer */
        user-select: none;
        transition: all ease .5s;
    }

    .wrapper .nav-main .nav-item:hover {
        text-shadow: 5px 10px 15px rgba(0,0,0,0.5);
    }

    #active:checked ~ .wrapper{
        right:0;
    }

    @media (max-width: 700px) {
        .wrapper{
            right: -100%;
            width: 100%;
        }
        .nav-bar {
            opacity: 1;
        }
    }

    @keyframes shake {
        0%, 100% {
            transform: translateX(0);
            transform: translateY(0);
        }
        10%, 30%, 50%, 70%, 90% {
            transform: translateX(-5px) rotate(-6deg);
        }
        20%, 40%, 60%, 80% {
            transform: translateX(5px) rotate(6deg);
        }
    }
</style>