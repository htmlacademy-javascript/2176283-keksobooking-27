/**
 * Генерация целого числа и числа с плавающей точкой в диапазоне
 * @param {integer} min — минимум диапазона
 * @param {integer} max  — максимум диапазона
 * @param {integer} prec — количество знаков после запятой, по-умолчанию 5
 * @return {float} — случайное число
 */

const randomInteger = function (min, max) {
  if (max < 0 || min < 0 || min === max) {
    return NaN;
  }
  if (max < min) {
    [min, max] = [max, min];
  }
  return Math.round(Math.random() * (max - min) + min);
};

console.log(`Случайное целое число = ${randomInteger(0, 10)}`);


const randomFloat = function (min, max, prec) {
  if (max < 0 || min < 0 || min === max || prec < 0) {
    return NaN;
  }
  if (max < min) {
    [min, max] = [max, min];
  }
  return Math.floor((Math.random() * (max - min) + min) * 10 ** prec) / 10 ** prec;
};

console.log(`Случайное число с плавающей точкой = ${randomFloat(5, 10, 5)}`);
