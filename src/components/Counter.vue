<script setup lang="ts">
import { Button } from '@/components/ui/button';
import { useCounter } from '@/composables/useCounter';

const { count, increment, decrement } = useCounter();
</script>

<template>
  <section aria-labelledby="counter-heading">
    <h1 id="counter-heading" class="text-xl font-semibold">Counter</h1>
    <p id="counter-value" class="mt-2" aria-live="polite" aria-atomic="true">
      Current Count: <output>{{ count }}</output>
    </p>
    <div class="flex gap-4 mt-4" role="group" aria-label="Counter controls">
      <Button
        type="button"
        variant="default"
        aria-controls="counter-value"
        @click="increment"
      >
        Increment
      </Button>
      <Button
        type="button"
        variant="secondary"
        aria-controls="counter-value"
        @click="decrement"
      >
        Decrement
      </Button>
    </div>
  </section>
</template>