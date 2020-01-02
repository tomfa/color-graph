export const LinearData = {
  title: 'Linear data',
  description: 'Data contains values 0, 1, 2...39.',
  data: Array(40)
    .fill(null)
    .map((_, i) => i)
};

export const RandomData = {
  title: 'Random data',
  description: 'Data is randomly generated.',
  data: Array(40)
    .fill(null)
    .map(() => Math.floor(Math.random() * 100))
};
