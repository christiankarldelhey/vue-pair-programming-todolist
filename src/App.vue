<script setup lang="ts">
import { useLocalStorage } from '@vueuse/core';
import TodoList from './components/TodoList.vue';
import Counter from './components/Counter.vue';
import AppHeader from './components/AppHeader.vue';
import { Tabs, TabsContent } from '@/components/ui/tabs';
import type { ActiveView } from '@/types/types';

const activeView = useLocalStorage<ActiveView>('activeView', 'todoList');

function updateActiveView(value: string | number) {
  if (value === 'todoList' || value === 'counter') {
    activeView.value = value;
  }
}
</script>

<template>
  <Tabs
    :model-value="activeView"
    class="flex flex-col items-center min-h-screen px-4"
    @update:model-value="updateActiveView"
  >
    <AppHeader />

    <main class="pt-20 w-full">
      <div class="container mx-auto">
        <TabsContent value="todoList" class="mt-0">
          <TodoList />
        </TabsContent>
        <TabsContent value="counter" class="mt-0">
          <Counter />
        </TabsContent>
      </div>
    </main>
  </Tabs>
</template>