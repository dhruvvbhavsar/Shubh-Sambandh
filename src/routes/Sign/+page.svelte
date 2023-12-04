<script lang="ts">
	import { page } from '$app/stores';
	import type { ActionData } from './$types';
	import logo from '../../assets/logo.png';

	export let data: ActionData;
</script>

<div class="bg-red-900">
	<div class="flex justify-center h-screen">
		<div
			class="hidden bg-cover lg:block lg:w-2/3"
			style="background-image: url(https://images.unsplash.com/photo-1516641239768-dc3572bdca04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)"
		>
			<div class="flex items-center h-full px-20 bg-red-900 bg-opacity-40">
				<div>
					<h2 class="text-2xl font-bold text-white sm:text-3xl">Shubh Sambandh</h2>

					<p class="max-w-xl mt-3 text-white">
						Welcome to Shubh Sambandh! We are delighted to have you here and look forward to helping
						you find your perfect match. Please sign in to access your account and begin your
						journey towards finding your life partner.
					</p>
				</div>
			</div>
		</div>

		<div class="flex items-center w-full max-w-md px-6 mx-auto lg:w-2/6">
			<div class="flex-1">
				<div class="text-center">
					<div class="flex justify-center mx-auto">
						<a href="/">
							<img src={logo} width="60px" alt="" />
						</a>
					</div>

					<p class="mt-3 text-white">Sign in to access your account</p>
				</div>

				<div class="mt-8">
					<form method="POST">
						<div>
							<label for="email" class="block mb-2 text-sm text-white">Email Address</label>
							<input
								type="email"
								name="email"
								id="email"
								placeholder="example@example.com"
								class="block w-full px-4 py-2 mt-2 text-black placeholder-gray-600 bg-white border border-gray-200 rounded-lg focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
							/>
						</div>

						<div class="mt-6">
							<div class="flex justify-between mb-2">
								<label for="password" class="text-sm text-white">Password</label>
								<!-- <a
									href="#"
									class="text-sm text-gray-400 focus:text-blue-500 hover:text-blue-500 hover:underline"
									>Forgot password?</a
								> -->
							</div>

							<input
								type="password"
								name="password"
								id="password"
								placeholder="Your Password"
								class="block w-full px-4 py-2 mt-2 text-black placeholder-gray-600 bg-white border border-gray-200 rounded-lg focus:border-red-400 focus:ring-red-400 focus:outline-none focus:ring focus:ring-opacity-40"
							/>
						</div>

						<div class="mt-6">
							<button
								class="w-full px-4 py-2 tracking-wide text-white transition-colors duration-300 transform bg-red-600 rounded-lg hover:bg-red-700 focus:outline-none focus:bg-red-400 focus:ring focus:ring-red-300 focus:ring-opacity-50"
							>
								Sign in
							</button>
						</div>
					</form>

					<p class="mt-6 text-sm text-center text-white">
						Don&#x27;t have an account yet? <a
							href="/Register"
							class="text-red-500 focus:outline-none focus:underline hover:underline">Sign up</a
						>.
					</p>
					{#if $page.status == 400}
						<p class="mt-2 text-sm text-center text-white">Invalid Credentials</p>
					{/if}
				</div>
			</div>
		</div>
	</div>
</div>
