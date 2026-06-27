'use client';

import { useTaskContext } from '@/context/TaskContext';

const CATEGORY_COLORS = {
  work: 'bg-blue-100 text-blue-700',
  personal: 'bg-purple-100 text-purple-700',
  study: 'bg-green-100 text-green-700',
  other: 'bg-slate-100 text-slate-700',
};

export default function TaskItem({ task }) {
  const {
    toggleTask,
    deleteTask,
  } = useTaskContext();

  return (
    <li
      className="
      flex
      items-center
      gap-3
      bg-white
      rounded-lg
      px-4
      py-3
      shadow-sm
      border
      border-slate-100
      group
    "
    >
      {/* Complete */}
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() =>
          toggleTask(task.id)
        }
        className="
          w-4
          h-4
          accent-red-500
          cursor-pointer
        "
      />

      {/* Task */}
      <span
        className={`flex-1 text-sm ${
          task.completed
            ? 'line-through text-slate-400'
            : 'text-slate-800'
        }`}
      >
        {task.text}
      </span>

      {/* Category */}
      <span
        className={`
          text-xs
          px-2
          py-1
          rounded-full
          font-medium
          ${CATEGORY_COLORS[task.category]}
        `}
      >
        {task.category}
      </span>

      {/* Pomodoros */}
      {task.pomodorosCompleted > 0 && (
        <span className="text-xs text-slate-400">
          🍅 {task.pomodorosCompleted}
        </span>
      )}

      {/* Delete */}
      <button
        onClick={() =>
          deleteTask(task.id)
        }
        className="
          opacity-0
          group-hover:opacity-100
          text-red-400
          hover:text-red-600
          text-lg
          transition-opacity
        "
      >
        ×
      </button>
    </li>
  );
}