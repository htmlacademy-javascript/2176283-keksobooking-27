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

const numberGeneratedAds = 10;

const fotoNumber = String(getRandomPositiveInteger(1,10)).padStart(2,0);
const title = [ 'то, что Вам понравится', 'лучшее предложение', 'это Вас заинтересует' ];
const lat = getRandomPositiveFloat(35.65000, 35.70000, 5);
const lng = getRandomPositiveFloat(139.70000, 139.80000, 5);
const address = [ lat, lng ];
const price = getRandomPositiveInteger(10000, 30000);
const type = [ 'palace', 'flat', 'house', 'bungalow', 'hotel' ];
const rooms = getRandomPositiveInteger(1, 5);
const guests = getRandomPositiveInteger(1, 10);
const checkin = [ '12:00', '13:00', '14:00' ];
const checkout = [ '12:00', '13:00', '14:00' ];
const features = [ 'wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner' ];
const description = [ 'Уютная спальня', 'Просторная гостинная', 'Комфортный номер' ];
const photos = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg'
];
/**
 *Ганерация случайного индекса массива
 * @param {object} elements - массив с данными
 * @return {integer} index - случайный индекс массива
 */
const getRandomArrayElement = (elements) => elements [
  getRandomPositiveInteger(0, elements.length - 1)
];
/**
 *Создание объекта, описывающего случайное объявление
 * @return {object} adNearby - объект с описанием объявления
 */
const adNearby = () => ({
  author: `img/avatars/user${ fotoNumber }.png`,

  offer: `${getRandomArrayElement(title)},
     ${ address }, ${ price },
     ${getRandomArrayElement(type)},
     ${rooms}, ${guests},
     ${getRandomArrayElement(checkin)},
     ${getRandomArrayElement(checkout)},
     ${getRandomArrayElement(features)},
     ${getRandomArrayElement(description)},
     ${getRandomArrayElement(photos)}`,

  location: `${lat }, ${ lng}`,
});
/**
 * Генерация 10 случайных объявлений
 */
const generateAdNeardys = Array.from({length: numberGeneratedAds}, adNearby);

console.log(generateAdNeardys);
