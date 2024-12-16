<template lang="html">
  <section id="projects" class="projects container lg:max-w-4xl mx-auto py-14 px-4 lg:px-0">
    <div class="header flex mb-14">
      <CodeBracketIcon class="size-10 inline-block text-white align-text-top mr-4" />
      <h2 class="text-4xl">Dev Projects</h2>
    </div>
    <div class="grid lg:grid-cols-3 gap-5 leading-normal">
      <div v-for="project in projects" >
        <figure class="project mb-4">
          <a :href="project.link" target="_blank">
            <img :src="project.image" :alt="project.name">
          </a>
          <figcaption class="mt-4 font-bold">{{ project.name }}</figcaption>
        </figure>
        <p>Design by: <span v-html="project.designby"></span></p>
        <p>Made with: {{ project.madewith }}</p>
      </div>
    </div>
  </section>
</template>

<script>
import { CodeBracketIcon } from '@heroicons/vue/24/solid'

export default {
  name: 'projects',

  props: {
    projects: Array
  },

  components: {
    CodeBracketIcon
  }
}
</script>
