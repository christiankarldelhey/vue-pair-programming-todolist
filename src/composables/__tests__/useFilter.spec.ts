import { describe, it, expect, beforeEach, vi } from 'vitest';
import { useFilter } from '../useFilter';
import type { Task } from '@/types/types';

vi.mock('@vueuse/core', async (importOriginal) => {
  const { ref } = await import('vue');
  const actual = await importOriginal<typeof import('@vueuse/core')>();
  return {
    ...actual,
    refDebounced: (source: any) => source,
    useLocalStorage: (_key: string, defaultValue: any) => ref(defaultValue),
  };
});

const mockTasks: Task[] = [
  { id: 1, name: 'Learn Feature-Sliced Design', description: 'Organizes the codebase into layers', completed: false },
  { id: 2, name: 'Learn Micro-Frontends', description: 'Splits a large frontend app into independent modules', completed: false },
  { id: 3, name: 'Learn Island Architecture', description: 'Renders the page as mostly static HTML', completed: true },
  { id: 4, name: 'Learn Vertical Slicing', description: 'Structures the codebase around business features', completed: false },
  { id: 5, name: 'Learn Hexagonal Architecture', description: 'Isolates core business logic from external concerns', completed: false },
];

describe('useFilter', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('returns all tasks when searchQuery is empty', () => {
    const { filteredTasks } = useFilter(mockTasks);
    expect(filteredTasks.value).toHaveLength(5);
  });

  it('returns all tasks when query has less than 2 characters', () => {
    const { searchQuery, filteredTasks } = useFilter(mockTasks);
    searchQuery.value = 'a';
    expect(filteredTasks.value).toHaveLength(5);
  });

  it('filters tasks by name when query has 2+ characters', () => {
    const { searchQuery, filteredTasks } = useFilter(mockTasks);
    searchQuery.value = 'Micro';
    expect(filteredTasks.value).toHaveLength(1);
    expect(filteredTasks.value[0].name).toBe('Learn Micro-Frontends');
  });

  it('filters tasks by description when query has 3+ characters', () => {
    const { searchQuery, filteredTasks } = useFilter(mockTasks);
    searchQuery.value = 'static HTML';
    expect(filteredTasks.value).toHaveLength(1);
    expect(filteredTasks.value[0].name).toBe('Learn Island Architecture');
  });

  it('filter is case-insensitive', () => {
    const { searchQuery, filteredTasks } = useFilter(mockTasks);
    searchQuery.value = 'HEXAGONAL';
    expect(filteredTasks.value).toHaveLength(1);
    expect(filteredTasks.value[0].name).toBe('Learn Hexagonal Architecture');
  });

  it('returns empty array when no tasks match', () => {
    const { searchQuery, filteredTasks } = useFilter(mockTasks);
    searchQuery.value = 'zzzzz';
    expect(filteredTasks.value).toHaveLength(0);
  });

  it('resetSearch clears the searchQuery and shows all tasks', () => {
    const { searchQuery, filteredTasks, resetSearch } = useFilter(mockTasks);
    searchQuery.value = 'Micro';
    expect(filteredTasks.value).toHaveLength(1);

    resetSearch();
    expect(searchQuery.value).toBe('');
    expect(filteredTasks.value).toHaveLength(5);
  });
});
