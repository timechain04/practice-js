// this

/*
Напишите метод calcTotalPrice(stoneName), который принимает название камня, расчитывает 
и возвращает общую стоимость камней с таким именем , ценой и колличеством из свойства stones.
*/
// Task 1


// const chopShop = {
//     stones: [
//         { name: 'Emerald', price: 1300, quantity: 4 },
//         { name: 'Dianond', price: 2700, quantity: 3 },
//         { name: 'Sapphire', price: 1400, quantity: 7 },
//         { name: 'Ruby', price: 800, quantity: 2 },
//     ],

//     calcTotalPrice(stoneName) {
//         const currentStone = this.stones.find(el => el.name === stoneName);

//         if (currentStone) {
//             return currentStone.price *currentStone.quantity;
//         }
//         return 'Такого камня нет'
//     },
// };

// console.log(chopShop.calcTotalPrice('Emerald'));
// console.log(chopShop.calcTotalPrice('Dianond'));
// console.log(chopShop.calcTotalPrice('Sapphire'));
// console.log(chopShop.calcTotalPrice('Ruby'));
// console.log(chopShop.calcTotalPrice('Perl'));

// Task 2
/*
Создайте объект calculator с тремя методами:
read(a, b) - принимает два значения и сохраняет их как свойства объекта 
add() - возвращает сумму сохраненных значений
mult() - перемножает сохраненные значения и возвращает результат
*/

// const calculator = {
//     read(a, b) {
//         this.firstNum = a;
//         this.secondNum = b;
//     },

//     add() {
//         return this.firstNum + this.secondNum;
//     },

//     mult() {
//         return this.firstNum * this.secondNum;
//     },
// };

// calculator.read(10, 20);

// console.log(calculator);

// console.log(calculator.add());
// console.log(calculator.mult());

// Task 3
/*
Напиши класс Storage который создает объекты для управления складов товаров
при вызове будет получать один аргумент - начальный массив товаров и записывать его в свойство items

Добавь методы класса:
getItems() - возвращает массив товаров
getItem(item) - получает новый товар и добавляет их к текущим
removeItem(item) - получает товар и если он есть, удаляет их из текущих
*/

// class Storage {
//     constructor(items) {
//       this.items = items;
//     }
  
//     getItems() {
//       return this.items;
//     }
  
//     getItem(item) {
//       this.items.push(item);
//     }
  
//     removeItem(item) {
//       const index = this.items.indexOf(item);
//       if (index !== -1) {
//         this.items.splice(index, 1);
//       }
//     }
//   }
  

//   const myStorage = new Storage(['яблоки', 'апельсины', 'бананы']);

// console.log(myStorage.getItems()); // ["яблоки", "апельсины", "бананы"]

// myStorage.getItem('груши');
// console.log(myStorage.getItems()); // ["яблоки", "апельсины", "бананы", "груши"]

// myStorage.removeItem('апельсины');
// console.log(myStorage.getItems()); // ["яблоки", "бананы", "груши"]


// Task 4
/*
 */

