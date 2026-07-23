import { computed } from 'vue';
import { refDebounced, useLocalStorage } from '@vueuse/core';
import type { Task } from '@/types/types';

export function useFilter(tasks: Task[]) {
  const searchQuery = useLocalStorage('searchQuery', '');
  const debouncedSearchQuery = refDebounced(searchQuery, 300);

  const filteredTasks = computed(() => {
    if (!debouncedSearchQuery.value || debouncedSearchQuery.value.length < 3) {
      return tasks;
    }
    const query = debouncedSearchQuery.value.toLowerCase();
    return tasks.filter(task =>
      task.name.toLowerCase().includes(query) ||
      task.description.toLowerCase().includes(query)
    );
  });

  return {
    searchQuery,
    debouncedSearchQuery,
    filteredTasks,
    resetSearch: () => {
      searchQuery.value = '';
    }
  };
}