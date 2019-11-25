<template>
  <div>
    <v-row justify="center">
      <v-dialog v-model="dialog" fullscreen hide-overlay transition="dialog-bottom-transition">
        <template v-slot:activator="{ on }">
          <v-btn color="#0AE6B2" class="text-capitalize" dark v-on="on" rounded>Anotações</v-btn>
        </template>
        <v-card flat tile>
          <div class="pt-3">
            <v-toolbar dark fixed flat :color="color" class="mx-2" style="border-radius: 10px;">
              <v-btn icon dark :closeColor="closeColor" :color="closeColor" @click="dialog = false">
                <v-icon>mdi-arrow-left</v-icon>
              </v-btn>
              <v-toolbar-title class="color">Anotações</v-toolbar-title>
              <v-spacer></v-spacer>
              <v-btn
                icon
                dark
                :closeColor="closeColor"
                :color="closeColor"
                @click="dialog = false"
                class="mr-1"
              >
                <v-icon>mdi-check-outline</v-icon>
              </v-btn>
            </v-toolbar>
          </div>

          <v-container>
            <div v-if="notations.length > 0">
              <v-row
                align="center"
                justify="center"
                class="ma-3"
                style="justify: flex"
                v-for="notation in notations"
                :key="notation"
              >
                <v-col cols="12" sm="6" md="6">
                  <v-card height="50" style="border-radius: 15px;" class="pa-3 shadow">
                    <h4 class="font-weight-regular text-center">{{notation.title}}</h4>
                  </v-card>
                </v-col>
                <v-col cols="12" class="mt-0" sm="8">
                  <v-card style="border-radius: 15px;" class="pa-3 shadow">
                    <h5 class="font-weight-regular text-center">{{notation.text}}</h5>
                  </v-card>
                </v-col>
              </v-row>
            </div>

            <v-row align="center" justify="center" class="ma-3" style="justify: flex">
              <v-col cols="12" sm="6" md="6">
                <v-text-field
                  v-model="n.title"
                  label="Titulo*"
                  style="border-radius: 15px;"
                  solo
                  hide-details
                  class="shadow"
                ></v-text-field>
              </v-col>
              <v-col cols="12" class="mt-0" sm="8">
                <v-textarea
                  v-model="n.text"
                  label="Anotações"
                  solo
                  hide-details
                  name="card-msg"
                  class="shadow"
                  style="border-radius: 15px;"
                ></v-textarea>
              </v-col>
            </v-row>

            <v-row align="center" justify="center">
                <v-btn @click="addNotation(n)" :color="color" rounded class="btn">
                  <v-icon color="black">mdi-plus-outline</v-icon>
                </v-btn>
            </v-row>
          </v-container>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "modalNotation",
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
      dialog: false,
      n: {
        title: "",
        text: ""
      },
      notations: []
    };
  },

  methods: {
    addNotation(n) {
      this.notations.push(n);
      this.$store.dispatch("handleAddNotation", n);
      this.n = {};
    }
  },
  computed: {
    closeColor() {
      return this.color === "white" ? "red" : "white";
    }
  }
};
</script>