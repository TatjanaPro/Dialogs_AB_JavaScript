const date = new Date();
console.log("Date" + date);

const date_text = date.toLocaleString("lv-LV");
console.log("Date text (LV format):" + date_text);

const date_text_length = date_text.length;
console.log("Date text length:" + date_text_length);

document.getElementById("CurrentDay").innerHTML =
  document.getElementById("CurrentDay").innerHTML + date;

document.getElementById("CurrentTime").innerHTML =
  document.getElementById("CurrentTime").innerHTML +
  date_text.slice(11, date_text_length);
