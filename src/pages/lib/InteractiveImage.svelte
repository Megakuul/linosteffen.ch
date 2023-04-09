<script lang="ts">
  /**
   * Source of the Image
   */
  export let src;
  /**
   * Function to execute when the element gets registered
   * 
   * Used to add the Element to the LazyLoader when it is registered
   */
  export let registerElement;

  /**
   * Maximum height for an Image if it is not in enlarged mode
   */
  export let imageMHeight;

  let enlarged = false;

  //This function is enlarging the Image (and reseting the fitMode)
  const resizeImage = () => {
    fitMode = 'contained';
    enlarged = !enlarged;
  }

  //This function opens the Image in a new Tab
  const openImage = () => {
    window.open(src, "_blank");
  }

  let fitMode = 'contained';

  //This function is there to toggle between the screen fit modes
  const toggleObjectFit = () => {
    switch (fitMode) {
      case 'contained':
        fitMode = 'covered';
        break;
      case 'covered':
        fitMode = 'fill';
        break;
      case 'fill':
        fitMode = 'contained';
        break;
    }
  }

  let image;

  //This function will load the image when the element is loaded (not when building the DOM)
  const loadElement = () => {
    image.src = src;
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div class="base-image" class:enlarged on:click={resizeImage}>
    <img alt="Click to enlarge" class={fitMode} style="--ImageMHeight: {imageMHeight}px" bind:this={image} on:loadElement={loadElement} use:registerElement>

    <div class="mode-bar">
        <div class="mode-btn" title="Change fit-mode" on:click|stopPropagation={toggleObjectFit}>
            <i class="fas fa-retweet"></i>
        </div>
        <p class="mode-fitmode">
            {fitMode}
        </p>
        <div class="mode-btn" title="Open in new Tab" on:click|stopPropagation={openImage}>
            <i class="fas fa-external-link-alt"></i>
        </div>
    </div>
</div>


<style>
    .base-image {
        z-index: 6;
    }

    .base-image img {
        transition: scale ease 1s;
        cursor: pointer;

        object-position: center;
        object-fit: cover;
    }

    .base-image:not(.enlarged) img {
        max-height: var(--ImageMHeight);
    }

    .base-image:not(.enlarged) img:hover {
        scale: 1.1;
    }

    .base-image .mode-bar {
        width: 100px;
        height: 100px;
        display: none;
    }

    .base-image .mode-btn {
        color: gray;
        font-size: 37px;
        cursor: pointer;
    }

    .base-image .mode-fitmode {
        color: gray;
        font-size: 30px;
        font-weight: 800;
        font-family: 'Raleway', sans-serif;
    }

    .enlarged {
        z-index: 50;
        
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        background-color: rgba(0, 0, 0, 0.8);
        overflow: hidden;
    }

    .enlarged img {
        flex: 8;
        width: 80%;
        height: 80%;
        position: relative;

        transition: all ease .5s;
        cursor: default;
    }

    .enlarged .fill {
        object-fit: fill; 
    }

    .enlarged .covered {
        object-fit: cover;
    }

    .enlarged .contained {
        object-fit: contain;
    }

    .enlarged .mode-bar {
        flex: 1;
        max-height: 200px;
        width: 100%;
        position: relative;
        transition: all ease .5s;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        align-items: center;
    }
</style>