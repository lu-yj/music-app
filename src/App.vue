<template>

  <router-view/>
</template>

<style lang="less">
// 取消所有盒模型的内外边距，并将边框计入盒模型宽高的计算
*{
  margin: 0; 
  padding: 0;
  box-sizing: border-box;
  font-family: '微软雅黑';
}

</style>
