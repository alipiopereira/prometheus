<template>
  <div>
    <v-app-bar absolute fixed :dark="darkMode" flat height="40">
      <v-toolbar-title>Prometheus</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn
        icon
        :ripple="false"
        href="https://www.fb.me/iomoondev"
        target="_blank"
        rel="noopener noreferrer"
        class="pa-0 ma-0"
      >
        <v-icon size="20">mdi-facebook</v-icon>
      </v-btn>

      <v-btn
        icon
        href="https://www.instagram.com/iomoondev0"
        target="_blank"
        rel="noopener noreferrer"
        class="pa-0 ma-0"
      >
        <v-icon size="20">mdi-instagram</v-icon>
      </v-btn>

      <v-btn icon>
        <modalSendMessage class="pa-0 ma-0" />
      </v-btn>

      <v-btn icon @click="darkMode = !darkMode" class="mr-5">
        <v-icon size="20">{{this.darkMode ? 'mdi-white-balance-sunny':'mdi-weather-night'}}</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script>
import modalSendMessage from "../components/modalSendMessage";

export default {
  name: "appBar",
  components: {
    modalSendMessage
  },
  data() {
    return {
      darkMode: false,
      drawer: null
    };
  },
  mounted() {
    if (localStorage.getItem("dark")) {
      try {
        this.darkMode = JSON.parse(localStorage.getItem("dark"));
        this.$vuetify.theme.dark = this.darkMode;
      } catch (e) {
        localStorage.removeItem("dark");
      }
    }
  },
  watch: {
    darkMode(dark) {
      this.$store.dispatch("handleDarkMode", dark);
      this.$vuetify.theme.dark = dark;
    }
  }
};
</script>

<style>
.remove-border:focus {
  outline: none;
}
</style>