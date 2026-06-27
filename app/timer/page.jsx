'use client';

import { useState } from 'react';

import PomodoroTimer
from '@/components/PomodoroTimer';

import {
  useTaskContext,
} from '@/context/TaskContext';

export default function TimerPage() {

  const {
    tasks,
    incrementPomodoro,
  } = useTaskContext();

  const [
    activeTaskId,
    setActiveTaskId,
  ] = useState(null);

  function handlePomodoroComplete() {
    if (activeTaskId) {
      incrementPomodoro(
        activeTaskId
      );
    }
  }

  const pendingTasks =
    tasks.filter(
      task =>
        !task.completed
    );

  return (
    <div className="space-y-8">

      <h1 className="text-2xl font-bold">
        Pomodoro Timer
      </h1>

      <PomodoroTimer
        onComplete={
          handlePomodoroComplete
        }
      />

      <section className="bg-white rounded-xl p-5">

        <h2 className="mb-3">
          Working on:
        </h2>

        {pendingTasks.length === 0 ? (

          <p>
            No pending tasks
          </p>

        ) : (

          <div className="space-y-2">

            {pendingTasks.map(
              task => (

                <button
                  key={task.id}
                  onClick={() =>
                    setActiveTaskId(
                      task.id
                    )
                  }
                  className="
                  w-full
                  text-left
                  border
                  p-3
                  rounded
                  "
                >
                  {task.text}
                </button>

              )
            )}

          </div>

        )}

      </section>

    </div>
  );
}