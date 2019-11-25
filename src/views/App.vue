<template>
  <div>
    <appBar />

    <v-row class="mt-7">
      <v-col cols="12">
        <v-row align="center" justify="center" class="ma-3" style="justify: flex">
          <modalAdd />
        </v-row>
      </v-col>

      <v-col cols="12" class="mt-5">
        <v-row>
          <previewCards />
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import appBar from "../components/appBar";
import modalAdd from "../components/modalAdd";
import previewCards from "../components/previewCards";
export default {
  name: "Home",
  components: {
    appBar,
    modalAdd,
    previewCards
  },
  data() {
    return {};
  }
};
</script>

<style>
.card-livro {
  position: relative;
  left: 300px;
  bottom: 100px;
  box-shadow: 0px 6px 22px rgba(100, 100, 100, 0.5);
}

.card-banner {
  position: absolute;
  left: 200px;
  bottom: 100px;
  box-shadow: 0px 6px 22px rgba(100, 100, 100, 0.5);
}
</style>