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
    <div class="spinner"></div>
    <h1 style="margin-top: 50px;">Loading...</h1>
  </div>
{/if}

<style>
    @keyframes spinneranimation {
        0%,50%,100% {
            width: 100px;
            height: 100px;
            border-radius: 25px;
            background-color: white;
            transform: rotate(45deg);
        }
        25%,75% {
            width: 120px;
            height: 120px;
            border-radius: 0px;
            background-color: black;
            transform: rotate(245deg);
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
        background-color: #36393e;

        z-index: 1000;
    }

    .spinner {
        width: 100px;
        height: 100px;
        background-color: white;
        animation: spinneranimation 4s both ease-in-out infinite;
    }
</style>
