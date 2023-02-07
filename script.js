//***** Модуль 1 Переменные и типы данных *****/
// 1
// Random color

// const colors = ['tomato', 'teal', 'orange', 'deeppink' ];
// const max = colors.length - 1;
// const min = 0;
// const index = Math.round(Math.random() * (max - min) + min);
// const color = colors[index];
// console.log(color);
// document.body.style.backgroundColor = color;
  
// 3
// Цикл
// for (let i = 0; i <= 20 ; i += 1 ){
//     console.log(i)
//   } // от 0 до 20

/* 
* Напиши скрипт который подсчитывает сумму всех четных чисел,
* которые входят в диапозон чисел переменных от min до max,
* например, если min = 0 и max = 5, то диапозон 0-5, и в нем два четных числа - 2 и 4, их сумма 6.  
*/

//*1
// const min = 6;
// const max = 13;
// let total = 0;

//*2
// for (let i = min; i <= max; i += 1){
//     console.log(i);

//    if (i % 2 === 0) {
//     console.log('четное: ', i);
//     total += i;
//    } 
// }
//*3
// console.log('total: ', total);


// 4
//  ? Дано 90 минут, узнайте сколько в данном числе содержится часов и минут.
//  ? Результат выведите в консоль 

// const totalMinutes = 90;
// let hours = totalMinutes / 60;
// hours = Math.floor(hours);
// const minutes = totalMinutes % 60;
// console.log('hours: ', hours);
// console.log('minutes: ', minutes); //hours:  1  minutes:  30

// 5
// ? попросите пользователя ввести число
// ? выведите результат в консоль
// ? приведите строку к числу

// let number = prompt('Введите число');
// number = Number(number);
// console.log(number);
 

// 5
// ? дана строка  '24px', достаньте с этой строки целое число 

// let str = '24px';
// str = Number.parseInt('24px')
// console.log(str);

// 6
// ? дана строка '25.5%', достаньте с этой строки дробное число

// let str = '25.5%';
// str = Number.parseFloat('25.5%')
// console.log(str);

//7
// ? запросите у пользователя ввести два числа, сложите их и выведите их в консоль

// const firstNumber = Number.parseFloat(prompt('Введите первое число'));
// const secondNumber = Number.parseFloat(prompt('Введите второе число'));
// const result = firstNumber + secondNumber;
// console.log(result);

// 8
// ? дано число 23.5, примените к нему различные методы округления,
// ? протестируйте на числах 23.3, 23.9

// *1
// const number = 23.5;
// const result = Math.floor(number); 
// console.log(result); // 23 //метод floor всегда округляет вниз

// *2
// const number = 23.5;
// const result = Math.ceil(number); 
// console.log(result); // 24 //метод ceil всегда округляет вверх

// *3
// const number = 23.4;
// const result = Math.round(number); 
// console.log(result); // 23 //метод round округляет по математическим правилам,если дробная часть 5 и больше,то округление вверх, если меньше 5,то вниз

//9 
// ? попросите польщователя ввести число и степень
// ? введите число и степень и выведите результат в консоль

// const number = Number(prompt('Введите число'));
// const power = Number(prompt('Введите степень'));
// const result = number ** power; // === // const result = Math.pow(number, power);
// console.log(result);

// для того чтобы найти среди групп чисел максимальное и минимальное 

// const maxNum = Math.max(35, 42, 2, 74, 45);
// console.log(maxNum); //2

// const maxNum = Math.min(-22, 35, 42, 2, 74, 45);
// console.log(maxNum); //-22

//10
// ? сгенерируйте рандомное число
// ? от 0 до 1
// ? от 10 до 50

// *1
// const random = Math.random();
// console.log(random);

// *2
// const min = 10;
// const max = 50;
// const random = Math.round(min - 0.5 + Math.random() * (max- min + 1));
// console.log(random);

//11
// ? сгенерируйте рандомное число. Минимальное и максимальное значение, получить от пользователя

// const min = Number.parseFloat(prompt('Введите минимальное число'));
// const max = Number.parseFloat(prompt('Введите максимальное число'));

// const randomNum = Math.round(min - 0.5 + Math.random() * (max - min + 1));
// console.log(randomNum);

//12 
// ? попросите пользователя ввести email и перевести в нижний регистр

// const userEmail = prompt('Введите email');
// const normalizeUserEmail = userEmail.toLowerCase();
// console.log(normalizeUserEmail);

// 13
/* ? есть строка 'HTML, JS, REACT, NODE, PHP, PYTHON'
   ? узнайте есть лм в этой строке язык: 'JavaScript', или 'JS'
   ? если есть, узнайте на какой позиции находится данная строка 
  */

//    let languages = 'HTML, JS, REACT, NODE, PHP, PYTHON';
//    const subStr = prompt('Введите язык програмирования');
   
//     const result = languages.includes(subStr);
//     const indexOfSubstr = languages.indexOf(subStr);
//     console.log(result);
//     console.log(indexOfSubstr);

