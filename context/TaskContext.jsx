'use client';

import {
  createContext,
  useContext,
} from 'react';

import {
  useLocalStorage,
} from '@/hooks/useLocalStorage';

const TaskContext =
  createContext();

export function TaskProvider({
  children,
}) {
  const [tasks, setTasks] =
    useLocalStorage(
      'pomodo-tasks',
      []
    );

  function addTask(text) {
    const newTask = {
      id: Date.now().toString(),
      text,
      completed: false,
      category: 'work',
      pomodorosCompleted: 0,
      createdAt:
        new Date()
          .toISOString()
          .split('T')[0],
    };

    setTasks(prev => [
      newTask,
      ...prev,
    ]);
  }

  function toggleTask(id) {
    setTasks(prev =>
      prev.map(task =>
        task.id === id
          ? {
              ...task,
              completed:
                !task.completed,
            }
          : task
      )
    );
  }

  function deleteTask(id) {
    setTasks(prev =>
      prev.filter(
        task =>
          task.id !== id
      )
    );
  }

  return (
    <TaskContext.Provider
      value={{
        tasks,
        addTask,
        toggleTask,
        deleteTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export function useTaskContext() {
  const context =
    useContext(TaskContext);

  if (!context) {
    throw new Error(
      'useTaskContext must be inside TaskProvider'
    );
  }

  return context;
}