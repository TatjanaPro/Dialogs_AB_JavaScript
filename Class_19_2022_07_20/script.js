/*viena norade un ar jaunu pierakstu jauna norade uz to pasu objektu
mutable objects */

const obj1 = { property1: 10 };
/*document.getElementById(
  "demo1"
).innerHTML = `{obj1.property1=${obj1.property1}`;*/

const obj2 = obj1;
obj2.property1 = 20;
/*document.getElementById(
  "demo2"
).innerHTML = `{obj2.property1=${obj2.property1}`;
document.getElementById(
  "demo3"
).innerHTML = `and now - obj1.property1=${obj1.property1}`;*/

//ipasibas atributu kontrole (jaunas ipasibas ar nenoklusetiem atributiem pievienosanu)

Object.defineProperty(obj2, "property2", {
  value: 100,
  enumerable: false, //kad tiks taisits cikls, property 2 ipasiba neparadisies
});

Object.defineProperty(obj2, "property3", {
  value: "Aaaa",
  configurable: false, //nedod nodzest datus
});

let txt = "";
for (let current_property in obj1) {
  txt += obj1[current_property] + " ";
}
document.getElementById("demo1").innerHTML = txt;

delete obj2.property3;

/*var x1 = 10;
document.getElementById("demo1").innerHTML = `x1=${x1}`; //"x1=" + x1

var x2 = x1;
x2 = 20;
document.getElementById("demo2").innerHTML = `x2=${x2}`;
document.getElementById("demo3").innerHTML = `and now - x1=${x1}`;

/*const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};

const x = person;
x.age = 10;

document.getElementById("demo").innerHTML =
  person.firstName + " is " + person.age + " years old.";*/
