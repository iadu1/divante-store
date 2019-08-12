import Vue from "vue";
import Vuex from "vuex";
import VuexPersistence from "vuex-persist";

Vue.use(Vuex);

const apiURL = "https://demo8504186.mockable.io/products/";
const vuexLocal = new VuexPersistence({
  storage: window.localStorage,
  key: "divanteStore"
});

export default new Vuex.Store({
  state: {
    cart: [],
    groupedCart: [],
    config: {},
    loading: true
  },
  mutations: {
    createConfig(state, config) {
      state.loading = false;
      state.config = config;
    },
    addProductToCart(state, product) {
      state.cart.push(product);
      state.groupedCart = state.cart.reduce((a, b) => {
        var i = a.findIndex(x => x.id === b.id);
        return (
          i === -1
            ? a.push({ id: b.id, count: 1, name: b.name })
            : a[i].count++,
          a
        );
      }, []);
    },
    clearCart(state) {
      state.cart = [];
      state.groupedCart = [];
    }
  },
  actions: {
    fetchData(store) {
      return fetch(apiURL)
        .then(resp => resp.json())
        .then(resp => {
          store.commit("createConfig", resp);
        });
    }
  },
  plugins: [vuexLocal.plugin]
});
