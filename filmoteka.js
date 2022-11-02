const basicLightbox = require('basiclightbox');
import * as basicLightbox from 'basiclightbox';
import getDataTrailerMovie from './getDataTrailerMovie';
import makeFilmModalMarkup from './modal-film';

const btn = document.querySelector('.template');
console.log(data);

export default async function openModalOnClick(data) {
  const {
    id,
    original_title,
    vote_average,
    vote_count,
    popularity,
    genres,
    poster_path,
    tagline,
    title,
    overview,
  } = await data;

  // const dataOfTrailer = await getDataTrailerMovie(id);
  // console.log(dataOfTrailer);
  // const hasTrailer = dataOfTrailer.some(element => element.type === 'Trailer');
  // console.log(hasTrailer);

  const instance = basicLightbox.create(
    `
    <div class="modal js-modal-movie">
        <button type="button" class="modal__close-btn">
            <svg class="modal__icon" width="14" height="14">
                <use href="./images/symbol-defs.svg#icon-close-black"></use>
            </svg>
        </button>
      
        <div class="film__image">
      <img class="image" src="${poster_path}" alt=${title} data-id=${id}/>
     ${
       hasTrailer
         ? ` <button
           type="button"
           class="film__button btn__trailer  js-btn-modal-trailer"
         >
           Watch trailer
         </button>`
         : ''
     }
      
      </div>
      <div class="film__information">
          <h2 class="film__title" data-id=${id}>${title}</h2>
          <ul class="film__list">
            <li class="film__item">
              <p class="film__details">Vote / Votes</p>
              <p class="film__info--uper">
                <span class="film__rating--orange" data-id=${id}>${vote_average}</span>
                <span class="film__rating--divider"> / </span>
      <span class="vote-count" data-id=${id}>${vote_count}</span>
              </p>
            </li>
            <li class="film__item">
              <p class="film__details">Popularity</p>
              <p class="film__info--uper" data-id=${id}>${popularity}</p>
            </li>
            <li class="film__item">
              <p class="film__details">Original title</p>
              <p data-id=${id}>${title}</p>
            </li>
            <li class="film__item">
              <p class="film__details">Genre</p>
              <p class="film__info" data-id=${id}>${genres}</p>
            </li>
          </ul>
        <div class="film__about">
          <h3 class="film__about-title">About</h3>
          ${
            overview
              ? `<p class="film__about-text" data-id=${id}>${overview}</p>`
              : `<p class="film__about-text">No information</p>`
          }
        </div>
        <div class="button-wrapper">
          <button type="button" class="film__button btn__watch btn__watch__remove">Add to watched</button>
          <button type="button" class="film__button btn__queue btn__queue__remove">Add to queue</button>
          </div>
        </div>
     </div>

     <div class="modal visually-hidden js-modal-trailer">
      <div class="trailer">
    <button class="trailer__button-close" type="button">
      <svg class="trailer__icon-close" width="30" height="30">
        <use href="./images/symbol-defs.svg#icon-close-black"></use>
      </svg>
    </button>
          <iframe
        class="trailer__video js-trailer-video"
        src=""
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    </div>
     `,
    {
      onShow: instance => {
        document.addEventListener('keydown', e => closeKeyDownKeyEsc(e, instance));
      },
      onClose: instance => {
        document.removeEventListener('keydown', e => closeKeyDownKeyEsc(e, instance));
      },
    }
  );

  instance.show();

  if (hasTrailer) {
    const modalMovieEl = document.querySelector('.js-modal-movie');
    const modalTrailerEl = document.querySelector('.js-modal-trailer');
    const btnModalTrailerEl = document.querySelector('.js-btn-modal-trailer');
    const iframeEl = document.querySelector('.js-trailer-video');

    btnModalTrailerEl.addEventListener('click', openTailer);

    const btnCloseTrailer = document.querySelector('.trailer__button-close');
    btnCloseTrailer.addEventListener('click', closeTrailer);
  } else {
    return;
  }
}

function closeKeyDownKeyEsc(e, instance) {
  if (e.code === 'Escape') {
    instance.close();
  }
}

