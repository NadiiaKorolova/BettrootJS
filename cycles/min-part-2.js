//  task 3 Підрахуй суму всіх чисел в заданому користувачем діапазоні.

function countSum(a, b) {
  if (isNaN(a) || typeof a !== "number" || isNaN(b) || typeof b !== "number") {
    throw new Error("enter a correct number");
  }
  let result = 0;
  for (let i = a; i <= b; i++) {
    result += i;
  }
  return result;
}

//  task 4 Запитай у користувача 2 числа і знайди найбільший спільний дільник.

function findGCD(a, b) {
  if (isNaN(a) || isNaN(b)) {
    throw new Error("Будь ласка, введіть числа.");
  } else {
    while (b !== 0) {
      const temp = b;
      b = a % b;
      a = temp;
    }
    return a;
  }
}

// 5 Запитай у користувача число і виведи всі дільники цього числа.
function getDividers(a) {
  if (isNaN(a) || typeof a !== "number") {
    throw new Error("enter a correct number");
  }

  for (let i = 1; i <= a; i++) {
    if (a % i === 0) {
      console.log(i);
    }
  }
}
export { countSum, findGCD, getDividers };
