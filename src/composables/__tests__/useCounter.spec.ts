import { describe, it, expect } from 'vitest';
import { useCounter } from '../useCounter';

describe('useCounter', () => {
  it('starts in 0 by default', () => {
    const { count } = useCounter();
    expect(count.value).toBe(0);
  });

  it('starts at a custom initial value', () => {
    const { count } = useCounter(10);
    expect(count.value).toBe(10);
  });

  it('increments the count', () => {
    const { count, increment } = useCounter();
    increment();
    expect(count.value).toBe(1);
    increment();
    expect(count.value).toBe(2);
  });

  it('decrements the count', () => {
    const { count, decrement } = useCounter(5);
    decrement();
    expect(count.value).toBe(4);
    decrement();
    expect(count.value).toBe(3);
  });

  it('can go negative', () => {
    const { count, decrement } = useCounter(0);
    decrement();
    expect(count.value).toBe(-1);
  });
});
