var name = "Jolanta Jekabsone";
var money = 15000;
const rates = ["0.0001", "0.0002", "0.0003", "0.0004", "0.0005"];

var profitFirst = money * rates[0];
var profitSecond = (money + profitFirst) * rates[1];
var profitThird = (money + profitSecond) * rates[2];
var profitFourth = (money + profitThird) * rates[3];
var profitFifth = (money + profitFourth) * rates[4];

document.getElementById("client").innerHTML = name;
document.getElementById("money").innerHTML = money;
document.getElementById("procenti_1").innerHTML = profitFirst.toFixed(2);
document.getElementById("procenti_2").innerHTML = profitSecond.toFixed(2);
document.getElementById("procenti_3").innerHTML = profitThird.toFixed(2);
document.getElementById("procenti_4").innerHTML = profitFourth.toFixed(2);
document.getElementById("procenti_5").innerHTML = profitFifth.toFixed(2);
