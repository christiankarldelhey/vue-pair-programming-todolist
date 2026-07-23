import { ref, computed } from 'vue';
import { refDebounced } from '@vueuse/core';

export function useFilter(architectures: any[]) {
  const searchQuery = ref('');
  const debouncedSearchQuery = refDebounced(searchQuery, 300);

  const filteredArchitectures = computed(() => {
    if (!debouncedSearchQuery.value || debouncedSearchQuery.value.length < 3) {
      return architectures;
    }
    const query = debouncedSearchQuery.value.toLowerCase();
    return architectures.filter(architecture =>
      architecture.name.toLowerCase().includes(query) ||
      architecture.description.toLowerCase().includes(query)
    );
  });

  return {
    searchQuery,
    debouncedSearchQuery,
    filteredArchitectures
  };
}