// task 4 Напиши функцію, яка обчислює факторіал переданого їй числа.
function factorial(n) {
  return n != 1 ? n * factorial(n - 1) : 1;
}

// task 5 Напиши функцію, яка приймає три окремі цифри і перетворює
// їх в одне число. Наприклад: цифри 1, 4, 9 перетворяться в число 149.

function convertNumber(a, b, c) {
  return String(a) + String(b) + String(c);
}

// task 6
// Напиши функцію, яка приймає довжину і ширину прямокутника і обчислює його площу.
// Якщо в функцію передали 1 параметр, то вона обчислює площу квадрата.
function calcArea(a, b) {
  if (typeof a !== "number" || isNaN(a)) {
    throw new Error("введіть правильно перше число");
  }
  if (typeof b !== "number" || isNaN(b)) {
    return a * a;
  }
  return a * b;
}

export { factorial, convertNumber, calcArea };