// 14 
// ? у нас есть строка '24px', узнайте на что заканчиватся данная строка, на %, rem, px

// const str = '24px';
// const substr = '%';

// const result = str.endsWith(substr);
// console.log(result); // false

// 15
// ? у нас есть строка '23,4', замените запятую на точку

// let str = '23,4';
// const result = str.replace(',', '.');
// console.log(result); //23.4

// 16
/* ? у нас есть строка:
   'car dolor sit amet, consectetur car elit. Vitae quasi beatae car natus '
   замени все вхождения car на bus
   */

//    let str =  'car dolor sit amet, consectetur car elit. Vitae quasi beatae car natus';
//    const resultStr = str.replaceAll('car', 'bus');
//    console.log(resultStr);

// 17 
/* ? дана строка 'Vasyl Pupkin is 24 years old'
   ? скопируйте с этой строки отдельно имя с фамилией и отдельно возраст
*/

// const someStr = 'Vasyl Pupkin is 24 years old';
// const userName = someStr.slice(0, 12);
// const userAge = someStr.slice(16, 18);
// console.log(userName); // Vasyl Pupkin
// console.log(userAge);  // 24


//***** Занятие 2. Модуль 1 */ 

// 1
/*
? дана строка состоящая из символов, например 'abcfd' 
? проверьте, что первый символ этой строки является буква 'a'
? если это так- выведите 'да', в противном случае 'нет'
*/

// const str = 'abcfd' 

// if (str.startsWith('a')){
//     console.log('да');
// } else {
//     console.log('нет');
// } // да

// 2
/* 
запросить у пользователя число, если число равно 10, то выведите 'Верно',
 иначе выведите 'Неверно'
*/

// const number = Number.parseFloat(prompt('Введите число'));

// if (number === 10){
//     console.log('Верно');
// } else{
//     console.log('Неверно');
// } //Верно

//3

// const number = Number.parseFloat(prompt('Введите число между 0 и 3', ''));

// switch(number) {
//     case 0: {
//         alert('Вы ввели число 0');
//         break;
//     }
//     case 1: {
//         alert('Вы ввели число 1');
//         break;
//     }
//     case 2: {

//     }
//     case 3: {
//         alert('Вы ввели число 2, а может и 3');
//         break;
//     }
//     default: {
//         alert('Вы ввели какое-то другое число')
//     }

// }

// 4 
// Циклы
// While пока условие верно, цикл выполняется 

// let iterator = 1;

// while (iterator <= 5) {
//     console.log('Hello');

//     iterator = iterator + 1;
// }

// 5
// ? Найдите сумму чисел от 1 до 100

// let iterator = 1;
// let result = 0;

// while (iterator <= 100) {
//     result += iterator;
//     iterator += 1;
// }
// console.log(result);

// 6
// ? дано число n = 1000
// ? делите его на столько раз, пока результат деления не станет меньше 50 
// ? какое число получится?
// ? посчитайте  количество итераций, необходимых для этого, и запешите его в переменную num

// let n = 1000;
// let counter = 0;

// while (n / 2 > 50) {
//   counter += 1;
//   n /= 2;
// }
// console.log(n);
// console.log(counter);


// Цикл Do while , тело цикла выполнится хотя бы один раз, даже при условии что оно не верно

// 1
/*
? напишите цикл, который предлагает prompt ввести число, больше 100
? если посетитель ввел другое число - попросить ввести еще раз, и так далее 
? цикл должен спрашивать число пока посетитель не введет число больше 100
? предполагается, что посетитель вводит только числа 
*/

// let number;

// do {
//     number = Number.parseFloat(prompt('Введите число больше 100'));
   
// } while (number < 100);


// Цикл For
// for (инициализация; условие; пост-выражение){
//     тело цикла }

// 1
// ? при помощи цикла for вывести четные числа от 2 до 10

// for (let i = 2; i <= 10; i += 1){
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }

// 2
/*
? пререпишите программу, которая выводит через console.log все числа от 1 до 100, с двумя исключенями 
? для чисел, нацело делящихся на 3, она должна выводить 'Fizz',
? а для чисел делящихся на 5 - 'Buzz'
? для чисел которые кратны 3 и 5 - 'FizzBuzz' 
*/

// for (let i = 1; i < 100; i += 1){
//     if (i % 3 === 0 && i % 5 === 0){
//         console.log('FizzBuzz');
//     }
//     else if (i % 3 === 0){
//         console.log('Fizz');
//     }
//     else if (i % 5 === 0){
//         console.log('Buzz');
//     }
//     else {
//         console.log(i)
//     }
// } 

// 2 рещение 

// for (let i = 1; i < 100; i += 1){
//     let str = '';

//     if(i % 3 === 0) {
//         str = str + 'Fizz';
//     }
//     if(i % 5 === 0) {
//         str = str + 'Buzz';
//     } 
//     console.log(str || i);
// }

// 3

// let star = '*'

// for (i = 1; i <= 7; i += 1){
//     console.log(star);

//     star += '*';
// }


