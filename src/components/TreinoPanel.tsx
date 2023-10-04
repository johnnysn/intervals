'use client';
import { Interval } from '@/data/models/interval';
import { Treino } from '@/data/models/treino';
import { useCallback, useEffect, useState } from 'react';
import Button from './ui/Button';

type Props = {
  treino: Treino;
};

interface TimerState {
  isPlaying: boolean;
  timer: number;
  currentInterval: number;
}

export default function TreinoPanel({ treino }: Props) {
  const [currentTimerState, setCurrentTimerState] = useState<TimerState>({
    isPlaying: false,
    timer: 0,
    currentInterval: 0,
  });

  const clearTimerState = useCallback(() => setCurrentTimerState({
    isPlaying: false,
    timer: treino.intervals[0].seconds,
    currentInterval: 0,
  }), [treino]);

  useEffect(() => clearTimerState(), [clearTimerState]);

  useEffect(() => {
    if (currentTimerState.isPlaying) {
      const id = setInterval(
        () =>
          setCurrentTimerState((curr) => {
            const newState = { ...curr };
            if (curr.timer === 0) {
              if (curr.currentInterval < treino.intervals.length - 1) {
                newState.currentInterval++;
                newState.timer =
                  treino.intervals[newState.currentInterval].seconds;
              } else {
                newState.isPlaying = false;
                newState.currentInterval = 0;
                newState.timer = treino.intervals[0].seconds;
              }
            } else {
              newState.timer--;
            }
            return newState;
          }),
        1000
      );

      return () => clearInterval(id);
    }
  }, [currentTimerState.isPlaying, treino]);

  const playClickHandler = () => {
    setCurrentTimerState((curr) => {
      return {
        ...curr,
        isPlaying: true
      };
    });
  };

  const stopClickHandler = () => clearTimerState();

  const currInterval = treino.intervals[currentTimerState.currentInterval];

  return (
    <div className={`grid grid-cols-4 border border-gray-50`}>
      <div
        className={`bg-orange-600 text-gray-50 flex items-center justify-center p-4`}
      >
        Go!
      </div>
      <div className="col-span-3 flex items-center justify-center p-4">
        {currentTimerState.timer}
      </div>

      <div className="col-span-4">{}</div>

      <div className="col-span-2">
        <Button onClick={playClickHandler}>Start</Button>
      </div>

      <div className="col-span-2">
        <Button onClick={stopClickHandler} cancel={true}>Stop</Button>
      </div>
    </div>
  );
}
