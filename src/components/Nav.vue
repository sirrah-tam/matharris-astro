<template lang="html">
  <nav>
    <ul class="flex flex-auto flex-col md:flex-row ml-auto">
      <li class="md:px-3" v-for="link in links" :key="link.name">
        <a :href="link.link" class="inline-block p-3 font-bold">{{ link.name }}</a>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'main-nav',

  props: {
    links: Array
  }
}
</script>