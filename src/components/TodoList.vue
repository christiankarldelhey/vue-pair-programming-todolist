<script setup lang="ts">
import architectures from '../data/architectures.json';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

</script>

<template>
	<h1>TodoList</h1>
	<Table>
		<TableHeader>
			<TableRow>
				<TableHead>Nombre</TableHead>
				<TableHead>Descripción</TableHead>
				<TableHead>Completado</TableHead>
			</TableRow>
		</TableHeader>
		<TableBody>
			<TableRow v-for="architecture in architectures" :key="architecture.id">
				<TableCell>{{ architecture.name }}</TableCell>
				<TableCell>{{ architecture.description }}</TableCell>
				<TableCell>{{ architecture.completed ? 'Sí' : 'No' }}</TableCell>
			</TableRow>
		</TableBody>
	</Table>
</template>

<style scoped lang="scss">
h1 {
	font-size: 2em;
	margin-bottom: 10px;
}
</style>