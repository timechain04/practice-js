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



//***** Модуль 2 Массивы. *****/

// Task 1
/*
Перебор (итерация) массива
for - если нужен индекс или нужно изменить элемент массива
for...of - если индекс не нужен и в массиве ничего менять не нужно
*/

// *1
// * const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];
// * console.log(friends);

// for (let i = 0; i < friends.length; i += 1) {
//     friends[i] += '-1';
// }

// console.table(friends);

// *2
// const friends = ['Mango', 'Kiwi', 'Poly', 'Ajax'];

// for(const friend of friends) {
//     console.log(friend);
// }

// Task 2
/*
Посчитать общую сумму покупок в корзине 
*/

// const cart = [54, 28, 103, 88, 11, 23, 32];
// 1 сделать переменную total до цикла
// let total = 0;

// 2 пребрать массив
// for (let i = 0; i < cart.length; i += 1){
//     console.log(cart[i]);
// 3 каждый элемент приплюсовать к total
//     total += cart[i];
// }

// console.log('Total: ', total);

// * 2 способ через for...of

// const cart = [54, 28, 103, 88, 11, 23, 32];
// let total = 0;

// for (const value of cart) {
//     total += value;
// }
//  console.log('Total: ', total);

// Task 3 
// Напишите скрипт который подсчитывает сумму всех четных чисел в массиве
//***** first way

// const numbers = [2, 39, 40, 23, 44, 48, 100, 22];
// let total = 0;

// 1 перебрать массив
// for (let i = 0; i < numbers.length; i += 1) {
//     const number = numbers[i];
//     console.log(number);

    // 2 на каждой итерации проверить эдемент на четность
// if (number %2 === 0) {
//     console.log('Четное!!!');
//     total += number;
// }
// }

// console.log('Total: ', total);

//***** The second way of Task 3

// const numbers = [2, 39, 40, 23, 44, 48, 100, 22];
// let total = 0;

// for (const number of numbers){
//     console.log(number);

// if (number %2 === 0) {
//     console.log('Четное!!!');
//     total += number;
// }
// }
// console.log('Total: ', total);

// Task 4
/*
Напиши скрипт поиска логина
если логина нет,вынести сообщение "Пользователь [логин] не найден."
если нашли логин, вывести сообщение "Пользователь [логин] найден"

сначала чере for
потом через for...of
логика break
метод includes() с тергарным оператором
*/

// const logins = ['ekjfbek', 'ehwbfwkhbf', 'lastchain', 'jhwvdqk'];
// const loginToFind = 'lastchain';
// let message = `Пользователь ${loginToFind} не найден.`;

// for (let i = 0; i < logins.length; i += 1) {
//     const login = logins[i];
//     console.log('Login: ', login);
//     console.log(`${login} === ${loginToFind}: `, login === loginToFind);

//  if (login === loginToFind) {
//    console.log('Урв равны!!!');
//     message = `Пользователь ${loginToFind} найден.`;
//     break;
//  }   
// }

// console.log(message);

// The second way of task 4

// const logins = ['ekjfbek', 'ehwbfwkhbf', 'lastchain', 'jhwvdqk'];
// const loginToFind = 'lastchain';
// let message = `Пользователь ${loginToFind} не найден.`;

// for (const login of logins) {
//    console.log('Login: ', login);
//    console.log(`${login} === ${loginToFind}: `, login === loginToFind);
   
//    if (login === loginToFind) {
//       console.log('Урв равны!!!');
//        message = `Пользователь ${loginToFind} найден.`;
//        break;
//     }  
// }
// console.log(message);

// The 4-th way of task 4

// const logins = ['ekjfbek', 'ehwbfwkhbf', 'lastchain', 'jhwvdqk'];
// const loginToFind = 'lastchain';
// let message = `Пользователь ${loginToFind} не найден.`;

// console.log(logins.includes(loginToFind));

// The 5-th way of task 4

// const logins = ['ekjfbek', 'ehwbfwkhbf', 'lastchain', 'jhwvdqk'];
// const loginToFind = 'lastchain';

// const message = logins.includes(loginToFind)
//  ? `Пользователь ${loginToFind} найден.`
//  : `Пользователь ${loginToFind} не найден.`;

//  console.log(message);

// Task 5
/*
напиши скрипт поиска самого маленького числа в массиве,
при условии что числа уникальные (не повторяются)
*/

// const numbers = [52, 18, 22, 10, 37, 29, 2];
// let smallestNumber = numbers[0];

// for (const number of numbers){
//    if (number < smallestNumber){
//       smallestNumber = number;
//    }
// }
// console.log('smallestNumber: ', smallestNumber);


// Task 6
/*
? напиши скрипт который объединяет все элементы массива в одно строковое значение
? элементов может быть произвольное количество 
? пусть элементы массива в строке будут раязделены запятой 
*/

// const friends = ['Mango', 'Poly', 'Kiwi', 'Ajax'];

// const string = friends.join (',');
// console.log(friends);
// console.log(string);


