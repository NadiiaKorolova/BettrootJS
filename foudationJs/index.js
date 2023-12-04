// greetings and username question
let userName = "";
userName = prompt("Hello, What is your name?");
console.log(userName);
const message = "Hello," + userName;
console.log(message);
/* user's age */
const CURRENT_YEAR = 2023;
console.log(currentYear);
let typeOfCurrentYear = typeof currentYear;
console.log(typeOfCurrentYear);
let yearOfBirth = 0;
yearOfBirth = prompt("Enter your year of birth");
console.log(+yearOfBirth);
let typeOfYearOfBirth = typeof yearOfBirth;
console.log(typeOfYearOfBirth);
let userAge = 0;
userAge = currentYear - yearOfBirth;
let userAgeRequest = "";
userAgeRequest = confirm("Your age is " + userAge + "?");
console.log(userAgeRequest);
// perimeter of a square
let sideLenght = prompt("enter the lenght of the side of the square");
const test1 = new Number(sideLenght).valueOf();
console.log(+sideLenght);
let perimOfSquare = sideLenght * 4;
console.log(perimOfSquare);
/*let's caiculate circle's area*/
let radius = prompt("Enter radius of the circle");
console.log(+radius);
let circleArea = Math.PI * radius ** 2;
console.log(circleArea);
// calculate the required speed
/*let startPoint = prompt ('city of departure');
console.log(startPoint);
let destination = prompt ('destanation city');
console.log(destination);*/
let distance = prompt("What is the distance between your cities?");
console.log(+distance);
let time = prompt("How many hourse do you have for a trip?");
console.log(+time);
const speed = distance / time;
console.log(speed);
const messageSpeed = "you have to move with speed " + speed + " km/h";
const message1 = `you have to move with speed ${speed} km/h`;
console.log(messageSpeed);
// currency exchange
const euroRate = 0.91;
console.log(euroRate);
let ammountDollar = prompt("what $ ammount you want to exchange?");
console.log(+ammountDollar);
let result = ammountDollar * euroRate;
console.log(result);
let messageResult = "you will get " + result + "€";
console.log(messageResult);
