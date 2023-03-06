// Task 1
/*
Реализуйте функцию, которая принимает строку в качестве аргумента и возвращает эту строку, 
но с буквами в обратном порядке. Например, если аргументом функции является "hello",
 функция должна вернуть "olleh".
*/

// function reverseString(str) {
// return str.split('').reverse().join();
// }
// console.log(reverseString('hello')); // "olleh"
// console.log(reverseString("world")); // "dlrow"

// Or

// function reverseString(str) {
//   return [...str].reverse().join('');
//   }
//   console.log(reverseString('hello')); // "olleh"
//   console.log(reverseString("world")); // "dlrow"
  

/*
Как это работает:

Функция split('') преобразует строку в массив, разбивая ее на отдельные символы.
Метод reverse() переворачивает порядок элементов в массиве.
Метод join('') объединяет все элементы массива в строку.
*/


// Task 2
/*
Реализуйте функцию, которая принимает массив чисел в качестве аргумента и возвращает среднее
 значение всех чисел в массиве. Например, если аргументом функции является [2, 4, 6, 8], функция должна вернуть 5.
*/

// function getAverage(arr) {
// let sum = 0;

// for (let i = 0; i < arr.length; i++) {
//   sum += arr[i]
// }
// return sum / arr.length
// }


// console.log(getAverage([2, 4, 6, 8])); // 5
// console.log(getAverage([1, 3, 5, 7, 9])); // 5

// Or

// function getAverage(arr) {
//   let sum = 0;

//   for (const value of arr) {
//     sum += value;
//   }
  
//   return sum / arr.length;
// }

// console.log(getAverage([2, 4, 6, 8])); // 5
// console.log(getAverage([1, 3, 5, 7, 9])); // 5


/*
Как это работает:

Функция getAverage принимает один аргумент arr, который должен быть массивом чисел.
Мы инициализируем переменную sum со значением 0, которая будет использоваться для подсчета суммы элементов массива.
Затем мы используем цикл for для прохода по каждому элементу массива и добавления его к переменной sum.
В конце мы возвращаем среднее значение, которое получается путем деления суммы всех элементов массива на его длину.
*/

// Task 3
/*
Реализуйте функцию, которая принимает массив строк в качестве аргумента и возвращает новый массив, содержащий только 
те строки, которые начинаются с буквы "a". Например, если аргументом функции является ["apple", "banana", "avocado", 
"orange"], функция должна вернуть ["apple", "avocado"].
*/



// const firstLetter = (...letter) => letter.filter(str => str.startsWith('a'));
// console.log(firstLetter('apple', 'banana', 'orange'));


// Task 4
/*
Реализуйте функцию, которая принимает два аргумента: строку и символ. Функция должна вернуть количество раз, 
которое символ встречается в строке. Например, если аргументами функции являются "hello" и "l",
 функция должна вернуть 2. */

// const countChar = (str, char) => {
//   let count = 0;

//   for (let i = 0; i < str.length; i++) {
//     if(str[i] === char) {
//       count ++
//     }
//   }
//   return count
// }
// console.log(countChar("hello", "l"));

// Task 4 метод call
/*
Напишите функцию на JavaScript, которая принимает массив чисел и возвращает новый массив, содержащий только
 положительные числа из исходного массива. Напишите метод "call", чтобы использовать эту функцию для обработки других массивов. */

//  const inputArray = [-22, 4, -11, -2, 7, 15, -34];
//  const positiveNumbers = [];

//  function getPositiveNumbersFromArray() {
//   for (let i = 0; i < this.length; i++) {
//     if(this[i] > 0) {
//        positiveNumbers.push(this[i]);
//     }
//   }
//   return positiveNumbers;
//  }

//  getPositiveNumbersFromArray.call(inputArray);

//  console.log(positiveNumbers);

// Task 5 
/*
Функция "multiplyByTwo" принимает массив чисел "numbers" и 
возвращает новый массив, в котором каждый элемент умножен на 2.. */


// function multiplyByTwo(numbers) {
// return numbers.map(number => number * 2)
// }



// const numbers = [1, 2, 3, 4, 5];
// const multipliedNumbers = multiplyByTwo(numbers);
// console.log(multipliedNumbers); // [2, 4, 6, 8, 10]

