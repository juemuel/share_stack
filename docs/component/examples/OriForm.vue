<template>
	<form action="" method="get" class="form-example">
	  <div class="form-example">
	    <label for="name">Enter your name: </label>
	    <input type="text" name="name" id="name" required />
	  </div>
	  <div class="form-example">
	    <label for="email">Enter your email: </label>
	    <input type="email" name="email" id="email" required />
	  </div>
	  <div class="form-example">
	    <input type="submit" value="Subscribe!" />
	  </div>
	</form>
</template>

<script>

</script>

<style>
	form {  
	  border-radius: 10px;  
	  border: 1px solid #ccc;  
	}
	form.form-example {
	  display: table;
	}
	div.form-example {
	  display: table-row;
	}
	label,input {
	  /* display: table-cell; */
	  margin-bottom: 10px;
	}
	label {
	  padding-right: 10px;
	}
</style>
