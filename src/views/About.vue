<template>
  <div class="about">
    <div class="about--content">
      <font-awesome-icon icon="address-book"></font-awesome-icon>
      <h1>About</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "about"
};
</script>

<style scoped>
.about {
  padding: 150px 0;
}

.about--content {
  display: block;
  position: relative;
  width: 100%;
  max-width: 850px;
  background: #fff;
  padding: 150px;
  margin: 0 auto;
  box-sizing: border-box;
  line-height: 1.5;
}

.about--content p {
  font-size: 18px;
  text-align: justify;
}

.about--content svg {
    display: block;
    width: 50px;
    height: 50px;
    margin: 0 auto 30px auto;
    color: #155bcc;
}


@media all and (max-width: 980px) {
  .about {
    padding: 50px 0;
  }

  .about--content {
    padding: 50px;
  }
}
</style>
