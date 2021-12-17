<template>
  <div class="container">
    <div class="topLeft">
      <svg class="liebiao" aria-hidden="true">
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
      <svg class="sousuo" aria-hidden="true">
        <use xlink:href="#icon-sousuo"></use>
      </svg>
    </div>
  </div>
</template>

<style lang="less" scoped>
.container{
    height: 1.6rem;
    display: flex;
    justify-content: space-between;
    padding: 0.3rem;
    .topCenter{
        width: 6rem;
        display: flex;
        justify-content: space-between;
        .active {
            font-weight: 800;
        }
    }

    .liebiao{
        width: 0.8rem;
        height: 0.8rem;
    }

    .sousuo{
        width: 0.6rem;
        height: 0.6rem;
    }
}
</style>