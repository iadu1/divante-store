<template>
  <div class="product">
    <router-link :to="`/details/${id}/`">
      <div class="product--image-container">
        <img v-if="image !== ''" :src="image">
      </div>
    </router-link>
      <h2 class="product--name">{{ name }}</h2>
      <div class="product--description">
        {{ descShort }}
      </div>
  </div>
</template>

<script>
import store from "../store";
import productImage from "../assets/images/product.jpg"

export default {
  name: "product",
  props: {
      id: Number,
      name: String,
      descShort: String,
      descLong: String,
      price: Number,
  },
  data() {
      return {
        image: productImage
      }
  }
};
</script>
<style scoped>
.product {
  width: 100%;
  background-color: #fff;
}

.product--image-container img {
  width: 100%;
  height: auto;
  margin-bottom: 20px;
}

.product--name {
  padding: 0 20px;
  text-decoration: none;
  color: #424242;
  font-weight: 500;
  font-size: 16px;
  line-height: 130%;
}

.product--description {
  padding: 20px;
  color: #858585;
  font-size: 13px;
}
</style>