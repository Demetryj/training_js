// ---------------------------------- РОЗГАЛУДЖЕННЯ та ЦИКЛИ -----------------------------

//За допомогою циклу for додайте всі парні числа від min до max
//const max = 50;
//const min = 0;

// Напишіть код, який запитуватиме
// логін за допомогою prompt і буде виводити результат
// в консоль браузера

// Якщо користувач вводить "Адмін",
// то prompt запитує пароль.
// Якщо нічого не ввели або натиснута клавіша Esc
// вивести рядок "Скасовано"
// Інакше вивести рядок "Я вас не знаю"

//Пароль перевіряти так:
// Якщо введено пароль "Я головний",
// то вивести рядок "Привіт!"
// інакше виводити рядок "Невірний пароль!"

// const ADMIN = 'Адмін';
// const PASSWORD = 'Я головний';

// const userAns = prompt('Введіть логін');

// if (userAns === ADMIN) {
//   const userPas = prompt('Введіть пароль');

//   if (userPas === PASSWORD) {
//     console.log('Привіт!');
//   } else {
//     console.log('Невірний пароль!');
//   }
// } else if (userAns === null) {
//   console.log('Скасовано');
// } else {
//   console.log('Я вас не знаю');
// }
// -----------------------------------------------------------------

// При завантаженні сторінки користувачеві пропонується
// в prompt ввести число. Введення додається до значення
// змінної total.
// Операція введення числа продовжується доти,
// поки користувач не натисне кнопку Cancel в prompt.
// Після того як користувач припинив введення, натиснувши на
// кнопку Cancel, показати alert з рядком "Загальна сума введених чисел дорівнює [число]."
// Зробити перевірку, що користувач ввів саме число,
// а не довільний набір символів.

// let answerPrompt = null;
// let total = 0;

// do {
//   answerPrompt = prompt('Введіть число');
//   if (Number(answerPrompt)) {
//     total += Number(answerPrompt);
//   }
// } while (answerPrompt);

// console.log(`Загальна сума введених чисел дорівнює ${total}`);

// ---------------------------------------------------------------------

// *
// Напишіть цикл, який пропонує ввести
// число більше 100 через prompt.
// Якщо користувач ввів інше число - попросити
// ввести ще раз і так далі.
// Цикл повинен запитувати число, поки користувач не
// введе число більше 100, або натисне кнопку
// Скасування в prompt

// while (true) {
//   let answerPrompt = prompt('Введіть число більше 100');

//   if (Number(answerPrompt) > 100 || answerPrompt === null) {
//     break;
//   }
// }

//  або через цикл do while

// do {
//   let answerPrompt = prompt('Введіть число більше 100');

//     if (Number(answerPrompt) > 100 || answerPrompt === null) {
//         break;
//     }
// } while (true);

// -----------------------------------------------------------------

// *
// 1У змінній min лежить число від 0 до 59.
// Визначте, в яку чверть години потрапляє
// це число(у першу, другу, третю чи четверту).

// const min = 10;

// if (min > 0 && min <= 15) {
//   console.log('1 чверть');
// } else if (min > 15 && min <= 30) {
//   console.log('2 чверть');
// } else if (min > 30 && min <= 45) {
//   console.log('3 чверть');
// } else if (min > 45 && min <= 60) {
//   console.log('4 чверть');
// } else console.log('Error');

// ----------------------------------------------------

// *
// Напишіть через світч пошук автора мови програмування
// Пишемо назву мови у шаблонному рядку отримує відповідь: мова та автор
// PHP Расмус Лердорф
// C# група інженерів компанії Microsoft під керівництвом Андерса Хейлсберга та Скотта Вільтаумота
// Swift Кріс Латтнер
// JS Брендан Ейх
// Java Джеймс Гослінг
// Python Гвідо ван Россум

// const userPrompt = prompt('Введіть мову програмування')?.toLocaleLowerCase();

// switch (userPrompt) {
//   case 'PHP':
//     console.log('Расмус Лердорф');
//     break;

//   case 'C#':
//     console.log(
//       'рупа інженерів компанії Microsoft під керівництвом Андерса Хейлсберга та Скотта Вільтаумота'
//     );
//     break;

//   case 'Swift Кріс':
//     console.log('Кріс Латтнер');
//     break;

//   case 'JS':
//     console.log('Брендан Ейх');
//     break;

//   case 'Java':
//     console.log('Джеймс Гослінг');
//     break;

//   case 'Python':
//     console.log('Гвідо ван Россум');
//     break;

//     default:
//        console.log('Невідома мова програмування');
//     break;
// }

// ---------------------------------------------------------------

// *
// За кожен місяць податкова нараховує на ЗП розробника 5% від суми.
// Напишіть консольну функцію, на яку користувач вводить суму зп
// і кількість місяців з допомогою prompt() не забуваємо, що промпт повертає рядок.
// А податкова обчислює кінцеву суму зп без податків,
// Суму податків всього і чистий дохід розробника за кожен місяць.
// Для обчислення суми з урахуванням відсотків використовуйте цикл for.

// const salary = 500;
// const month = 6;

// let taxes = 0;
// let purSalary = 0;

