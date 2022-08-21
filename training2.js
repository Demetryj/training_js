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
