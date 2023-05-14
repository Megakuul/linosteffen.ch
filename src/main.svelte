<script lang="ts">
	import { onMount } from 'svelte';
	import Navbar from './Navbar.svelte';
	import Footer from './Footer.svelte';
	import Home from './pages/Home.svelte';
	import Projekte from './pages/Projekte.svelte';
	import Galerie from './pages/Galerie.svelte';
	import About from './pages/Aboutme.svelte';
	import Impressum from './pages/Impressum.svelte';
    import Trailer from './pages/lib/Trailer.svelte';
    import Placeholder from './pages/lib/Placeholder.svelte';
    import Domaindelenfer from './pages/projects/Domaindelenfer.svelte';
    import Aareroadtrip from './pages/projects/Aareroadtrip.svelte';
    import Deadinthewater from './pages/projects/Deadinthewater.svelte';

	const urlParams = new URLSearchParams(window.location.search);	
	const firstParam = urlParams.entries().next().value;	
	let ActivePage = firstParam ? firstParam[0] : null;

	// The buffer stores the last visited Route
	// With that the page does not get scrolled if the user reloads the page
	let ActivePageBuf;

	let trailerOpacity;

	let navbarStore = {
		NavbarState: false
	};

	const isTouchDevice = () => {
		return (('ontouchstart' in window) ||
			(navigator.maxTouchPoints > 0) ||
			(navigator.maxTouchPoints > 0));
	}

	if (isTouchDevice()) {
		trailerOpacity = 0;
	} else {
		trailerOpacity = 1;
	}

    const toggleTrailerOpacity = () => {
        if (trailerOpacity==1)
            trailerOpacity = 0;
        else
            trailerOpacity = 1;
    }

	const setActivePage = (page) => {
		navbarStore.NavbarState = false;
		
		ActivePageBuf = ActivePage;
		ActivePage = page;
		window.location.assign(`?${page}`);
		loadPageComponent(ActivePage);
		if (ActivePageBuf != ActivePage)
			window.scrollTo(0, 0);
	};

	const loadPageComponent = (activePage) => {
		switch (activePage) {
			case 'Home':
			return Home;
			case 'Projekte':
			return Projekte;
			case 'Galerie':
			return Galerie;
			case 'About':
			return About;
			case 'Impressum':
			return Impressum;
			case "Domaindelenfer":
			return Domaindelenfer;
			case "Aareroadtrip":
			return Aareroadtrip;
			case "Deadinthewater":
			return Deadinthewater;
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

<Trailer opacity={trailerOpacity} />

<Navbar setActivePage="{setActivePage}" navbarStateStore="{navbarStore}"/>
  
<svelte:component this="{loadPageComponent(ActivePage)}" />
	  
<Footer setActivePage="{setActivePage}"/>