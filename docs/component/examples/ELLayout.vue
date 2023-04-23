<template>
	<el-row>
	  <el-col class="col-color" :span="8">1</el-col>
	  <el-col class="col-color" :span="8">2</el-col>
	  <el-col class="col-color" :span="8">3</el-col>
	</el-row>
	
	<el-row :gutter="20" type="flex" justify="center">
	  <el-col class="col-color" :span="3">居中</el-col>
	  <el-col class="col-color" :span="3">1</el-col>
	  <el-col class="col-color" :span="3">2</el-col>
	  <el-col class="col-color" :span="3">3</el-col>
	</el-row>
	
	<el-row :gutter="10">
	  <el-col class="col-color" :xs="8" :sm="6" :md="4" :lg="3">响应式</el-col>
	  <el-col class="col-color" :xs="4" :sm="6" :md="8" :lg="9">1</el-col>
	  <el-col class="col-color" :xs="4" :sm="6" :md="8" :lg="9">2</el-col>
	  <el-col class="col-color" :xs="8" :sm="6" :md="4" :lg="3">3</el-col>
	</el-row>
	
	<el-container>
	  <el-aside width="150px">Aside</el-aside>
	  <el-container>
	    <el-header>Header</el-header>
	    <el-main>Main</el-main>
	    <el-footer>Footer</el-footer>
	  </el-container>
	</el-container>
</template>

<script>
	export default{
		setup(){
			console.log("ok!")
		},
		beforeMount(){
			let domList = document.getElementsByClassName("col-color");
			let colorList= [];
			let randomColor = [];
			for (let i = 0; i < domList.length; i++) {
				  randomColor = Math.floor(Math.random() * 16777215).toString(16);
					colorList[i]= "#" + randomColor;
			}
			for (let i = 0; i < domList.length; i++) {
					domList[i].style.backgroundColor = colorList[i];
			}
		}
	}
	
</script>

<style>

</style>
