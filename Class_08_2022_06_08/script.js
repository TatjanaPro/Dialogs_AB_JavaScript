var x = 60;
document.getElementById("dec").innerHTML = x;

var y = (x << 0) >> 7;
var z = String(y);
y = (x << 1) >> 7;
z = z + String(y);
y = (x << 2) >> 7;
z = z + String(y);
y = (x << 3) >> 7;
z = z + String(y);
y = (x << 4) >> 7;
z = z + String(y);
y = (x << 5) >> 7;
z = z + String(y);
y = (x << 6) >> 7;
z = z + String(y);
y = (x << 7) >> 7;
z = z + String(y);

document.getElementById("bin").innerHTML = x;
