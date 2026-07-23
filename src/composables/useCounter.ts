import { useLocalStorage } from '@vueuse/core';

export function useCounter(initialValue = 0) {
  const count = useLocalStorage('counterValue', initialValue);

  function increment() {
    count.value++;
  }

  function decrement() {
    count.value--;
  }

  return {
    count,
    increment,
    decrement,
  };
}
