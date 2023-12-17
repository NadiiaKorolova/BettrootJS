// /Запитай у користувача його вік і визначи, ким він є: дитиною (0-11), підлітком (12-17),
//  дорослим (18_59) або пенсіонером (60 ...), передбач можливість введення невірних даних.

function determineAgeGroup(a) {
  if (isNaN(a) || typeof a !== "number") {
    throw new Error("enter a correct value");
  }
  if (a >= 0 && a <= 11) {
    return "you are a child";
  }
  if (a >= 12 && a <= 17) {
    return "you are a teenager";
  }
  if (a >= 18 && a <= 59) {
    return "you are an adult";
  }
  if (a >= 60) {
    return "you are an pensioner";
  }
  return "enter the correct value";
}

// task 2 Запитай у користувача число від 0 до 9 і виведи йому спецсимвол,
// який розташований на цій клавіші (1 !, 2 @, 3 # і т. д).

function getSymbol(a) {
  if (isNaN(a) || typeof a !== "number") {
    throw new Error("enter a correct number");
  }

  return `)!@£$%^&*(`[a];
}

export { determineAgeGroup, getSymbol };
