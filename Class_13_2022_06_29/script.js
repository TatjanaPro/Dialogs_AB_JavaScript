console.log("Skripta izpildes sakums:\n" + new Date());
document.getElementById("manual_count").innerHTML = "1<br>2<br>3<br>4<br>";

let text = "";
for (let i = 1; i < 11; i++) {
  if (i % 2 == 0) {
    text = text + "para skaitlis " + i + "<br>";
  } else {
    text = text + "nepara skaitlis" + i + "<br>";
  }
}
document.getElementById("automatic_count").innerHTML = text;

//  text += cars[0] + "<br>"; --> text = text + cars[0] + "<br>";
