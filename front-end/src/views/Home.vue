<template>
<div>

    <header>
      <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <a style="font-size: 30px;" class="navbar-brand" href="#">Strong Wood Works</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Products</a>
            </li>
            <li class="nav-item">
              <router-link class="nav-link " to="/order">Get a Quote</router-link>
            </li>
          </ul>

        </div>
      </nav>
    </header>

    <main role="main">

      <div id="myCarousel" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" class=""></li>
          <li data-target="#myCarousel" data-slide-to="1" class="active"></li>
          <li data-target="#myCarousel" data-slide-to="2" class=""></li>
        </ol>
        <div  class="carousel-inner">
          <div class="carousel-item">
            <img style="width: 100%; height: 100%;" class="first-slide" src="../assets/patio-benches.png" alt="First slide">
            <div class="container">

            </div>
          </div>
          <div style="width: 100%" class="carousel-item active">
            <img style="width: 100%; height: 100%;" class="second-slide" src="../assets/dining-table.png" alt="Second slide">
            <div class="container">

            </div>
          </div>
          <div class="carousel-item">
            <img style="width: 100%; height: 100%;" class="third-slide" src="../assets/cutting-board.png" alt="Third slide">
            <div class="container">

            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>


      <!-- Marketing messaging and featurettes
      ================================================== -->
      <!-- Wrap the rest of the page in another container to center all the content. -->

      <div class="container marketing">

        <!-- Three columns of text below the carousel -->
        <div id="about" class="row">
          <div class="col-lg-4">
            <img  class="rounded-circle center" src="../assets/profile-pic.png" alt="Generic placeholder image" width="180px" height="180px">
            <h2>About ME</h2>
            <p style="font-size: 15px">My name is Harrison Strong and I am the owner of Strong Wood Works......</p>
            <p><a class="btn btn-secondary" href="#" role="button">View details »</a></p>
          </div><!-- /.col-lg-4 -->

        </div><!-- /.row -->


        <!-- START THE FEATURETTES -->

        <hr class="featurette-divider">

        <div class="row featurette">
          <div class="col-md-7">
            <h2 class="featurette-heading">Custom Patio Furniture. <span class="text-muted"></span></h2>
            <p style="font-size: 15px" class="lead">Every bench is hand-crafted with kiln-dried Douglas Fir wood sent through a plainer and sanded smooth—stained/sealed with a transparent color of your choice.</p>
              <p><a class="btn btn-secondary" href="#" role="button">Explore Options »</a></p>
          </div>
          <div class="col-md-5">
            <img class="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="500x500" style="width: 500px; height: 500px;" src="../assets/patio-bench-featurette.png">
          </div>
        </div>

        <hr class="featurette-divider">

        <div class="row featurette">
          <div class="col-md-7 order-md-2">
            <h2 class="featurette-heading">Custom Live Edge Tables.<span style="font-size: 15px;" class="text-muted"> Crafted how you want it.</span></h2>
            <p style="font-size: 15px" class="lead">One of my specialties are live edge tables. I do dining room tables as well as coffee and end tables. With your choice of a hand selected slab of wood this item will be an eye catcher for all your guests.</p>
            <p><a class="btn btn-secondary" href="#" role="button">Explore Options »</a></p>
          </div>
          <div class="col-md-5 order-md-1">
            <img class="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="500x500" src="../assets/coffee-table.png" data-holder-rendered="true" style="width: 500px; height: 500px;">
          </div>
        </div>

        <hr class="featurette-divider">

        <div class="row featurette">
          <div class="col-md-7">
            <h2 class="featurette-heading">Charcuterie Boards<span class="text-muted"></span></h2>
            <p style="font-size: 15px" class="lead">I also make Charcuterie boards, a perfect addition to your kitchen esthetic. Crafted from your choice of hand selected wood.</p>
            <p><a class="btn btn-secondary" href="#" role="button">Explore Options »</a></p>
          </div>
          <div class="col-md-5">
            <img class="featurette-image img-fluid mx-auto" data-src="holder.js/500x500/auto" alt="500x500" src="../assets/chacuterie-board.png" data-holder-rendered="true" style="width: 500px; height: 500px;">
          </div>
        </div>

        <hr class="featurette-divider">

        <!-- /END THE FEATURETTES -->

      </div><!-- /.container -->


      <!-- FOOTER -->
      <footer class="container">

      </footer>
    </main>




</div>
</template>

<script>
// @ is an alias to /src
import axios from 'axios';

export default {
  name: 'Home',
  data() {
    return {
      items: [],

    }
  },
  created() {
    this.getItems();
  },
  methods: {
    async getItems() {
      try {
        let response = await axios.get("/api/items");
        this.items = response.data;
        return true;
      } catch (error) {
        alert(error);
      }
    },
    async deleteItem(item) {
      var password = prompt("Please enter the password to delete", "");
      if (password == "delete") {
        try {
          await axios.delete("/api/items/" + item._id);
          //this.findItem = null;
          this.getItems();
          return true;
        } catch (error) {
          alert(error);
        }
      } else {
        alert("Incorrect Password");
      }

    },
    async addLike(item) {
      try {
        await axios.put("/api/items/" + item._id, {
          likes: item.likes + 1,

        });
        this.getItems();
        return true;
      } catch (error) {
        alert(error);
      }
    },


  },
}
</script>

<style scoped>
.image h2 {
  font-style: italic;
}

.image p {

  font-size: 12px;
}

/* Masonry */
*,
*:before,
*:after {
  box-sizing: inherit;
}

.image-gallery {
  column-gap: 1.5em;
}

.image {
  margin: 0 0 1.5em;
  display: inline-block;
  width: 100%;
  border-style: solid;
  border-color: gray;
}

.image img {
  width: 100%;

}

#entry {
  font-size: 18px;
}






#titleCaption {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
flex-direction: column;
padding-left: 5px;

}


#likeAndDelete{
	display: flex;
	width: 100%;
	flex-direction: row;


}

#deleteButton {
   margin-left: auto;
   justify-self: flex-end;
}
#likes {
  font-size: 18px;
}



.carousel-inner{
  width:100%;
  max-height: 800px !important;
}

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

#about {
  display: flex;
  align-items: center;
  justify-content: center;
}

.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}


/* Masonry on large screens */
@media only screen and (min-width: 1024px) {
  .image-gallery {
    column-count: 2;
  }
}

/* Masonry on medium-sized screens */
@media only screen and (max-width: 1023px) and (min-width: 768px) {
  .image-gallery {
    column-count: 1;
  }
}

/* Masonry on small screens */
@media only screen and (max-width: 767px) and (min-width: 540px) {
  .image-gallery {
    column-count: 1;
  }
}
</style>
