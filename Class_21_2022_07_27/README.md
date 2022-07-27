BOM (Interneta parluka objekta modelis) - JS kodols no interneta realizacijas viedokla.

Window objekts - ja mes negribam piesarnot window objektu, tad izmantojam atslegas vardu let (Let netiek pielietots pie window objekta un ar this. or window. pieklut pie mainigajam nedrikst)

Tiekam pie mainigajam (var counter = 1) - vai counter (consolē) vai window.counter vai this.counter

jauns veids - var showCounter = () => console.log(counter);
vecs veids - var showCounter = function () {
console.log(counter);
}

    Window'am ir izmers - innerWidth/innerHeight un outerWidth/outerHight

    Izskatijam dazadus piemerus ar jauna loga atversanu, aizversanu utt

    Ka ari izskatijam bridinajumus (alert())
