<template>
  <div id="app">
    <v-app>
      <v-content>
        <v-container fluid>
          <transition name="router-fade" mode="out-in">
            <router-view></router-view>
          </transition>
        </v-container>
      </v-content>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "Prometheus",
};
</script>

<style>
#app {
  font-family: "Varela Round", sans-serif;
}
.io-card {
  border-radius: 15px;
}
.font-white {
  color: rgba(238, 238, 238, 0.808);
}

.active {
  border-bottom: 3px solid #0AE6B2;
}

.router-fade-enter-active, .router-fade-leave-active {
  transition: opacity .3s ease;
}
.router-fade-enter, .router-fade-leave-to
/* .component-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.btn {
  box-shadow: 0px 2px 12px rgba(100, 100, 100, 0.2);
  margin: 5px;
}

.shadow {
  box-shadow: 0px 2px 12px rgba(100, 100, 100, 0.2);
}
</style>