'use client';

import {
  useState,
  useEffect,
} from 'react';

export function useLocalStorage(
  key,
  initialValue
) {
  const [value, setValue] =
    useState(initialValue);

  // WHY:
  // Load saved value only once
  useEffect(() => {
    try {
      const item =
        localStorage.getItem(key);

      if (item) {
        setValue(
          JSON.parse(item)
        );
      }
    } catch (error) {
      console.error(
        'Load failed:',
        error
      );
    }
  }, [key]);

  // WHY:
  // Save whenever state changes
  useEffect(() => {
    try {
      localStorage.setItem(
        key,
        JSON.stringify(value)
      );
    } catch (error) {
      console.error(
        'Save failed:',
        error
      );
    }
  }, [key, value]);

  return [
    value,
    setValue,
  ];
}