// for (let i = 0; i < month; i += 1) {
//   taxes += salary * 0.05;
//   purSalary += salary * 0.95;
// }
// console.log('Taxes: ', taxes);
// console.log('purSalary: ', purSalary);

// --------------------------------------------------------------

// *
// Перепишіть конструкцію if за допомогою умовного оператора '?':

// const a = 1;
// const b = 2;
// let result;
//
// if (a + b < 4) {
//   result = 'Many';
// } else {
//   result = 'Much';
// }

// const a = 1;
// const b = 2;
// let result;

// result = a + b < 4 ? 'Many' : 'Much';
// console.log(result);

// ---------------------------------------------------------------------
// *
// Поверніть ступінь числа для наданого  значення за допомогою циклу for.
//
// const number = 3;
// const step = 4;

// let numberInStep = 1;

// for (let i = 0; i < step; i += 1) {
//   numberInStep *= number;
// }
// console.log(numberInStep);

// -----------------------------------------------------------------
// *
//Поверніть кількість цифр у заданому числі за допомогою циклу while.

// let number = 8367; //4
// let numberLength = 0;

// while (true) {
//   numberLength = String(number).length;
//   break;
// }
// console.log(numberLength);

// let number = 8367;
// let numberLength = 0;

// while (number !== 0) {
//   number = Math.floor(number / 10);
//   numberLength += 1;
// }
// console.log(numberLength);

// -----------------------------------------------------

// _____ДЗ________

// const number = 8;

/* 1 
   1 2 
   1 2 3 
   1 2 3 4 
   1 2 3 4 5 
   1 2 3 4 5 6 
   1 2 3 4 5 6 7 
   1 2 3 4 5 6 7 8 */

// let output = '';
// for (let i = 1; i <= 9; i++) {
//   for (let j = 1; j <= 9; j++) {
//     output += ' ' + i * j;
//     if (i * j < 10) {
//       output += ' ';
//     }
//   }
//   console.log(output);
//      output = '';
// }

// let result = '';

// for (let i = 0; i <= number; i += 1) {
//   result += i + 1 + ' ';

//   if (i + 1 > number) {
//     break;
//   }
//   console.log(result);
// }

//    ---------------------------------------------------------
// Натуральне число більше 1 називається простим, якщо воно ні на що не ділиться, крім себе і 1.
//
// Інакше кажучи, n > 1 – просте, якщо його розподілі на будь-яке число крім 1 і є залишок.
//
//   Наприклад, 5 це просте число, воно не може бути розділене без залишку на 2, 3 та 4.
//
// Напишіть код, який виводить усі прості числа з інтервалу від 2 до n.
//
//   Для n = 10 результат має бути 2,3,5,7.
//
// P.S. Код також має бути легко модифікований для будь-яких інших інтервалів.

// const min = 2;
// const max = 10;

// for (let i = min; i < max; i += 1) {
//   for (let j = min; i < max; i += 1) {
//     if (i / j === 1 || i % j !== 0) {
//       console.log(i);
//     }
//   }
// }

// ---------------------------------------------------------------
// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/String/padStart

// Напишіть програму, яка отримає від користувача
//число (кількість хвилин) і виведе до консолі
//Рядок у форматі годин і хвилин
// 70 === 01:10

// const userMessage = prompt('Введіть число (хв.):');
// let consoleMinutes;
// let consoleHours;

// if (userMessage > 60) {
//   const hours = Math.round(userMessage / 60);

//   if (hours < 10) {
//     consoleHours = '0' + hours;
//   } else {
//     consoleHours = hours;
//   }

//   const minutes = userMessage % 60;

//   if (minutes < 10) {
//     consoleMinutes = '0' + minutes;
//   } else {
//     consoleMinutes = minutes;
//   }

//   console.log(`${consoleHours}:${consoleMinutes}`);
// }

// ---------------------------------------------------------------
// 2. Використовуючи конструкцію if..else, напишіть код, який отримує число через prompt, а потім виводить в alert:
// 1, якщо значення більше нуля,
// -1, якщо значення менше нуля,
// 0, якщо значення дорівнює нулю.
// Передбачається, що користувач вводить лише цифри.

// const userNumber = prompt('Введіть число');

// if (userNumber <= 0) {
//   if (userNumber < 0) {
//     alert('-1');
//   } else {
//     alert('0');
//   }
// } else {
//   alert('1');
// }

//-------------------------------------------------------------------------------------------------------------------------------
// ЗАНЯТТЯ 2 21.08.2022

// Потрібно написати функцію, яка приймає 1 параметр key, яка буде перебирати об'єкт
// якщо об'єкт має такий ключ - поверне true

// const obj = {
//   name: 'Jhon',
//   car: 'Audi',
//   carColor: 'White',
// };

// const findKey = key => {
//   //   return Object.keys(obj).includes(key);

//   return key in obj; // другий варіант
// };

// console.log(findKey('name'));

// --------------------------------------------------------------------------------
// Створіть функцію multiplyNumeric(obj),
//   яка множить всі числові властивості об'єкта obj на 2.

// до  виклику функції
// let menu = {
//   width: 200,
//   height: 300,
//   title: 'My menu',
// };
// //
// // multiplyNumeric(menu);

// // після виклику функції
// // menu = {
// //   width: 400,
// //   height: 600,
// //   title: "My menu"

