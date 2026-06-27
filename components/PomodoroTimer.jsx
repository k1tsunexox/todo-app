'use client';

import { usePomodoro } from '@/hooks/usePomodoro';

const MODE_LABELS = {
  work: 'Focus',
  shortBreak: 'Short Break',
  longBreak: 'Long Break',
};

const MODE_COLORS = {
  work: 'bg-red-500',
  shortBreak: 'bg-green-500',
  longBreak: 'bg-blue-500',
};

export default function PomodoroTimer({
  onComplete,
}) {
  const {
    mode,
    display,
    isRunning,
    count,
    toggle,
    reset,
    switchMode,
  } = usePomodoro(onComplete);

  return (
    <div
      className="
      bg-white
      rounded-2xl
      p-8
      shadow-sm
      border
      border-slate-100
      text-center
    "
    >
      {/* Mode Selector */}
      <div className="flex justify-center gap-2 mb-8">

        {[
          'work',
          'shortBreak',
          'longBreak',
        ].map(m => (
          <button
            key={m}
            onClick={() =>
              switchMode(m)
            }
            className={`
              px-4
              py-2
              rounded-full
              text-sm
              font-medium
              transition-colors

              ${
                mode === m
                  ? `${MODE_COLORS[m]} text-white`
                  : 'bg-slate-100 text-slate-500'
              }
            `}
          >
            {MODE_LABELS[m]}
          </button>
        ))}

      </div>

      {/* Clock */}
      <div
        className="
        text-8xl
        font-bold
        font-mono
        mb-8
      "
      >
        {display}
      </div>

      {/* Controls */}
      <div className="flex justify-center gap-4">

        <button
          onClick={toggle}
          className={`
            px-10
            py-3
            rounded-full
            text-white
            font-semibold

            ${MODE_COLORS[mode]}
          `}
        >
          {isRunning
            ? 'Pause'
            : 'Start'}
        </button>

        <button
          onClick={reset}
          className="
            px-6
            py-3
            rounded-full
            bg-slate-100
            hover:bg-slate-200
          "
        >
          Reset
        </button>

      </div>

      {/* Count */}
      {count > 0 && (
        <p
          className="
            mt-6
            text-slate-400
            text-sm
          "
        >
          {'🍅'.repeat(
            Math.min(count, 8)
          )}

          {' '}
          {count}
          {' '}
          pomodoro
          {count !== 1
            ? 's'
            : ''}
        </p>
      )}

    </div>
  );
}