<script>
	let open = false;
	import logo from '../../../assets/logo.png';
</script>

<header class="back">
	<nav class="container relative flex items-center justify-between px-6 py-4 mx-auto text-white">
		<a href="/">
			<img src={logo} width="60px" alt="" />
		</a>

		<button on:click={() => (open = !open)} class="md:hidden">
			{#if !open}
				<span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="w-6 h-6"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
						stroke-width="2"
					>
						<path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
					</svg>
				</span>
			{/if}

			{#if open}
				<span>
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="w-5 h-5"
						viewBox="0 0 20 20"
						fill="currentColor"
					>
						<path
							fill-rule="evenodd"
							d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
							clip-rule="evenodd"
						/>
					</svg>
				</span>
			{/if}
		</button>

		<div
			class={`${
				open ? 'translate-x-0 opacity-100 ' : 'opacity-0 -translate-x-full'
			} absolute inset-x-0 z-30 w-full px-6 py-8 mt-4 space-y-6 transition-all duration-300 ease-in-out bg-transparent top-16 md:mt-0 md:p-0 md:top-0 md:relative md:bg-transparent md:w-auto md:opacity-100 md:translate-x-0 md:space-y-0 md:-mx-6 md:flex md:items-center`}
		>
			<a href="/" class="block text-white transition-colors duration-300 md:px-6 hover:text-red-300"
				>Home</a
			>
			<a
				href="#about"
				class="block text-white transition-colors duration-300 md:px-6 hover:text-red-300"
				>About Us</a
			>
			<a
				href="#features"
				class="block text-white transition-colors duration-300 md:px-6 hover:text-red-300"
				>Features</a
			>
			<a
				href="#testimonials"
				class="block text-white transition-colors duration-300 md:px-6 hover:text-red-300"
				>Testimonials</a
			>
			<a
				href="#blogs"
				class="block text-white transition-colors duration-300 md:px-6 hover:text-red-300">Blog</a
			>
			<a
				href="#faqs"
				class="block text-white transition-colors duration-300 md:px-6 hover:text-red-300">FAQs</a
			>
			<a
				href="/Sign"
				class="block text-white transition-colors duration-300 md:px-6 hover:text-red-300"
				>Sign In</a
			>
			<a
				href="/Register"
				class="block text-white transition-colors duration-300 md:px-6 hover:text-red-300"
				>Register</a
			>
		</div>
	</nav>

	<section>
		<div class="relative grid w-full h-96 lg:h-[32rem] place-items-center">
			<div class="flex flex-col items-center mx-auto text-center">
				<h1 class="text-4xl font-semibold text-white uppercase md:text-6xl font-serif">
					Shubh Sambandh
				</h1>

				<p class="mt-6 text-4xl leading-5 text-white" id="sub-heading">
					Uniting Hearts, With Purpose
				</p>

				<a href="/Register" class="border-2 text-2xl rounded-lg bg-white mt-8 py-4 w-60">
					Get Started
				</a>

				<a href="#about" class="mt-8 cursor-pointer animate-bounce">
					<svg
						width="53"
						height="53"
						viewBox="0 0 53 53"
						fill="none"
						xmlns="http://www.w3.org/2000/svg"
					>
						<circle cx="27" cy="26" r="18" stroke="white" stroke-width="2" />
						<path
							d="M22.41 23.2875L27 27.8675L31.59 23.2875L33 24.6975L27 30.6975L21 24.6975L22.41 23.2875Z"
							fill="white"
						/>
					</svg>
				</a>
			</div>
		</div>
	</section>
</header>
