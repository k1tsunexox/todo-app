'use client';

import {
  useTaskContext,
}
from '@/context/TaskContext';

export default function TaskList() {

  const {
    tasks,
  } =
  useTaskContext();

  return (
    <ul>

      {tasks.map(task => (
        <li
          key={task.id}
        >
          {task.text}
        </li>
      ))}

    </ul>
  );
}