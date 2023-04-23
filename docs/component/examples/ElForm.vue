<template>	
<!-- 	<p>样式逻辑：size一键调整大小、inline调整排列、label-position调整标签位置</p> -->	
 <el-form ref="form" size= "small" label-width="80px" style="border:1px solid #C4E1C5;padding:20px;" :inline="false" label-position="top">
		<el-form-item label="输入框Input">
			<el-input v-model="user.name"></el-input>
		</el-form-item>
		<el-form-item label="选择器Select">
			<el-select v-model="user.classId">
				<el-option label="1班" value="1001"></el-option>
				<el-option label="2班" value="1002"></el-option>
			</el-select>
		</el-form-item>
		<el-form-item label="单选框Radio">
			<el-radio v-model="radio" label="1">选项1</el-radio>
			<el-radio v-model="radio" label="2">选项2</el-radio>
		</el-form-item>
		<el-form-item>
			<el-button type="primary">提交</el-button>
			<el-button>取消</el-button>
		</el-form-item>
	</el-form>
</template>

<script>
	export default{
		data(){
			return{
				user :{
					name: '',
					classId: '',
				},
        radio: "1",
			}
		}
	}
</script>

<style>
</style>
