<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { useCounter } from '@/composables/useCounter';

const { count, increment, decrement } = useCounter();
</script>

<template>
	<p>Current Count: {{ count }}</p>
	<div class="flex gap-4 mt-4">
		<Button variant="default" @click="increment">Increment</Button>
		<Button variant="secondary" @click="decrement">Decrement</Button>
	</div>
</template>