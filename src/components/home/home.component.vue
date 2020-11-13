<script lang="ts" src="./home.component.vue.ts"></script>
<template>
	<section class="container">
		<img src="assets/vue-logo.png" id="vue-logo">
		<div>
			<h1>Vue.js + Typescript + IoC + FuseBox + Jest + Nightwatch project template</h1>
			<h3>IoC injected warrior information</h3>
			<div class="warrior-container">
				<warrior></warrior>
			</div>
		</div>
	</section>
</template>
<style lang="css" scoped>
	.container {
		text-align: center;
		position: absolute;
		width: 100%;
		margin: -15px;
		max-width: 100%;
		top: 50%;
		transform: translateY(-50%);
	}

	.warrior-container {
		color: indigo;
	}

	#vue-logo {
		width: 200px;
		height: 200px;
	}
</style>
