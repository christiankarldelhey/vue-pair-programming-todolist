<script setup lang="ts">
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useFilter } from '@/composables/useFilter';

const { searchQuery, resetSearch } = useFilter([]);
</script>


<template>
<div class="flex w-full max-w-sm items-center space-x-2">
    <Input v-model="searchQuery" type="text" placeholder="Search tasks..." />
    <Button :disabled="!searchQuery" variant="secondary" @click="resetSearch" >
        Reset
    </Button>
    </div>
</template>