// const multiplyNumeric = obj => {
//   for (const key in obj) {
//     if (typeof obj[key] === 'number') {
//       obj[key] *= 2;
//     }
//   }
//   return menu;
// };

// console.log(multiplyNumeric(menu));

//------------------------------------------------------------------------------
//У нас є об'єкт, в якому зберігаються зарплати
//нашої команди
//Напишіть код для обчислення суми всіх зарплат і
//збережіть його результат у змінній sum.
//Якщо об'єкт salaries порожній, то результат має бути 0

// const salaries = {
//   Mango: 100,
//   Poly: 160,
//   Ajax: 1470,
// };

// // // const sumSalary = obj => {
// // //   let totalSalary = 0;
// // //   const arrayOfSalaries = Object.values(obj);

// // //   for (const salary of arrayOfSalaries) {
// // //     totalSalary += salary;
// // //   }
// // //   return totalSalary;
// // // };

// // // 2-й метод

// const sumSalary = obj => {
//   return Object.values(obj).reduce((a, b) => a + b, 0);
// };

// console.log(sumSalary(salaries));

// -------------------------------------------------------------------------------

// Напишіть код JS, щоб видалити всі елементи в заданому масиві
// Функція `deleteElement()` видаляє всі входження елемента з заданого масиву.
// let arrFirst = [23, 56, 4, 78, 5, 63, 45, 210, 56];

// // const deleteElement = (arrFirst, number) => {
// //   for (let i = 0; i < arrFirst.length; i += 1) {
// //     if (arrFirst[i] === number) {
// //       arrFirst.splice(i, 1);
// //     }
// //   }
// //   return arrFirst;
// // };

// // 2-й метод
// const deleteElement = (arrFirst, number) => {
//   arrFirst.forEach((element, index, array) => {
//     if (element === number) {
//       arrFirst.splice(index, 1);
//     }
//   });
//   return arrFirst;
// };

// arrFirst = deleteElement(arrFirst, 56);

// console.log(arrFirst); //[23, 4, 78, 5, 63, 45, 210]

//-------------------------------------------------------------------
// Напишіть метод, який розбиває масив на частини визначеного розміру

// const data = [1, 2, 3, 4, 5, 6, 7];
// // console.log(chunk(data, 2)) // [[1, 2], [3, 4], [5, 6], [7]]
// // console.log(chunk(data, 3)) // [[1, 2, 3], [4, 5, 6], [7]]

// const cutArray = (array, number) => {

//   let i = 0;
//   const newArr = [];

//   while (i < array.length) {

//     newArr.push(array.slice(i, i + number));
//     i += number;

//   }
//   return newArr;
// };

// console.log(cutArray(data, 3));

//------------------------------------------------------------------
// Напишіть функцію sumInput(), яка:
//
// Просить користувача ввести значення, використовуючи prompt та зберігає їх у масив.
//   Закінчує запитувати значення, коли користувач введе не числове значення,
// порожній рядок або натисне «Скасувати».
// Підраховує та повертає суму елементів масиву.
//   P.S. Нуль 0 – вважається числом, не зупиняйте введення значень
// під час введення «0».

// function someInput() {
//   const numberPrompt = [];

//   while (true) {
//     let message = Number(prompt('Введіть число'));
//     if (Number(message) || Number(message) === 0) {
//       numberPrompt.push(Number(message));
//     } else {
//       break;
//     }
//   }
//   return numberPrompt.reduce((sum, number) => sum + number, 0);
// }

// console.log(someInput());

//--------------------------------------------------------------------------

//Напишіть функцію calcTotalPrice(stones, stonesName),
//яка приймає масив об'єктів і
//рядок з назвою каменю.
//Функція повертає загальну вартість каміння
//з таким ім'ям

// function calcTotalPrice(array, stonesName) {
//   //   for (const element of array) {
//   //     if (element.name === stonesName) {
//   //       return element.price * element.quantity;
//   //     }
//   //   }

//   //   2-й метод

//    let costStone = 0;

//   stones.forEach(({ name, price, quantity }) => {
//     if (name === stonesName) {
//       costStone = price * quantity;
//     }
//   });
//   return costStone;
// }

// const stones = [
//   { name: 'Emerald', price: 1300, quantity: 4 },
//   { name: 'Diamond', price: 2700, quantity: 6 },
//   { name: 'Sapphire', price: 400, quantity: 7 },
//   { name: 'Rubble', price: 150, quantity: 100 },
// ];

// console.log(calcTotalPrice(stones, 'Sapphire'));

//--------------------------------------------------------04.09.2022 Контекст this, методи функцій.---------------------------------------

// Напишіть дві функції
// letMeSeeYourName(callback) - запитує ім'я користувача
//через prompt і викликає функцію зворотного виклику
//greet(name) - колбек, який приймає ім'я і виводить в консоль
//рядок "Привіт <name>"
//Реалізуй перевірку, чи name не пустий рядок

// function greet(name) {
//   console.log(name);
// }

// function letMeSeeYourName(callback) {
//   const userName = prompt("Введіть ім'я");
//   callback(userName);
// }

// letMeSeeYourName(greet);
////////////////////////////---------------------------------

