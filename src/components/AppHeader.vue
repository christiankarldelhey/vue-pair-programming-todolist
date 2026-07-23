<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import type { ActiveView } from '@/types/types';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';

defineProps<{
  activeView: ActiveView;
}>();

const emit = defineEmits<{
  (e: 'update:activeView', value: ActiveView): void;
}>();

const { t } = useI18n();
</script>

<template>
  <header class="fixed top-0 left-0 right-0 z-50 flex border-b bg-background/95 backdrop-blur py-3 cursor-pointer">
    <NavigationMenu class="container">
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink
            :class="[navigationMenuTriggerStyle(), activeView === 'todoList' ? 'bg-muted text-accent-foreground font-semibold' : '']"
            @click="emit('update:activeView', 'todoList')"
          >
            {{ t('navigation.todoList') }}
          </NavigationMenuLink>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <NavigationMenuLink
            :class="[navigationMenuTriggerStyle(), activeView === 'counter' ? 'bg-muted text-accent-foreground font-semibold' : '']"
            @click="emit('update:activeView', 'counter')"
          >
            {{ t('navigation.counter') }}
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  </header>
</template>
