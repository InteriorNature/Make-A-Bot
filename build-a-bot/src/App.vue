<template>
   <div id="app">
    <header>
      <nav id="menuheader">
        <ul class="site-nav">
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'Home'}" exact>
              <img class="logo" src="./assets/build-a-bot-logo.png" />
              Build-A-Bot
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'Build'}" exact>
              Build
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'BrowseParts'}" exact>
              Parts
            </router-link>
          </li>
          <li class="nav-item cart">
            <router-link class="nav-link" to="/cart" exact>
              Cart
            </router-link>
            <div class="cart-items">
               {{cart.length}}
            </div>
          </li>
        </ul>
      </nav>
    </header>
    <div class="container">
      <aside class="aside">
        <router-view name="sidebar"/>
      </aside>
      <main>
        <!-- <HomePage/> -->
        <!-- <RobotBuilder/> -->
        <router-view/>
      </main>
    </div>
 </div>
</template>

<script>
export default {
  name: 'app',
  computed: {
    cart () {
      return this.$store.state.robots.cart;
    },
  },
};
</script>

<style>
body {
  background: linear-gradient(to bottom, #555, #999);
  background-attachment: fixed;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
header {
  background-color: #999;
  max-height: 60px;
  margin: 20px 20px;
}

ul {
  padding: 3px;
  display: flex;
  flex-wrap: nowrap;
}

.logo {
  vertical-align: middle;
  height: 30px;
}

.nav-item {
  list-style: none;
  display: inline-block;
  padding: 5px 10px;
  font-size: 22px;
  border-right: 1px solid #bbb;
}

.cart {
  position: relative;
  margin-left: auto;
  border-right: none;
}
.nav-link {
  text-decoration: none;
  color: inherit;
}
.router-link-active {
  color: white;
}

.cart-items {
  position: absolute;
  top: -5px;
  right: -9px;
  font-size: 18px;
  width: 20px;
  text-align: center;
  display: inline-block;
  border-radius: 100px;
  background-color: mediumseagreen;
}

.change .bar1 {
    -webkit-transform: rotate(-45deg) translate(-9px, 6px);
    transform: rotate(-45deg) translate(-9px, 6px);
}

.change .bar2 {opacity: 0;}

.change .bar3 {
    -webkit-transform: rotate(45deg) translate(-8px, -8px);
    transform: rotate(45deg) translate(-8px, -8px);
}
.container {
  display: flex;
  flex-direction: row;
  /*margin: 10px 0;*/
  /*justify-content: left;*/
  margin: 0px 20px;
}
.aside {
  padding: 30px;
  background-color: #aaa;
  max-width: 110px;
}

main {
  padding: 30px;
  background-color: white;
  width: 85vw;
}

@media only screen and (max-width: 420px) {
  header {
    margin: 20px 5px;
  } 
  .nav-item {
    font-size: 18px;
    padding: 5px 5px;
  }
  .logo {
    height: 20px;
  }
  .cart {
    padding: 5px 10px;
  }
  .container {
     margin: 0px 5px;
  }
  main {
    padding: 5px;
    width: 100%;
  }
}

</style>
