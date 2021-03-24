<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Catalogo Replica</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 20px;
}

#nav a {
  font-weight: bold;
}

#nav a.router-link-exact-active {
  color: #614389;
}
</style>
