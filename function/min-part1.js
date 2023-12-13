// task2
// Створи функцію, яка буде виводити кількість переданих їй аргументів.
function letArguments(...args) {
  // console.log(args.length);
}

// task3
// Напиши функцію, яка приймає 2 числа і повертає :
// -1, якщо перше число менше, ніж друге;
// 1 - якщо перше число більше, ніж друге;
// 0 - якщо числа рівні.
function compareNumbers(a, b) {
  if (isNaN(a) || typeof a !== "number")
    throw new Error("неправильний тип даних першого числа");
  if (isNaN(b) || typeof b !== "number")
    throw new Error("неправильний тип даних другого числа");
  return Math.sign(a - b);
}

export { compareNumbers, letArguments };
