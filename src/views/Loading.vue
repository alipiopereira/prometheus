<template>
  <div>
    <h4>Prometheus</h4>
    <v-row class="loading">
      <v-col cols="12">
        <v-row align="center" justify="center" class="ma-3" style="justify: flex">
          <v-progress-circular
            :indeterminate="indeterminate"
            :rotate="rotate"
            :size="size"
            :value="value"
            :width="width"
            color="light-blue"
          >{{ value }}</v-progress-circular>
        </v-row>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "Prometheus",
  data() {
    return {
      indeterminate: true,
      rotate: 0,
      size: 32,
      value: 0,
      width: 2,
      interval: {}
    };
  },

  beforeDestroy() {
    clearInterval(this.interval);
  },
  mounted() {
    this.interval = setInterval(() => {
      if (this.value === 100) {
        this.value = 0;
        this.dialog = true;
        this.$router.push('/app')
      }
      this.value += 10;
    }, 1000);
  }
};
</script>

<style scoped>
.loading {
    margin-top: 15%;
}
</style>