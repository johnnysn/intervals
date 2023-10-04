import { Treino } from './models/treino';

export const treinos: Treino[] = [
  {
    id: 'id1',
    label: 'HIIT padrão',
    intervals: [
      {
        label: 'Correr',
        seconds: 30,
        intensity: 2,
      },
      {
        label: 'Descansar',
        seconds: 30,
        intensity: 0,
      },
      {
        label: 'Correr',
        seconds: 30,
        intensity: 2,
      },
      {
        label: 'Descansar',
        seconds: 30,
        intensity: 0,
      },
    ],
  },
  {
    id: 'id2',
    label: 'Tabata',
    intervals: [
      {
        label: 'Correr',
        seconds: 30,
        intensity: 2,
      },
      {
        label: 'Descansar',
        seconds: 30,
        intensity: 0,
      },
    ],
  },
  {
    id: 'id3',
    label: 'Circuito',
    intervals: [
      {
        label: 'Correr',
        seconds: 30,
        intensity: 2,
      },
      {
        label: 'Descansar',
        seconds: 30,
        intensity: 0,
      },
    ],
  },
];
