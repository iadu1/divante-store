<template>
  <div class="home wrapper">
    <div class="home--left-sidebar left-sidebar">
      <Cart />
    </div>
    <div class="home--product-list main-content">
      <div v-if="loading" class="loading-spinner"></div>
      <Product
        v-else
        v-for="product in config.products"
        :id="product.id"
        :key="product.name"
        :name="product.name"
        :descShort="product.descShort"
        :price="product.price"
      />
    </div>
  </div>
</template>

<script>
import store from "../store";
import Cart from "@/components/Cart.vue";
import Product from "@/components/Product.vue";

export default {
  name: "home",
  components: {
    Cart,
    Product
  },
  created() {
    this.$store.dispatch("fetchData");
  },
  computed: {
    loading() {
      return store.state.loading;
    },
    config() {
      return store.state.config;
    } 
  },
};
</script>
<style scoped>
.home--product-list {
  display: grid;
  position: relative;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-gap: 50px;
}

@media all and (max-width: 1690px) {
  .home--product-list {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

@media all and (max-width: 1280px) { 
  .home--product-list {
    grid-template-columns: 1fr 1fr;
  }
}

@media all and (max-width: 599px) {
  .home--product-list {
    grid-template-columns: 1fr;
  }
}

.loading-spinner {
  display: block;
  position: absolute;
  width: 64px;
  height: 64px;
  left: 50%;
  top: 45%;
  transform: translate(-50%);
}

.loading-spinner:after {
  content: " ";
  display: block;
  width: 46px;
  height: 46px;
  margin: 1px;
  border-radius: 50%;
  border: 5px solid #155bcc;
  border-color: #155bcc transparent #155bcc transparent;
  animation: lds-dual-ring 1.2s linear infinite;
}

@keyframes lds-dual-ring {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>