// Переведіть текст вигляду border-left-width до borderLeftWidth
// Напишіть функцію camelize(str), яка перетворює рядки «my-short-string» на «myShortString».
//
// Тобто дефіси віддаляються, а всі слова після них отримують велику букву.
//
// camelize('background-color', changeString);
// // camelize('list-style-image') == 'listStyleImage';
// // camelize('-webkit-transition') == 'WebkitTransition';

// function changeString(element, index) {
//   if (index !== 0) {
//     return element[0].toUpperCase() + element.slice(1);
//   } else {
//     return element;
//   }
// }

// console.log(camelize('background-color', changeString));

// function camelize(string, callback) {
//   return string.split('-').map(callback).join('');

//   //     if (index !== 0) {
//   //       return element[0].toUpperCase() + element.slice(1);
//   //     } else {
//   //       return element;
//   //     };
//   //   const arrayFromString = string.split('-');
//   //   //   console.log(string.split('-'));
//   //   const newArrey = arrayFromString.map((element, index) => {
//   //     if (index !== 0) {
//   //       return element[0].toUpperCase() + element.slice(1);
//   //     } else {
//   //       return element;
//   //     }
//   //   });
//   //   return newArrey.join('');
//   //   console.log(newArrey.join(''));
// }

////////////////////////--------------------------------------
// Напишіть дві функції
//makeProduct(назва, ціна, callback) - приймає
//імя і ціну товару, а також функцію callback.
//Функція створює об'єкт товару, додає йому унікальний
//ідентифікатор у властивості id і викликає зворотний виклик
//передаючи йому створений об’єкт.
//showProduct(product) - callback приймає об'єкт
//продукта і виводить його в консоль

// function makeProduct(name, price, callback) {
//   const product = {
//     id: Date.now(),
//     name,
//     price,
//   };

//   callback(product);
// }

// function showProduct(product) {
//   console.log(product);
// }

// makeProduct('laptop', 30000, showProduct);

////////--------------------------------------------------------
//-----------------------------ЗАМИКАННЯ//
// Виконай рефакторинг makeDish так, щоб не потрібно було
// щоразу передавати ім'я шефа.
// Напишіть функцію makeShef(shefName), яка повертає функцію
// makeDish(dish), що пам'ятає ім'я шефа при її виклику

// const makeDish = function (shefName, dish) {
//   console.log(`${shefName} is cooking ${dish}`);
// };

// makeDish("Mango", "apple pie");
// makeDish("Poly", "muffins");

// const makeShef = function (shefName) {
//   return function makeDish(dish) {
//     console.log(`${shefName} is cooking ${dish}`);
//   };
// };
// const mango = makeShef('Mango');
// console.log(mango);
// mango('apple pie');

// const polly = makeShef('Polly');
// console.log(polly);
// polly('muffins');

///--------------------------------------------------------------

// Напишіть функцію makeCounter, яка повертає іншу
//функцію, яка рахує та виводить в консоль кількість своїх викликів

// function makeCounter(position) {
//   let counter = 0;
//   return function () {
//     counter += 1;
//     console.log(`counter1 ${position}`, counter);
//   };
// }

// const counter1 = makeCounter(1);
// counter1();
// counter1();
// counter1();

// const counter2 = makeCounter(2);
// counter2();
// counter1();
// counter1();

/////---------------------------------------------------------
//Напишіть функцію savePassword(password), яка приймає
//пароль і повертає внутрішню функцію, що приймає
//рядок і повертає true, якщо рядок збігається із збереженим
//паролем і false - якщо не збігається

// function savePassword(password) {
//   return function (string) {
//     return password === string;
//   };
// }

// const chackPassword = savePassword('parol');
// console.log(chackPassword);
// console.log(chackPassword('123'));
////////////////---------------------------

// Виправте помилки, щоб код працював
// const product = {
//   price: 5000,
//   showPrice() {
//     console.log(price);
//   },
// };
// product.showPrice();

// const product = {
//   price: 5000,
//   showPrice() {
//     console.log(this.price);
//   },
// };
// product.showPrice();

//------------------------------------
// Виправте помилки, щоб код працював
//
// const product = {
//   price: 5000,
//   showPrice() {
//     console.log(this.price);
//   },
// };

// function callAction(action) {
//   action();
// }

// callAction(product.showPrice.bind(product));
///////-----------------------------

// Напишіть функцію each(array, callback), яка
// першим параметром приймає масив, а другим - функцію,
// яка застосовується до кожного елемента масиву.
// Функція each повинна повернути новий масив, елементами
// якого будуть результати виклику callback
// callback функції повинна множити елементи на 2

// function each(array, callback) {
//   const newArray = [];

//   array.forEach(element => {
//     newArray.push(callback(element));
//   });
//   return newArray;
// }

// // function increase(element) {
// //   return element * 2;
// // }

// // console.log(each([1, 2, 3], increase));

// console.log(each([1, 2, 3], element => element * 2));

//////////----------------------------------------------------
//Створіть об'єкт calculator із такими методами
//read(a, b) - приймає два аргументи та зберігає їх
//як властивості об'єкта
//sum() повертає суму збережених значень
//min() повертає різницю збережених значень
//mult() перемножує збережені значення та повертає результат
//div() перемножує збережені значення та повертає результат і враховується ділення на 0

