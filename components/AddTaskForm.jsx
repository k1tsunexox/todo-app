'use client';

import {
  useTaskContext,
}
from '@/context/TaskContext';

export default function AddTaskForm() {

  const {
    addTask,
  } =
  useTaskContext();

  return (
    <button
      onClick={() =>
        addTask(
          'Finish assignment'
        )
      }
    >
      Add
    </button>
  );
}