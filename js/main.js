const randomInteger = function (a, b) {
  if (b < 0 || a < 0 || a == b) {
    return NaN;
  } if (b < a) {
    [a, b] = [b, a];
  } return Math.round(Math.random() * (b - a) + a);
};

console.log('Случайное целое число = ' + randomInteger(0, 10));




const randomFloat = function (a, b, c) {
  if (b < 0 || a < 0 || a == b || c < 0) {
    return NaN;
  } if (b < a) {
    [a, b] = [b, a];
  } return Math.floor((Math.random() * (b - a) + a)*10**c)/10**c;
};

console.log('Случайное число с плавающей точкой = ' + randomFloat(5, 10, 5));
