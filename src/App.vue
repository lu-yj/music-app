<template>
  	<router-view/>
	<play-controller></play-controller>
</template>

<script>
import playController from "./components/playController.vue"

export default{
	components: {
		playController,
	},
}

</script>

<style lang="less">
// 取消所有盒模型的内外边距，并将边框计入盒模型宽高的计算
*{
	margin: 0; 
	padding: 0;
	box-sizing: border-box;
	font-family: '微软雅黑';
}
a{
  	color: black;
	text-decoration: none;
}
.icon{
	width: 0.8rem;
	height: 0.8rem;
}
.header, .footer{
	width: 10rem;
	height: 1.6rem;
	padding: 0.4rem;
	display: flex;
	justify-content: space-between;
	align-items: center;
	font-size: 0.5rem;
}
.footer{
	height: 1.8rem;
	position: absolute;
	left: 0;
	bottom: 0;
}
</style>
