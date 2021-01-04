<template>
<div id="app">
<nav class="navbar navbar-expand-lg navbar-light bg-light">
<router-link class="navbar-brand" to="/" >Strong Wood Works</router-link>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
  <span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="navbarNav">
  <ul class="navbar-nav">
    <li class="nav-item active">
      <router-link class="nav-link" to="/">Home <span class="sr-only">(current)</span></router-link>
    </li>
    <li class="nav-item">
    <router-link class="nav-link" to="/order">Place an Order</router-link>

    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Pricing</a>
    </li>

  </ul>
</div>
</nav>

  <div class="content">
    <router-view />
  </div>
</div>
</template>

<style>
body {
  margin: 0px;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.header {
  display: flex;
  justify-content: space-between;
  background: #D2B48C;
  padding: 10px 100px;
  color: white;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #fff;
}

#nav a.router-link-exact-active {
  color: #FFC300;
}

.content {
  padding: 10px 100px;
}
</style>
