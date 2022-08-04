function myFunction() {
  document.getElementById("demo4").innerHTML = "Paragraph changed.";
}

const string1 = "A string primitive";
const string2 = "Also a string primitive";
const string3 = `Yet another string primitive`;
const string4 = new String("A String object");

return "cat".charAt(1); // returns "a"
return "cat"[1]; // returns "a"

let a = "a";
let b = "b";
if (a < b) {
  // true
  console.log(a + " is less than " + b);
} else if (a > b) {
  console.log(a + " is greater than " + b);
} else {
  console.log(a + " and " + b + " are equal.");
}
let longString =
  "This is a very long string which needs " +
  "to wrap across multiple lines because " +
  "otherwise my code is unreadable.";

let longString =
  "This is a very long string which needs \
to wrap across multiple lines because \
otherwise my code is unreadable.";

Number("123"); // returns the number 123
Number("123") === 123; // true

Number("unicorn"); // NaN
Number(undefined); // NaN

const biggestInt = Number.MAX_SAFE_INTEGER; //  (2**53 - 1) =>  9007199254740991
const smallestInt = Number.MIN_SAFE_INTEGER; // -(2**53 - 1) => -9007199254740991
