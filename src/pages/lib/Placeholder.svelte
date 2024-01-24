<script lang="ts">
    import { onMount } from 'svelte';
  
    let isPageLoaded = false;
  
    onMount(() => {
      window.onload = () => {
        isPageLoaded = true;
      };
    });
</script>

{#if !isPageLoaded}
  <div class="placeholder">
    <img class="spinner" src="favicon.png" alt="">
    <h1 style="margin-top: 50px;">Loading...</h1>
  </div>
{/if}

<style>
    @keyframes spinneranimation {
        0%,50%,100% {
            filter: brightness(120%);
            border-radius: 40px;
            background-color: rgba(255,255,255,0.03);
            transform: rotate(-40deg);
        }
        25%,75% {
            filter: brightness(80%);
            border-radius: 0px;
            box-shadow: inset 0 0 4px transparent;
            background-color: transparent;
            transform: rotate(40deg);
        }
    }

    .placeholder {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        background-color: #13181d;

        z-index: 1000;
    }

    .spinner {
        padding: 10px;
        width: 100px;
        height: 100px;
        background-color: transparent;
        animation: spinneranimation 6s both ease-in-out infinite;
    }
</style>
