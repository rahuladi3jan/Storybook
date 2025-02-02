import { useState } from "react";

export default function useSafeLocalStorage(key: any, initialValue: any) {
  const [valueProxy, setValueProxy] = useState(() => {
    try {
      const value = window.localStorage.getItem(key);
      return value ? JSON.parse(value) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setValue = (value: any) => {
    try {
      window.localStorage.setItem(key, value);
      setValueProxy(value);
    } catch {
      setValueProxy(value);
    }
  };

  return [valueProxy, setValue];
}