// const calculator = {
//   read(a, b) {
//     this.a = a;
//     this.b = b;
//   },
//   sum() {
//     return this.a + this.b;
//   },
//   min() {
//     return this.a - this.b;
//   },
//   mult() {
//     return this.a * this.b;
//   },
//   div() {
//     return this.a / this.b;
//   },
// };

// console.log(calculator.read);
// calculator.read(0, 5);
// console.log(calculator.sum());
// console.log(calculator.min());
// console.log(calculator.mult());
// console.log(calculator.div());

// const obj = {
//   a: 5,
//   b: 7,
// };

// obj.sum = calculator.sum;

// console.log(obj.sum());

///----------------------------------------------------------------------------

// Підрахувати кількість голосних у рядку
// Функція `countVowel()` повертає кількість голосних у вхідному рядку.
// const letterVowel = ['A', 'E', 'I', 'O', 'U', 'Y'];

// function countVowel(str) {
//   const newArray = str.toUpperCase().split('');
//   console.log(newArray);

//   const quantity = newArray.reduce((acc, element) => {
//     if (letterVowel.includes(element)) {
//       acc += 1;
//     }
//     return acc;
//   }, 0);

//   return quantity;
// }

// console.log(countVowel('Hello')); //2
// console.log(countVowel('Umbrella')); //3

//------------------------------------------------------18.09.2022------------------------------------------------------------------//
// За допомогою методу forEach потрібно заповнити масив uploadedFiles
// baseUrl потрібно передати, як this

// const imagesName = ['car', 'grass', 'avatar', 'user', 'sea', 'water', 'bird'];
// const baseUrl = 'domain-name.com';
// let uploadedFiles = [];

// const resultUploadedFiles = [
//   'domain-name.com/upload/car',
//   'domain-name.com/upload/grass',
//   'domain-name.com/upload/avatar',
//   'domain-name.com/upload/user',
//   'domain-name.com/upload/sea',
//   'domain-name.com/upload/water',
//   'domain-name.com/upload/bird',
// ];

// // imagesName.forEach(img => {
// //   uploadedFiles.push(`${baseUrl}/upload/${img}`);
// // }, baseUrl);

// // imagesName.forEach(function (img) {
// //   uploadedFiles.push(`${this}/upload/${img}`);
// // }, baseUrl);
// // console.log(uploadedFiles);

// uploadedFiles = imagesName.map(img => {
//   return `${baseUrl}/upload/${img}`;
// });

// console.log(uploadedFiles);

////////////////////////////////////////////
// Напишіть функцію addItemToBasket, яка буде за допомогою методу find
//перевіряти, чи є вже такий продукт в кошику
// Якщо він є, то потроібно оновити його в коризні
// Якщо немає, то потрібно додати новий продукт до кошику покупок

// Після цього порахувати суму всіх покупок і вивести total;

// let total = 0;

// const product1 = {
//   id: 33,
//   title: 'T-shirt',
//   price: 99,
//   count: 1,
// };

// const product2 = {
//   id: 29,
//   title: 'Jeans',
//   price: 199,
//   count: 1,
// };

// let basketItems = [
//   {
//     id: 28,
//     title: 'iPhone 14',
//     price: 1599,
//     count: 3,
//   },
//   {
//     id: 29,
//     title: 'Jeans',
//     price: 199,
//     count: 2,
//   },
// ];

// function addItemToBasket(product) {
//   const activeProduct = basketItems.find(item => item.id === product.id);

//   if (activeProduct) {
//     basketItems = basketItems.map(item => {
//       if (item.id === product.id) {
//         return {
//           ...item,
//           count: item.count + 1,
//         };
//       } else {
//         return item;
//       }
//     });
//   } else {
//     basketItems.push(product);
//   }
//   //   console.log(activeProduct);
// }

// addItemToBasket(product1);
// addItemToBasket(product2);

// console.log(basketItems);

//////////////////////////////////////////////

// Потрібно отримати URL адресу із адресного рядка бразуера.
// Далі необхідно параметри запиту записати в об'єкт  (query) - ключ,
//значення(axios)

// const url = 'https://www.npmjs.com/?query=axios&version=0.3&module=render&size=32&date=12212183311';
// // const url = window.location.href
// // console.log('url', url);

// const link = new URL(url);
// console.log(link);

// const search = link.search.slice(1).split('&');
// console.log(search);

// const result = search.reduce((acc, item) => {
//   // const itemsParams = item.split('=');
//   const [key, value] = item.split('=');
//   // acc[itemsParams[0]] = itemsParams[1];
//   acc[key] = value;

//   return acc;
// }, {});

// console.log(result);

//////////////////////////////////////////////
// Перетворіть масив об’єктів виборців на підрахунок кількості людей,
//які проголосували

// function totalVotes(arr) {
//   // your code here
// }

// const voters = [
//   { name: 'Bob', age: 30, voted: true },
//   { name: 'Jake', age: 32, voted: true },
//   { name: 'Kate', age: 25, voted: false },
//   { name: 'Sam', age: 20, voted: false },
//   { name: 'Phil', age: 21, voted: true },
//   { name: 'Ed', age: 55, voted: true },
//   { name: 'Tami', age: 54, voted: true },
//   { name: 'Mary', age: 31, voted: false },
//   { name: 'Becky', age: 43, voted: false },
//   { name: 'Joey', age: 41, voted: true },
//   { name: 'Jeff', age: 30, voted: true },
//   { name: 'Zack', age: 19, voted: false },
// ];

