<script lang="ts">
	import slickScroll from "slickscrolljs";
	import { onMount } from "svelte";
	import { imgPromises, loaderAnimationPromise, loadPageResolve, slickScrollInstance, workItemsFetch, siteDataFetch } from "$lib/store";
	import { devMsg, fetchJsonData } from "$lib/utils";
	import HomeSection from "$lib/sections/home.svelte";
	import WorkSection from "$lib/sections/work.svelte";
	import AboutSection from "$lib/sections/about.svelte";
	import NavComponent from "$lib/components/nav.svelte";
	import Footer from "$lib/components/footer.svelte";
	import CursorDot from "$lib/components/cursor-dot.svelte";
	import Loader from "$lib/components/loader.svelte";

	let scrollContainer: HTMLElement, navBar: HTMLElement;
	let loading: boolean = true;

	function loadGoogleTranslate() {
		const script = document.createElement('script');
		script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
		script.async = true;
		document.head.appendChild(script);
	}

	// Function to initialize Google Translate
	(window as any).googleTranslateElementInit = () => {
		new google.translate.TranslateElement({
			pageLanguage: 'ru', // Set the original language as Russian
			includedLanguages: 'en,ru', // Only include English and Russian
			layout: google.translate.TranslateElement.InlineLayout.SIMPLE
		}, 'google_translate_element');

		// After the widget is loaded, we can hide other languages manually
		setTimeout(() => {
			const dropdown = document.querySelector('.goog-te-menu2');
			if (dropdown) {
				const languages = Array.from(dropdown.querySelectorAll('div.goog-te-menu2-item'));
				languages.forEach((langItem: HTMLElement) => {
					if (!langItem.textContent?.includes('English') && !langItem.textContent?.includes('Русский')) {
						langItem.style.display = 'none'; // Hide languages other than English and Russian
					}
				});
			}
		}, 1000); // Delay to ensure the widget is fully loaded
	};

	onMount(async () => {
		// Disable scrolling on initial load
		scrollContainer.style.overflowY = "hidden";
		scrollContainer.scrollTo(0, 0);

		workItemsFetch.set(await fetchJsonData("/data/work-data.json")); // Wait for work data to load
		siteDataFetch.set(await fetchJsonData("/data/data.json")); // Wait for site data to load

		await Promise.allSettled($imgPromises); // Wait for images to load
		await loaderAnimationPromise; // Wait until loading animation is complete

		loading = false; // Destroy loader component
		loadPageResolve(); // Resolve loadPagePromise
		devMsg();

		// Resolve slickScroll promise and pass momentumScroll's value
		$slickScrollInstance = new (slickScroll as any)({
			root: scrollContainer,
			easing: "easeOutCirc",
			duration: 1500,
			fixedOffsets: [
				navBar
			]
		});

		// Enable scrolling
		scrollContainer.style.overflowX = "hidden";
		scrollContainer.style.overflowY = "auto";

		loadGoogleTranslate();
	});
</script>

<!-- Cursor dot tracking when mouse moves inside the body -->
<CursorDot></CursorDot>

<!-- Page loading progress bar -->
{#if loading} <Loader></Loader> {/if}

<div id="google_translate_element" style="position: fixed; top: 10px; right: 20px; z-index: 100; cursor: pointer;">
</div>

<div id="scroll-frame" bind:this={scrollContainer}>
	<!-- Top nav-bar and mobile nav-bar -->
	<div id="nav-bar" bind:this={navBar}>
		<NavComponent scrollContainer={scrollContainer}></NavComponent>
	</div>
	<!-- page sections -->
	<HomeSection></HomeSection>
	<WorkSection></WorkSection>
	<AboutSection></AboutSection>
	<Footer></Footer>
</div>

<style lang="sass">
	@import "$lib/consts"

	:global(canvas)
		position: absolute
		top: 0
		left: 0
		z-index: -1

	:global(body)
		background-color: #333333
		overflow: hidden
		color: white
		margin: 0
		padding: 0
		-moz-osx-font-smoothing: grayscale
		-webkit-font-smoothing: antialiased
		font-family: "Questrial", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif

	:global(*)
		margin: 0
		padding: 0
		-moz-osx-font-smoothing: grayscale
		-webkit-font-smoothing: antialiased

	#scroll-frame
		top: 0
		left: 0
		width: 100%
		height: 100vh
		position: relative
		overflow: hidden auto

	#nav-bar
		position: fixed
		top: 10vh
		z-index: 100
</style>
