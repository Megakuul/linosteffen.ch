<script lang="ts">
	import { onMount } from 'svelte';
	import Navbar from './Navbar.svelte';
	import Footer from './Footer.svelte';
	import Home from './pages/Home.svelte';
	import Projekte from './pages/Projekte.svelte';
	import Medien from './pages/Medien.svelte';
	import About from './pages/Aboutme.svelte';

	const urlParams = new URLSearchParams(window.location.search);	
	const firstParam = urlParams.entries().next().value;	
	let ActivePage = firstParam ? firstParam[0] : null;

	const setActivePage = (page) => {
		ActivePage = page;
		window.history.pushState({}, '', `?${page}`);
		loadPageComponent(ActivePage);
	};

	const loadPageComponent = (activePage) => {
		switch (activePage) {
			case 'Home':
			return Home;
			case 'Projekte':
			return Projekte;
			case 'Medien':
			return Medien;
			case 'About':
			return About;
			default:
			return Home;
		}
	};

	onMount(() => {
		window.addEventListener('popstate', () => setActivePage(
			new URLSearchParams(window.location.search).entries().next().value[0]
		));

		return () => {
			window.removeEventListener('popstate', () => setActivePage(
				new URLSearchParams(window.location.search).entries().next().value[0]
			));
		};
	});
</script>

<Navbar {setActivePage} />
  
<svelte:component this="{loadPageComponent(ActivePage)}" />
	  
<Footer />

<style>

</style>