// 1. Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше, чем второе; 1 – если первое больше, чем второе; и 0 – если числа равны.

// function numFunction(num1, num2) {
//   if (num1 < num2) {
//     return -1;
//   } else if (num1 > num2) {
//     return 1;
//   } else {
//     return 0;
//   }
// }

// let results = numFunction(5, 10);

// console.log(results);

// 2. Написать функцию, которая вычисляет факториал переданного ей числа.

// function factorialNum(number) {
//   if (number === 0 || number === 1) {
//     return 1;
//   } else {
//     return number * factorialNum(number - 1);
//   }
// }

// let result = factorialNum(5);
// console.log(result);

// 3. Написать функцию, которая принимает три отдельные цифры и превращает их в одно число. Например: цифры 1, 4, 9 превратятся в число 149.

// function combineDigits(num1, num2, num3) {
//   let combineNum = num1.toString() + num2.toString() + num3.toString();
//   return parseInt(combineNum , 10);
// }

// let result = combineDigits(1, 4, 9);
// console.log(result)

//4 Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь. Если в функцию передали 1 параметр, то она вычисляет площадь квадрата.

// function calculateArea(length, width) {
//   if (width === undefined) {
//     return length * length;
//   } else {
//     return width * length;
//   }
// }

// let squareRectangle = calculateArea(5, 3);
// let squareSquare = calculateArea(5);

// console.log(squareRectangle);
// console.log(squareSquare);

//5 Написать функцию, которая проверяет, является ли переданное ей число совершенным. Совершенное число – это число, равное сумме всех своих собственных делителей.

// function isPerfectNumber(num) {
//   if (num <= 0) {
//     return false;
//   }

//   let sumOfDivisors = 0;
//   for (let divisor = 1; divisor < num; divisor += 1) {
//     if (num % divisor === 0) {
//       sumOfDivisors += divisor;
//     }
//   }
//   return sumOfDivisors === num;
// }

// let result = isPerfectNumber(28);
// console.log(result);

//6.  Написать функцию, которая принимает минимальное и максимальное значения для диапазона, и выводит только те числа из диапазона, которые являются совершенными. Используйте написанную ранее функцию, чтобы узнавать, совершенное число или нет.

// function perfectNumber(min, max) {
//   for (let num = min; num <= max; num += 1) {
//     if (isPerfectNum(num)) {
//       console.log(num);
//     }
//   }
// }

// function isPerfectNum(num) {
//   if (num <= 0) {
//     return false;
//   }

//   let sumOfDivisors = 0;

//   for (let divisor = 1; divisor < num; divisor += 1) {
//     if (num % divisor === 0) {
//       sumOfDivisors += divisor;
//     }
//   }

//   return sumOfDivisors === num;
// }

// perfectNumber(1, 100);

// 7. Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс». Если при вызове функции минуты и/или секунды не были переданы, то выводить их как 00.

// function timeDisplay(hours, minutes, seconds) {
//   if (hours === undefined) {
//     hours = "00";
//   } else {
//     hours = hours < 10 ? "0" + hours : hours.toString();
//   }
//   if (minutes === undefined) {
//     minutes = "00";
//   } else {
//     minutes = minutes < 10 ? "0" + minutes : minutes.toString();
//   }

//   if (seconds === undefined) {
//     seconds = "00";
//   } else {
//     seconds = seconds < 10 ? "0" + seconds : seconds.toString();
//   }

//   let formattedTime = `${hours}:${minutes}:${seconds}`;
//   console.log(formattedTime);
// }

// timeDisplay(10, 12, 30);
// timeDisplay(9);
// timeDisplay(9, 5);
// timeDisplay();

//8.. Написать функцию, которая принимает часы, минуты и секунды и возвращает это время в секундах.

// function timeInSeconds(hours, minutes, seconds) {
//   return hours * 3600 + minutes * 60 + seconds;
// }

// let inSeconds = timeInSeconds(2, 30, 45);
// console.log(inSeconds);

//9 .  Написать функцию, которая принимает количество секунд, переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс».

// function secondsInTime(totalSeconds) {
//   const hours = Math.floor(totalSeconds / 3600);
//   const minutes = Math.floor((totalSeconds % 3600) / 60);
//   const seconds = Math.floor(totalSeconds % 60);

//   return `${hours}:${minutes < 10 ? "0" : ""}${minutes}:${
//     seconds < 10 ? "0" : ""
//   }${seconds}`;
// }

// const totalSeconds = 9000;
// const formattedTime = secondsInTime(totalSeconds);
// console.log(formattedTime);

// 10. Написать функцию, которая считает разницу между датами.
//Функция принимает 6 параметров, которые описывают 2
//даты, и возвращает результат в виде строки «чч:мм:сс». При
//выполнении задания используйте функции из предыдущих 2-х заданий: сначала обе даты переведите в секунды,
//узнайте разницу в секундах, а потом разницу переведите
//обратно в «чч:мм:сс».

// function differenceBetweenDate(
//   hours1,
//   minutes1,
//   seconds1,
//   hours2,
//   minutes2,
//   seconds2
// ) {
//   const timeStart = hours1 * 3600 + minutes1 * 60 + seconds1;
//   const timeEnd = hours2 * 3600 + minutes2 * 60 + seconds2;

//   const difference = Math.abs(timeEnd - timeStart);
//   const hours = Math.floor(difference / 3600);
//   const minutes = Math.floor((difference % 3600) / 60);
//   const seconds = Math.floor(difference % 60);
//   return {
//     hours: hours,
//     minutes: minutes,
//     seconds: seconds,
//   };
// }

// const result = differenceBetweenDate(12, 23, 30, 11, 22, 40);

// console.log(result);
