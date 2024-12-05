<template lang="html">
  <footer class="contact py-14">
    <div class="container lg:max-w-4xl mx-auto px-4 lg:px-0">
      <h2 class="text-4xl mb-6">Where Else To Find Me</h2>
      <ul>
        <li v-for="item in contact" :key="item.index" class="py-2">
          <strong>{{ item.type }}</strong>: <a :href="item.link">{{ item.display }} <ArrowTopRightOnSquareIcon class="size-4 inline-block text-white align-text-top" /></a>
        </li>
      </ul>
      <p class="mt-3">Built with Astro, Tailwind, and Vue</p>
      
    </div>
  </footer>
</template>

<script>
import { ArrowTopRightOnSquareIcon } from '@heroicons/vue/24/solid'

export default {
  name: 'page-footer',

  props: {
    contact: Array
  },

  components: {
    ArrowTopRightOnSquareIcon
  }
}
</script>

<style lang="css">
footer {
  background-color: #357;
}
</style>