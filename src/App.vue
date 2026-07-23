<script setup lang="ts">
import { useLocalStorage } from '@vueuse/core';
import TodoList from './components/TodoList.vue';
import Counter from './components/Counter.vue';
import AppHeader from './components/AppHeader.vue';
import type { ActiveView } from '@/types/types';

const activeView = useLocalStorage<ActiveView>('activeView', 'todoList');
</script>

<template>
  <div class="flex flex-col items-center min-h-screen px-4">
    <AppHeader v-model:activeView="activeView" />

    <main class="pt-20 w-full">
      <div class="container mx-auto">
        <TodoList v-if="activeView === 'todoList'" />
        <Counter v-else />
      </div>
    </main>
  </div>
</template>