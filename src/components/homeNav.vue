<template>
  <div class="header">
    <div class="topLeft">
      <svg class="icon" aria-hidden="true" style="padding-top: 0.15rem;">
        <use xlink:href="#icon-liebiao"></use>
      </svg>
    </div>
    <div class="topCenter">
      <span class="topBtn">我的</span>
      <span class="topBtn active">发现</span>
      <span class="topBtn">云村</span>
      <span class="topBtn">视频</span>
    </div>
    <div class="topRight">
      <svg class="icon" aria-hidden="true" style="padding-top: 0.2rem;">
        <use xlink:href="#icon-sousuo"></use>
      </svg>
    </div>
  </div>
</template>

<style lang="less" scoped>
.header{
    .topCenter{
        width: 6rem;
        display: flex;
        justify-content: space-between;
        .active {
            font-weight: 800;
        }
    }
}
</style>