/**
 * Генерация целого числа в диапазоне
 * @param {integer} min — минимум диапазона
 * @param {integer} max  — максимум диапазона
 * @param {integer} prec — количество знаков после запятой, по-умолчанию 5
 * @return {integer} — случайное число
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
/**
 * Генерация числа с плавающей точкой в диапазоне
 * @param {integer} min — минимум диапазона
 * @param {integer} max  — максимум диапазона
 * @param {integer} prec — количество знаков после запятой, по-умолчанию 5
 * @return {float} — случайное число
 */
const getRandomPositiveFloat = (min, max, prec = 1) => {
  if (min < 0 || max < 0 || prec < 0) {
    return NaN;
  }
  const lower = Math.min(min, max);
  const upper = Math.max(min, max);
  const result = Math.random() * (upper - lower) + lower;
  return +result.toFixed(prec);
};
/**
 * Генерация случайного индекса массива
 * @param {object} elements - массив с данными
 * @return {integer} index - случайный индекс массива
 */
const getRandomArrayElement = (elements) => elements [
  getRandomPositiveInteger(0, elements.length - 1)
];

export {
  getRandomPositiveInteger,
  getRandomPositiveFloat,
  getRandomArrayElement,
};
