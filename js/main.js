const NUMBER_GENERATED_ADS = 10;
const FOTO_NUMBER = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const TITLE = [ 'то, что Вам понравится', 'лучшее предложение', 'это Вас заинтересует' ];
const COORDINATES = {
  LAT_MIN: 35.65000,
  LAT_MAX: 35.70000,
  LNG_MIN: 139.70000,
  LNG_MAX: 139.80000,
  ZOOM: 5
};
const PRICE = {
  MIN: 10000,
  MAX: 50000
};
const TYPE = [ 'palace', 'flat', 'house', 'bungalow', 'hotel' ];
const ROOMS = {
  MIN: 1,
  MAX: 5
};
const GUESTS = {
  PERSON_MIN: 1,
  PERSON_MAX: 10
};
const CHECK_IN = [ '12:00', '13:00', '14:00' ];
const CHECK_OUT = [ '12:00', '13:00', '14:00' ];
const FEATURES = [ 'wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner' ];
const DESCRIPTION = [ 'Уютная спальня', 'Просторная гостинная', 'Комфортный номер' ];
const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];

/**
 * Генерация целого числа и числа с плавающей точкой в диапазоне
 * @param {integer} min — минимум диапазона
 * @param {integer} max  — максимум диапазона
 * @param {integer} prec — количество знаков после запятой, по-умолчанию 5
 * @return {float} — случайное число
 */

const getRandomPositiveInteger = (min, max) => {
  if (min < 0 || max < 0) {
    return NaN;
  }
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomPositiveFloat = (min, max, prec = 1) => {
  if (min < 0 || max < 0 || prec < 0) {
    return NaN;
  }
  const lower = Math.min(min, max);
  const upper = Math.max(min, max);
  const result = Math.random() * (upper - lower) + lower;
  return +result.toFixed(prec);
};
// тут я не уловил мысль. По заданию должна быть равна локации
const ADDRESS = [ getRandomPositiveFloat(COORDINATES.LAT_MIN, COORDINATES.LAT_MAX, COORDINATES.ZOOM), getRandomPositiveFloat(COORDINATES.LNG_MIN, COORDINATES.LNG_MAX, COORDINATES.ZOOM) ];
/**
 * Генерация случайного индекса массива
 * @param {object} elements - массив с данными
 * @return {integer} index - случайный индекс массива
 */
const getRandomArrayElement = (elements) => elements [
  getRandomPositiveInteger(0, elements.length - 1)
];
/**
 * Создание объекта, описывающего случайное объявление
 * Поле offer тип string
 * @return {object} adNearby - объект с описанием похожего объявления
 */
const adNearby = () => ({
  author: `img/avatars/user${ String(getRandomArrayElement(FOTO_NUMBER)).padStart(2,0) }.png`,
  offer: `${getRandomArrayElement(TITLE)},
     ${ ADDRESS },
     ${getRandomArrayElement(PRICE.MIN, PRICE.MAX)},
     ${getRandomArrayElement(TYPE)},
     ${getRandomArrayElement(ROOMS.MIN, ROOMS.MAX)},
     ${getRandomArrayElement(GUESTS.PERSON_MIN, GUESTS.PERSON_MAX)},
     ${getRandomArrayElement(CHECK_IN)},
     ${getRandomArrayElement(CHECK_OUT)},
     ${getRandomArrayElement(FEATURES)},
     ${getRandomArrayElement(DESCRIPTION)},
     ${getRandomArrayElement(PHOTOS)}`,

  location: `${getRandomPositiveFloat(COORDINATES.LAT_MIN, COORDINATES.LAT_MAX, COORDINATES.ZOOM)}, ${getRandomPositiveFloat(COORDINATES.LNG_MIN, COORDINATES.LNG_MAX, COORDINATES.ZOOM)}`,
});
/**
 * Генерация 10 случайных объявлений
 */
const generateAdNeardys = Array.from({length: NUMBER_GENERATED_ADS}, adNearby);
console.log(generateAdNeardys);
