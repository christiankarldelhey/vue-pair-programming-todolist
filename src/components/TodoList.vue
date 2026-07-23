<script setup lang="ts">
import tasks from '../data/tasks.json';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useFilter } from '@/composables/useFilter';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import type { Task } from '@/types/types';

const { filteredTasks, searchQuery, resetSearch } = useFilter(tasks as Task[]);

</script>

<template>
	<h1 class="text-3xl font-bold mb-4">Todo-List</h1>
	<div class="container">
		<div class="relative">
	<Input v-model="searchQuery" placeholder="Search tasks..." class="pr-20" />
	<Button
		v-if="searchQuery"
		variant="destructive"
		size="sm"
		class="absolute right-1 top-1/2 -translate-y-1/2 h-7"
		@click="resetSearch"
	>
		Reset
	</Button>
</div>
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
				<TableCell>{{ task.name }}</TableCell>
				<TableCell>{{ task.description }}</TableCell>
				<TableCell>{{ task.completed ? 'Yes' : 'No' }}</TableCell>
			</TableRow>
		</TableBody>
	</Table>
</div>
</template>

<style scoped lang="scss">
h1 {
	font-size: 2em;
	margin-bottom: 10px;
}
</style>