export type ActiveView = 'todoList' | 'counter';

export type Task = {
    id: number;
    name: string;
    description: string;
    completed: boolean;
}
