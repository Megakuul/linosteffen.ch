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
            duration: 700,
            fill: "forwards"
        });
    }
</script>

<div id="trailer" bind:this={trailer} style="--opacity: {opacity / 3}">
    <div id="inner-trailer">

    </div>
</div>

<style>
    #trailer {
        z-index: 0;
        position: fixed;
        opacity: 0;
        left: 20px;
        top: 20px;
    }
    
    #inner-trailer {
        height: 120px;
        width: 120px;
        background-image: linear-gradient(to right, white, blue);
        border-radius: 20px;
        filter: blur(50px);

        animation: spin 4s linear infinite;
    }

    :global(body:hover > #trailer) {
        opacity: var(--opacity);
    }

    @keyframes spin {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
</style>