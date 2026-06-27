'use client';

import TaskItem from './TaskItem';

<ul className="space-y-2">
  {tasks.map(task => (
    <TaskItem
      key={task.id}
      task={task}
    />
  ))}
</ul>

import {
  useTaskContext,
} from '@/context/TaskContext';

export default function TaskList() {
  const {
    tasks,
    toggleTask,
    deleteTask,
  } = useTaskContext();

  if (!tasks.length) {
    return (
      <p>
        No tasks yet
      </p>
    );
  }

  return (
    <ul className="space-y-2 mt-6">
      {tasks.map(task => (
        <li
          key={task.id}
          className="border p-3 flex gap-3"
        >
          <input
            type="checkbox"
            checked={
              task.completed
            }
            onChange={() =>
              toggleTask(task.id)
            }
          />

          <span
            className={
              task.completed
                ? 'line-through'
                : ''
            }
          >
            {task.text}
          </span>

          <button
            onClick={() =>
              deleteTask(task.id)
            }
          >
            ×
          </button>
        </li>
      ))}
    </ul>
  );
}