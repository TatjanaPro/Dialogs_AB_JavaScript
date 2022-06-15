var x = 40;
document.getElementById("dec").innerHTML = x;

var bit_sequence = "";
var zero_th_bit = (x >> 0) & 1;
//x>>0 --> 60(dec) atbilst 0011 1100(bin)
//0011 1100 >> 0 --> 0011 1100
//             1(dec) atbilsts 0000 0001(bin)
//(x >> 0) & 1 --> 0011 1100
//                 0000 0001
//                 0000 0000(bin) --> 0(dec)
console.log(
  "0.bita attelosana (pec nobides pa 0 bitiem pa labi un reizinasanas ar 1)" +
    zero_th_bit
);
bit_sequence = zero_th_bit + bit_sequence;
console.log("0.bits" + bit_sequence);

zero_th_bit = (x >> 1) & 1;

//0011 1100  >> 1 --> 0001 1110
//(x >> 1) & 1 --> 0001 1110
//                 0000 0001
//                 0000 0001

console.log(
  "1.bita attelosana (pec nobides pa 1 bitu pa labi un reizinasanas ar 1" +
    zero_th_bit
);
bit_sequence = zero_th_bit + bit_sequence;
console.log("0. un 1. bits:" + bit_sequence);

zero_th_bit = (x >> 2) & 1;
console.log(zero_th_bit);
bit_sequence = zero_th_bit + bit_sequence;
console.log(bit_sequence);

zero_th_bit = (x >> 3) & 1;
console.log(zero_th_bit);
bit_sequence = zero_th_bit + bit_sequence;
console.log(bit_sequence);

zero_th_bit = (x >> 4) & 1;
console.log(zero_th_bit);
bit_sequence = zero_th_bit + bit_sequence;
console.log(bit_sequence);

zero_th_bit = (x >> 4) & 1;
console.log(zero_th_bit);
bit_sequence = zero_th_bit + bit_sequence;
console.log(bit_sequence);

zero_th_bit = (x >> 5) & 2;
console.log(zero_th_bit);
bit_sequence = zero_th_bit + bit_sequence;
console.log(bit_sequence);

zero_th_bit = (x >> 6) & 2;
console.log(zero_th_bit);
bit_sequence = zero_th_bit + bit_sequence;
console.log(bit_sequence);

document.getElementById("bin_peec_algoritma").innerHTML = bit_sequence;

document.getElementById("bin_peec_standarta_funkcijas").innerHTML =
  Number(x).toString(2);

var vards_uzvards = "Jānis Bērziņš,";
var nauda = 15000;
var peļņa_1 = (nauda * 0, 01) * 1;
var peļņa_2 = (nauda * 0, 02) * 2;
var peļņa_3 = (nauda * 0, 03) * 3;
var peļņa_4 = (nauda * 0, 04) * 4;
var peļņa_5 = (nauda * 0, 05) * 5;
document.getElementById("client").innerHTML = vards_uzvards;
document.getElementById("money").innerHTML = nauda;
document.getElementById("procenti_1").innerHTML = peļņa_1;
document.getElementById("procenti_2").innerHTML = peļņa_2;
document.getElementById("procenti_3").innerHTML = peļņa_3;
document.getElementById("procenti_4").innerHTML = peļņa_4;
document.getElementById("procenti_5").innerHTML = peļņa_5;
