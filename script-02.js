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

// Task 4

/*
у нас есть массив сотрудников, отсортируйте его, чтобы сотрудники не повторялись 
*/

// const employees = ['Dennis', 'Dennis', 'Shaw', 'Watkins', 'Ray', 'Shaw'];
// const filteredEmployees = [];

// for (let i = 0; i < employees.length; i += 1) {
//    if (i === employees.indexOf(employees[i])) {
//       filteredEmployees.push(employees[i]);
//    }
// }

// console.log(filteredEmployees);

//сотрудник Shaw уволился, удалите его из массива 
// const idxOfShaw = filteredEmployees.indexOf('Shaw');
// filteredEmployees.splice(idxOfShaw, 1);

// console.log(filteredEmployees);

//добавьте нового сотрудника Thorton, перед Watkins;
// const idxOfWatkins = filteredEmployees.indexOf('Watkins');
// filteredEmployees.splice(idxOfWatkins, 0, 'Thorton');

// console.log(filteredEmployees);


// Task 5

/*
Напиши функцию findLongestWord(string) которая принимает произвольную строку 
состоящую только из слов разделённых пробелом (параметр string) и возвращает 
самое длинное слово в этой строке.
*/

// function findLongestWord(string) {

//   const word = string.split(' ');
//   let theLongestWord = word[0];
    
//    for (let i = 1; i < word.length; i += 1) {
//     if (word[i].length > theLongestWord.length) {
//      theLongestWord = word[i];
//     }
//    }
//   return theLongestWord
  
//   }

  // Task 5

/*
Дополни код функции createArrayOfNumbers(min, max) так, чтобы она 
возвращала массив всех целых чисел от значения min до max
*/

// function createArrayOfNumbers(min, max) {
//     const numbers = [];

//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i)
//   }
//     return numbers;
//   }
  

  // Task 6

/*
Напиши функцию filterArray(numbers, value), которая принимает массив чисел (параметр numbers) и возвращает новый массив,
 в котором будут только те элементы массива numbers, которые больше чем значение параметра value (число).
*/

// function filterArray(numbers, value) {
//  const array = [];
 
//    for (let i = 0; i < numbers.length; i += 1) {
//      if (numbers[i] > value){
//        array.push(numbers[i])
//      }
//    }
//    return array
//  }

  // Task 7

/*
Общими элементами массивов называют те элементы, которые присутствуют во всех массивах.
Например, в двух массивах [1, 3, 5] и [0, 8, 5, 3] общими будут числа 3 и 5, т.к. они присутствуют в 
обоих исходных массивах. А числа 0, 1 и 8 присутствуют только в одном из массивов.
Напиши функцию getCommonElements(array1, array2) которая получает два массива произвольной длины в 
параметры array1 и array2, и возвращает новый массив, состоящий из тех элементов, которые присутствуют в обоих исходных массивах.
*/

// function getCommonElements(array1, array2) {
// const filteredArrays = [];

//   for (let i = 0; i < array1.length; i += 1) {
//     if (array2.includes(array1[i])) {
//         filteredArrays.push(array1[i]);
//       }
//     }
//   return filteredArrays
//   }
  
  // Task 8
  // Напиши функцию getEvenNumbers(start, end) которая возвращает массив всех чётных чисел от start до end.
  // Чётным считается число которое делится на 2 без остатка (10 % 2 === 0).

// function getEvenNumbers(start, end) {
//  let number = []
//  for (let i = start; i<= end; i += 1){
//   if (i % 2 === 0) {
//     number.push(i)
//   }
//  }
//    return number
//    }

  // Task 9

/*
Напиши функцию calcBMI(weight, height) которая рассчитывает и возвращает индекс массы тела человека
для этого необходимо разделить вес в киллограммах на квадрат высоты человека в метрах 
вес и высота будут будут специально переданы как строки. Нецелые числа могут быть заданы в виде 24.7 или 24,7
то есть в качестве разделителя дробной части может быть запятая 
индекс массы тела необходимо округлить до одной цифры после запятой
*/

