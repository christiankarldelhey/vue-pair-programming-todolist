<script setup lang="ts">
import { useI18n } from 'vue-i18n';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { useFilter } from '@/composables/useFilter';

const { searchQuery, resetSearch } = useFilter([]);
const { t } = useI18n();
</script>


<template>
  <form
    class="flex w-full max-w-sm items-center space-x-2"
    role="search"
    @submit.prevent
  >
    <label for="task-search" class="sr-only">{{ t('filter.searchLabel') }}</label>
    <Input
      id="task-search"
      v-model="searchQuery"
      type="search"
      :placeholder="t('filter.placeholder')"
      aria-describedby="task-search-help task-results-status"
      aria-controls="task-results"
    />
    <span id="task-search-help" class="sr-only">
      {{ t('filter.help') }}
    </span>
    <Button
      type="button"
      :disabled="!searchQuery"
      variant="secondary"
      aria-controls="task-search task-results"
      @click="resetSearch"
    >
      {{ t('filter.reset') }}
    </Button>
  </form>
</template>