// Task 6 метод bind
/*
У вас есть объект "person" с двумя свойствами - "name" и "age". Также у вас есть функция "greet",
 которая принимает один аргумент - "greeting", и выводит сообщение в консоль, содержащее приветствие и имя человека.

Напишите функцию "greetPerson", которая использует метод "bind" для создания новой функции, которая 
будет вызывать "greet" с аргументом "greeting" и именем человека из объекта "person". */

// const person = {
//   name: "John",
//   age: 30
// };


// function greet(greeting) {
//   console.log(`${greeting}, ${this.name}!`);
// }

// function greetPerson(greetFn, personObj) {
//   const greetFnBound = greetFn.bind(personObj);
//   return function(greeting) {
//     greetFnBound(greeting);
//   };
// }


// const greetJohn = greetPerson(greet, person);
// greetJohn("Hello"); // выводит в консоль "Hello, John!"


// Task 6 Oprimized

// const person = {
//   name: "John",
//   age: 30
// };

// const greetPerson = (greetFn, personObj) => greeting => greetFn(greeting, personObj); 

// const greetJohn = greetPerson((greeting, personObj) => console.log(`${greeting}, ${personObj.name}!`), person);

// greetJohn("Hello"); // выводит в консоль "Hello, John!"


// Task 7
/*
Есть массив который необходимо отсортировать */

// const array = [22, 3, -1, 33, 2, -21, -4]

// console.log(array.sort((a,b) => {
// return a - b
// })
// );

// Task 8
/*
Есть массив который необходимо отсортировать и вернуть колбек */

// const array = [1, -3, -9, 22, 3, 2, 44, 5];
// const array2 = [1, -3, -9, 22, 3, 2, 44, 5];
// const array3 = [1, -3, -9, 22, 3, 2, 44, 5];

// Array.prototype.myMap = function(callback) {
//   const result = [];
//   const thisArray = this;

//   for (let i = 0; i < thisArray.length; i++) {
//     result.push(callback(thisArray[i], i, thisArray))
//   }
//   return result;
// };

// console.log(array.myMap((el,index, arr) => { 
// return el.toString();
//  })
// );


// Task 9
/*
Напишите функцию, которая принимает массив чисел и возвращает 
новый массив, содержащий только четные числа из исходного массива. */



// function arrayNumber(array) {
// let newArr = [];

// for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 0) {
//         newArr.push(array[i]) 
//     }
// }
// return newArr
// }
// // 
// let arr = [1, 2, 3, 4, 5, 6];
// let evenArr = arrayNumber(arr);
// console.log(evenArr); // [2, 4, 6]

// Task 9 через мето forEach

// function arrayNumber(array) {
//     let newArray = [];

//     array.forEach(function(element) {
//         if (element % 2 === 0 ) {
//             newArray.push(element)
//         }
//     });
//     return newArray;
// }
  
// let arr = [1, 2, 3, 4, 5, 6];
// let evenArr = arrayNumber(arr);
// console.log(evenArr); // [2, 4, 6]


// Task 10
/*
Напишите функцию, которая принимает строку и возвращает ее в обратном порядке. */

// function reverseString(str) {
// let arr = str.split('');

// return arr.reverse().join('')
// }

// let str = "Hello, world!";
// let reversedStr = reverseString(str);
// console.log(reversedStr); // "!dlrow ,olleH" 

// Task 11
/*
Напишите функцию, которая принимает массив из 10 целых чисел (от 0 до 9) и 
возвращает строку из этих чисел в виде номера телефона
Example
createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) // => returns "(123) 456-7890" */

// function createPhoneNumber(numbers) {
// return `(${numbers.slice(0, 3).join('')}) ${numbers.slice(3, 6).join('')}-${numbers.slice(-4).join('')}`
// }

// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // => returns "(123) 456-7890"

// Task 12
/*
Реализуйте функцию, которая принимает два массива в качестве аргументов и возвращает новый массив, 
содержащий элементы, которые встречаются в обоих массивах. Например, если аргументами функции являются
 [1, 2, 3] и [2, 3, 4], функция должна вернуть [2, 3]. */

//  function intersection(arr1, arr2) {
//     const result = [];
//     for (let i = 0; i < arr1.length; i++) {
//         if (arr2.includes(arr1[i])) {
//             result.push(arr1[i]);
//         }
//     }
//     return result;
//  }

//  const array1 = [1, 2, 3];
// const array2 = [2, 3, 4];
// const result = intersection(array1, array2);
// console.log(result); // [2, 3]