async function watchTrailer(idMawie) {
  const dataOfTrailer = await getDataTrailerMovie(id);
  const hasTrailer = dataOfTrailer.some(element => element.type === 'Trailer');
  return hasTrailer;
}

function openTailer() {
  const { key } = dataOfTrailer.find(element => element.type === 'Trailer');
  iframeEl.src = `https://www.youtube.com/embed/${key}`;
  console.log(key);

  modalMovieEl.classList.toggle('visually-hidden');
  modalTrailerEl.classList.toggle('visually-hidden');
}

function closeTrailer() {
  iframeEl.src = '';
  modalMovieEl.classList.toggle('visually-hidden');
  modalTrailerEl.classList.toggle('visually-hidden');
}

//----------------------------------------------

import Movies from './Movies';

async function getDataTrailerMovie(idMovie) {
  const trailerMovie = new Movies({
    url: `https://api.themoviedb.org/3/movie/${idMovie}/videos`,
    params: { api_key: '084c550b6f1767443109bcf4bcaee21b' },
  });
  try {
    const { results } = await trailerMovie.fetchMovies();
    return results;
  } catch (error) {
    console.log(error.message);
  }
}

// export default getDataTrailerMovie;
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Movies from './Movies';
// import GetPrimoryInfoMovie from './API-GET-DETALS-MOVIE';
import openModalOnClick from './metodsBasicklightbox';
// import modalTrailerMovie from './modalTrailerMovie';
import { refs } from './refs.js';

refs.moviesList.addEventListener('click', openModal);

async function openModal(e) {
  e.preventDefault();
  const id = e.target.dataset.id;

  const getMovieInfo = new Movies({
    url: `https://api.themoviedb.org/3/movie/${id}`,
    params: { api_key: '084c550b6f1767443109bcf4bcaee21b' },
  });

  try {
    const data = await getMovieInfo.fetchMovies();
    openModalOnClick(data);
  } catch (error) {
    return Notify.failure(error.message);
  }
}
//---//
const basicLightbox = require('basiclightbox');
import * as basicLightbox from 'basiclightbox';
import getDataTrailerMovie from './getDataTrailerMovie';
import onModalTrailerMovie from './onModalTrailerMovie';
// import makeFilmModalMarkup from './modal-film';

const btn = document.querySelector('.template');

export default async function openModalOnClick(data) {
  const {
    id,
    original_title,
    vote_average,
    vote_count,
    popularity,
    genres,
    poster_path,
    tagline,
    title,
    overview,
  } = await data;

  const dataOfTrailer = await getDataTrailerMovie(id);
  // console.log(dataOfTrailer);
  const hasTrailer = dataOfTrailer.some(element => element.type === 'Trailer');
  // console.log(hasTrailer);

  const instance = basicLightbox.create(
    `
    <div class="modal js-modal-movie">
        <button type="button" class="modal__close-btn">
            <svg class="modal__icon" width="14" height="14">
                <use href="../images/symbol-defs.svg#icon-close-black"></use>
            </svg>
        </button>
      
        <div class="film__image">
      <img class="image" src="${poster_path}" alt="${title}" data-movieid="${id}"/>
     ${
       hasTrailer
         ? ` <button
           type="button"
           class="film__button btn__trailer  js-btn-modal-trailer"
         >
           Watch trailer
         </button>`
         : ''
     }
      
      </div>
      <div class="film__information">
          <h2 class="film__title" data-id=${id}>${title}</h2>
          <ul class="film__list">
            <li class="film__item">
              <p class="film__details">Vote / Votes</p>
              <p class="film__info--uper">
                <span class="film__rating--orange" data-id=${id}>${vote_average}</span>
                <span class="film__rating--divider"> / </span>
      <span class="vote-count" data-id=${id}>${vote_count}</span>
              </p>
            </li>
            <li class="film__item">
              <p class="film__details">Popularity</p>
              <p class="film__info--uper" data-id=${id}>${popularity}</p>
            </li>
            <li class="film__item">
              <p class="film__details">Original title</p>
              <p data-id=${id}>${title}</p>
            </li>
            <li class="film__item">
              <p class="film__details">Genre</p>
              <p class="film__info" data-id=${id}>${genres}</p>
            </li>
          </ul>
        <div class="film__about">
          <h3 class="film__about-title">About</h3>
          ${
            overview
              ? `<p class="film__about-text" data-id=${id}>${overview}</p>`
              : `<p class="film__about-text">No information</p>`
          }
        </div>
        <div class="button-wrapper">
          <button type="button" class="film__button btn__watch btn__watch__remove">Add to watched</button>
          <button type="button" class="film__button btn__queue btn__queue__remove">Add to queue</button>
          </div>
        </div>
     </div>
  </div>
     `,
    {
      onShow: instance => {
        document.addEventListener('keydown', e =>
          closeKeyDownKeyEsc(e, instance)
        );
      },
      onClose: instance => {
        document.removeEventListener('keydown', e =>
          closeKeyDownKeyEsc(e, instance)
        );

        btnModalTrailerEl.removeEventListener('click', e =>
          onModalTrailerMovie(instance)
        );
      },
    }
  );

  instance.show();

  const btnModalTrailerEl = document.querySelector('.js-btn-modal-trailer');
  btnModalTrailerEl.addEventListener('click', () =>
    onModalTrailerMovie(instance)
  );
}

