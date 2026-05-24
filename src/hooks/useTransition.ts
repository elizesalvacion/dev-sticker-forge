import { useState, useEffect } from "react";

export const useTransition = (trigger: unknown, durationMs = 150) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const t1 = setTimeout(() => setVisible(false), 0);
    const t2 = setTimeout(() => setVisible(true), durationMs);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [trigger, durationMs]);

  return visible;
};
