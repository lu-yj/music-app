<template>
	<header>
		<svg class="icon" aria-hidden="true">
			<use xlink:href="#icon-liebiao"></use>
		</svg>
		<div class="topCenter">
			<span class="topBtn" @click="$router.push('/me')">我的</span>
			<span class="topBtn active">发现</span>
			<span class="topBtn">云村</span>
			<span class="topBtn">视频</span>
		</div>
		<svg class="icon" aria-hidden="true" @click="$router.push('/search')">
			<use xlink:href="#icon-sousuo"></use>
		</svg>
	</header>
</template>

<style lang="less" scoped>
header{
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