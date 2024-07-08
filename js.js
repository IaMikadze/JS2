let numbersArray = [10, 50, 6, 7, 8, 11, 6, 3, 9];
function sum(numbers) {
  let totalSum = 0;
  for (let i = 0; i < numbers.length; i++) {
    totalSum += numbers[i];
  }
  return totalSum;
}
console.log(sum(numbersArray));

//2
let user = {
  firstname: "giorgi",
  lastname: "saakadze",
  age: 32,
  isloggedin: true,
};
function nameCheck(user) {
  if (user.isloggedin) {
    return `${user.firstname} ${user.lastname}`;
  } else {
    false;
  }
}
let name = console.log(nameCheck(user));

//3
function maxInArray(x) {
  let max = x[0];
  for (let i = 1; i < x.length; i++) {
    if (x[i] > max) {
      max = x[i];
    }
    return max;
  }
}
let maxNumber = maxInArray(numbersArray);
console.log("Maximum number:", maxNumber);
//4
function evenOrOdd(num) {
  if (num % 2 == 0) {
    return `${num} :this number is even`;
  } else {
    return `${num} :this number is odd`;
  }
}

let numb = 30;
console.log(evenOrOdd(numb));
//5
let array = [1, 2, 3, 4, 5];
function reverse(rev) {
  let left = 0;
  let right = rev.length - 1;
  while (left < right) {
    let temp = rev[left];
    rev[left] = rev[right];
    rev[right] = temp;
    left++;
    right--;
    console.log(rev);
  }
}
reverse(array);
//7
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < array2.length; i++) {
  if (array2[i] === 5) {
    console.log("არის");
    break;
  }
}
//8
let array3 = [1, 2, 3, 4, 5];
let sum1 = 0;
for (let i = 0; i < array3.length; i++) {
  sum1 = sum1 + array3[i];
  console.log(sum1);
}

//9
let array4 = [1, 2, 3, 4, 5];
let sum2 = 0;
for (let i = 0; i < array4.length; i++) {
  sum2 = sum2 + array4[i];
}
console.log(sum2 / array4.length);

//10
let array5 = [1, 2, 3, 7, 6, 9];
for (let i = 0; i < array5.length; i++) {
  if (array5[i] === 7) {
    continue;
  } else {
    console.log(array5[i]);
  }
}
//11
let array6 = [32, 14, null, "40", 50];
for (let i = 0; i < array6.length; i++) {
  if (array6[i] % 5 === 0) {
    console.log(array6[i]);
  }
}
//12
let array8 = [
  [2, -3, 5, 11],
  [1, -35, -11],
  [12, -36, -24],
];
for (let i = 0; i < array8.length; i++) {
  const element = array8[i];
  for (let k = 0; k < element.length; k++) {
    const element1 = element[k];
    if (element1 > 0) {
      console.log(element1);
    }
  }
}
