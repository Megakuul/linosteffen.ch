<script lang="ts">
  import { onMount } from 'svelte';
  
  export let styleOnIntersect;
  export let styleOnDefault;
  export let transition;

  let element;
  let style = styleOnDefault;

  onMount(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          style = styleOnIntersect;
        } else {
          style = styleOnDefault;
        }
      });
    });

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  });
</script>

<div bind:this="{element}" style="transition: {transition}; {style}">
    <slot></slot>
</div>