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
