//You can initiate many values in statement 1 (separated by comma):
id = "demo";

const cars = ["BMW", "Volvo", "Saab", "Ford"];
let i, len, text;
for (i = 0, len = cars.length, text = ""; i < len; i++) {
  text += cars[i] + "<br>";
}
document.getElementById("demo").innerHTML = text;

//using var, the variable declared in the loop redeclares the variable outside the loop. Answer i = 10. Var izmantots visa koda?

var a = 5;
for (var a = 0; a < 10; a++) {
  // some statements
}
document.getElementById("demo").innerHTML = a;

//using let, the variable declared in the loop does not redeclare the variable outside the loop. Answer i = 5. Divas mainigas ar vienu nosaukumu.Tad atbilde 5 un 10?

let b = 5;
for (let b = 0; b < 10; b++) {}
document.getElementById("demo").innerHTML = b;

//The for in statement loops through the properties of an object:John Doe 25

const person = { fname: "John", lname: "Doe", age: 25 };

let txt = "";
for (let x in person) {
  txt += person[x] + " ";
}

document.getElementById("demo").innerHTML = txt;
