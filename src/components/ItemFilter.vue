<script setup lang="ts">
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useFilter } from '@/composables/useFilter';

const { searchQuery, resetSearch } = useFilter([]);
</script>


<template>
  <form
    class="flex w-full max-w-sm items-center space-x-2"
    role="search"
    @submit.prevent
  >
    <label for="task-search" class="sr-only">Search tasks</label>
    <Input
      id="task-search"
      v-model="searchQuery"
      type="search"
      placeholder="Search tasks..."
      aria-describedby="task-search-help task-results-status"
      aria-controls="task-results"
    />
    <span id="task-search-help" class="sr-only">
      Enter at least two characters to filter tasks by name or description.
    </span>
    <Button
      type="button"
      :disabled="!searchQuery"
      variant="secondary"
      aria-controls="task-search task-results"
      @click="resetSearch"
    >
      Reset
    </Button>
  </form>
</template>