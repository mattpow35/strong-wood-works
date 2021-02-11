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
        <li class="nav-item">
          <router-link class="nav-link" to="/">Home <span class="sr-only">(current)</span></router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/products">Products</router-link>
        </li>
        <li class="nav-item active">
          <router-link class="nav-link " to="/order">Get a Quote</router-link>
        </li>
      </ul>

    </div>
  </nav>
</header>

<div id="orderForm">


  <form>
  <h1>Place an Order</h1>

	<div class="form-group"> <!-- Full Name -->
		<label for="full_name_id" class="control-label">Full Name</label>
		<input type="text" class="form-control" id="full_name_id" name="full_name" placeholder="John Deer">
	</div>

	<div class="form-group"> <!-- Street 1 -->
		<label for="street1_id" class="control-label">Street Address 1</label>
		<input type="text" class="form-control" id="street1_id" name="street1" placeholder="Street address, P.O. box, company name, c/o">
	</div>

	<div class="form-group"> <!-- Street 2 -->
		<label for="street2_id" class="control-label">Street Address 2</label>
		<input type="text" class="form-control" id="street2_id" name="street2" placeholder="Apartment, suite, unit, building, floor, etc.">
	</div>

	<div class="form-group"> <!-- City-->
		<label for="city_id" class="control-label">City</label>
		<input type="text" class="form-control" id="city_id" name="city" placeholder="Smallville">
	</div>

	<div class="form-group"> <!-- State Button -->
		<label for="state_id" class="control-label">State</label>
		<select class="form-control" id="state_id">
			<option value="AL">Alabama</option>
			<option value="AK">Alaska</option>
			<option value="AZ">Arizona</option>
			<option value="AR">Arkansas</option>
			<option value="CA">California</option>
			<option value="CO">Colorado</option>
			<option value="CT">Connecticut</option>
			<option value="DE">Delaware</option>
			<option value="DC">District Of Columbia</option>
			<option value="FL">Florida</option>
			<option value="GA">Georgia</option>
			<option value="HI">Hawaii</option>
			<option value="ID">Idaho</option>
			<option value="IL">Illinois</option>
			<option value="IN">Indiana</option>
			<option value="IA">Iowa</option>
			<option value="KS">Kansas</option>
			<option value="KY">Kentucky</option>
			<option value="LA">Louisiana</option>
			<option value="ME">Maine</option>
			<option value="MD">Maryland</option>
			<option value="MA">Massachusetts</option>
			<option value="MI">Michigan</option>
			<option value="MN">Minnesota</option>
			<option value="MS">Mississippi</option>
			<option value="MO">Missouri</option>
			<option value="MT">Montana</option>
			<option value="NE">Nebraska</option>
			<option value="NV">Nevada</option>
			<option value="NH">New Hampshire</option>
			<option value="NJ">New Jersey</option>
			<option value="NM">New Mexico</option>
			<option value="NY">New York</option>
			<option value="NC">North Carolina</option>
			<option value="ND">North Dakota</option>
			<option value="OH">Ohio</option>
			<option value="OK">Oklahoma</option>
			<option value="OR">Oregon</option>
			<option value="PA">Pennsylvania</option>
			<option value="RI">Rhode Island</option>
			<option value="SC">South Carolina</option>
			<option value="SD">South Dakota</option>
			<option value="TN">Tennessee</option>
			<option value="TX">Texas</option>
			<option value="UT">Utah</option>
			<option value="VT">Vermont</option>
			<option value="VA">Virginia</option>
			<option value="WA">Washington</option>
			<option value="WV">West Virginia</option>
			<option value="WI">Wisconsin</option>
			<option value="WY">Wyoming</option>
		</select>
	</div>



	<div class="form-group"> <!-- Zip Code-->
		<label for="zip_id" class="control-label">Zip Code</label>
		<input type="text" class="form-control" id="zip_id" name="zip" placeholder="#####">
	</div>

  <div class="form-group"> <!-- Item Button -->
		<label for="product_id" class="control-label">Product</label>
		<select class="form-control" id="product_id">
			<option value="patioBench">Wooden Bench</option>
      <option value="table">Dining Table</option>
      <option value="board">Charcuterie Board</option>

		</select>
	</div>

  <div class="form-group"> <!-- Cooments-->
		<label for="comment_id" class="control-label">Comments or Requests</label>
		<input type="text" class="form-control" id="comment_id" name="comment">
	</div>


	<div class="form-group"> <!-- Submit Button -->
		<button type="submit" class="btn btn-primary">Buy!</button>
	</div>

</form>
</div>


<h1>The Admin Page!</h1>
    <div class="heading">
      <div class="circle">1</div>
      <h2>Add an Item</h2>
    </div>
    <div class="add">
      <div class="form">
        <input v-model="name" placeholder="Name">
        <p></p>
        <input type="file" name="photo" @change="fileChanged">
        <button @click="upload">Upload</button>
      </div>
      <div class="upload" v-if="addProduct">
        <h2>{{addProduct.name}}</h2>
        <img :src="addProduct.path" />
      </div>
    </div>

</div>







</template>

<script>
import axios from 'axios';
export default {
  name: 'Admin',
  data() {
    return {
      name: "",
      description: "",
      date: "",
      file: null,
      addProduct: null,
      products: [],
      findTitle: "",
      findItem: null,
    }
  },
  computed: {

  },
  created() {

  },
  methods: {
    async upload() {

      try {
        const formData = new FormData();
        formData.append('photo', this.file, this.file.name)
        let r1 = await axios.post('/api/photos', formData);
        let r2 = await axios.post('/api/products', {
          name: this.name,
          path: r1.data.path,
          description: this.name,
        });
        this.addProduct = r2.data;
      } catch (error) {
      console.log("error in async upload");

        alert("Unable to upload photo, file may be too large or wrong file type.");
      }
    },
    fileChanged(event) {
      this.file = event.target.files[0]
    },


  }
}
</script>



<style scoped>


.image h2 {
  font-style: italic;
  font-size: 1em;
}

.heading {
  display: flex;
  margin-bottom: 20px;
  margin-top: 20px;
}

p {
font-size: 12;
}

.heading h2 {
  margin-top: 8px;
  margin-left: 10px;
}

.add,
.edit {
display: flex;
flex-direction: column;
}

.circle {
  border-radius: 50%;
  width: 18px;
  height: 18px;
  padding: 8px;
  background: #333;
  color: #fff;
  text-align: center
}

/* Form */
input,
textarea,
select,
button {
  font-family: 'Montserrat', sans-serif;
  font-size: 1em;
  display: flex;

}

.form {
  margin-right: 50px;
  display: flex;
  flex-direction: row;
}

/* Uploaded images */
.upload h2 {
  margin: 0px;
}

.upload img {
  max-width: 300px;
}

/* Suggestions */
.suggestions {
  width: 200px;
  border: 1px solid #ccc;
}

.suggestion {
  min-height: 20px;
}

.suggestion:hover {
  background-color: #5BDEFF;
  color: #fff;
}

.textarea {


  height: 150px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  font-size: 16px;


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

#orderForm {
  padding-top: 60px;
  margin: 20px;
  width: 50%;
}

</style>
