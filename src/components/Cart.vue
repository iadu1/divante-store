<template>
  <div class="cart">
    <div class="cart--contact">
      <h2><font-awesome-icon icon="address-book"></font-awesome-icon> Contact</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor nulla pariatur.</p>
    </div>
    <div class="cart--products">
      <h2><font-awesome-icon icon="shopping-cart"></font-awesome-icon> Cart ( {{ cart.length }} ) <div @click="clearCart()" class="cart--clear-cart"><font-awesome-icon icon="trash"></font-awesome-icon> Clear cart</div></h2>
      <div class="cart--box">
        <div class="cart--empty" v-if="cart.length === 0">
          Cart is empty
        </div>
        <div class="cart--product" v-else v-for="(product, index) in groupedCart" :key="index">
          <span class="cart--product-count">{{ product.count }}</span> {{ product.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import store from "../store";
import config from "../products.js";

export default {
  name: "cart",
  computed: {
    cart() {
      return store.state.cart;
    },
    groupedCart() {
      return store.state.groupedCart;
    }
  },
  methods: {
    clearCart() {
      store.commit('clearCart');
    }
  }
};
</script>
<style scoped>
.cart {
  display:block;
  float:left;
  position:relative;
  box-sizing: border-box;
  width:100%;
  padding: 30px;
  background: #155bcc;
  color: #fff;
}

.cart h2 {
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: 500;
}

.cart--contact {
  display: block;
  float: left;
  position: relative;
  width: 100%;
  margin-bottom: 30px;
}

.cart--contact p {
  color: #c5d6f2;
  line-height: 130%;
  font-size: 13px;
}

.cart--empty {
  display: block;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%);
  color: #c5d6f2;
}

.cart--box {
  display: block;
  float: left;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  min-height: 165px;
  padding: 15px;
  border: 1px dashed #c5d6f2;
  border-radius: 5px;
}

.cart--clear-cart {
  display: block;
  float: right;
  position: relative;
  cursor: pointer;
}

.cart--product {
  display: block;
  float: left;
  position: relative;
  box-sizing: border-box;
  width: 100%;
  padding: 10px;
  background: #164fac;
  color: #fff;
  margin-bottom: 5px;
}

.cart--product:last-of-type {
  margin-bottom: 0;
}

.cart--product-count {
  display:inline-block;
  width: 20px;
  margin-right: 10px;
  color: #2fda7f;
  font-weight: 500;
  text-align: center;
}
</style>
