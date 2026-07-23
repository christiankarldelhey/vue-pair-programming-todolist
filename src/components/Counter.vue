<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { Button } from '@/components/ui/button';
import { useCounter } from '@/composables/useCounter';

const { count, increment, decrement } = useCounter();
const { t } = useI18n();
</script>

<template>
  <section aria-labelledby="counter-heading">
    <h1 id="counter-heading" class="text-xl font-semibold">{{ t('counter.title') }}</h1>
    <p id="counter-value" class="mt-2" aria-live="polite" aria-atomic="true">
      {{ t('counter.currentCount') }} <output>{{ count }}</output>
    </p>
    <div class="flex gap-4 mt-4" role="group" :aria-label="t('counter.controlsLabel')">
      <Button
        type="button"
        variant="default"
        aria-controls="counter-value"
        @click="increment"
      >
        {{ t('counter.increment') }}
      </Button>
      <Button
        type="button"
        variant="secondary"
        aria-controls="counter-value"
        @click="decrement"
      >
        {{ t('counter.decrement') }}
      </Button>
    </div>
  </section>
</template>