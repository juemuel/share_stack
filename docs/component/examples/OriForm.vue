<template>
	<form action="" method="get" class="form-example">
		<label for="firstname">姓：</label><input type="text" name="firstname" id="firstname" required/><br />
		<label for="lastname">名：</label><input type="text" name="lastname" id="lastname" required/><br />
		<label for="name">姓名：</label><input type="text" name="name" id="name" required />
		<label for="email">邮箱：</label><input type="email" name="email" id="email" required />
		<input type="submit" value="Subscribe!" />
	</form>
</template>

<script>
</script>

<style scoped>
	form {  
	  border-radius: 10px;  
	  border: 1px solid #ccc;  
	}

</style>
