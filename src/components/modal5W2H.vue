<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
      <template v-slot:activator="{ on }">
        <v-btn color="#0AE6B2" class="text-capitalize" dark v-on="on" rounded>5W2H</v-btn>
      </template>
      <v-card flat tile>
        <div class="pt-3">
          <v-toolbar dark fixed flat :color="color" class="mx-2" style="border-radius: 10px;">
          <v-btn icon dark :closeColor="closeColor" :color="closeColor" @click="dialog = false">
                <v-icon>mdi-arrow-left</v-icon>
              </v-btn>
              <v-toolbar-title class="color">5W2H</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn icon dark :closeColor="closeColor" :color="closeColor" @click="dialog = false" class="mr-1">
                <v-icon>mdi-check-outline</v-icon>
              </v-btn>
          </v-toolbar>
        </div>

        <v-container>
          <v-row align="center" justify="center" class="ma-3" style="justify: flex">
            <v-col cols="12">modal5W2H</v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  name: "modal5W2H",
  props: {
    title: {
      type: String,
      required: true
    },
    color: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      dialog: false
    };
  },
  computed: {
    closeColor() {
      return this.color === "white" ? "red" : "white";
    }
  }
};
</script>

<style lang="css" scoped>
</style>