// Task 12 через метод filter

// function intersection(arr1, arr2) {
//   return  arr1.filter(element => arr2.includes(element))
// }

// const array1 = [1, 2, 3];
// const array2 = [2, 3, 4];
// const result = intersection(array1, array2);
// console.log(result); // [2, 3]


/*
Реализуйте функцию, которая принимает объект в качестве аргумента и
 возвращает новый объект, содержащий только те свойства, которые имеют
  значение типа "строка". Например, если аргументом функции является 
  {name: "John", age: 30, city: "New York"}, функция должна вернуть {name: "John", city: "New York"}.
 */

// function filterStringProperties(obj) {
//     const result = {};
//     Object.entries(obj).forEach(([key, value]) => {
//         if (typeof value === 'string') {
//             result[key] = value;
//         }
//     });
//     return result
// }

// const obj = {name: "John", age: 30, city: "New York"};
// const result = filterStringProperties(obj);
// console.log(result); // {name: "John", city: "New York"}



// Task 13 Object.values
/*
Есть объект salaries с произвольным количеством свойств, содержащих заработные платы.
Напишите функцию sumSalaries(salaries), которая возвращает сумму всех зарплат с помощью метода 
Object.values и цикла for..of.
Если объект salaries пуст, то результат должен быть 0.*/


// function sumSalaries(salaries) {
//     let sum = 0;
//     for (let salary of Object.values(salaries)) {
//         sum += salary;
//     }
//     return sum;
//   }

// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
//   };


  
//   console.log(sumSalaries(salaries)); // 650

// Или, как вариант, мы можем получить сумму, используя методы Object.values и reduce:

// function sumSalaries(salaries) {
//     return Object.values(salaries).reduce((a, b) => a + b, 0) // 650
//   }
 
// let salaries = {
//     "John": 100,
//     "Pete": 300,
//     "Mary": 250
//   };


  
//   console.log(sumSalaries(salaries)); // 650


// Task 14
/*
Напишите функцию count(obj), которая возвращает количество свойств объекта:*/

// function count(obj) {
//     return Object.keys(obj).length;
//   }

// let user = {
//     name: 'John',
//     age: 30
//   };
  
//   console.log(count(user));

// Task 15
/*
Реализуйте функцию, которая принимает число в качестве аргумента и возвращает 
true, если это число является простым, и false в противном случае. Например,
 если аргументом функции является 7, функция должна вернуть true, а если аргументом 
 является 8, функция должна вернуть false.*/

//  function isPrime(number) {
//    if (number <= 1) {
//     return false; 
//    }
//    for (let i = 2; i < number; i++) {
//     if (number % i === 0) {
//         return false
//     }
//    }
//    return true
//   }

//   console.log(isPrime(2)); // true

// Task 16
/*
Реализуйте функцию, которая принимает массив объектов в качестве аргумента 
и возвращает новый массив, содержащий только те объекты, у которых есть свойство
 "name". */

//  function filterObjectsByName(objects) {
//     return objects.filter(obj => obj.hasOwnProperty('name'))
//  }

//  const objects = [
//     { name: "Alice", age: 25 },
//     { name: "Bob", gender: "male" },
//     { age: 30 },
//     { name: "Charlie", occupation: "developer" }
//   ];
  
//   const filteredObjects = filterObjectsByName(objects);
  
//   console.log(filteredObjects);
//   // Output: [{ name: "Alice", age: 25 }, { name: "Bob", gender: "male" }, { name: "Charlie", occupation: "developer" }]
  

  /*
Эта функция использует метод filter() для создания нового массива, содержащего
 только объекты, у которых есть свойство "name". Метод hasOwnProperty() используется 
 для проверки наличия свойства "name" у каждого объекта в массиве. 
 В этом примере функция filterObjectsByName() принимает массив objects и возвращает
  новый массив, содержащий только те объекты, у которых есть свойство "name". Результат 
  сохраняется в переменной filteredObjects, которая затем выводится в консоль.*/


// Task 17
/*
Напишите функцию, которая принимает массив строк и возвращает новый массив, содержащий
 только те строки, которые содержат более двух гласных букв.*/
// function filterVowels(arr) {
//     const vowels = ['a', 'e', 'i', 'o', 'u'];
//     return arr.filter(str => {
//         return str.split('').some(letter => vowels.includes(letter));
//     });
// }

