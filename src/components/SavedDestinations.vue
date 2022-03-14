<template>
  <section class="saved-destination-list">
    <div class="row justify-content-around py-3">
      <Destination
        v-for="(destination, index) in destinations"
        :key="index"
        :destination="destination"
      />
    </div>
    <div v-if="!destinations.length" class="row justify-content-around">
      <div class="alert alert-warning text-center col-10" role="alert">
        No results found
      </div>
    </div>
  </section>
</template>

<script>
import Destination from "./Destination.vue";

export default {
  name: "SavedDestinationList",
  components: { Destination },
  computed: {
    destinations() {
      return this.$store.getters.getSavedCountries;
    },
  },
};
</script>