// console.log(totalVotes(voters)); // 7

// function totalVotes(arr) {
//   return voters.filter(item => item.voted).length;
// }

/////////////////////////////////////////////////////////////////
// Напишіть метод, який очищає масив від усіх непотрібних елементів,
//таких як false, undefined, порожні рядки, нуль, null

// const data = [0, 1, false, 2, undefined, '', 3, null];
// console.log(compact(data)); // [1, 2, 3]

// function compact(data) {
//   //   return data.filter(item => item);
//   return data.filter(Boolean);
// }

//////////////////////////////////////////////////
// Отримайте ініціали імені
// Даний рядок із кількох слів із одним пробілом між кожним із них. Скоротіть назву та поверніть ініціали імені.

// const input = 'George Raymond Richard Martin';
// // Result
// // 'GRRM'

// function getFirstLettersName(names) {
//   const result = names
//     .split(' ')
//     .map(item => item[0])
//       .join('');

// //   console.log(result);
// }

// getFirstLettersName(input);

//////////////////////////////////////////////////////
// Напишіть функцію sortByAge(users), яка приймає масив об'єктів
//із властивістю age та сортує їх за ним.
// Наприклад:
//
// let bruce = { name: 'Bruce', age: 25 };
// let jhon = { name: 'Jhon', age: 30 };
// let maria = { name: 'Maria', age: 28 };

// let arr = [bruce, jhon, maria];

// console.log(arr);

// // тепер: [bruce, maria, jhon]
// // alert(arr[0].name); // Bruce
// // alert(arr[1].name); // Maria
// // alert(arr[2].name); // Jhon

// function sortByAge(users) {
//   // const filterUsers = [...users].sort((a, b) => a.age - b.age);
//   const filterUsers = [...users].sort((prev, next) => (prev.age > next.age ? 1 : -1));
//   return filterUsers;
// }

// console.log(sortByAge(arr));

/////////////////////////////////////////////////////////
// Маючи набір усіх елементів вашого списку бажань, обчисліть,
//скільки коштуватиме, щоб просто купити все одразу

// function shoppingSpree(arr) {
//   // your code here
// }
//
// const wishlist = [
//   { title: 'Tesla Model S', price: 90000 },
//   { title: '4 carat diamond ring', price: 45000 },
//   { title: 'World tour', price: 25000 },
//   { title: 'Gold fidgit spinner', price: 2000 },
//   { title: 'A second Tesla Model S', price: 90000 },
// ];
// //

// function shoppingSpree(wishlist) {
//   //   return wishlist.reduce((acc, item) => {
//   //     acc += item.price;
//   //     return acc;
//   //   }, 0);

//   return wishlist.reduce((acc, { price }) => {
//     acc += price;
//     return acc;
//   }, 0);
// }

// console.log(shoppingSpree(wishlist));
///////////////////////////////////////////////////////
// Розробники люблять скорочувати все:
//   k8s означає Kubernetes, a11y означає accessibility,
//l10n означає localization.
//   Ви отримуєте нумероніми Dev, беручи першу та останню букви та
//підраховуючи кількість букв між ними.
//   Слова, що містять менше 4 літер, не скорочуються,
//тому що це було б просто дивно.
//   Змінна input  є реченням, і ви повинні скорочувати кожне
//слово довжиною 4 літери або більше.
//   У реченні не буде розділових знаків. g2d l2k e6e

// const input = 'Every developer likes to mix kubernetes and javascript';
// // Result
// // 'E3y d7r l3s to mix k8s and j8t'

// function cutWords(string) {
//   return string
//     .split(' ')
//     .map(item => {
//       const { length } = item;
//       // if (item.length <= 4) {
//       //   return item;
//       // } else {
//       //   return `${item[0]}${item.length - 2}${item[item.length - 1]}`;
//       // }
//       if (length <= 4) {
//         return item;
//       } else {
//         return `${item[0]}${length - 2}${item[length - 1]}`;
//       }
//     })
//     .join(' ');
// }

// console.log(cutWords(input));

//------------------------------------------------02.09.2022---------------------------------------------//
// Змініть стиль тексту абзацу за допомогою коду JavaScript
//
// <!DOCTYPE html>
// <html>
// <head>
// <meta charset=utf-8 />
//   <title>JS DOM paragraph style</title>
// </head>
// <body>
// <p id ='text'>JavaScript Exercises</p>
// <div>
//   <button id="jsstyle">Style</button>
// </div>
// </body>
// </html>
//
// При натисканні на кнопку буде змінено шрифт, розмір шрифту та
//колір тексту абзацу.
// При наступному натисканні кнопки буде змінюватись колір параграфу.
//Після кожного кліку буде пісдтавлятись колір із масиву colors послідовно

// const colors = ['gold', 'green', 'yellow', 'blue', 'black', 'brown'];
// const textEl = document.querySelector('#text');
// const btnEl = document.querySelector('#js-style');

