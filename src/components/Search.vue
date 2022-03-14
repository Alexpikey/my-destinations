<template>
  <div class="row py-5 justify-content-around">
    <input class="col-9" type="text" v-model="searchTerm" />
    <button class="btn btn-secondary col-1" @click="clear">clear</button>
    <button class="btn btn-secondary col-1" @click="search">search</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchTerm: "",
    };
  },
  methods: {
    search() {
      this.$store.dispatch("searchCountries", this.searchTerm);
    },
    clear() {
      this.$store.dispatch("searchCountries", "");
    },
  },
};
</script>

<style></style>
