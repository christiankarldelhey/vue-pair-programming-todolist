<script setup lang="ts">
import { computed } from 'vue';
import { useI18n } from 'vue-i18n';
import tasks from '../data/tasks.json';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useFilter } from '@/composables/useFilter';
import type { Task } from '@/types/types';
import ItemFilter from './ItemFilter.vue';

const { filteredTasks, debouncedSearchQuery } = useFilter(tasks as Task[]);
const { t } = useI18n();

const resultCountLabel = computed(() => {
  const count = filteredTasks.value.length;
  return t('tasks.resultsFound', { count }, count);
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
    <h1 id="tasks-heading" class="text-xl font-semibold">{{ t('tasks.title') }}</h1>
    <ItemFilter class="mt-4" />
    <p id="task-results-status" class="sr-only" role="status" aria-live="polite">
      {{ resultCountLabel }}
    </p>
    <Table id="task-results" class="mt-4" aria-describedby="task-results-status">
      <caption class="sr-only">{{ t('tasks.resultsCaption') }}</caption>
      <TableHeader>
        <TableRow>
          <TableHead scope="col">{{ t('tasks.columns.task') }}</TableHead>
          <TableHead scope="col">{{ t('tasks.columns.description') }}</TableHead>
          <TableHead scope="col">{{ t('tasks.columns.completed') }}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow v-if="filteredTasks.length === 0">
          <TableCell colspan="3" class="text-center">{{ t('tasks.noResults') }}</TableCell>
        </TableRow>
        <TableRow v-for="task in filteredTasks as Task[]" :key="task.id">
          <TableCell v-html="highlight(task.name)"></TableCell>
          <TableCell v-html="highlight(task.description)"></TableCell>
          <TableCell>{{ t(task.completed ? 'tasks.completed.yes' : 'tasks.completed.no') }}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </section>
</template>