// btnEl.addEventListener('click', onBtnElClick);

// let count = 0;

// function onBtnElClick() {
//   textEl.style.fontFamili = 'Montserat';
//   textEl.style.fontSize = '30px';
//   textEl.style.color = changeColorText();
//   count += 1;
//   if (count === colors.length) {
//     count = 0;
//   }

//   // textEl.style.cssText = "font-famili: 'Montserat; font-size: '30px'";
// }

// function changeColorText() {
//   return colors[count];
//   // return colors[count += 1];
// }

///////////////////////////////////////////////////////////////////////////

// Коли натискаємо клавіші вверх, вниз, вліво, вправо - квадрат має змінювати свою позицію

/* <div
  id="driveBox"
  style="position: absolute; left: 0; right: 0; top: 0;
        bottom: 0; background: gold; width: 50px; height: 50px"
  className="box"

></div>; */

//потрібно взяти поточну ширину (поточна ширина вікна) екрана для дого, щоб поставити стоп.

// const boxEl = document.querySelector('#driveBox');

// document.addEventListener('keydown', changePositionBox);

// const widthWindow = window.innerWidth;
// const heightWindow = window.innerHeight;

// console.log(widthWindow);
// console.log(heightWindow);

// function changePositionBox(event) {
//   if (event.code === 'ArrowDown') {
//     // console.log(boxEl.style.top);
//     const down = parseInt(boxEl.style.top); // parseInt візьме тільки 0 без px
//     if (down >= heightWindow - 60) {
//       // 60 = 50px (довжина сторони квадрата) - 10px (крок зміщення)
//       return;
//     }
//     boxEl.style.top = `${down + 10}px`;
//     console.log(boxEl.style.top);
//   } else if (event.code === 'ArrowRight') {
//     const right = parseInt(boxEl.style.left); // parseInt візьме тільки 0 без px
//     if (right >= widthWindow - 60) {
//       return;
//     }
//     boxEl.style.left = `${right + 10}px`;
//   } else if (event.code === 'ArrowUp') {
//     const top = parseInt(boxEl.style.top);
//     if (top === 0) {
//       return;
//     }
//     // parseInt візьме тільки 0 без px
//     boxEl.style.top = `${top - 10}px`;
//   } else if (event.code === 'ArrowLeft') {
//     const left = parseInt(boxEl.style.left); // parseInt візьме тільки 0 без px
//     if (left === 0) {
//       return;
//     }
//     boxEl.style.left = `${left - 10}px`;
//   }
// }

//////////////////////////////////////////////////////

// Напишіть програму JavaScript для добавлення та видалення елементів зі спадного списку.

// <!DOCTYPE html>
// <html><head>
// <meta charset=utf-8 />
//   <title>Remove items from a dropdown list</title>
// </head><body><form>
//   <select id="colorSelect">
//     <option>Red</option>
//     <option>Green</option>
//     <option>White</option>
//     <option>Black</option>
//   </select>
//   <input type="button" value="Select and Remove">
// </form>

// const formEl = document.querySelector('form');
// const selectEl = document.querySelector('#colorSelect');
// const btnEl = document.querySelector('input');
// console.log(btnEl);

// btnEl.addEventListener('click', removeAndAddElementInList);

// function removeAndAddElementInList(event) {
//   console.log(selectEl);

//   selectEl.selectedOptions[0].remove();
//   selectEl.insertAdjacentHTML('beforeend', '<option>Blue</option>');
// }

////////////////////////////////////////////
// Напишіть програму на JavaScript, щоб отримати ширину та висоту вікна (щоразу, коли розмір вікна змінюється).
// Вивдіть ці значення на сторінку

// <!DOCTYPE html>
// <html>
// <head>
// <meta charset=utf-8 />
//   <title>Window Size : height and width</title>
// </head>
// <!-- Resize the window (here output panel) and see the result !-->
// <body onload="getSize()" onresize="getSize()">
// <div id="wh">
//   <!-- Place height and width size here! -->
// </div>
// <body>
// </body>
// </html>

// const divEl = document.querySelector('#wh');
// // console.log(window);
// // console.dir(document);
// // const widthDoc = document.documentElement.clientWidth;
// // const heightDoc = document.documentElement.clientHeight;
// // console.log(widthDoc);
// // console.log(heightDoc);

// // const widthWindow = window.innerWidth;
// // const heightWindow = window.innerHeight;

// window.addEventListener('resize', changeSizeWindow);

// function changeSizeWindow() {
//   const widthWindow = window.innerWidth;
//   const heightWindow = window.innerHeight;

//   console.log('width:', widthWindow);
//   console.log('height:', heightWindow);

//   divEl.textContent = `width: ${widthWindow}, height: ${heightWindow} `;

//   const position = divEl.getBoundingClientRect(); //повертає координати елемента
//   console.log(position);
// }

//////////////////////////////////////////////////////////////////////

// Напишіть програму JavaScript, щоб виділяти жирні слова (<strong>) наступного абзацу, наводячи курсор миші на посилання

