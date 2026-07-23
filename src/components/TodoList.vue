<script setup lang="ts">
import { computed, reactive } from 'vue';
import { useI18n } from 'vue-i18n';
import tasks from '../data/tasks.json';
import { Checkbox } from '@/components/ui/checkbox';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useFilter } from '@/composables/useFilter';
import type { Task } from '@/types/types';
import HighlightText from './HighlightText.vue';
import ItemFilter from './ItemFilter.vue';

const taskItems = reactive<Task[]>(tasks.map(task => ({ ...task })));
const { searchQuery, debouncedSearchQuery, filteredTasks, resetSearch } = useFilter(taskItems);
const { t } = useI18n();

const resultCountLabel = computed(() => {
  const count = filteredTasks.value.length;
  return t('tasks.resultsFound', { count }, count);
});

function updateTaskCompleted(task: Task, completed: boolean | 'indeterminate') {
  task.completed = completed === true;
}
</script>

<template>
  <section aria-labelledby="tasks-heading">
    <h1 id="tasks-heading" class="text-xl font-semibold">{{ t('tasks.title') }}</h1>
    <ItemFilter v-model="searchQuery" class="mt-4" @reset="resetSearch" />
    <p id="task-results-status" class="sr-only" role="status" aria-live="polite">
      {{ resultCountLabel }}
    </p>
    <Table id="task-results" class="mt-4" aria-describedby="task-results-status">
      <caption class="sr-only">{{ t('tasks.resultsCaption') }}</caption>
      <TableHeader>
        <TableRow>
          <TableHead scope="col">{{ t('tasks.columns.task') }}</TableHead>
          <TableHead scope="col">{{ t('tasks.columns.description') }}</TableHead>
          <TableHead scope="col" class="text-center">{{ t('tasks.columns.completed') }}</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow v-if="filteredTasks.length === 0">
          <TableCell colspan="3" class="text-center">{{ t('tasks.noResults') }}</TableCell>
        </TableRow>
        <TableRow v-for="task in filteredTasks as Task[]" :key="task.id">
          <TableCell>
            <HighlightText :text="task.name" :query="debouncedSearchQuery" />
          </TableCell>
          <TableCell>
            <HighlightText :text="task.description" :query="debouncedSearchQuery" />
          </TableCell>
          <TableCell class="text-center">
            <Checkbox
              class="mx-auto cursor-pointer"
              :model-value="task.completed"
              :aria-label="t('tasks.completionLabel', { task: task.name })"
              @update:model-value="updateTaskCompleted(task, $event)"
            />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </section>
</template>
