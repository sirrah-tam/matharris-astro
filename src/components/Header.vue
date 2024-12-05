<template>
  <header class="bg-slate-800">
    <div class="container lg:max-w-4xl mx-auto py-4 flex flex-1 justify-between">
      <a href="/" class="p-3 font-bold">{{ info.siteName }}</a>
      <main-nav :links="links" class="hidden md:block"></main-nav>
      <main-nav :links="links" id="main-nav-mobile" class="md:hidden"></main-nav>
      <button class="md:hidden" data-target="#main-nav-mobile" aria-controls="navbarToggleExternalContent" aria-expanded="false">
        Menu
      </button>
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