// const arr = ['hello', 'world', 'how', 'are', 'you', 'doing'];
// const result = filterVowels(arr);
// console.log(result); // ['hello', 'how', 'doing']



 // Task 17,  the second 

// function filterVowels(arr) {
//     const vowels = 'aeiou';
    
//     return arr.filter( str => (str.toLowerCase().split('').reduce((acc, char) => acc + (vowels.includes(char) ? 1 : 0), 0) > 2));
//  }


// Task 18
/*
Напишите функцию, которая принимает массив чисел и возвращает новый массив,
 содержащий только те числа, которые больше среднего значения элементов исходного массива.*/

// function  filterAboveAverage(arr) {
//     const average = arr.reduce((sum, num) => sum + num, 0) / arr.length;
//     return arr.filter(num => num > average);
// }



//  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const result = filterAboveAverage(arr);
// console.log(result); // [6, 7, 8, 9, 10]


// Task 19
/*
Напишите функцию, которая принимает на вход массив чисел и возвращает наименьшее число в массиве*/

// function findMinNumber(numbers) {
//     if (!Array.isArray(numbers)) {
//       return null; // Если аргумент не является массивом, возвращаем null
//     }
    
//     if (numbers.length === 0) {
//       return null; // Если массив пустой, возвращаем null
//     }
    
//     let min = numbers[0];
    
//     for (let i = 1; i < numbers.length; i++) {
//       if (numbers[i] < min) {
//         min = numbers[i];
//       }
//     }
    
//     return min;
//   }
  
// console.log(findMinNumber([5, 2, 9, 1, 8])); // Выведет 1 в консоль
// console.log(findMinNumber([3, -1, 0, 7, -5])); // Выведет -5 в консоль
// console.log(findMinNumber([])); // Выведет null в консоль
// console.log(findMinNumber("not an array")); // Выведет null в консоль

// // Task 19 (2)

// function findMinNumber(numbers) {
//     if (!Array.isArray(numbers)) return null; // Если аргумент не является массивом, возвращаем null
    
//     if (numbers.length === 0) return null; // Если массив пустой, возвращаем null

//     let min = Math.min(...numbers);

//     return min;
// }

// console.log(findMinNumber([5, 2, 9, 1, 8])); // Выведет 1 в консоль
// console.log(findMinNumber([3, -1, 0, 7, -5])); // Выведет -5 в консоль
// console.log(findMinNumber([])); // Выведет null в консоль
// console.log(findMinNumber("not an array")); // Выведет null в консоль


// Method 1
//есть нативный способ делать глубокие копии объектов? Это стало возможным с помощью функции structuredClone

// const calendarEvent = {
//     title: "Builder.io Conf",
//     date: new Date(123),
//     attendees: ["Steve"]
//   }
  
//   // 😍
//   const copied = structuredClone(calendarEvent)

//  console.log(copied.attendees); //["Steve"]

// Task 20
/*
Напишите функцию, которая принимает два массива и возвращает новый массив, содержащий элементы, 
которые есть только в одном из массивов (не повторяются в обоих массивах).*/

// function uniqueElements(arr1, arr2) {
//     let result = [];
  
//     for (let i = 0; i < arr1.length; i++) {
//       if (!arr2.includes(arr1[i]) && !result.includes(arr1[i])) {
//         result.push(arr1[i]);
//       }
//     }
  
//     for (let i = 0; i < arr2.length; i++) {
//       if (!arr1.includes(arr2[i]) && !result.includes(arr2[i])) {
//         result.push(arr2[i]);
//       }
//     }
  
//     return result;
//   }

//   console.log(uniqueElements([1, 2, 3], [4, 5, 6])); // expected output: [1, 2, 3, 4, 5, 6]
// console.log(uniqueElements([1, 2, 3], [1, 2, 3])); // expected output: [1, 2, 3]
// console.log(uniqueElements([1, 2, 3], [2, 3, 4])); // expected output: [1, 2, 3, 4]
// console.log(uniqueElements([], [1, 2, 3])); // expected output: [1, 2, 3]

// Task 20 (2)

// function uniqueElements(arr1, arr2) {
//     // Creating set from arr1
//     let set1 = new Set(arr1);
  
