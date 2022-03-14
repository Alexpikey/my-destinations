<template>
  <div
    class="card col-md-5 border-primary mb-3 text-center p-4 align-self-start"
    @click="showDetails = !showDetails"
  >
    <h5 class="card-title">{{ destination.name?.common }}</h5>
    <p class="card-text">{{ destination.region }}</p>

    <button
      @click.stop="toggle"
      class="btn"
      :class="{ 'btn-primary': !saved, 'btn-danger': saved }"
    >
      {{ saved ? "Remove from list" : "Add to list" }}
    </button>

    <transition name="fade" tag="div" class="card-footer text-muted">
      <div v-if="showDetails" class="additional-details">
        <span class="flag">{{ destination.flag }}</span>
        <p>Subregion: {{ destination.subregion }}</p>
        <p>
          Coördinates:
          {{
            `${destination.latlng[0].toFixed(
              2
            )}S ${destination.latlng[1].toFixed(2)}E`
          }}
        </p>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: "Destination",
  props: {
    destination: {
      type: Object,
      default: () => {},
    },
  },
  data() {
    return {
      showDetails: false,
    };
  },
  methods: {
    toggle() {
      this.$store.dispatch("toggleCountry", this.destination);
    },
  },
  computed: {
    saved() {
      return this.$store.getters.countrySavedStatus(this.destination);
    },
  },
};
</script>

<style>
/* transitions */
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: 0.3s all ease-in;
}
</style>
