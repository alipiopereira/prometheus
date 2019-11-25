<template>
  <div>
    <v-row justify="center">
      <v-dialog v-model="dialog" persistent max-width="800px">
        <template v-slot:activator="{ on }">
          <v-btn color="appBarColor" rounded class="text-capitalize btn" v-on="on">Criar</v-btn>
        </template>
        <v-card :dark="dark" :color="card.color">
          <v-card-title>
            <v-spacer></v-spacer>

            <span class="color">Novo CardIO</span>

            <v-spacer></v-spacer>
            <v-btn icon :closeColor="closeColor" :color="closeColor" @click="dialog = false">
              <v-icon>mdi-close-outline</v-icon>
            </v-btn>
          </v-card-title>
          <v-card-text>
            <v-container>
              <v-row align="center" justify="center">
                <v-col cols="12" md="12">
                  <v-text-field
                    v-model="card.name"
                    label="Nome CardIO"
                    style="border-radius: 15px;"
                    solo
                    hide-details
                    class="shadow"
                  ></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-row>
                    <v-spacer></v-spacer>
                    <modalList :title="card.name" :color="card.color" />
                    <v-spacer></v-spacer>
                    <v-spacer></v-spacer>
                    <modalNotation :title="card.name" :color="card.color" />
                    <v-spacer></v-spacer>
                    <modal5W2H :title="card.name" :color="card.color" />
                    <v-spacer></v-spacer>
                  </v-row>
                </v-col>
              </v-row>
            </v-container>
            <small class="color">*campos requeridos</small>
          </v-card-text>
          <v-card-actions>
            <v-btn color="appBarColor" @click="addCard" class="btn" rounded>
              <v-icon>mdi-add</v-icon>Criar
            </v-btn>
            <v-spacer></v-spacer>

            <v-btn
              fab
              color="green"
              class="btn-color"
              width="5"
              height="15"
              @click="colorCard('green')"
            ></v-btn>
            <v-btn
              fab
              color="yellow"
              class="btn-color"
              width="5"
              height="15"
              @click="colorCard('yellow')"
            ></v-btn>
            <v-btn
              fab
              color="red"
              width="5"
              height="15"
              class="btn-color mr-3"
              @click="colorCard('red')"
            ></v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-row>
  </div>
</template>

<script>
import modal5W2H from "./modal5W2H";
import modalNotation from "./modalNotation";
import modalList from "./modalList";
export default {
  name: "modalAdd",
  props: { dark: Boolean },
  components: {
    modal5W2H,
    modalNotation,
    modalList
  },
  data() {
    return {
      dialog: false,
      card: {
        name: "",
        dayInit: null,
        dayFinit: "",
        color: "white"
      }
    };
  },
  methods: {
    addCard() {
      this.$store.dispatch("handleAdd", this.card);
      this.card = {};
      this.dialog = false;
    },

    colorCard(c) {
      this.card.color = c;
      c = "";
    }
  },
  computed: {
    closeColor() {
      return this.card.color === "white" ? "red" : "white";
    }
  }
};
</script>
<style>
.btn-color {
  box-shadow: 0px 2px 22px rgba(100, 100, 100, 0.9);
}

.date-picker {
  box-shadow: 0px 2px 12px rgba(100, 100, 100, 0.6);
}

.color {
  color: #000000;
}
</style>