//     // Iterate through arr2 and check if element is in the set created from arr1
//     for (let i = 0; i < arr2.length; i++) {
//       if (!set1.has(arr2[i])) {
//         set1.add(arr2[i]);
//       }
//     }
  
//     return [...set1];
// }

// console.log(uniqueElements([1, 2, 3], [4, 5, 6])); // expected output: [1, 2, 3, 4, 5, 6]
// console.log(uniqueElements([1, 2, 3], [1, 2, 3])); // expected output: [1, 2, 3]
// console.log(uniqueElements([1, 2, 3], [2, 3, 4])); // expected output: [1, 2, 3, 4]
// console.log(uniqueElements([], [1, 2, 3])); // expected output: [1, 2, 3]


// Task 21
/*
Напишите функцию, которая принимает число и возвращает true,
 если число является простым, и false, если нет.*/

//  function isPrime(num) {
//     if (num < 2) {
//        return false
//     }
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0 ) {
//             return false
//         }
//     }
//     return true
//  }

//  console.log(isPrime(11)); // true
// console.log(isPrime(13)); // true
// console.log(isPrime(4)); // false
// console.log(isPrime(6)); // false
// console.log(isPrime(8)); // false
// console.log(isPrime(9)); // false


// Task 22
/*
Напишите функцию, которая принимает массив чисел и возвращает новый массив,
 содержащий только уникальные элементы (не повторяющиеся)*/

//  function uniqueNum(num) {
//     const uniqueNumber = [];
//     for (let i = 0; i < num.length; i++) {
//         if (!uniqueNumber.includes(num[i])) {
//              uniqueNumber.push(num[i])
//         }
//     }
//     return uniqueNumber
//  }

//  let num = [1, 2, 3, 4, 3, 2, 1, 5];
// let uniqueNumber = uniqueNum(num);
// console.log(uniqueNumber); // Output: [1, 2, 3, 4, 5]


// Task 23
/*
Обычно, когда вы что-то покупаете, вас спрашивают, верен ли номер вашей
 кредитной карты, номер телефона или ответ на ваш самый секретный вопрос. 
 Однако, поскольку кто-то может заглянуть вам через плечо, вы не хотите, 
 чтобы это отображалось на вашем экране. Вместо этого мы маскируем это.
Ваша задача - написать функцию maskify, которая меняет все символы, кроме последних четырех, на '#'.*/

// function maskify(cc) {
//     if (cc.length > 4) {
//         return cc.slice(0, cc.length-4).split('').map(el => el = '#').join('')+cc.slice(-4);
//         }
//         else {
//          return cc
//         }

// console.log(maskify('48091649224263'));

// Task 23 (2)

// function maskify(cc) {
//     cc = cc.split('')
//     for (let i = 0; i < cc.length - 4; i++) {
//         cc[i] = '#'
//     }
//     cc = cc.join('')
//     return cc
//             }
    
//     console.log(maskify('48091649224263'));

// Task 23 (3)

// function maskify(cc) {
// return cc.slice(-4).padStart(cc.length, '#')
// }
//     console.log(maskify('48091649224263'));


// Task 24
/*
Напишите функцию, которая принимает массив объектов, содержащих информацию о 
пользователях (например, имя, возраст, электронная почта и т. д.), и возвращает
 новый массив, содержащий только пользователей, у которых возраст больше 18 лет.*/

//  function filterUsersByAge(users) {
// const result = [];

// for (let i = 0; i < users.length; i++) {
//     const user = users[i];
//     if (user.age > 18) {
//         result.push(user)
//     }
// }
// return result
//   }

//   const users = [
//     { name: 'John', age: 25, email: 'john@example.com' },
//     { name: 'Kate', age: 17, email: 'kate@example.com' },
//     { name: 'Bob', age: 30, email: 'bob@example.com' }
//   ];
  
//   const filteredUsers = filterUsersByAge(users);
//   console.log(filteredUsers);
  
// Task 24 (2)

//    function filterUsersByAge(users) {
//     return users.filter(user => user.age > 18)
//    }

//    const users = [
//     { name: 'John', age: 25, email: 'john@example.com' },
//     { name: 'Kate', age: 17, email: 'kate@example.com' },
//     { name: 'Bob', age: 30, email: 'bob@example.com' }
//   ];
  
//   const filteredUsers = filterUsersByAge(users);
//   console.log(filteredUsers);
  

// Method   padStart,  padEnd 

// const str = 'hello';

// console.log(str.padStart(10));       // "     hello"
// console.log(str.padStart(10, '*'));  // "*****hello"
// console.log(str.padStart(5));        // "hello"

// console.log(str.padEnd(10));         // "hello     "
// console.log(str.padEnd(10, '*'));    // "hello*****"
// console.log(str.padEnd(5));          // "hello"


// Task 25
/*
Напишите функцию, которая принимает на вход массив строк и возвращает новый
 массив, содержащий только те строки, которые начинаются с заглавной буквы.*/

//  function filterUpperCaseStrings(arr) {
//     const result = [];
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i].charAt(0) === arr[i].charAt(0).toUpperCase()) {
//         result.push(arr[i]);
//       }
//     }
//     return result;
//   }  

//  const arr = ['Apple', 'banana', 'Cherry', 'date'];
// const result = filterUpperCaseStrings(arr);
// console.log(result); // ["Apple", "Cherry"]

// Task 25 (2)

// function filterUpperCaseStrings(arr) {
//     return arr.filter(string => string.charAt(0) === string.charAt(0).toUpperCase());
//   }
//   const arr = ['Apple', 'banana', 'Cherry', 'date'];
//   const result = filterUpperCaseStrings(arr);
//   console.log(result); // ["Apple", "Cherry"]
  

// Task 26
/*
Напишите функцию, которая принимает массив из 10 целых чисел (от 0 до 9) и возвращает строку 
из этих чисел в виде телефонного номера. Пример: createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]) 
// => возвращает "(123) 456-7890" Возвращаемый формат должен быть правильным, чтобы выполнить это задание.
 Не забудьте пробел после закрывающих скобок!*/

//  function createPhoneNumber(number) {
//     let num = number.join('')
//     return `(${num.slice(0, 3)}) ${num.slice(3, 6)}-${num.slice(6, 11)}`
//  }

//  console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); 

// Task 26 (2)

//  function createPhoneNumber(numbers) {
//     format = '(xxx) xxx-xxxx';
//     for (let i = 0; i < numbers.length; i++) {
//         format = format.replace('x', numbers[i]);
//     }
//     return format;
//  }

//  console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); 

// Task 26 (3)

// function createPhoneNumber(numbers) {
// return numbers.reduce((p, c) => p.replace('x', c), '(xxx) xxx-xxxx');
// }

// console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); 


// Task 27 reduce
//Найдите наименьший элемент массива:

// const arr = [3, 5, 1, 4, 2];
// const min = arr.reduce((accumulator, currentValue) => currentValue < accumulator ? currentValue : accumulator)

// console.log(min); 

// Task 28 reduce

//Сгенерируйте объект с количеством каждой буквы в строке:

// const str = "hello world";
// const result = str.split("").reduce((accumulator, currentValue) => {
//   if (currentValue in accumulator) {
//     accumulator[currentValue]++;
//   } else {
//     accumulator[currentValue] = 1;
//   }
//   return accumulator;
// }, {});
// console.log(result); // {h: 1, e: 1, l: 3, o: 2, " ": 1, w: 1, r: 1, d: 1}

// Task 29
// Найдите среднее значение элементов массива:

// const arr = [1, 2, 3, 4, 5];
// const average = arr.reduce((accumulator, currentValue, index, array) => {
//     accumulator += currentValue;
//     if (index === array.length - 1) {
//         return accumulator / array.length;
//     }
//     else {
//         return accumulator;
//     }
// });


// console.log(average); // 3

// Task 29 (2)
// Найдите среднее значение элементов массива:

// const arr = [1, 2, 3, 4, 5];
// let total = 0;
// for (let i = 0; i < arr.length; i++){
//     total += arr[i];
// }
// const average = total/arr.length;
// console.log(average); // 3


// Task 30 
/*
Если мы перечислим все натуральные числа ниже 10, которые кратны 3 или 5, то получим
 3, 5, 6 и 9. Сумма этих кратных чисел равна 23.

Доработайте решение так, чтобы оно возвращало сумму всех кратных 3 или 5 чисел ниже переданного числа.

Примечание: Если число кратно и 3, и 5, считайте его только один раз.
*/
// function solution(number) {
//     let result = 0;

//     for (let i = 0; i < number; i++) {
//         if (i % 3 === 0 || i % 5 === 0) {
//             result += i
//         }
//     }
//     return result
// }

// console.log(solution(10)); //23


// Task 31
/*
Написать функцию, которая определяет является ли строка палиндромом, или нет. Вернуть false или true
*/

// const palindrome = (str) => {
//   let lowerStr = str.toLowerCase(); // convert to lower case  
//   return lowerStr.split('').reverse().join(''); // split, reverse and join the string
// }
// console.log(palindrome('hello'));

// Task 32
/*
Вдохновленные командой разработчиков из Vooza, напишите функцию, которая

принимает имя программиста и
возвращает количество световых мечей, принадлежащих этому человеку.
Кстати, единственный человек, владеющий световыми мечами, - Зак. У него их 18, 
что является потрясающим количеством световых мечей. Все остальные владеют 0.

Примечание: ваша функция должна иметь параметр по умолчанию.

Например(Input --> Output):
*/


// function howManyLightsabersDoYouOwn(name = 'anyone else') {
//   return name.toLowerCase() === 'zach' ? 18 : 0
//   }

//   console.log(howManyLightsabersDoYouOwn("Zach")); // 18




// Task 33
/*
Похоже, что какой-то хулиган-сантехник и его брат снова бегали и повредили ваши ступени.

Трубы, соединяющие этапы вашего уровня между собой, необходимо починить, прежде чем вы получите еще больше жалоб.

Список труб корректен, если каждая труба после первого индекса больше (+1), чем предыдущая, и нет дубликатов.

Задача
Получив список чисел, верните фиксированный список, в котором значения увеличиваются на 1 для каждого индекса 
от минимального значения до максимального (оба включены).

Пример
Входные данные: 1,3,5,6,7,8 Выход: 1,2,3,4,5,6,7,8
*/

// function pipeFix(numbers){
//     let max = Math.max(...numbers);
//     let min = Math.min(...numbers)
//     let fixed = []
//     for (let i = min; i <= max; i++) {
//         fixed.push(i)
//     }
//     return fixed
//     }
    
//     console.log( pipeFix([1,2,3,5,6,8,9]))
  


// Эта ката взята с сайта check py.checkio.org

// Вам дан массив с положительными числами и неотрицательным числом N. Вы
//  должны найти N-ую степень элемента массива с индексом N. Если N находится вне массива,
//   то верните -1. Не забудьте, что первый элемент имеет индекс 0.

// Давайте рассмотрим несколько примеров:

// array = [1, 2, 3, 4] и N = 2, тогда результатом будет 3^2 == 9;
// array = [1, 2, 3] и N = 3, но N находится за пределами массива, поэтому результат равен -1.



// function index(array, n) {
//    if (n < 0 || n >= array.length) {
//     return -1;
//    }
//    return Math.pow(array[n], n)
// }

// console.log(index([1,1,1,1,1,1,1,1,1,1]));


// function mergeArrays(arr1, arr2) {
//     let max = Math.max(...arr1, ...arr2);
//     let min = Math.min(...arr1, ...arr2);
//     let fixed = [];

//     for (let i = min; i <= max; i++) {
//         fixed.push(i);
//     }

//     return fixed;
// }

// console.log(mergeArrays([1,2,3,4], [5,6,7,8]));



// Task 34
/*
Вам даны два отсортированных массива, оба из которых содержат только целые числа. Ваша задача - найти 
способ объединить их в один, отсортированный в порядке возрастания. Выполните функцию mergeArrays(arr1, arr2),
 где arr1 и arr2 - исходные отсортированные массивы.

Вам не нужно беспокоиться о проверке, поскольку arr1 и arr2 должны быть массивами с 0 или более целыми числами. 
Если и arr1, и arr2 пусты, то просто верните пустой массив.

Примечание: массивы arr1 и arr2 могут быть отсортированы в разных порядках. Также arr1 и arr2 могут иметь одинаковые 
целые числа. Удалите дубликаты в возвращаемом результате.
*/

function mergeArrays(arr1, arr2) {
    const min = Math.min(...arr1, ...arr2);
    const max = Math.max(...arr1, ...arr2);
    const result = [];

    for (let i = min; i <= max; i++) {
        result.push(i)
    }
    return result
}

  
console.log(mergeArrays(([1,3,5,7,9,11,12], [1,2,3,4,5,10,12]), [1,2,3,4,5,7,9,10,11,12], "Basic tests"));