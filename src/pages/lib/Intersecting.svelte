<script>
  import { onMount } from 'svelte';

  let intersecting = false;
  let element;

  onMount(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        intersecting = entry.isIntersecting;
        
      });
    });

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  });
</script>

<div bind:this="{element}" class:intersecting>
    <slot></slot>
</div>