window.name = "original";

let jsWindow = window.open(
  "http://127.0.0.1:5500/Dialogs_AB_JAVASCRIPT/Class_20_2022_07_25/",
  //"https://www.w3schools.com/js/js_object_prototypes.asp",
  "test",
  "height=600,width=800"
);

//jsWindow.window.console(jsWindow.opener);

setTimeout(() => {
  window.open("http://127.0.0.1:5500/Dialogs_AB/Class_19_2022_07_20/", "test");
  //window.open("https://www.w3schools.com/js/js_this.asp", "test");
}, 3000);

setTimeout(() => {
  //jsWindow.resizeTo(600, 300); // Will not work for third part resources because of CORS
  jsWindow.resizeBy(-100, -100); // -"- (?)
  //jsWindow.moveTo(deltaX,deltaY); // -"- (?)
  jsWindow.moveBy(50, 50); // -"- (?)
}, 6000);

/*
setTimeout(() => {
  jsWindow.close();
}, 9000);
*/
/*
setTimeout(() => {
  window.open("http://127.0.0.1:5500/Dialogs_AB/Class_18/", "_blank");
}, 12000);
*/

setTimeout(() => {
  //window.alert("Hello World!");
  jsWindow.alert("Hello World!");
}, 7000);

setTimeout(() => {
  jsWindow.close();
}, 9000);


// Class_22 nodarbībai
// https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams

const urlParams = new URLSearchParams(location.search);

for (const [key, value] of urlParams) {
    console.log(`${key}:${value}`);
}

keys_ = [];
for (const key of urlParams.keys()) {
  console.log(key);
  keys_.push(key);
}
console.log(keys_);

values_ = [];
for (const value of urlParams.values()) {
  console.log(value);
  values_.push(value);
}
console.log(values_);

entries_ = [];
for (const entry of urlParams.entries()) {
  console.log(entry);
  entries_.push(entry);
}
console.log(entries_);

console.log(urlParams.has('q1'));
console.log(urlParams.has('q3'));