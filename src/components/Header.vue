<template>
  <header class="bg-slate-800">
    <div class="container lg:max-w-4xl mx-auto py-4 md:flex flex-1 justify-between">
      <a href="/" class="block p-3 font-bold">
        <svg
					class="logo"
					width="100%"
					height="100%"
					viewBox="0 0 1121 896"
					style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;"
				>
        <title>{{ info.siteName }}</title>
					<path
						d="M37.5,887.5l125,-879.167l25,0l345.833,700l300,-604.166l-204.166,-0l-0,-95.834l487.5,0l-0,95.834l-200,-0l112.5,783.333l-104.167,0l-37.5,-287.5l-195.833,0l-141.667,287.5l-33.333,0l-295.834,-600l-83.333,600l-100,0Zm708.333,-395.833l129.167,-0l-29.167,-195.834l-100,195.834Z"
						style="fill:white;"></path>
				</svg>
        </a>
      <main-nav :links="links" class="hidden md:block"></main-nav>
      <details class="md:hidden">
        <summary class="px-2 list-outside ml-8">Menu</summary>
        <main-nav :links="links" id="main-nav-mobile"></main-nav>
      </details>
      <!-- <button class="md:hidden" data-target="#main-nav-mobile" aria-controls="navbarToggleExternalContent" aria-expanded="false">
        Menu
      </button> -->
    </div>
  </header>
</template>

<script>
import Nav from './Nav.vue'

export default {
  name: 'page-header',

  props: {
    links: Array,
    info: Object
  },

  components: {
    'main-nav': Nav
  }
}
</script>

<style>
.logo {
  height: 40px;
}
</style>
