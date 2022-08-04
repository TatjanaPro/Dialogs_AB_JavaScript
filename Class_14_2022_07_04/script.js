/*text = "";
var i = 1;
while (i < 5) {
  text = text + i + "<br>";
  i++;
}
document.getElementById("count").innerHTML = text;*/

let text = "while:<br>";
for (let i = 1; i < 5; i++) {
  text = text + i + "<br>";
  if (i == 3) {
    break;
  }
}
document.getElementById("count").innerHTML = text;

text = "do while:<br>";
var i = 1;
do {
  text = text + i + "<br>";
  i++;
} while (i < 5 && i == 4);
document.getElementById("do_while_automatic_count").innerHTML = text;

let text = "for count until " + 5 + ":<br>";
for (let i = 1; i <= 5; i++) {
  text = text + i + "<br>";
}
document.getElementById("count_1").innerHTML = text;

/* koda fragments */

text = "for count until " + 10 + ":<br>";
for (let i = 1; i <= 10; i++) {
  text = text + i + "<br>";
}
document.getElementById("count_2").innerHTML = text;

/* koda fragments */

text = "for count until " + 15 + ":<br>";
for (let i = 1; i <= 15; i++) {
  text = text + i + "<br>";
}
document.getElementById("count_3").innerHTML = text;

/* koda fragments */

function counter(N, html_el_id_nr) {
  text = "for count until " + N + ":<br>";
  for (let i = 1; i <= N; i++) {
    text = text + i + "<br>";
  }
  document.getElementById("count_" + html_el_id_nr).innerHTML = text;
}

counter(20, 4);

/* koda fragments */

counter(25, 5);
