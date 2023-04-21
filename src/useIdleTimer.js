import { useEffect, useState } from 'react';

const useIdleTimer = (timeIdleMS) => {
  const [isIdle, setIsIdle] = useState(false);

  useEffect(() => {
    let idleTimer;

    const resetIdleTimer = () => {
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        setIsIdle(true);
      }, timeIdleMS);
    };

    resetIdleTimer();

    const onActivity = () => {
      setIsIdle(false);
      resetIdleTimer();
    };

    window.addEventListener('mousemove', onActivity);
    window.addEventListener('scroll', onActivity);
    window.addEventListener('keydown', onActivity);

    return () => {
      clearTimeout(idleTimer);
      window.removeEventListener('mousemove', onActivity);
      window.removeEventListener('scroll', onActivity);
      window.removeEventListener('keydown', onActivity);
    };
  }, [timeIdleMS]);

  return isIdle;
};