// Task 7
/*
? напиши скрипт который заменяет регистр каждого символа в строке на противоположный 
? например если строка "JavaScript", то на выходе должна быть строка "jAVAsCRIPT"
*/

// const string = 'JavaScript';
// const letters = string.split('');
// let invrtedString = '';

// console.log(letters);

// for (const letter of letters) {
//    console.log(letter);

//    if (letter === letter.toLowerCase()){
//       console.log('Эта буква в нижнем регистре!!! - ', letter);

//       invrtedString += letter.toUpperCase();
//    } else {
//       console.log('Эта буква в верхнем регистре!!! - ', letter);
//       invrtedString += letter.toLowerCase();
//    }
// }
// console.log(invrtedString);

// OR

// const string = 'JavaScript';
// const letters = string.split('');
// let invrtedString = '';

// console.log(letters);

// for (const letter of letters) {
//    console.log(letter);

//    const isEqual = letter === letter.toLowerCase();
//    invrtedString += isEqual ? letter.toUpperCase() : letter.toLowerCase();
// }

// console.log('invrtedString: ', invrtedString);

// Task 8
/*
? делаем slug в URL из названия статьи (например из dev.to)
? заголовок статьи состоит только из букв и пробелов 
? нормализуем строку
? разбиваем по словам 
? сшиваем в строку с разделителем
*/

// const title = 'Top 10 benefits of React framework';

// const normalizedTitle = title.toLowerCase();

// const words = normalizedTitle.split(' ');

// const slug = words.join('-');

// const slug1 = title.toLowerCase().split(' ').join('-');

// console.log(slug1);

// Task 9
/*
? напиши скрипт который считает сумму элементов двух массивов
*/

// const array1 = [5, 10, 32, 11];
// const array2 = [39, 9, 13];
// let total = 0;

// const numbers = array1.concat(array2);

// for (const number of numbers) {
//    total += number;
// }

// console.log(total);

// Метод splice 
// Task 1

// const cards = [
//    'Карточка-1',
//    'Карточка-2',
//    'Карточка-3',
//    'Карточка-4',
//    'Карточка-5',
// ]

// console.log(cards);

/*
удаление (по индексу), метод indexOf()
*/

// const cardToRemove = 'Карточка-3';
// const index = cards.indexOf(cardToRemove);
// console.log(index);

// cards.splice(index, 1);

// console.log(cards);

/*
добавление (по индексу)
*/

// const cards = [
//    'Карточка-1',
//    'Карточка-2',
//    'Карточка-3',
//    'Карточка-4',
//    'Карточка-5',
// ]

// console.log(cards);

// const cardToInsert = 'Карточка-6';
// const index = 3;

// cards.splice(index, 0, cardToInsert);

// console.log(cards);

/*
обновление (по индексу)
*/

// const cards = [
//    'Карточка-1',
//    'Карточка-2',
//    'Карточка-3',
//    'Карточка-4',
//    'Карточка-5',
// ]

// console.log(cards);

// const cardToUpdate = 'Карточка-4';
// const index = cards.indexOf(cardToUpdate);

// console.log(index);

// cards.splice(index, 1, 'Обновленная карточка-4');

// console.table(cards);

// Task 10
/*
? создайте массив genres с элементами "Jazz" и "Blues"
? добавьте "Рок-н-ролл" в конец 
? выведите в консоль первый элемент массива
? выведите в консоль последний элемент массива. Код должен работать для массива произвольной длинны 
? удалите превый элемент и выведите его в консоль
? вставьте " Country " и "Reggy" в начало массива
*/

// const genres = ['Jazz', 'Blues'];

// genres.push('Рок-н-ролл')

// console.log(genres[0]);
// console.log(genres[genres.length - 1]);

// const firstElOfGenres = genres.shift();
// console.log(firstElOfGenres);

// genres.unshift('Country', 'Reggy' )
// console.log(genres);


// Task 11
/*
напиши скрипт поиска самого маленького числа в массиве 
код должен работать для любого массива чисел
используй цикл для решения задачи
*/

// const numbers = [11, 33, 1, 23, 77, -23, 93, 12];
// let min = numbers[0];

// for(let i = 1; i < numbers.length; i += 1) {
//    if (numbers[i] < min) {
//       min = numbers[i];
//    }
// }

// console.log(min);

// Task 12
/*
у нас есть массив с зарплатами сотрудников,нужно посчитать общую сумму зарплат 
*/

// 1 вариант 

// const salaries = [200, 450, 700, 280, 900];
// let total = 0;

// for (let i = 0; i < salaries.length; i += 1){
//    total += salaries[i];
// }

// console.log(total);

// 2 вариант 

// const salaries = [200, 450, 700, 280, 900];
// let total = 0;

// for (const item of salaries) {
//    total += item
// }

// console.log(total);

// Task 13
/*
у нас есть несколько массивов с зарплатами сотрудников из разных отделов,нужно посчитать общую сумму зарплат 
*/

