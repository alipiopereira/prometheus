import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    darkMode: false,
    cards: [],
    notations: [],
    lists: [],
    fiveWtwoH: []
  },

  mutations: {
    setDarkMode(state, isDark) {
      localStorage.setItem("dark", isDark);
      state.darkMode = localStorage.getItem("dark");
    },

    addCard(state, card) {
      state.cards.push({ card: card, notas: state.notations })
      console.log(state.cards)
    },

    addNotation(state, notation) {
      state.notations.push(notation)
      console.log(state.notations)
    }
  },

  actions: {
    handleDarkMode(context, isDark) {
      context.commit("setDarkMode", isDark);
    },

    handleAdd(context, card) {
      context.commit("addCard", card)
    },

    handleAddNotation(context, notation) {
      context.commit("addNotation", notation)
    }
  }
});

export default store;