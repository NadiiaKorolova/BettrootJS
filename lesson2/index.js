import { result } from "./test1.js";
import { task2Result } from "./test2.js";
import { messageTask3Result } from "./test3.js";
import { messageTask4 } from "./test4.js";
import { persentAmount } from "./test6.js";

console.log(result.toFixed(2));
console.log(task2Result);
console.log(messageTask3Result);
console.log(messageTask4);
// task 5 ?
console.log(
  `the amount of accrued interest for two months is ${persentAmount.toFixed(
    2
  )} $`
);
