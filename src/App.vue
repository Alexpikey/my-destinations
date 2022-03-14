<template>
  <main>
    <Navigation />
    <div class="container">
      <router-view> </router-view>
    </div>
  </main>
</template>

<script>
import Navigation from "./components/Navigation.vue";

export default {
  name: "App",
  components: { Navigation },
  async mounted() {
    this.$store.dispatch("fetchCountries");
  },
};
</script>
