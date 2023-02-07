//***** Модуль 3 Объекты.  spread, rest  *****/

// Task 1
/*
Функция findMatches() принимает произвольное количество аргументов. Первым аргументом всегда будет массив
 чисел, а остальные аргументы будут просто числами.

Дополни код функции так, чтобы она возвращала новый массив matches, в котором будут только те аргументы,
 начиная со второго, которые есть в массиве первого аргумента.

Например, findMatches([1, 2, 3, 4, 5], 1, 8, 2, 7) должна вернуть массив [1, 2], потому что только они есть
 в массиве первого аргумента.
*/


// function findMatches(values, ...args) {
//     const matches = []; 
  
//     for (arg of args) {
//       if (values.includes(arg)) {
//         matches.push(arg)
//       }
//     }

//     return matches;
//   }
  
// Task 2
// получите сумму зарплаты всех сотрудников

// const salaries = {
// John: 160,
// Ann: 190,
// Michael: 200,
// }

// let total = 0;

// for (const key in salaries) {
    
//     total += salaries[key];
// }

// console.log(total);


// 2 way
// const salaries = {
// John: 160,
// Ann: 190,
// Michael: 200,
// }


// const salariesKeys = Object.keys(salaries);
// let total = 0;

// for (const key of salariesKeys) {
    
//     total += salaries[key];
// }

// console.log(total);

// 3 way 
// const salaries = {
//     John: 160,
//     Ann: 190,
//     Michael: 200,
//     }
    
//     const salariesKeys = Object.values(salaries);
//     let total = 0;
    
//     for (const value of salariesKeys) {
        
//         total += value;
//     }
    
//     console.log(total);


// Task 3
/*
Напиши скрипт который, который для объекта user последовательно:
добавляет поле mood с значением 'happy'
заменяет значение hobby на 'skydiving'
заменяет значение premium на false
выводит содержимое объекта user в формате ключ: значение используя Object.keys() и for..of
*/

// const user = {
//     name: 'Mango',
//     age: 20,
//     hobby: 'html',
//     premium: true,
// }

// user.mood = 'happy';

// user.hobby = 'skydiving';

// user.premium = !user.premium;

// console.log(Object.keys(user));

// let keys = Object.keys(user);

// for (let key of keys) {
//     console.log(key, user[key]);
// }


// Task 4
/*
Напиши скрипт управления личным кабинетом интернет-банка
есть объет account, в котором необходимо реализовать методы для работы с балансом и историей транзакций
типов транзакций только два: DEPOSIT - WITHDRAW
можно положить или снять деньги с счета
каждая транзакция это объект со свойствами: id, type и account 
*/

// const Transaction = {
//     DEPOSIT: 'deposit',
//     WITHDRAW: 'withdraw',
// };

// const account = {
//     balance: 0,
//     transaction: [],

//     createTransaction(amount, type) {
//         return {
//             amount,
//             type,
//             id: Math.round(Math.random()*6554)
//         }
//     },
//     deposit(amount) {
//         this.balance += amount
//         this.transaction.push(this.createTransaction(amount, Transaction.DEPOSIT))
//     },
//     withdraw(amount) {
//         if (this.balance >= amount) {
//             this.balance -= amount
//             this.transaction.push(this.createTransaction(amount, Transaction.WITHDRAW))
//         }
//         else{
//             console.log('Недостаточно средств')
//         }
//     },
//     getBalance(){
//         return this.balance
//     },
//     getTransactionHistory(){
//         return this.transaction
//     },
//     getTransactionDetails(id){
//         for(let transaction of this.transaction) {
//             if(transaction.id === id) {
//                 return transaction
//             }
//         }
//         return 'Такой транзакции не существует'
//     }

// }

// console.log('-----------------------------')
// console.log('USER ACC -> ', account)

// Task 5
/*
Отсортировать массив
*/

// const array = [49, 22, 39, 11, 9, 2]

// function getSorted(array) {
//     const result = {};

//     for (const number of array) {
//         result[number] = number;
//     }
//     console.log(result);

//     return Object.values(result);
// }

// console.log(getSorted(array)); 

// Task 6
/*
У нас есть объект salaries с зарплатами:
создайте функцию topSalary (salaries) которая возвращает имя наивысшего работника
если объект salaries пустой, нужно вернуть null
если несколько высокооплачиваемых сотружников можно вернуть какого-либо из них
используйте Object.entries и деструктуризацию, чтобы перебрать ключ/значение
*/

// const salaries = {
//     John: 100,
//     Pete: 300,
//     Mary: 250,
// };

// function topSalary(salaries) {
//     const salariesArr = Object.entries(salaries);
    
//     let topSal = 0
//     let topName = ''

//     for (let salary of salariesArr) {
//         let [name, value] = salary

//         if (value > topSal) {
//             topSal = value
//             topName = name
//         }
//     }
//     console.log(topSal, topName);
// }
// topSalary(salaries)


