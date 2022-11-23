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
 * Генерация случайной длины массива
 */
const getRandomLength = (elements) => {
  const lengthElements = Math.ceil(Math.random() * elements.length);
  const newElements = [];
  for (let i = 0; i < lengthElements; i++) {
    newElements.push(elements[i]);
  }
  return newElements;
};
/**
 * Генерация случайного индекса массива
 * @param {object} elements - массив с данными
 * @return {integer} index - случайный индекс массива
 */
const getRandomArrayElement = (elements) => elements [
  getRandomPositiveInteger(0, elements.length - 1)
];

const showAlertError = (message) => {
  const alertContainer = document.createElement('div');
  alertContainer.style.zIndex = '1000';
  alertContainer.style.position = 'fixed';
  alertContainer.style.left = '10%';
  alertContainer.style.top = '550px';
  alertContainer.style.right = '10%';
  alertContainer.style.padding = '10px 3px';
  alertContainer.style.fontSize = '30px';
  alertContainer.style.textAlign = 'center';
  alertContainer.style.backgroundColor = 'rgba(255, 0, 0, 0.9)';

  alertContainer.textContent = message;

  document.body.append(alertContainer);

  setTimeout(() => {
    alertContainer.remove();
  }, 7000);
};
export {
  getRandomPositiveInteger,
  getRandomPositiveFloat,
  getRandomArrayElement,
  getRandomLength,
  showAlertError,
};
