import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    navigation: {
      todoList: 'Todo list',
      counter: 'Counter',
    },
    filter: {
      searchLabel: 'Search tasks',
      placeholder: 'Search tasks...',
      help: 'Enter at least two characters to filter tasks by name or description.',
      reset: 'Reset',
    },
    tasks: {
      title: 'Tasks',
      resultsFound: '{count} task found | {count} tasks found',
      resultsCaption: 'Task search results',
      columns: {
        task: 'Task',
        description: 'Description',
        completed: 'Completed',
      },
      noResults: 'No results',
      completed: {
        yes: 'Yes',
        no: 'No',
      },
    },
    counter: {
      title: 'Counter',
      currentCount: 'Current count:',
      controlsLabel: 'Counter controls',
      increment: 'Increment',
      decrement: 'Decrement',
    },
  },
} as const;

export const i18n = createI18n({
  legacy: false,
  locale: 'en',
  fallbackLocale: 'en',
  messages,
});
