// task4
const moneyAmount = prompt("enter yhe ammount");
const chocolatePrice = prompt("enter the price of chocolate");
const resultTask4 = Math.floor(Number(+moneyAmount / +chocolatePrice));
const restTask4 = Number(moneyAmount % chocolatePrice);
const messageTask4 = `You can buy ${resultTask4} chocolate bars, the remaining funds will be ${restTask4} $`;
export {messageTask4};