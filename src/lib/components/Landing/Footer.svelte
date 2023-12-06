<script>
	import logo from '../../../assets/logo.png';
</script>

<footer class="bg-red-900">
	<div class="container px-6 py-12 mx-auto">
		<div class="md:flex md:-mx-3 md:items-center md:justify-between">
			<h1 class="text-xl font-semibold tracking-tight md:mx-3 xl:text-2xl text-white">
				Let us end your search for marriage here.
			</h1>

			<div class="mt-6 md:mx-3 shrink-0 md:mt-0 md:w-auto">
				<a
					href="/Register"
					class="inline-flex items-center justify-center w-full px-4 py-2 text-sm text-black duration-300 bg-white rounded-lg gap-x-3 hover:bg-red-700 hover:text-white focus:ring focus:ring-gray-300 focus:ring-opacity-80"
				>
					<span>Sign Up Now</span>

					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke-width="1.5"
						stroke="currentColor"
						class="w-5 h-5"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
						/>
					</svg>
				</a>
			</div>
		</div>

		<hr class="my-6 md:my-10 border-white" />

		<div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
			<div>
				<p class="font-semibold text-white">Quick Link</p>

				<div class="flex flex-col items-start mt-5 space-y-2">
					<a
						href="/links/Privacy-Policy"
						class=" transition-colors duration-300 text-white hover:text-red-400 hover:underline"
						>Privacy Policy</a
					>
					<a
						href="/links/TnC"
						class=" transition-colors duration-300 text-white hover:text-red-400 hover:underline"
						>Terms and Conditions</a
					>
					<a
						href="/links/Cancellation"
						class=" transition-colors duration-300 text-white hover:text-red-400 hover:underline"
						>Cancellation Policy</a
					>
				</div>
			</div>

			<!-- <div>
				<p class="font-semibold text-white">Industries</p>

				<div class="flex flex-col items-start mt-5 space-y-2">
					<a
						href="#"
						class=" transition-colors duration-300 text-white hover:text-red-400 hover:underline"
						>Retail & E-Commerce</a
					>
					<a
						href="#"
						class=" transition-colors duration-300 text-white hover:text-red-400 hover:underline"
						>Information Technology</a
					>
					<a
						href="#"
						class=" transition-colors duration-300 text-white hover:text-red-400 hover:underline"
						>Finance & Insurance</a
					>
				</div>
			</div>

			<div>
				<p class="font-semibold text-white">Services</p>

				<div class="flex flex-col items-start mt-5 space-y-2">
					<a
						href="#"
						class=" transition-colors duration-300 text-white hover:text-red-400 hover:underline"
						>Translation</a
					>
					<a
						href="#"
						class=" transition-colors duration-300 text-white hover:text-red-400 hover:underline"
						>Proofreading & Editing</a
					>
					<a
						href="#"
						class=" transition-colors duration-300 text-white hover:text-red-400 hover:underline"
						>Content Creation</a
					>
				</div>
			</div> -->

			<div>
				<p class="font-semibold text-white">Contact Us</p>

				<div class="flex flex-col items-start mt-5 space-y-2">
					<a
						href="#"
						class=" transition-colors duration-300 text-white hover:text-red-400 hover:underline"
						>+91 97707 78121</a
					>
					<a
						href="#"
						class=" transition-colors duration-300 text-white hover:text-red-400 hover:underline"
						>shubhsambandh108@gmail.com</a
					>
				</div>
			</div>
		</div>

		<hr class="my-6 md:my-10 border-white" />

		<div class="flex flex-col items-center justify-between sm:flex-row">
			<a href="#">
				<img src={logo} width="60px" alt="" />
			</a>

			<p class="mt-4 text-sm sm:mt-0 text-white">© Copyright 2023. All Rights Reserved.</p>
		</div>
	</div>
</footer>
