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
	<p>Current Count: {{ count }}</p>
	<div class="flex gap-4 mt-4">
		<Button variant="default" @click="increment">Increment</Button>
		<Button variant="secondary" @click="decrement">Decrement</Button>
	</div>
</template>