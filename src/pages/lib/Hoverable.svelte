<script lang="ts">
    import { onDestroy } from 'svelte';

    export let text;
    export let gifsrc;
    export let alt;
    export let color;
    let hoverImage;

    function onMouseMove(event) {
        const rect = event.currentTarget;
        hoverImage.style.top = `${event.pageY - 100}px`;
        hoverImage.style.left = `${event.pageX}px`;
    }

    function createImageElement() {
        hoverImage = document.createElement('img');
        hoverImage.src = gifsrc;
        hoverImage.alt = alt;
        hoverImage.width = 150;
        hoverImage.classList.add('hover-image');
        hoverImage.style.position = 'absolute';
        hoverImage.style.pointerEvents = 'none';
        hoverImage.style.display = 'none';
        hoverImage.style.zIndex = '100';
        document.body.appendChild(hoverImage);
    }

    function showGif() {
        hoverImage.style.display = 'inline-block';
    }

    function hideGif() {
        hoverImage.style.display = 'none';
    }

    onDestroy(() => {
        if (hoverImage) {
            document.body.removeChild(hoverImage);
        }
    });

    createImageElement();
</script>

<style>
    .hover-bx {
        position: relative;
        text-decoration: none;
        display: inline;
    }
    .hover-text {
        font-weight: 600;
        cursor: pointer;
    }
</style>

<div
    class="hover-bx"
    on:mousemove={onMouseMove}
    on:mouseenter={showGif}
    on:mouseleave={hideGif} >
    <span class="hover-text" style="color: {color};">{text}</span>
</div>
