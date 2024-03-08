//1.Напишите функцию, которая принимает объект и возвращает количество его свойств.

// function countProperties(obj) {
//   return Object.keys(obj).length;
// }

// const someObject = {
//   name: "Sam",
//   age: 30,
//   city: "London",
//   hobby: "Gaming",
// };

// const numberOfProperties = countProperties(someObject);

// console.log(numberOfProperties);

//2.Напишите функцию, которая принимает объект и ключ, и возвращает true, если этот ключ существует в объекте, и false в противном случае.

// function keyExist(obj, key) {
//   return key in obj;
// }

// const someObject = {
//   name: "Sam",
//   age: 30,
//   city: "London",
//   hobby: "Gaming",
// };

// const keyToCheck = "age";
// const exist = keyExist(someObject, keyToCheck);

// console.log(exist);

//3.Напишите функцию, которая принимает объект и возвращает массив значений его свойств.

// function getObjectValues(obj) {
//   return Object.values(obj);
// }

// const someObject = {
//   name: "Sam",
//   age: 30,
//   city: "London",
//   hobby: "Gaming",
// };

// const valueArray = getObjectValues(someObject);
// console.log(valueArray);

//4. Напишите функцию, которая принимает два объекта и возвращает новый объект, содержащий свойства обоих объектов.
// function mergeObjects(obj1, obj2) {
//   return { ...obj1, ...obj2 };
// }

// const object1 = { a: 1, b: 2 };
// const object2 = { b: 3, c: 4 };

// const mergedObjects = mergeObjects(object1, object2);

// console.log(mergedObjects);

//5.Напишите функцию, которая принимает объект и возвращает новый объект, содержащий только те свойства, у которых значения являются числами.

// function filterNumberProperties(obj) {
//   const filteredObject = [];
//   for (const key in obj) {
//     if (typeof obj[key] === "number") {
//       filteredObject[key] = obj[key];
//     }
//   }
//   return filteredObject;
// }

// const someObject = {
//   name: "Sam",
//   age: 30,
//   city: "London",
//   hobby: "Gaming",
// };

// const filteredObject = filterNumberProperties(someObject);
// console.log(filteredObject);

//6.Напишите функцию, которая принимает объект и возвращает новый объект с отсортированными свойствами по алфавиту.

// function sortObjectProperties(obj) {
//   const sortedKeys = Object.keys(obj).sort();
//   const result = {};

//   for (const key of sortedKeys) {
//     result[key] = obj[key];
//   }

//   return result;
// }

// const newObject = {
//   name: "Sam",
//   age: 25,
//   height: 175,
//   weight: 70,
// };

// const sortedObject = sortObjectProperties(newObject);
// console.log(sortedObject);

//7.Напишите функцию, которая принимает объект и возвращает сумму всех его числовых свойств.

// function sumNumericProperties(obj) {
//   let sum = 0;
//   for (const key in obj) {
//     if (typeof obj[key] === "number") {
//       sum += obj[key];
//     }
//   }
//   return sum;
// }

// const newObject = {
//   value1: 10,
//   value2: 20,
//   value3: "not a number",
//   value4: 30,
// };

// const result = sumNumericProperties(newObject);
// console.log(result);

//8.Напишите функцию, которая принимает объект и возвращает true, если в объекте есть хотя бы одно числовое свойство, и false в противном случае.

// function hasNumericProperties(obj) {
//   for (const key in obj) {
//     if (typeof obj[key] === "number") {
//       return true;
//     }
//   }
//   return false;
// }

// const objectWithNumbers = {
//   value1: "not a number",
//   value2: 20,
//   value3: "another string",
// };

// const objectWithoutNumbers = {
//   value1: "string 1",
//   value2: "string 2",
//   value3: "string 3",
// };

// console.log(hasNumericProperties(objectWithNumbers));
// console.log(hasNumericProperties(objectWithoutNumbers));

//9. Напишите функцию, которая принимает объект и массив ключей и удаляет соответствующие свойства из объекта.

// function removeProperties(obj, keysToRemove) {
//   const newObj = {};
//   for (const key in obj) {
//     if (!keysToRemove.includes(key)) {
//       newObj[key] = obj[key];
//     }
//   }
//   return newObj;
// }

// const someObject = {
//   name: "Sam",
//   age: 25,
//   city: "New York",
//   country: "USA",
// };

// const keysToRemove = ["age", "country"];
// const newObject = removeProperties(someObject, keysToRemove);

// console.log(newObject);

//10. Напишите функцию, которая принимает объект и возвращает массив массивов, каждый из которых содержит ключ и значение одного свойства объекта.

// function objectToArray(obj) {
//   const resultArray = [];
//   for (const key in obj) {
//     if (obj.hasOwnProperty(key)) {
//       resultArray.push([key, obj[key]]);
//     }
//   }

//   return resultArray;
// }

// const someObject = {
//   name: "Sam",
//   age: 25,
//   city: "New York",
//   country: "USA",
// };

// const arrayOfArrays = objectToArray(someObject);
// console.log(arrayOfArrays)

// 11. Создайте объект person с методом introduce, который выводит в консоль сообщение "Меня зовут [имя]" для имени, хранящегося в свойстве объекта name.

// const person = {
//   name: "Sam",
//   introduce: function () {
//     console.log("My Name " + person.name);
//   },
// };
// person.introduce();

// 12. Создайте функцию calculateArea, которая принимает ширину и высоту прямоугольника в качестве параметров. Затем создайте объект rectangle с методом getArea, который использует функцию calculateArea, чтобы вычислить и вернуть площадь прямоугольника.

// function calculateArea(width, height) {
//   return width * height;
// }

// const rectangle = {
//   width: 10,
//   height: 5,
//   getArea: function () {
//     return calculateArea(rectangle.width, rectangle.height);
//   },
// };

// const area = rectangle.getArea();

// console.log("Square ", area);

//13.  Создайте объект car с свойством speed и методом accelerate, который принимает значение, на которое нужно увеличить скорость, и увеличивает скорость объекта car на это значение.

// const car = {
//   speed: 0,
//   accelerate: function (increase) {
//     car.speed += increase;
//   },
// };

// car.accelerate(20);
// console.log("Current speed ", car.speed);

// car.accelerate(10);
// console.log("Current speed ", car.speed);

//14. - Создайте функцию-конструктор Book, которая принимает параметры title и author, и создает объект книги с этими свойствами. Затем добавьте метод printInfo, который выводит информацию о книге в консоль в формате "Название: [название], Автор: [автор]".

// function book(title, author) {
//   book.title = title;
//   book.author = author;
//   book.printInfo = function () {
//     console.log("Title:", book.title, "Author: ", book.author);
//   };
// }

// const newBook = new book("The Witcher. Wild Hunt", "Adjay Sapkovsky");
// book.printInfo();

//15.Создайте объект calculator с методами add, subtract, multiply и divide, которые принимают два числа и возвращают результат соответствующей арифметической операции.

// const calculator = {
//   add: function (num1, num2) {
//     return num1 + num2;
//   },
//   subtract: function (num1, num2) {
//     return num1 - num2;
//   },
//   multiply: function (num1, num2) {
//     return num1 * num2;
//   },
//   divide: function (num1, num2) {
//     if (num2 !== 0) {
//       return num1 / num2;
//     } else {
//       return "Деление на 0";
//     }
//   },
// };

// console.log(calculator.add(5, 5));
// console.log(calculator.subtract(6, 5));
// console.log(calculator.multiply(3, 3));
// console.log(calculator.divide(6, 2));
// console.log(calculator.divide(5, 0));
