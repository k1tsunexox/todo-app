'use client';

import {
  useState,
  useEffect,
  useRef,
} from 'react';

const DURATIONS = {
  work: 25 * 60,
  shortBreak: 5 * 60,
  longBreak: 15 * 60,
};

export function usePomodoro(
  onPomodoroComplete
) {
  const [mode, setMode] =
    useState('work');

  const [seconds, setSeconds] =
    useState(
      DURATIONS.work
    );

  const [isRunning, setIsRunning] =
    useState(false);

  const [count, setCount] =
    useState(0);

  const intervalRef =
    useRef(null);

  // Start / stop timer
  useEffect(() => {

    if (isRunning) {

      intervalRef.current =
        setInterval(() => {

          setSeconds(prev => {

            if (prev <= 1) {

              handleTimerEnd();

              return 0;
            }

            return prev - 1;

          });

        }, 1000);

    }

    // WHY:
    // prevent multiple intervals
    return () =>
      clearInterval(
        intervalRef.current
      );

  }, [
    isRunning,
  ]);

  function handleTimerEnd() {

    setIsRunning(false);

    playSound();

    if (
      mode === 'work'
    ) {

      const newCount =
        count + 1;

      setCount(
        newCount
      );

      if (
        onPomodoroComplete
      ) {
        onPomodoroComplete();
      }

      const nextMode =
        newCount % 4 === 0
          ? 'longBreak'
          : 'shortBreak';

      switchMode(
        nextMode
      );

    } else {

      switchMode(
        'work'
      );

    }
  }

  function switchMode(
    newMode
  ) {

    setMode(
      newMode
    );

    setSeconds(
      DURATIONS[
        newMode
      ]
    );

    setIsRunning(
      false
    );
  }

  function playSound() {

    try {

      const audio =
        new Audio(
          '/ding.mp3'
        );

      audio.play();

    } catch {

    }

  }

  function toggle() {

    setIsRunning(
      running =>
        !running
    );

  }

  function reset() {

    switchMode(
      mode
    );

  }

  const display =
    `${String(
      Math.floor(
        seconds / 60
      )
    ).padStart(
      2,
      '0'
    )}:${String(
      seconds % 60
    ).padStart(
      2,
      '0'
    )}`;

  return {

    mode,

    seconds,

    display,

    isRunning,

    count,

    toggle,

    reset,

    switchMode,

  };
}