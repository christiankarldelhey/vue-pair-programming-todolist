<script setup lang="ts">
import { computed } from 'vue';
import tasks from '../data/tasks.json';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useFilter } from '@/composables/useFilter';
import type { Task } from '@/types/types';
import ItemFilter from './ItemFilter.vue';

const { filteredTasks, debouncedSearchQuery } = useFilter(tasks as Task[]);

const resultCountLabel = computed(() => {
  const count = filteredTasks.value.length;
  return `${count} ${count === 1 ? 'task' : 'tasks'} found`;
});

function highlight(text: string): string {
  const query = debouncedSearchQuery.value;
  if (!query || query.length < 2) return text;
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`(${escaped})`, 'gi');
  return text.replace(regex, '<strong class="text-primary">$1</strong>');
}
</script>

<template>
  <section aria-labelledby="tasks-heading">
    <h1 id="tasks-heading" class="text-xl font-semibold">Tasks</h1>
    <ItemFilter class="mt-4" />
    <p id="task-results-status" class="sr-only" role="status" aria-live="polite">
      {{ resultCountLabel }}
    </p>
    <Table id="task-results" class="mt-4" aria-describedby="task-results-status">
      <caption class="sr-only">Task search results</caption>
      <TableHeader>
        <TableRow>
          <TableHead scope="col">Task</TableHead>
          <TableHead scope="col">Description</TableHead>
          <TableHead scope="col">Completed</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow v-if="filteredTasks.length === 0">
          <TableCell colspan="3" class="text-center">No results</TableCell>
        </TableRow>
        <TableRow v-for="task in filteredTasks as Task[]" :key="task.id">
          <TableCell v-html="highlight(task.name)"></TableCell>
          <TableCell v-html="highlight(task.description)"></TableCell>
          <TableCell>{{ task.completed ? 'Yes' : 'No' }}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </section>
</template>
