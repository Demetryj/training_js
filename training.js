// let balance = 10000;
// const payment = 2000;

// console.log(
//   'Общая стоимость заказа 2000 кредитов. Проверяем доступное количество кредитов на счету.'
// );

// if (balance >= payment) {
//   balance -= payment;
//   // balance = balance - payment;

//   console.log(`На счету осталось ${balance} кредитов`);
// } else {
//   console.log('На счету не достаточно средств для проведения операции');
// }
// console.log('Операция завершена.');

// ------------------------------------------------------------//

// let totalSpent = 2000;
// let payment = 500;
// let discount = 0;

// if (totalSpent >= 100 && totalSpent < 1000) {
//   console.log('Бронзовий партнер, знижка 2%');
//   discount = 0.02;
// } else if (totalSpent > 1000 && totalSpent < 5000) {
//   console.log('Срібний партнер, знижка 5%');
//   discount = 0.05;
// } else if (totalSpent >= 5000) {
//   console.log('Золотий партнер, знижка 10%');
//   discount = 0.1;
// } else {
//   console.log('Не є нашим партнером, знижка 0%');
// }

// payment -= payment * discount;
// // payment - payment - payment * discount;

// console.log(`Оформлено замовлення на суму ${payment} кредитів зі знижкою ${discount * 100} %`);

// totalSpent += payment;

// console.log(`Загальна сума витрачених клштів у магазині ${totalSpent}`);

//-------------------------------------------------------------//

// const max = 10;
// for (let i = 0; i < max; i += 1) {
//   console.log(`${max} % ${i} = `, max % i);
// }

// const number = 10;

// for (let i = 0; i < number; i += 1) {
//   if (i % 2 === 0) {
//     continue;
//   }

//   console.log('Непарне i: ', i); // 1, 3, 5, 7, 9
// }

// function calculateEngravingPrice(message, pricePerWord) {
//   // Change code below this line

//   const price = message * pricePerWord;

//   return price;
// }
// calculateEngravingPrice(10, 10);

// const message = 'JavaScript is in my blood';
// console.log(message);

// const lengthWord = message.length;
// console.log('Leng or word: ', lengthWord);

// const pricePerWord = 10;
// console.log('Price: ', pricePerWord);

// const total = lengthWord * pricePerWord;
// console.log(total);

// const apartment = {
//   imgUrl: 'https://via.placeholder.com/640x480',
//   descr: 'Spacious apartment in the city center',
//   rating: 4,
//   price: 2153,
//   tags: ['premium', 'promoted', 'top'],
//   owner: {
//     name: 'Henry',
//     phone: '982-126-1588',
//     email: 'henry.carter@aptmail.com',
//   },
// };

// // Change code below this line
// const ownerName = apartment.owner.name;
// const ownerPhone = apartment.owner.phone;
// const ownerEmail = apartment.owner.email;
// const numberOfTags = apartment.tags.length;
// const firstTag = apartment.tags[0];
// const lastTag = apartment.tags[apartment.tags.length - 1];
// console.log(lastTag);

// Change code below this line

// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = 'Манго';

// console.log(dog); // { name: 'Манго', __proto__: animal }
// console.log(animal.isPrototypeOf(dog));

// const categories = document.querySelectorAll('.item > ul');
// console.log(categories);

//--------------------------------------//

//import Movies from './js/Movies';

/// потрібно реалізувати появу кнопки за умови наявності трейлера

// const trailerMovie = new Movies({
//   url: `https:api.themoviedb.org/3/movie/${movieId}/videos`,
//   params: { api_key: '084c550b6f1767443109bcf4bcaee21b' },
// });

// const buttonTrailer = document.querySelector('.button-trailer');
// console.log(buttonEl);
// const modalBox = document.querySelector('.modal__box');

// buttonTrailer.addEventListener('click', onModalTrailerMovie);
// //+ отримуємо посилання на тег, який містить аргумент id фільму

// // Окрема функція у функції Влада
// /* function addButtonTrailer () {

// }
// */
// // має прийті у функцію аргументом id фільма
// async function onModalTrailerMovie(movieId) {
//   //  const movieId =// або отримати з функції-запиту Влада

//   try {
//     const dataTrailerMovie = await trendingMovies.fetchMovies();
//     const trailerMovie = dataMovie.results;
//     trailerMovie.map(elem => {
//       if (elem.hasOwnProperty('type') || elem.type === 'Trailer') {
//       }
//     });
//   } catch (error) {
//     console.log(error.message);
//   }
// }
