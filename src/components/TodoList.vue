<script setup lang="ts">
import tasks from '../data/tasks.json';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useFilter } from '@/composables/useFilter';
import type { Task } from '@/types/types';
import ItemFilter from './ItemFilter.vue';

const { filteredTasks, debouncedSearchQuery } = useFilter(tasks as Task[]);

function highlight(text: string): string {
  const query = debouncedSearchQuery.value;
  if (!query || query.length < 3) return text;
  const escaped = query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  const regex = new RegExp(`(${escaped})`, 'gi');
  return text.replace(regex, '<strong class="text-primary">$1</strong>');
}
</script>

<template>
	<div>
		<ItemFilter class="mt-4" />
		<Table class="mt-4">
			<TableHeader>
				<TableRow>
					<TableHead>Task</TableHead>
					<TableHead>Description</TableHead>
					<TableHead>Completed</TableHead>
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
	</div>
</template>
