"use strict";

if (4 == 9) {
    console.log('Ok!');
} else {                            
    console.log("Error");
}

const num = 50;

if (num < 49) {
    console.log("Error");
} else if (num > 100) {
    console.log("Много");
} else {
    console.log("Ok!");
}


const num = 60;
(num === 50) ? console.log("Ok!") : console.log("Error");
// //тернарный оператор включающий в себя 3 аргумента
//swith строгое соответсвие
const num = 51;
switch (num) {
    case 49:
        console.log("Not");
        break;
    case 100:
        console.log("Not");
        break;
    case 50:
        console.log("Yep");
        break;
    default:
        console.log("Not again");
        break;
}