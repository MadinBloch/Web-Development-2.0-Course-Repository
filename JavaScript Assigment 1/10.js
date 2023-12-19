// Question-10

const arr = [1, 2, -3, 5, -9, -8, -7, 7];

for (let i of arr) {
  if (i < 0) continue;
  console.log(i);
}