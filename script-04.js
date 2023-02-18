// Колбэк-функции


// Task 1 Метод map()
//  Есть массив студентов, а нужно получить отдельный массив их имён.

// const students = [
//     { name: "Манго", score: 83 },
//     { name: "Поли", score: 59 },
//     { name: "Аякс", score: 37 },
//     { name: "Киви", score: 94 },
//     { name: "Хьюстон", score: 64 },
//   ];

// const names = students.map(student => student.name)
// console.log(names);

// Task 2 цепочки вызовов

// const numbers = [1, 5, 2, 4, 3];

// const sorted = numbers 
// .filter(num => num > 2)
// .map(num => num * 3)
// .sort((a, b) => a - b);

// console.log(sorted);

// Task 3
// Сумма введённых чисел
// Напишите функцию sumInput(), которая:
// Просит пользователя ввести значения, используя prompt и сохраняет их в массив.
// Заканчивает запрашивать значения, когда пользователь введёт не числовое значение, пустую строку или нажмёт «Отмена».
// Подсчитывает и возвращает сумму элементов массива.
// P.S. Ноль 0 – считается числом, не останавливайте ввод значений при вводе «0».
// Обратите внимание на малозаметную, но важную деталь решения. Мы не преобразуем value в число сразу после prompt, потому 
// что после value = +value мы не сможем отличить пустую строку (конец записи) от «0» (разрешённое число). Мы сделаем это позже.

// function sumInput() {

//   let numbers = [];

//   while (true) {

//     let value = prompt("Введите число", 0);

//     if (value === "" || value === null || !isFinite(value)) break;

//     numbers.push(+value);
//   }

//   let sum = 0;
//   for (let number of numbers) {
//     sum += number;
//   }
//   return sum;
// }

// alert( sumInput() );

// Task 4
// Напиши функцию each(array, callback), которая первым параметром ожидает массив, а другим - функцию которая применяется к каждому элементу массива
// Функция each должна вернуть новый массив, элементами которого будут результаты вызова колббека

// const numbers = [1, 2, 3, 4, 5];

// function each(array, callback) {
//     const newArray = [];
//     for (elemnt of array) {
//         newArray.push(callback(elemnt));
//     }
//     return newArray;
// }

// function loger (number) {
//     console.log(number);
//     return number * 2;
// }

// console.log(each(numbers, loger));

