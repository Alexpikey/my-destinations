<template>
  <Search />
  <section class="destination-list">
    <div v-if="!loading" class="row justify-content-around py-3">
      <Destination
        v-for="(destination, index) in destinations"
        :key="index"
        :destination="destination"
      />
    </div>
    <div v-else class="row justify-content-around">
      <div class="alert alert-primary text-center col-10" role="alert">
        Loading...
      </div>
    </div>
    <div
      v-if="!destinations.length && !loading"
      class="row justify-content-around"
    >
      <div class="alert alert-warning text-center col-10" role="alert">
        No results found
      </div>
    </div>
  </section>
</template>

<script>
import Destination from "./Destination.vue";
import Search from "./Search.vue";

export default {
  name: "DestinationList",
  components: { Destination, Search },
  computed: {
    destinations() {
      return this.$store.getters.limitedCountries;
    },
    loading() {
      return this.$store.getters.loading;
    },
  },
};
</script>