function closeKeyDownKeyEsc(e, instance) {
  if (e.code === 'Escape') {
    instance.close();
  }
}
//----//
const basicLightbox = require('basiclightbox');
import * as basicLightbox from 'basiclightbox';
import getDataTrailerMovie from './getDataTrailerMovie';
import svg from '../images/symbol-defs.svg';

const close = `<svg height="30" width="30" class="trailer__svg"><use href="${svg}#icon-close-black"></use></svg>`;

async function onModalTrailerMovie(instance) {
  const imgEl = document.querySelector('[data-movieid]');
  const id = imgEl.dataset.movieid;

  try {
    const dataOfTrailer = await getDataTrailerMovie(id);
    const { key } = dataOfTrailer.find(element => element.type === 'Trailer');

    instance.close();

    const instanceTrailer = basicLightbox.create(
      `
       
      <div class="trailer">
    <button class="trailer__button-close" type="button">
    ${close}
    </button>
          <iframe
        class="trailer__video"
        src="https://www.youtube.com/embed/${key}"
        title="YouTube video player"
        frameborder="0"
      
        allowfullscreen  allow="accelerometer; autoplay;  clipboard-write; encrypted-media; gyroscope"
        width="100%"
        height="100%"
      ></iframe>
    </div>
    `
    );

    instanceTrailer.show();

    const trailerBtnClose = document.querySelector('.trailer__button-close');

    trailerBtnClose.addEventListener('click', () => {
      instanceTrailer.close();
      instance.show();
    });
  } catch (error) {
    console.log(error.message);
  }
}

function onCloseTrailer(instanceTrailer) {
  instanceTrailer.close();
}

// export default onModalTrailerMovie;
//---///

// .trailer {
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   max-width: 80vw;

//   width: 460px;
//   height: 256px;

//   @include tablet {
//     width: 704px;
//     height: 392px;
//   }

//   @include desktop {
//     width: 806px;
//     height: 448px;
//   }
// }

// .trailer__button-close {
//   position: absolute;
//   top: -20px;
//   right: -20px;

//   display: flex;
//   justify-content: center;
//   align-items: center;
//   padding: 0;
//   line-height: 1;
//   width: 20px;
//   height: 20px;

//   border-radius: 50%;
//   border: none;

//   cursor: pointer;

//   fill: white;
//   background-color: transparent;

//   transition: fill 250ms;

//   &:hover,
//   &:focus {
//     fill: #ff6b08;
//   }

//   @include tablet {
//     top: -30px;
//     right: -30px;
//     width: 30px;
//     height: 30px;
//   }

//   @include desktop {
//     top: -40px;
//     right: -40px;
//     width: 40px;
//     height: 40px;
//   }
// }
