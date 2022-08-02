<!DOCTYPE html>
<html>
<body>

<h2>My First JavaScript</h2>

<button type="button"
onclick="document.getElementById('demo').innerHTML = Date()"> // funkcijas piesaistisana vienai pogai
//onclick - darbiba, getElement(demo) - sameklets indefikators un innerHTML - saturs mainisies uz datumu
Click me to display Date and Time.</button> // virsraksts

<p id="demo">apakselements</p>

let text = "We are the so-called "Vikings" from the north.";
The string will be chopped to "We are the so-called ".

The solution to avoid this problem, is to use the backslash escape character.

The backslash (\) escape character turns special characters into string characters:

Code Result Description
\' ' Single quote
\" " Double quote
\\ \ Backslash

Six other escape sequences are valid in JavaScript:

Code Result
\b Backspace
\f Form Feed
\n New Line
\r Carriage Return
\t Horizontal Tabulator
\v Vertical Tabulator

JavaScript strings can have numeric content:

let x = 100; // x is a number

let y = "100"; // y is a string

String.fromCharCode() - cipars parversas simbola no ASCII tabulas

"A".charCodeAt(0) --> 65 (ASCII A simbola numurs)
Number("0x"+(32).toString(16)); -->32

</body>
</html>

LOGISKAS OPERACIJAS (OPERATORI)

|| (or) true or falsy

&& (and) -> Console: Boolean(1); Rezultats: True

![Diagramma](https://github.com/TatjanaPro/Dialogs_AB_JavaScript/blob/main/Images/logic_operators.jpg?raw=true)

Bitu bidisana
