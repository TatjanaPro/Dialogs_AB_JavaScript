//Function expressions

//funkcijas definesana ar izteiksmes palidzibu

const square_expression = function (number) {
  return number * number;
};
const y = square_expression(4); // x gets the value 16
console.log(y);

//funkcijas definesana ar apgalvojuma palidzibu

function square_statement(number) {
  return number * number;
}
const x = square_statement(4);
console.log(x);

//rekursivas funkcijas piemers

const factorial = function fac(n) {
  return n < 2 ? 1 : n * fac(n - 1); //ja n mazaks par 2 (n<2), tad izpildam pirmo nosacijumu (? 1) (true) : izpilds ja pirma dala bus false (? n * fac(n-1)
};

console.log(factorial(3));

//funkcija, kur arguments ir funkcija

function map(function_for_array_each_element, a) {
  const result = [];
  for (const v of a) {
    result[i] = f(v); //f ieksejais nosaukums
  }
  return result;
}

const function_for_array_each_element = function (x) {
  return x * x * x;
};

const numbers = [0, 1, 2, 5, 10];
const cube = map(function_for_array_each_element, numbers);
console.log(cube);

//mans piemers

const calc = function (oz) {
  let volume = 29.5735 * oz;
  return volume;
};
const ml = calc(5);
console.log(ml);
