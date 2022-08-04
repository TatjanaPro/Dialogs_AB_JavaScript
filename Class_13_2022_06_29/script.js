console.log("Skripta izpildes sakums:\n" + new Date());
document.getElementById("manual_count").innerHTML = "1<br>2<br>3<br>4<br>";

let text_ = "";
for (let i = 1; i < 11; i++) {
  if (i % 2 == 0) {
    text = text_ + "para skaitlis " + i + "<br>";
  } else {
    text = text_ + "nepara skaitlis" + i + "<br>";
  }
}
document.getElementById("automatic_count").innerHTML = text_;

//  text += cars[0] + "<br>"; --> text = text + cars[0] + "<br>";

text = "",
var dalit = [2, 3, 4, 6, 8];

for (let dalam = 1; dalam < 25; dalam++) {
  let flag=1;
  text = text + dalam;
  for (let k = 0; k < dalit.length; k++) {
    if (dalam % dalit[k] == 0) {
      if (flag ==1)
        {
          text = text + " dalās ar skaitli ";
          flag = 0 ; 
        }
      text = text + dalit[k] + ",";
    }
  }
  if (flag==0)
  {
    text=text.slice(0,text.length-1);
  }


  if (dalam % 2 == 0) {
    text = text + " pāra skaitlis ";
  } else {
    text = text + " nepāra skaitlis ";
  }
  text = text + "<BR>";
}
document.getElementById("automatic_count").innerHTML = text;