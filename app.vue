<template>
	<div id="app">
        <p>select</p>
		<router-view></router-view>
        <img src="./static/ante-body-pic.jpg" alt="">
	</div>
</template>

<script>
	export default {
        name: 'app'
    }
</script>

<style lang='scss'>
    $font-stack: 'Avenir', Helvetica, Arial, sans-serif;
    $primary-color: #2c3e50;
	body {
		margin: 0;
		padding: 0;
	}
	#app {
		font-family: $font-stack;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: $primary-color;
		margin-top: 60px;
	}
    
</style>