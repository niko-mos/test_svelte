<script lang="ts">

	import { onMount } from "svelte";
	import { aboutAnchor, loadPagePromise, slickScrollInstance } from "$lib/store";
	import { letterSlideIn, maskSlideIn } from "$lib/animations";
	import { loadImage, onScrolledIntoView } from "$lib/utils";

	let section1Element: HTMLElement, section2Element: HTMLElement, section3Element: HTMLElement;
	let profilePicContainer: HTMLElement;

	// Promise which when resolved will trigger svelte animations
	let sectionOneResolve: (value?: any) => void;
	let sectionOnePromise = new Promise((resolve) => sectionOneResolve = resolve);
	let sectionTwoResolve: (value?: any) => void;
	let sectionTwoPromise = new Promise((resolve) => sectionTwoResolve = resolve);
	let sectionThreeResolve: (value?: any) => void;
	let sectionThreePromise = new Promise((resolve) => sectionThreeResolve = resolve);


	onMount(async () => {
		// Wait for page to load
		await loadPagePromise;
		// Set navbar about link's y location to top of aboutContainer
		$aboutAnchor = section1Element;

		$slickScrollInstance.addOffset({
			element: profilePicContainer,
			speedY: 0.8
		});

		onScrolledIntoView(section1Element, () => sectionOneResolve(true));
		onScrolledIntoView(section2Element, () => sectionTwoResolve(true));
		onScrolledIntoView(section3Element, () => sectionThreeResolve(true));
	});

	function titleIn(node: HTMLElement) {
		const titleAnimation = letterSlideIn(node, { delay: 15 });
		titleAnimation.anime();
	}

	// Add parallax scrolling offsets to slickScroll
	function addSlickScrollOffset(node: HTMLElement) {
		$slickScrollInstance.addOffset({
			element: node,
			speedY: 0.8
		});
	}

</script>

