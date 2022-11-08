import {
  getRandomPositiveInteger,
  getRandomPositiveFloat,
  getRandomArrayElement,
} from './util.js';

const NUMBER_GENERATED_ADS = 10;
const TITLE = [ 'то, что Вам понравится', 'лучшее предложение', 'это Вас заинтересует' ];
const Coordinates = {
  LAT_MIN: 35.65000,
  LAT_MAX: 35.70000,
  LNG_MIN: 139.70000,
  LNG_MAX: 139.80000,
  ZOOM: 5
};
const Price = {
  MIN: 10000,
  MAX: 50000
};
const TYPE = [ 'palace', 'flat', 'house', 'bungalow', 'hotel' ];
const Rooms = {
  MIN: 1,
  MAX: 5
};
const Guests = {
  PERSON_MIN: 1,
  PERSON_MAX: 10
};
const CHECK_IN_OUT = [ '12:00', '13:00', '14:00' ];
const FEATURES = [ 'wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner' ];
const DESCRIPTION = [ 'Уютная спальня', 'Просторная гостинная', 'Комфортный номер', ];
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];
/**
 * Создание объекта, описывающего случайное объявление
 * @return {object} adNearby - объект с описанием похожего объявления
 */
const generateAd = (index) => {
  const location = {
    lat: getRandomPositiveFloat(Coordinates.LAT_MIN, Coordinates.LAT_MAX, Coordinates.ZOOM),
    lng: getRandomPositiveFloat(Coordinates.LNG_MIN, Coordinates.LNG_MAX, Coordinates.ZOOM),
  };
  return {
    author: `img/avatars/user${ index.toString().padStart(2,0) }.png`,
    offer: {
      title: getRandomArrayElement(TITLE),
      address: `${location.lat}, ${location.lng}`,
      price: getRandomPositiveInteger(Price.MIN, Price.MAX),
      type: getRandomArrayElement(TYPE),
      rooms: getRandomPositiveInteger(Rooms.MIN, Rooms.MAX),
      guests: getRandomPositiveInteger(Guests.PERSON_MIN, Guests.PERSON_MAX),
      checkin: getRandomArrayElement(CHECK_IN_OUT),
      checkout: getRandomArrayElement(CHECK_IN_OUT),
      features: getRandomArrayElement(FEATURES),
      description: getRandomArrayElement(DESCRIPTION),
      photos: getRandomArrayElement(PHOTOS),
    },
    location: location,
  };
};
/**
 * Генерация 10 случайных объявлений
 */
const generateAds = () => Array.from({length: NUMBER_GENERATED_ADS}, (_, index) => generateAd(index + 1));

export { generateAds};
