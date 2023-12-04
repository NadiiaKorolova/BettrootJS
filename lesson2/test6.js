// task 6
const depositAmount = 10000;
const ANNUAL_RATE = 5;
const numberDepositDays = 61;
const numberDaysOfYear = 365;
const persentAmount =
  (((depositAmount * ANNUAL_RATE) / 100) * numberDepositDays) /
  numberDaysOfYear;

  export {persentAmount};