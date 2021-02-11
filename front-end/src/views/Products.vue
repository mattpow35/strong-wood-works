<template>

<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="/docs/4.0/assets/img/favicons/favicon.ico">

    <title>Products</title>

    <link rel="canonical" href="https://getbootstrap.com/docs/4.0/examples/album/">

    <!-- Bootstrap core CSS -->
    <link href="../../dist/css/bootstrap.min.css" rel="stylesheet">

    <!-- Custom styles for this template -->
    <link href="album.css" rel="stylesheet">
  </head>

  <body>

  <header>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      <a style="font-size: 30px;" class="navbar-brand" href="#">Strong Wood Works</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarCollapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item active">
            <router-link class="nav-link" to="/products">Products<span class="sr-only">(current)</span></router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link " to="/order">Get a Quote</router-link>
          </li>
        </ul>

      </div>
    </nav>
  </header>

    <main role="main">

      <section class="jumbotron text-center">
        <div class="container">
          <h1 class="jumbotron-heading">Available Products</h1>
          <p class="lead text-muted">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don't simply skip over it entirely.</p>
          <p>
            <a href="#" class="btn btn-primary my-2">Main call to action</a>
            <a href="#" class="btn btn-secondary my-2">Secondary action</a>
          </p>
        </div>
      </section>

      <div class="album py-5 bg-light">
        <div class="container">

          <div class="row" >

            <div class="col-md-4" v-for="product in products" v-bind:key="product.id">
              <div class="card mb-4 box-shadow">
                <img class="card-img-top" data-src="holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail" alt="Thumbnail [100%x225]" style="height: 100%; width: 100%; display: block;" :src="product.path" data-holder-rendered="true">
                <div class="card-body">
                  <p class="card-text">{{product.name}}</p>
                  <div class="d-flex justify-content-between align-items-center">
                    <div class="btn-group">
                      <button type="button" class="btn btn-sm btn-outline-secondary">Get A Quote</button>
                    </div>
                    <small class="text-muted"></small>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </main>

    <footer class="text-muted">
      <div class="container">
        <p class="float-right">
          <a href="#">Back to top</a>
        </p>
        </div>
    </footer>


</body></html>

</template>

<script>

// @ is an alias to /src
import axios from 'axios';

export default {
  name: 'Products',
  data() {
    return {
      products: [],

    }
  },
  created() {
    this.getProducts();
  },
  methods: {
    async getProducts() {
      try {
        let response = await axios.get("/api/products");
        this.products = response.data;
        return true;
      } catch (error) {
        alert("Not getting products from api")
        alert(error);
      }
    },



  },
}





</script>

<style scoped>

.navbar {
padding: 0 1rem;
}

.navbar-nav {
font-size: 3rem;
padding: 10px;
}

.nav-item {
 padding-right: 30px;
}

.container {
  margin-top: 20px;
}


</style>
