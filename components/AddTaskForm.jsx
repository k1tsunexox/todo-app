'use client';

import { useState } from 'react';

import {
  useTaskContext,
} from '@/context/TaskContext';

export default function AddTaskForm() {
  const [text, setText] =
    useState('');

  const [category, setCategory] =
    useState('work');

  const { addTask } =
    useTaskContext();

  function handleSubmit(e) {
    e.preventDefault();

    if (!text.trim()) return;

    addTask(
      text.trim(),
      category
    );

    setText('');
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex gap-2"
    >
      <input
        value={text}
        onChange={e =>
          setText(e.target.value)
        }
        placeholder="Add task"
        className="border p-2 flex-1"
      />

      <select
        value={category}
        onChange={e =>
          setCategory(
            e.target.value
          )
        }
      >
        <option>work</option>
        <option>study</option>
        <option>personal</option>
        <option>other</option>
      </select>

      <button
        className="bg-red-500 text-white px-4"
      >
        Add
      </button>
    </form>
  );
}