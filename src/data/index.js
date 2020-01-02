export const LinearData = {
  title: 'Linear data',
  description: 'Data contains values 0, 1, 2...40',
  data: Array(40)
    .fill(null)
    .map((_, i) => i)
};

export const RandomData = {
  title: 'Random data',
  description: 'Data contains random data',
  data: Array(40)
    .fill(null)
    .map(() => Math.floor(Math.random() * 100))
};
