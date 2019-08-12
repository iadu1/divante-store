<template>
  <div class="contact">
    <div class="contact--content">
      <font-awesome-icon icon="address-book"></font-awesome-icon>
      <h1>contact</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "contact"
};
</script>

<style scoped>
.contact {
  padding: 150px 0;
}

.contact--content {
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

.contact--content p {
  font-size: 18px;
  text-align: justify;
}

.contact--content svg {
    display: block;
    width: 50px;
    height: 50px;
    margin: 0 auto 30px auto;
    color: #155bcc;
}

@media all and (max-width: 980px) {
  .contact {
    padding: 50px 0;
  }

  .contact--content {
    padding: 50px;
  }
}
</style>
