<script setup lang="ts">
import { ref } from 'vue';
import { Button } from '@/components/ui/button';

const count = ref(0);
function increment() {
	count.value++;
}
function decrement() {
	count.value--;
}
</script>

<template>
	<h1>Counter</h1>
	<p>Current Count: {{ count }}</p>
	<Button @click="increment">Increment</Button>
	<Button @click="decrement">Decrement</Button>
</template>