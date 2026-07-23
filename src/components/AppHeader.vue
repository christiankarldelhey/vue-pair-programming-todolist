<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { TabsList, TabsTrigger } from '@/components/ui/tabs';

const { t } = useI18n();
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 border-b bg-background/95 backdrop-blur py-3">
    <div class="container">
      <TabsList :aria-label="t('navigation.viewSelector')">
        <TabsTrigger value="todoList">
          {{ t('navigation.todoList') }}
        </TabsTrigger>
        <TabsTrigger value="counter">
          {{ t('navigation.counter') }}
        </TabsTrigger>
      </TabsList>
    </div>
  </header>
</template>
