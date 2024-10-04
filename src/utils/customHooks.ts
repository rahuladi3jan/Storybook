import { useState, useRef } from "react";

export function useReferencedState<T>(
  value: T | (() => T)
): [T, React.MutableRefObject<T>, (T) => void] {
  const [val, setVal] = useState<T>(value);
  const ref = useRef(val);
  const setValue = (newValue: T) => {
    ref.current = newValue;
    setVal(newValue);
  };
  return [val, ref, setValue];
}
