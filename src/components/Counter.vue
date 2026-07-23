<template>
	<h1>Counter</h1>
	<p>Current Count: {{ count }}</p>
	<button @click="increment">Increment</button>
	<button @click="decrement">Decrement</button>
</template>

<script setup lang="ts">
import { ref } from 'vue';
const count = ref(0);
function increment() {
	count.value++;
}
function decrement() {
	count.value--;
}
</script>

<style scoped lang="scss">
h1 {
	font-size: 2em;
	margin-bottom: 10px;
}

button {
	margin: 5px;
	padding: 10px;
	font-size: 1em;
}
</style>