import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      countries: [],
      savedCountries: [],
      loading: true,
    };
  },
  mutations: {
    updateCountries(state, payload) {
      state.countries = payload;
    },

    saveCountry(state, payload) {
      state.savedCountries.push(payload);
    },

    removeSavedCountry(state, payload) {
      state.savedCountries = state.savedCountries.filter((country) => {
        return !(country == payload);
      });
    },

    enableLoading(state) {
      state.loading = true;
    },

    disableLoading(state) {
      state.loading = false;
    },
  },
  actions: {
    // Get all countries
    async fetchCountries(context) {
      await fetch(
        "https://restcountries.com/v3.1/all?fields=name,region,subregion,flag,latlng&"
      )
        .then((res) => res.json())
        .then((data) => {
          context.commit("disableLoading");
          context.commit("updateCountries", data);
        })
        .catch((error) => context.dispatch("logError", error.message));
    },

    // Get countries based on search string
    async searchCountries(context, payload) {
      context.commit("enableLoading");

      // Rerun fetch all action if search string is empty
      if (payload.trim() == "") {
        context.dispatch("fetchCountries");
        return;
      }

      await fetch(
        `https://restcountries.com/v3.1/name/${payload}?fields=name,region,subregion,flag,latlng&`
      )
        .then((res) => res.json())
        .then((data) => {
          context.commit("disableLoading");

          // check if there are entries as catch block does not account for 404 message that gets returned when there are no results
          if (data.length) {
            context.commit("updateCountries", data);
            return;
          }

          context.commit("updateCountries", []);
        })
        .catch((error) => context.dispatch("logError", error.message));
    },

    // Remove and add countries to the list
    toggleCountry(context, payload) {
      if (context.state.savedCountries.includes(payload)) {
        context.commit("removeSavedCountry", payload);
      } else {
        context.commit("saveCountry", payload);
      }
    },

    // log out errors that might occur from fetching data
    logError(context, payload) {
      console.error(payload);
    },
  },

  getters: {
    loading(state) {
      // Get loading state
      return state.loading;
    },
    limitedCountries(state) {
      // Get 10 Countries
      return state.countries.slice(0, 10);
    },
    getSavedCountries(state) {
      // Get all saved countries
      return state.savedCountries;
    },
    countrySavedStatus(state) {
      // Get the saved status of a specific Country
      return (country) => state.savedCountries.includes(country);
    },
  },
});

export default store;
