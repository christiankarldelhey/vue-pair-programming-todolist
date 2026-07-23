<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  text: string;
  query?: string | null;
}>();

const parts = computed(() => {
  if (!props.query || props.query.length < 2) {
    return [props.text];
  }

  const escapedQuery = props.query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const pattern = new RegExp(`(${escapedQuery})`, 'gi');

  return props.text.split(pattern).filter(Boolean);
});

function isMatch(part: string): boolean {
  return part.toLowerCase() === props.query?.toLowerCase();
}
</script>

<template>
  <span>
    <template v-for="(part, index) in parts" :key="index">
      <mark
        v-if="isMatch(part)"
        class="bg-transparent font-bold text-primary"
      >
        {{ part }}
      </mark>
      <span v-else>{{ part }}</span>
    </template>
  </span>
</template>
