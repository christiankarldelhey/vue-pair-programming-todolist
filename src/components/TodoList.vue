<script setup lang="ts">
import architectures from '../data/architectures.json';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useFilter } from '@/composables/useFilter';
import { Input } from '@/components/ui/input';

const { filteredArchitectures, searchQuery } = useFilter(architectures);

</script>

<template>
	<h1 class="text-3xl font-bold mb-4">Todo-List</h1>
	<div class="container">
		<Input v-model="searchQuery" placeholder="Search tasks..." />
	<Table class="mt-4">
		<TableHeader>
			<TableRow>
				<TableHead>Task</TableHead>
				<TableHead>Description</TableHead>
				<TableHead>Completed</TableHead>
			</TableRow>
		</TableHeader>
		<TableBody>
			<TableRow v-if="filteredArchitectures.length === 0">
				<TableCell colspan="3" class="text-center">No results</TableCell>
			</TableRow>
			<TableRow v-for="architecture in filteredArchitectures" :key="architecture.id">
				<TableCell>{{ architecture.name }}</TableCell>
				<TableCell>{{ architecture.description }}</TableCell>
				<TableCell>{{ architecture.completed ? 'Yes' : 'No' }}</TableCell>
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