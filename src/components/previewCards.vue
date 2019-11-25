<template>
  <div>
    <v-col cols="12">
      <v-row align="center" justify="center" class="ma-3" style="justify: flex" :setCard="setCard">
        <v-dialog
          v-for="c in cards"
          :key="c"
          v-model="dialog"
          fullscreen
          hide-overlay
          transition="dialog-bottom-transition"
        >
          <template v-slot:activator="{ on }">
            <v-btn
              :color="c.card.color"
              class="text-capitalize btn"
              dark
              v-on="on"
              rounded
            >{{c.card.name}}</v-btn>
          </template>
          <v-card flat>
            <v-toolbar dark flat :color="c.card.color" class="ma-2" style="border-radius: 10px;">
              <v-btn icon dark :closeColor="closeColor" :color="closeColor" @click="dialog = false">
                <v-icon>mdi-arrow-left</v-icon>
              </v-btn>
              <v-toolbar-title>{{c.card.name}}</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn icon dark :closeColor="closeColor" :color="closeColor" @click="dialog = false" class="mr-1">
                <v-icon>mdi-check-outline</v-icon>
              </v-btn>
            </v-toolbar>

            <v-container>
              <v-row align="center" justify="center" class="ma-3" style="justify: flex">
                <v-col cols="12">{{c}}</v-col>
              </v-row>
            </v-container>
          </v-card>
        </v-dialog>
      </v-row>
    </v-col>
  </div>
</template>

<script>
export default {
  name: "previewCards",
  data() {
    return {
      cards: [],
      dialog: false
    };
  },

  computed: {
    setCard() {
      this.cards = this.$store.state.cards;
    }
  }
};
</script>

<style lang="css">
</style>