// <head>
//   <meta charSet="UTF-8">
//     <title>Get And Style All Tags</title>
// </head>
// <body>
// <p>[<a href="#" class="link" onMouseOver="highlight()" onMouseOut="return_normal()">On mouse over here bold words of the following
//   paragraph will be highlighted</a>]</p>
// <p class="text"><strong>We</strong> have just started <strong>this</strong> section for the users (<strong>beginner</strong> to
//   intermediate) who <strong>want</strong> to work with <strong>various</strong> JavaScript <strong>problems</strong> and
//   write scripts online to <strong>test</strong> their JavaScript <strong>skill</strong>.</p>
// </body>

// const linkEl = document.querySelector('.link');
// const textEl = document.querySelector('.text');

// linkEl.addEventListener('mouseover', onMouseOver);
// linkEl.addEventListener('mouseout', onMouseOut);

// function onMouseOver() {
//   console.log('mouseover');
//   changeStrongColor('red');
// }

// function onMouseOut() {
//   console.log('mouseout');
//   changeStrongColor('black');
// }

// function changeStrongColor(color) {
//   const strongList = document.querySelectorAll('strong');
//   strongList.forEach(elem => {
//     elem.style.color = color;
//   });
// }

////////////////////////////////////////////////////////////

// Делегування подій
// 1. Коли користувач клікає на будь-яку комірку із таблиці, потрібно її зробити активною - добавити клас .active
// 3. В кожному рядку кожній третій комірці задавати клас .active-third
// 2. Коли користувач клікає на іншу комірку, вона робиться активною, а всі інші стають неактивними
// 3. Після перезавантаження сторінки активна комірка зберігається

/* <style>
  table {
  margin: 0 auto;
  border-collapse: collapse;
}

  td {
  width: 30px;
  height: 30px;
  border: 1px solid #ccc;
  cursor: pointer;
}


  .active {
  background: #00e871;
}


</style> */
//
// <body>
/* <div className="board">
  <table>
    <tbody>
    <tr style="display: block;">
      <td className="active"></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr style="display: block;">
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr style="display: block;">
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr style="display: block;">
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr style="display: block;">
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr style="display: block;">
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr style="display: block;">
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr style="display: block;">
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr style="display: block;">
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    <tr style="display: block;">
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
      <td></td>
    </tr>
    </tbody>
  </table>
</div> */

// const tableEl = document.querySelector('table');
// const actives = document.querySelector('.actives');

// tableEl.addEventListener('click', changeColorBox);

// function changeColorBox(event) {
//   console.dir(event.target);
//   if (event.target.tagName === 'TD') {
//     event.target.style.background = 'blue';
//   }
// }

// actives.addEventListener('click', onActivesClick);

// function onActivesClick(event) {
//   // event.stopPropagation();
//   event.target.style.background = 'gold';
// }

////----------------------------16.10.2022---------------------------/////////////////////////////
// Отримати дані з API і вивести їх на сторінку
// https://agify.io/

// https://dog.ceo/dog-api/documentation/random

// const listEl = document.querySelector('.list');

// function getTetch() {
//   return fetch(`https://dog.ceo/api/breeds/image/random/3`).then(response => response.json());
// }

// function createMarkup(data) {
//   return data
//     .map((page, index) => {
//       return `<li>
//     <img src="${page}" alt="random image${index}" width='150'  />
//     </li>`;
//     })
//     .join('');
// }

// function renderMarkup() {
//   getTetch().then(data => (listEl.innerHTML = createMarkup(data.message)));
// }

// renderMarkup();
//------------------------------------------------------

// Отримати дані з API і вивести їх на сторінку
// https://randomuser.me/

// async function fetchUser() {
//   try {
//     const response = await fetch('https://randomuser.me/api/');
//     const userData = await response.json();
//     console.log(userData);
//     return userData;
//   } catch (error) {
//     console.log(error);
//   }
// }

// fetchUser();

//----------------------------------
// https://reqres.in/

// const URL = 'https://reqres.in/api/users';

// async function fetchData() {
//   try {
//     const response = await fetch(`${URL}?page=2`);
//     const user = await response.json();
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// // fetchData();

// async function createUser() {
//   try {
//     const response = await fetch(URL, {
//       method: 'POST',
//       body: JSON.stringify({
//         name: 'morpheus',
//         job: 'leader',
//       }),
//     });
//     const user = await response.json();
//     console.log(user);
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// // createUser();

// async function updataUser() {
//   try {
//     const response = await fetch(`${URL}/2`, {
//       method: 'PUT',
//       body: JSON.stringify({
//         name: 'Poly',
//         job: 'developer',
//       }),
//     });
//     const user = await response.json();
//     console.log(user);
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// // updataUser();

// async function deleteUser() {
//   try {
//     const response = await fetch(`${URL}/2`, {
//       method: 'DELETE',
//     });
//   } catch (error) {
//     console.log(error.message);
//   }
// }

// deleteUser();

//ПОГОДА
// ДЗ
// Отримати дані з API і вивести їх на сторінку. Добавити стилі.
// https://openweathermap.org/api

// https://nordicapis.com/how-to-build-an-api-driven-weather-app/

// Отримати дані з API та вивести їх на сторінку
// https://api.publicapis.org/entries
// https://rapidapi.com/hub

// fetch(' https://api.publicapis.org/entries')
//   .then(response => response.json())
//   .then(data => console.log(data.entries.filter(elem => !elem.Auth)));
