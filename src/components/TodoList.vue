<script setup lang="ts">
import architectures from '../data/architectures.json';
</script>

<template>
	<h1>TodoList</h1>
	<ol>
		<li v-for="architecture in architectures" :key="architecture.id">
			{{ architecture.name }}
		</li>
	</ol>
</template>

<style scoped lang="scss">
h1 {
	font-size: 2em;
	margin-bottom: 10px;
}
</style>