<template lang="html">
  <footer class="contact py-14 text-white">
    <div class="container lg:max-w-4xl mx-auto px-8 lg:px-0">
      <h2 class="text-4xl mb-6">Where Else To Find Me</h2>
      <ul class="border-y-4 border-white">
        <li v-for="item in contact" :key="item.index" class="py-2">
          <strong>{{ item.type }}</strong>: <a :href="item.link" rel="me">{{ item.display }}
            <ArrowTopRightOnSquareIcon class="size-4 inline-block text-white align-text-top" />
          </a>
        </li>
      </ul>
      <p class="my-3">Built with <a href="https://astro.build/" target="_blank" rel="noopener noreferrer"
          class="underline">Astro
          <ArrowTopRightOnSquareIcon class="size-4 inline-block text-white align-text-top" />
        </a>, <a href="https://tailwindcss.com/" target="_blank" rel="noopener noreferrer" class="underline">Tailwind
          <ArrowTopRightOnSquareIcon class="size-4 inline-block text-white align-text-top" />
        </a>, and <a href="https://vuejs.org/" target="_blank" rel="noopener noreferrer" class="underline">Vue
          <ArrowTopRightOnSquareIcon class="size-4 inline-block text-white align-text-top" />
        </a>. <a href="https://github.com/sirrah-tam/matharris-astro" class="underline">Source code
          <CodeBracketIcon class="size-4 inline-block text-white align-text-top" />
        </a> on GitHub.
      </p>
    </div>
  </footer>
</template>

<script>
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from '@heroicons/vue/24/solid'

export default {
  name: 'page-footer',

  props: {
    contact: Array
  },

  components: {
    ArrowTopRightOnSquareIcon,
    CodeBracketIcon
  }
}
</script>

<style lang="css">
footer {
  background-color: #357;
}
</style>