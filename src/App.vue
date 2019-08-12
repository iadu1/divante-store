<template>
  <div id="app">
    <div id="nav">
      <router-link class="logo" to="/">
        LOGO
      </router-link>
      <input :style="{ 'background-image' : `url(${searchImage})`}" class="search" value="" type="text">
      <div class="menu">
        <a class="menu--burger show-on-mobile" @click="openFlyout()"><font-awesome-icon icon="bars"></font-awesome-icon></a>
        <router-link class="menu--link hide-on-mobile" to="/">Home</router-link>
        <router-link class="menu--link hide-on-mobile" to="/about">About</router-link>
        <router-link class="menu--link hide-on-mobile" to="/contact">Contact</router-link>
      </div>
    </div>
    <transition name="fade">
      <router-view />
    </transition>
      <div v-show="flyout" class="mobile-flyout">
          <div @click="closeFlyout()" class="mobile-flyout--close"><font-awesome-icon icon="times"></font-awesome-icon></div>
          <uL>
            <li><router-link v-on:click.native="closeFlyout()" to="/">Home</router-link></li>
            <li><router-link v-on:click.native="closeFlyout()" to="/about">About</router-link></li>
            <li><router-link v-on:click.native="closeFlyout()" to="/contact">Contact</router-link></li>
          </ul>
      </div>
  </div>
</template>
<script>
import searchImage from "./assets/images/search.png"

export default {
  name: "app",
  data() {
    return {
      searchImage: searchImage,
      flyout: false,
    }
  },
  methods: {
    openFlyout(){
      this.flyout = true;
    },
    closeFlyout(){
      this.flyout = false;
    }
  }
};
</script>
<style>
@import "./assets/styles/main.css";

#app {
  background: #fafafa;
  display: block;
  position: relative;
  width: 95%;
  min-height: 100%;
  margin: 0 auto;
}

#nav {
  height: 115px;
  line-height: 115px;
  border-bottom: 1px solid #d6d6d6;
  padding:0 60px;
}

#nav .logo {
  display: block;
  float: left;
  position: relative;
  height: 115px;
  line-height: 115px;
  font-size: 25px;
  font-weight: 300;
  color: #919191;
  text-decoration: none;
}

#nav .menu {
  display: block;
  float: right;
}

#nav .menu a {
  float:left;
  color: #424242;
  font-weight: 400;
  padding: 0 30px;
  text-decoration: none;
}

#nav .menu a.router-link-exact-active {
  color: #164fac;
}

.wrapper {
  display: flex;
  flex-flow: row wrap;
}

.left-sidebar {
  width: 27%;
  padding: 60px;
  box-sizing: border-box;
}

.main-content {
  width: 73%;
  min-height: 500px;
  padding: 60px 60px 60px 0;
  box-sizing: border-box;
}

.search {
  display: block;
  float: right;
  height: 115px;
  line-height: 115px;
  width: 115px;
  text-align: center;
  box-sizing: border-box;
  background: #f5f5f5;
  border: 0;
  margin-left: 30px;
  background-size: 15%;
  background-position: center center;
  background-repeat: no-repeat;
}

.mobile-flyout {
  display: block;
  width: 100%;
  height: 100%;
  background: #fff;
  z-index: 99999;
  position: fixed;
  top:0;
  left:0;
}

.mobile-flyout ul {
  display: block;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%);
  width: 80%;
  max-width: 600px;
}

.mobile-flyout ul > li > a {
  display: block;
  height: 60px;
  line-height: 60px;
  text-align: left;
  text-decoration: none;
  font-size: 19px;
  color: #424242;
  font-weight: 400;
  border-bottom: 1px solid #d6d6d6;
}

.mobile-flyout ul > li:last-child > a {
  border-bottom: 0;
}

.mobile-flyout ul > li > a.router-link-exact-active {
  color: #164fac;
}


.mobile-flyout--close {
  display: block;
  position: absolute;
  cursor: pointer;
  right: 60px;
  height: 115x;
  text-align: center;
  line-height: 115px;
  padding: 0 30px;
  font-size: 25px;
  color: #424242;
}

.menu--burger {
  font-size: 22px;
  color: #424242;
  cursor: pointer;
}

.hide-on-mobile {
  display: block;
}

.show-on-mobile {
  display: none;
}

.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .3s;
}

.fade-enter-active {
  transition-delay: .3s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}

@media all and (max-width: 1690px) {
    .main-content {
      width: 60%;
    }

    .left-sidebar {
      width: 40%;
    }
}

@media all and (max-width: 980px) {
    #app {
      width: 100%;
    }

    .main-content {
      width: 100%;
      padding: 0px 60px 60px 60px;
    }

    .left-sidebar {
      width: 100%;
    }

    #nav .menu {
      display: block;
    }

    .hide-on-mobile {
      display: none;
    }

    .show-on-mobile {
      display: block;
    }

    .search {
      display: none;
    }
}


@media all and (max-width: 780px) {
    #nav {
      padding: 0 20px;
    }

    .main-content {
      padding: 0px 20px 20px 20px;
    }

    .left-sidebar {
      padding: 20px;
    }

    .mobile-flyout--close {
      right: 20px;
    }

}
</style>
