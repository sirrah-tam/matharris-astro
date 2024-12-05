<template lang="html">
  <section class="about container lg:max-w-4xl mx-auto py-14 px-4 lg:px-0">
    <h1 class="text-7xl text-center">Resume</h1>
    <div v-for="(value, key) in resume" :key="key">
      <h2 class="text-5xl">{{ key[0].toUpperCase() + key.substring(1) }}</h2>
      <div v-if="key == 'experience'">
        <div v-for="experience in value" :key="experience.company">
          <h3 class="text-3xl">{{ experience.company }}</h3>
          <p v-if="experience.title">{{ experience.title }}</p>
          <ul class="list-disc list-inside">
            <li v-for="item in experience.description" :key="item">{{ item }}</li>
          </ul>
        </div>
      </div>
      <div v-else-if="key == 'education'">
        <div v-for="education in value" :key="education.college">
          <h3 class="text-3xl">{{ education.college }}</h3>
          <p v-if="education.years">{{ education.years }}</p>
          <p v-if="education.degree">{{ education.degree }}</p>
          <p v-if="education.thesis">{{ education.thesis }}</p>
        </div>
      </div>
      <div v-else-if="key == 'skills'" class="mt-9">
        <p>{{ value[0] }}</p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "resume",

  props: {
    resume: Object
  }
};
</script>
<style>
h2 {
  margin-top: 30px;
  padding-bottom: 10px;
  border-bottom: 2px solid white;
}

h3 {
  margin-top: 30px;
}

p {
  font-size: 1rem;
  margin-bottom: 5px;
}
</style>