// 1 вариант 

// const managerSalaries = [200, 350, 200, 380, 500];
// const developerSalaries = [800, 9500, 7340, 7800, 9000]; 


// let total = 0;

// for (let i = 0; i < managerSalaries.length; i += 1){
//    total += managerSalaries[i];
// }

// for (let i = 0; i < developerSalaries.length; i += 1){
//    total += developerSalaries[i];
// }

// console.log(total);

// второй способ 1 варианта через for...of

// const managerSalaries = [200, 350, 200, 380, 500];
// const developerSalaries = [800, 9500, 7340, 7800, 9000]; 


// let total = 0;

// for (const item of managerSalaries) {
//    total += item;
// }

// for (const item of developerSalaries) {
//    total += item;
// }

// console.log(total);

// 2 вариант 

// const managerSalaries = [200, 350, 200, 380, 500];
// const developerSalaries = [800, 9500, 7340, 7800, 9000];

// const salaries = [].concat(managerSalaries, developerSalaries);
// let total = 0;

// for (let i = 0; i < salaries.length; i += 1){
//    total += salaries[i];
// }

// console.log(total);

// 2 вариант второго варианта Task 13

// const managerSalaries = [200, 350, 200, 380, 500];
// const developerSalaries = [800, 9500, 7340, 7800, 9000]; 

// const salaries = [].concat(managerSalaries, developerSalaries);
// let total = 0;

// for (const item of salaries) {
//    total += item;
// }

// console.log(total);

//*****  Модуль 2  Функции  *****/

// Task 1
/*
напиши функцию findLogin allLogins, login для поиска логина
если логина нет, вывести сообщение Пользователь [login] не найден
если нашли логин, вывести сообщение Пользователь [login] найден
*/

// const logins = ['m4nDoge', 'kiwidab3', 'pizza7boy', 'wownow33'];

// const findLogin = function (allLogins, loginToFind) {
//    for (const login of allLogins) {
//       if (login === loginToFind) {
//          return `Пользователь ${loginToFind} найден.`;
//       }
//    }
//    return `Пользователь ${loginToFind} не найден.`;
// };

// console.log(findLogin(logins, 'seewith3'))
// console.log(findLogin(logins, 'kiwidab3'))
// console.log(findLogin(logins, 'low33view'))
// console.log(findLogin(logins, 'withhim22'))

// Task 2
/*
напиши функцию changeCase(string) которая заменяет регистр 
каждого символа в строке на противоположный 
например если строка 'JavaScript', то на выходе должна быть строка 'jAVAsCRIPT'
*/

// const string = "qweRTvdCv";
// const letters = string.split('');
// let invertedString = '';

// for (const letter of letters) {
//    const isEqual = letter === letter.toLowerCase();

//    invertedString += isEqual ? letter.toUpperCase() : letter.toLowerCase();
// }

// console.log('invertedString: ', invertedString);


 /*
Базовые методы: split и join, indexOf и includes, push, slice и splice, concat
*/

// Task 1

/*
напиши скрипт для вычисления площади прямоугольника со сторонами,
значения которых хранятся в переменной values в виде строки 
значения гарантированно разделены пробелом
*/

// const values = '8 11';
// const sideArr = values.split(' ');

// const area = sideArr[0] * sideArr[1];

// console.log(area);

// Task 2

/*
напиши скрипт который выводит в консоль имя и телефонный номер пользователя 
в пременных names и phones хранятся строки имен и телефонных номеров, разделенные запятыми
порядковый номер имен и телефонов в строках указывают на соответствие 
количество имен и телефонов гарантированно одинаковое
*/

// const names = 'Jacob,William,Solomon,John';
// const phones = '8902832939, 8901118347, 8909920137,8900103841';
// const namesArr = names.split(',');
// const phonesArr = phones.split(',');

// for (let i = 0; i < namesArr.length; i += 1) {
//    console.log(`${namesArr[i]}: ${phonesArr[i]}`);
// }

// Task 3

/*
напиши скрипт который "разворачивает" строку (обратный порядок букв)
и выводит ее в консоль
*/

// 1 вариант
// const string = 'Welcome to the future';
// const charsArr = string.split('');
// const reverseArr = [];
// let reverseStr = 0;

// for (let i = charsArr.length - 1; i >= 0; i -= 1) {
//    reverseArr.push(charsArr[i]);
// }

// reverseStr = reverseArr.join('');

// console.log(reverseStr);

// 2 вариант
// const string = 'Welcome to the future';
// let reverseArr = '';

// for (let i = string.length - 1; i >= 0; i -= 1) {
//    reverseArr += string[i];
// }

// console.log(reverseArr);

// 3 вариант (цепочка петодов)
// const string = 'Welcome to the future'.split('').reverse().join('');

// console.log(string);

// 4 вариант 
// const string = 'Welcome to the future';
// let charsArr = string.split('');
// charsArr = charsArr.reverse();
// const reverseStr = charsArr.join('');

// console.log(reverseStr);