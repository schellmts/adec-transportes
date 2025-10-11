export type Car = {
  id: number;
  name: string;
  tags: string;
  background: string;
};

export const cars: Car[] = [
  {
    id: 1,
    name: 'COROLLA SEDAN',
    tags: 'Sedan Executivo',
    background: '/corolla-sedan.png'
  },
  {
    id: 2,
    name: 'COROLLA CROSS HÍBRIDO',
    tags: 'Sedan Executivo',
    background: '/carroescuro.png'
  },
  {
    id: 3,
    name: 'COROLLA SEDAN HÍBRIDO',
    tags: 'Sedan Executivo',
    background: '/sedan-hibrido.png'
  },
  {
    id: 4,
    name: 'COROLLA CROSS',
    tags: 'Sedan Executivo',
    background: '/cross.png'
  },
]