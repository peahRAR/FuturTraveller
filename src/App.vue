<template>
  <div class="container m-auto">
    <h1 class="uppercase text-white text-3xl font-bold mb-4">
      Futur traveller
    </h1>

    <section id="bissextile">
      <div class="pillOff text-white flex justify-end">
        <i class="far fa-circle"></i>
        <p>bissextile</p>
      </div>

      <div class="pillOn text-white flex justify-end">
        <i class="fas fa-circle"></i>
        <p>bissextile</p>
      </div>
    </section>

    <p class="text-white bg-gray-700 text-8xl">{{ formattedDate }}</p>
    <div class="flex justify-center mt-4">
      <button
        class="rounded-full bg-blue-900 px-3 text-white text-xl mx-2"
        @click="incrementDay"
      >
        Ajouter un jour
      </button>
      <button
        class="rounded-full bg-blue-900 px-3 text-white text-xl mx-2"
        @click="incrementMonth"
      >
        Ajouter un moi
      </button>
      <button
        class="rounded-full bg-blue-900 px-3 text-white text-xl mx-2"
        @click="incrementYear"
      >
        Ajouter un an
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "App",
  components: {},
  computed: {
    ...mapGetters(["formattedDate"]),
  },
  methods: {
    ...mapActions(["incrementDay"]),
    ...mapActions(["incrementMonth"]),
    ...mapActions(["incrementYear"]),
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}

body {
  background-color: #18181b;
}
</style>
