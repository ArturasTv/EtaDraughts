import React, { useEffect, useRef, useState } from 'react';
import { formatSecondsToMinutesAndSeconds } from '@/lib/time';

interface Props {
  timeLeft: number;
  isRunning: boolean;
}

function PlayerClock({ timeLeft, isRunning }: Props) {
  const [isActive, setIsActive] = useState(false);
  const [currentTimeLeft, setCurrentTimeLeft] = useState(timeLeft);
  const intervalRef = useRef<NodeJS.Timeout | undefined>(undefined);

  useEffect(() => {
    if (isActive) {
      intervalRef.current = setInterval(() => {
        setCurrentTimeLeft((seconds) => seconds - 1);
      }, 1000);
    } else {
      clearInterval(intervalRef.current);
    }

    return () => clearInterval(intervalRef.current);
  }, [isActive]);

  useEffect(() => {
    if (currentTimeLeft <= 0) {
      clearInterval(intervalRef.current);
    }
  }, [currentTimeLeft]);

  useEffect(() => {
    setCurrentTimeLeft(timeLeft);
  }, [timeLeft]);

  useEffect(() => {
    setIsActive(isRunning);
  }, [isRunning]);

  return (
    <h3 className='pr-4 text-sm font-normal leading-6 text-muted-foreground'>
      {formatSecondsToMinutesAndSeconds(currentTimeLeft)}
    </h3>
  );
}

export default PlayerClock;
