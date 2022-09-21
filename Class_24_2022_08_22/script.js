let text;
if (confirm("Pāriet uz kādu citu lapu?")) {
text = (prompt("Uzrakstiet linku: www. "));
}
    var count = 0;

function timer() {
    count += 1;
    //el.innerText = "Palika" + count + "sekundes.";
    document.getElementById("demo").innerHTML = "Palika" + count + "sekundes.";
    }

    var cancel = setInterval(timer, 1000);

var jsWindow = window.open(
    "http://www.lmt.lv/",
    "safariTab",
    "height=600,width=800"
  );
  
