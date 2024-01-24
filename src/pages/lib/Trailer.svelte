<script lang="ts">
    export let opacity;
    let trailer;
    let x;
    let y;

    window.onmousemove = e => {
        x = e.clientX - trailer.offsetWidth / 2 - 20;
        y = e.clientY - trailer.offsetHeight / 2 - 20;

        const keyframes = {
            transform: `translate(${x}px, ${y}px)`
        }

        trailer.animate(keyframes, {
            duration: 1000,
            fill: "forwards"
        });
    }
</script>

<div id="trailer" bind:this={trailer} style="--opacity: {opacity / 3}">
    <img id="inner-trailer" src="favicon.png" alt="lsfavicon">
</div>

<style>
    #trailer {
        z-index: -500;
        position: fixed;
        opacity: 0;
        left: 20px;
        top: 20px;
    }
    
    #inner-trailer {
        width: 160px;
        filter: blur(7px);

        animation: spin 3s linear infinite;
    }

    :global(body:hover > #trailer) {
        opacity: var(--opacity);
    }

    @keyframes spin {
        0% {
            opacity: 1;
        }
        50% {
            opacity: 0.7;
        }
        100% {
            opacity: 1;
        }
    }
    
</style>