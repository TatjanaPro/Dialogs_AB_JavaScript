const num = [5, 7, 1];
if (num[0] < num[1] && num[0] < num[2]) {
  console.log(num[0] + "," + num[1] + "," + num[2]);
} else if (num[0] < num[2] && num[2] < num[1]) {
  console.log(num[0] + "," + num[2] + "," + num[1]);
} else if (num[1] < num[0] && num[0] < num[2]) {
  console.log(num[1] + "," + num[0] + "," + num[2]);
} else if (num[1] < num[2] && num[2] < num[0]) {
  console.log(num[1] + "," + num[2] + "," + num[0]);
} else if (num[2] < num[0] && num[0] < num[1]) {
  console.log(num[2] + "," + num[0] + "," + num[1]);
} else if (num[2] < num[1] && num[1] < num[0]) {
  console.log(num[2] + "," + num[1] + "," + num[0]);
}

const number = [12, 0, 21];

if (number[1] > number[0]) {
  [number[0], number[1]] = [number[1], number[0]];
}

if (number[2] > number[0]) {
  number[0] = number[0] + number[2];
  number[2] = number[0] - number[2];
  number[0] = number[0] - number[2];
}

if (number[2] > number[1]) {
  number[1] = number[1] ^ number[2];
  number[2] = number[1] ^ number[2];
  number[1] = number[1] ^ number[2];
}

console.log("rezultats: " + number[0] + "," + number[1] + "," + number[2]);
