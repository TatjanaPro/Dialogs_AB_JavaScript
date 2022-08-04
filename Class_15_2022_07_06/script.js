/*function summator(a, b) {
  c = a + b;
  return c;
}

function dialogs() {
  var a = Number(prompt("Ievadiet a vērtību:")),
    b = Number(prompt("Ievadiet b vērtību:"));
  document.getElementById("summator_1").innerHTML =
    a + " un " + b + " summa ir " + summator(a, b);
}

dialogs();*/

/* const cars = ["BMW", "Volvo", "Mini"];

let text = "";
for (let x of cars) {
  text += x + "<br>";
}

document.getElementById("loop").innerHTML = text;

text = "";
for (i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}

document.getElementById("loop_old").innerHTML = text;

let language = "JavaScript";

text = "";
for (let x of language) {
  text += x + "<br>";
}

document.getElementById("string_loop").innerHTML = text;*/

words = "Mani sauc Tatjana";
var symbol_count_words = 0;
var symbol_count_sentence = 0;
var words_count = 0;
for (let x of words) {
  symbol_count_sentence++;
  if (x == " ") {
    //console.log(x + " ta ir atstarpe");
    //console.log("ieprieksaja varda bija " + symbol_count_words + " burti");
    if (symbol_count_words >= 5) {
      //console.log("Vel vairak, ieprieksaja varda bija 5 un vairak burti");
      words_count++;
    }
    symbol_count_words = 0;
  } else {
    symbol_count_words++;
    //console.log(x + " tas ir " + symbol_count_words + " .simbols varda");
    if (symbol_count_sentence == words.length) {
      //console.log("Iepriekseja varda bija " + symbol_count_words + " burti");
      if (symbol_count_words >= 5) {
        //console.log("Vel vairak, ieprieksaja varda bija 5 un vairak burti");
        words_count++;
      }
      symbol_count_words = 0;
      //console.log("Un vel vairak sis bija pedejais vards teikuma");
    }
  }
}
document.getElementById("count").innerHTML =
  "vardu skaits, kuru garums vienad vai lielaks par 5 ir " + words_count;
