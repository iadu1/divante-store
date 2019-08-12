<template>
  <div class="product-details wrapper">
    <div class="product-details--left-sidebar left-sidebar">
      <Cart />
    </div>
    <div class="product-details--details main-content">
      <img class="product-details--image" :src="image">
      <div class="product-details--bar">
        <div class="product-details--info-wrapper">
          <h2 class="product-details--name">{{ details[0].name }}</h2>
          <div class="product-details--description">{{ details[0].descLong }}</div>
        </div>
        <div class="product-details--button-wrapper">
          <button class="product-details--add-button" @click="addMore">Add to Cart</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../store";
import Cart from "@/components/Cart.vue";
import bigImage from "../assets/images/product-big.jpg"

export default {
  name: "productDetails",
  components: {
    Cart
  },
  created() {
    this.$store.dispatch("fetchData");

    if(!this.loading) {
      this.details = this.config.filter(product => product.id == this.id);
    }
  },
  data() {
    return {
      image: bigImage,
      id: this.$route.params.id,
      details: [{
        name: "",
        descLong: "",
      }],
    }
  },
  computed: {
    loading() {
      return store.state.loading;
    },
    config() {
      return store.state.config['products'];
    },
  },
  watch: {
    loading: function() {
      this.details = this.config.filter(product => product.id == this.id);
     }
  },
  methods: {
    addMore(){
      store.commit('addProductToCart', this.details[0]);
    }
  }
};
</script>

<style scoped>
.product-details--image {
  width: 100%;
  height: auto;
}

.product-details--bar {
  display: flex;
  flex-flow: row wrap;
  float: left;
  position: relative;
  width: 100%;
  background: #155bcc;
  color: #fff;
  padding: 50px 60px;
  box-sizing: border-box;
}

.product-details--bar h2 {
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: 500;
}

.product-details--info-wrapper {
  display: block;
  float: left;
  position: relative;
  width: 60%;
  padding-right: 30px;
  box-sizing: border-box;
}

.product-details--description {
  color: #c5d6f2;
  line-height: 130%;
  font-size: 13px;
}

.product-details--button-wrapper {
  display: flex;
  position: relative;
  width: 40%;
  align-items: center;
  justify-content: center;
}

.product-details--add-button {
  display: block;
  right: 0;
  position: absolute;
  background-color: #2fda7f;
  color: #fff;
  width: 100%;
  max-width: 250px;
  box-sizing: border-box;
  padding: 15px 0;
  border: 0;
  font-size: 18px;
  font-weight: 600;
  transition: background-color 0.5s ease;
}

.product-details--add-button:hover {
  background-color: #2197a8;
}


@media all and (max-width: 980px) {
  .product-details--info-wrapper {
    width: 100%;
  }

  .product-details--button-wrapper {
    width: 100%;
    display: block;
    float: left;
    margin-top: 20px;
  }

  .product-details--add-button {
    position: relative;
    max-width: 100%;
    right: auto;
  }
}

@media all and (max-width: 780px) {
  .product-details--bar {
    padding: 20px;
  }
}
</style>