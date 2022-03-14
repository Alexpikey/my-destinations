<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <router-link to="/" class="navbar-brand"
        >MY TRAVEL DESTINATIONS</router-link
      >
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link to="/" class="nav-link active">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link
            to="/my-list"
            class="nav-link"
            :class="{ disabled: !savedDestinations.length }"
            >My list
          </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Navigation",
  computed: {
    savedDestinations() {
      return this.$store.getters.getSavedCountries;
    },
  },
};
</script>