<div id="content-container" class="about" bind:this={section1Element}>
	{#await sectionOnePromise then _}
		<div class="content-wrapper">
			<h1 class="title" use:titleIn>
				Привет! <br> Меня зовут Евгения
			</h1>
			<div in:maskSlideIn={{ duration: 1200, reverse: true, delay: 150 }}>
				<p class="paragraph">
					Я художник - специалист в области иконописи.
				</p>


			</div>
			<div class="social-button-wrapper">
				<div in:maskSlideIn={{ delay: 400, reverse: true }}>
					<span class="button"><a href="mailto:zhenya2201art@gmail.com" target="_blank" class="clickable sublink link">Email Me</a></span>
				</div>
				<div in:maskSlideIn={{ delay: 700, reverse: true }}>
					<span class="button"><a href="https://www.instagram.com/art.rodina.e" target="_blank" class="clickable sublink link">Instagram</a></span>
				</div>
				<div in:maskSlideIn={{ delay: 700, reverse: true }}>
					<span class="button"><a href="https://t.me/rodina_albom" target="_blank" class="clickable sublink link">Telegram</a></span>
				</div>
			</div>
		</div>
		<div class="profile-image" use:addSlickScrollOffset>
			{#await loadImage("assets/imgs/profile-photo.jpg") then src}
				<img src="{src}" in:maskSlideIn={{ duration: 1200,
					delay: 100,
					reverse: true,
					maskStyles: [
						{ property: "width", value: "100%"},
						{ property: "height", value: "100%"}
					]
				}} alt="Evgenia's Profile" class="profile-pic">
			{/await}
		</div>
	{/await}
</div>

<!--<div class="horizontal-flex" bind:this={section2Element}>-->
<!--	{#await sectionTwoPromise then _}-->
<!--		<ul class="list first">-->
<!--			<li class="list-title">-->
<!--				<div in:letterSlideIn={{ initDelay: 400 }}>-->
<!--					Направления художественной деятельности-->
<!--				</div>-->
<!--			</li>-->
<!--			<li>-->
<!--				<div in:letterSlideIn={{ initDelay: 550 }}>-->
<!--					Иконопись-->
<!--				</div>-->
<!--				<div -->
<!--					class="flex-item" -->
<!--					in:maskSlideIn={{ delay: 600 }}>-->
<!--&lt;!&ndash;					<img src="assets/imgs/svg-icons/svelte.svg" alt="Svelte">&ndash;&gt;-->
<!--&lt;!&ndash;					<img src="assets/imgs/svg-icons/react.svg" alt="React">&ndash;&gt;-->
<!--				</div>-->
<!--			</li>-->
<!--			<li>-->
<!--				<div in:letterSlideIn={{ initDelay: 650 }}>-->
<!--					Пастель-->
<!--				</div>-->
<!--				<div class="flex-item" in:maskSlideIn={{ delay: 700 }}>-->
<!--&lt;!&ndash;					<img src="assets/imgs/svg-icons/nodejs.svg" alt="node js">&ndash;&gt;-->
<!--&lt;!&ndash;					<img src="assets/imgs/svg-icons/php.svg" alt="php">&ndash;&gt;-->
<!--				</div>-->
<!--			</li>-->
<!--			<li>-->
<!--				<div in:letterSlideIn={{ initDelay: 750 }}>-->
<!--					Роспись храмов-->
<!--				</div>-->
<!--				<div class="flex-item" in:maskSlideIn={{ delay: 800 }}>-->
<!--&lt;!&ndash;					<img src="assets/imgs/svg-icons/firebase.svg" alt="Firebase">&ndash;&gt;-->
<!--&lt;!&ndash;					<img src="assets/imgs/svg-icons/gcp.svg" alt="Google Cloud Platform">&ndash;&gt;-->
<!--				</div>-->
<!--			</li>-->
<!--			<li>-->
<!--				<div in:letterSlideIn={{ initDelay: 850 }}>-->
<!--					Роспись мебели-->
<!--				</div>-->
<!--				<div class="flex-item" in:maskSlideIn={{ delay: 900 }}>-->
<!--&lt;!&ndash;					<img src="assets/imgs/svg-icons/flutter.svg" alt="flutter">&ndash;&gt;-->
<!--&lt;!&ndash;					<img src="assets/imgs/svg-icons/android.svg" alt="native android">&ndash;&gt;-->
<!--&lt;!&ndash;					<img src="assets/imgs/svg-icons/iOS.svg" alt="native ios">&ndash;&gt;-->
<!--				</div>-->
<!--			</li>-->
<!--		</ul>-->
<!--		<ul class="list">-->
<!--			<li class="list-title">-->
<!--				<div in:letterSlideIn={{ initDelay: 400 }}>-->
<!--					Участие в выставках-->
<!--				</div>-->
<!--			</li>-->
<!--			<li>-->
<!--				<div in:letterSlideIn={{ initDelay: 550 }}>-->
<!--					МСХ «Монументальное искусство в церкви» 2022, 2023гг, Москва-->
<!--				</div>-->
<!--				<div in:letterSlideIn={{ initDelay: 550 }}>-->
<!--					«Окно в горний мир», 2024, Главный храм Вооруженных сил РФ, Московская область-->
<!--				</div>-->

<!--			</li>-->
<!--		</ul>-->
<!--	{/await}-->
<!--</div>-->

<div class="horizontal-flex" bind:this={section2Element}>
	{#await sectionTwoPromise then _}

		<div class="container" in:letterSlideIn={{ initDelay: 400 }}>
<!--			<h1>Биография</h1>-->

			<div class="section">
				<h2>Образование</h2>
				<p>Училась в МГОУ факультет ИЗО и НР по специальности иконопись (2002-2007 гг).</p>
			</div>

			<div class="section">
				<h2>Профессиональная деятельность</h2>
				<p>Иконописец, монументалист. Работаю 15 лет в различных стилях канонического письма.</p>
				<p>Участвовала в монументальных росписях, написании иконостасов, реконструкциях и благоукрашении многих храмов России, ближнего зарубежья и Европы.</p>

				<h3>Участие в росписях</h3>
				<ul>
					<li>Храм Знамения на Шереметьевом дворе (г. Москва)</li>
					<li>Храм Спиридона Тримифунтского (г. Самара)</li>
					<li>Храм Дмитрия Донского и Ефросинии Московской Тульского Кремля</li>
					<li>Храм Троицы Живоначальной на Шаболовской (г. Москва)</li>
					<li>Храм Благовещения Пресвятой Богородицы (Испания, Барселона)</li>
					<li>Храм Крестовоздвижения (Алматы, Казахстан)</li>
				</ul>

				<h3>Участие в иконостасах</h3>
				<ul>
					<li>Домовая церковь в с. Михалёво (Московская обл.)</li>
					<li>Церковь преподобного Сергия Радонежского на Куликовом поле</li>
					<li>Реконструкция икон храма Знамения в усадьбе Дубровицы (Московская обл.)</li>
				</ul>
			</div>

			<div class="section">
				<h2>Проектная работа</h2>
				<p>Работая с художественными творческими мастерскими, имею опыт разработки проектов росписей, отрисовки орнаментов, эскизов композиций - от калек до исполнения на стене, ведение бригадных работ на объектах.</p>
			</div>

			<div class="section">
				<h2>Выставки</h2>
				<ul>
					<li>Участник выставки МСХ «Монументальное искусство в церкви» 2022 и 2023 гг. в Москве</li>
					<li>Участник выставки «Окно в горний мир» 2024 г. в Главном храме Вооруженных сил РФ</li>
				</ul>
			</div>

			<div class="section">
				<h2>Дополнительная информация</h2>
				<p>Так же работаю лично вне художественных коллективов. В основном это иконы.</p>
				<p>Являюсь членом Национального Союза Пастелистов с 2021 г. Регулярно участвую в выставках.</p>
			</div>
		</div>

	{/await}
</div>


<style lang="sass">

@import "../consts.sass"
@include textStyles()

.container
	font-size: 1.2em
	animation: letterSlideIn 1s ease-in-out


#content-container.about
	display: flex
	flex-direction: row
	justify-content: space-between
	overflow: hidden
	padding: 0 5vw
	margin-top: 40vh
	position: relative
	padding-bottom: 5vh

	.profile-image
		width: 55%
		overflow: hidden
		margin-top: -40vh
		position: relative

		img
			height: 80%
			width: 90%
			border-radius: 0.5vh
			object-fit: cover

	.content-wrapper
		box-sizing: border-box
		width: 50%
		height: 100%
		margin: 0 2vw
		padding-right: 4vw
		display: flex
		flex-direction: column
		justify-content: center
		margin-top: 5vh
		box-sizing: border-box
		z-index: 2

		@media only screen and (max-width: 950px)
			&
				width: 80%

				h1
					font-size: 25vw !important

		h1
			font-size: 20vh
			font-weight: 400

		.paragraph
			margin-top: 10vh
			margin-left: 13vw
			position: relative
			width: 60%
			line-height: 1.5rem

			@media only screen and (max-width: 750px)
				&
					width: 100%
					margin-left: 5vw

			&::before
				content: ""
				position: absolute
				height: 1px
				width: 10vw
				right: 115%
				top: 15%
				background-color: white
				

		.social-button-wrapper
			font-size: 3vh
			margin-left: 13vw
			margin-top: 4vh
			display: inline-block

			& :global(*:not(:last-child))
				margin-right: 2vw

			@media only screen and (max-width: 750px)
				&
					margin-left: 5vw


	@media only screen and (max-width: 950px)
		.profile-image
			display: block

.horizontal-flex
	display: flex
	flex-direction: row
	justify-content: space-between
	padding: 0 13vw
	margin-top: 12vh
	width: 100%
	box-sizing: border-box

	@media only screen and (max-width: 1080px)
		flex-direction: column
		padding: 0 8vw

	.list
		width: 45%
		list-style-type: none
		text-align: left

		@media only screen and (max-width: 1080px)
			margin-top: 10vh

		li.list-title
			letter-spacing: 0.6vh
			font-size: 1.3vh
			font-weight: bold

		li
			font-family: $font
			text-transform: uppercase
			font-size: 2vh
			letter-spacing: 0.5vh
			padding: 2vh 0
			border-bottom: 1px solid #444
			display: flex
			flex-wrap: wrap
			flex-direction: row
			justify-content: space-between
			align-items: center
			column-gap: 10vw
			row-gap: 3vh

			img
				height: 2.3vh

</style>