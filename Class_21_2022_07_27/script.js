let jsWindow = window.open(
  "http://127.0.0.1:5500/Class_21_2022_07_27/",
  "about",
  "height=600,width=800"
);

setTimeout(() => {
  window.open("http://127.0.0.1:5500/Class_20_2022_07_20/", "about");
}, 3000);

setTimeout(() => {
  jsWindow.resizeTo(600, 300);
}, 6000);

setTimeout(() => {
  jsWindow.close();
}, 9000);