// function calcBMI(weight, height) {
//     const userWeight = Number.parseFloat(weight.replace(',', '.'));
//     const userHeight = Number.parseFloat(height.replace(',', '.'));

//    const bmi = userWeight / userHeight ** 2;
   
//   return bmi.toFixed(1); 
// }

// const userBMI = calcBMI('88,3', '1.75');
// console.log(userBMI);

  // Task 10

/*
Напиши функцию min(a,b), которая возвращает меньше из чисел a и b
*/

// function min(a,b) {
//     return a < b ? a : b;
// }

// console.log(min(2, 5));
// console.log(min(3, -1));
// console.log(min(1, 1));


  // Task 11

/*
Напиши функцию getRectArea(dimensions) для вычисления площади прямоугольника со стронами
значение которых будет переданы в параметр dimensions в виде строки 
значение гарантированно разделены пробелом
*/

// function getRectArea(dimensions) {
//     const sideArr = dimensions.split(' ');

//     return sideArr[0] * sideArr[1];
// } 

// console.log(getRectArea('8 11')); //89
// console.log(getRectArea('18 11')); //198
// console.log(getRectArea('8 21')); //168

  // Task 12

/*
Напиши функцию printContactsInfo(names, phones) которая выводит в консоль имя  телефонный номер пользователя 
в параметры names и phones будут переданы строки имен и телефонных номеров, разделенные запятыми
порядковый номер имен и телефонов в строках указывают на соответствие 
количество имен и телефонов гарантировано одинаковое
*/

// function printContactsInfo(names, phones) {
//     const userNamesArr = names.split(',');
//     const userPhonesArr = phones.split(',');

//    for (let i = 0; i < userNamesArr.length; i += 1) {
//     console.log(`${userNamesArr[i]}: ${userPhonesArr[i]}`);
//    }
// }

// printContactsInfo (
//     'Vera, Carr, Violet, Sherman',
//     '8902831726, 8902731238, 8902773173, 8901733235'
// );

// printContactsInfo('Vera, Carr, Violet, Sherman', '8902831726, 8902731238, 8902773173, 8901733235')

  // Task 13
/////////////////////////
/*
Методы
*/

// let names = ['John', 'Marta', 'Oleg', 'Paul']


// join
// let text = names.join(',')
// console.log(text); //John,Marta,Oleg,Paul

// includes
// let bool = names.includes('Natali')
// console.log(bool) //false

// slice
// 1
// let newArr = names.slice(2);
// console.log(newArr); // ['Oleg', 'Paul']

// 2 
// let newArr = names.slice(1, 3);
// console.log(newArr); // ['Marta', 'Oleg']

// pop меняет длину массива  и возвращает значение  Удаляет последний элемент и возвращает его
// console.log(names.pop()); // Paul
// console.log(names); // ['John', 'Marta', 'Oleg']

// push возвращает длину строки
// let newArr = names.push('LOOK HERE');
// console.log(newArr); // 5

// shift меняет длину массива и возвращает значение. Удаляет первый элемент и возвращает его
// let newArr = names.shift();
// console.log(newArr); // John

// unshift возвращает длину строки Добавляет в первую позицию
// names.unshift('LOOK HERE');
// console.log(names); // ['LOOK HERE', 'John', 'Marta', 'Oleg', 'Paul']

// concat
// let fruits = ['apple', 'orange', 'pineapple']
// let newArr = names.concat(fruits)
// console.log(names)  //  ['John', 'Marta', 'Oleg', 'Paul']
// console.log(newArr)  //  ['John', 'Marta', 'Oleg', 'Paul', 'apple', 'orange', 'pineapple']

// split Превращает строку в массив
// let string = 'HELLO MY NAME BOHDAN';
// let stringArr = string.split('')
// console.log(stringArr)  // ['H', 'E', 'L', 'L', 'O', ' ', 'M', 'Y', ' ', 'N', 'A', 'M', 'E', ' ', 'B', 'O', 'H', 'D', 'A', 'N'] 

// splice
// let numbers = [1,2,3,4,5,6,7,8,9]
// добавление
// numbers.splice(5, 0, '777');
// console.log(numbers);  // [1, 2, 3, 4, 5, '777', 6, 7, 8, 9]
// удаление
// numbers.splice(3, 4)
// console.log(numbers); 
/////////////////////////

// Task 16
/*
Напишите код, который выводит все простые числа из интервала от 2 до n .
Для n = 10 результат должен быть 2,3,5,7 .
*/

// let n = 10;
// nextPrime:
// for (let i = 2; i <= n; i += 1) {
//     for (let j = 2; j < i; j += 1) {
//         if (i % j == 0) continue nextPrime;
//     }
//     alert(i);
// }



// Task 17
/*
напиши скрипт для пребора массива fruits циклом for
для каждого элемента массива выведи в консоль строку в формате номер_элемента: значение_элемента
нумерация элементов должна начинаться с первого
*/

// const fruits = ['apple', 'orange', 'banana', 'pineapple']
// let number = 0;

// for (let i = 0; i < fruits.length; i += 1) {
//   number += 1;

//   const fruit = fruits[i];
//   console.log(fruit)
// }

// Task 18
/*
напиши скрипт поиска наименьшего числа в массиве 
код должен работать для какого-либо массива чисел
используй цикл для решения задачи
*/

// const numbers = [29, 99, 31, -11, 23, 42]
// let minNumber = numbers[0];

// for (let i = 0; i <= numbers.length; i += 1) {
//   console.log(i);
//   console.log(numbers[i]);
// }


// Task 19
/*
напиши функцию min(a,b), которая возвращает наименьшее из чисел a и b
*/

// function min (a, b) {
//   if (a < b) {
//     return a
//   }
//   else if (a === b) {
//     return `${a} равно ${b}`
//   }
//   else {
//     return b
//   }
// }
// console.log(min(25,24))

// the second way

// function min (a, b) {
//   return a < b ? a : b
// }
// console.log(min(25,24))


// Task 20
/*
напиши функцию getReactArea(dimensions) для вычисления площади прямоугольника с
сторонами значение которых будет передана до параметра dimensions в виде строки.
значение гарантировано разделено пробелом
*/

// function getReactArea(dimensions) {
//   let arr = dimensions.split(' ');
//   console.log(arr[0] * arr[1]);
//   return arr[0] * arr[1];
// }
// console.log(getReactArea('8 11'))

// Task 21

//Поиск самого длинного слова
//Задание
//Напиши фукцнию findLongestWord(string) которая принимает произвольную строку состоящую только из 
//слов разделённых пробелом (параметр string) и возвращает самое длинное слово в этой строке.
//
//Тесты
//Объявлена функция findLongestWord(string).
//Вызов функции findLongestWord('The quick brown fox jumped over the lazy dog') возвращает jumped.
//Вызов функции findLongestWord('Google do a roll') возвращает Google.
//Вызов функции findLongestWord('May the force be with you') возвращает force.
//Вызов функции findLongestWord() со случайной строкой возвращает правильное значение.

// function findLongestWord(string) {

// const word = string.split(' ');
// let theLongestWord = word[0];
  
//  for (let i = 1; i < word.length; i += 1) {
//   if (word[i].length > theLongestWord.length) {
//    theLongestWord = word[i];
//   }
//  }
// return theLongestWord


// }

// console.log(findLongestWord("Google do a roll"))


// // 2 varient

// function findLongestWord(string) {

//   let words = string.split(' ');
//   let longestWord = words[0];
  
//   for (let word of words) {
//   if (word.length > longestWord.length) {
//   longestWord = word;
//   }
    
//   }
// return longestWord;

// }

// console.log(findLongestWord("Google do a roll"))




