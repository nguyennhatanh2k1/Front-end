let cel = Number(prompt('Enter the temperature in Celsius'));
let fah = (cel*1.8)+32;
let b=(Math.round(fah * 100)/100).toFixed(1);
alert(`${cel} (C) = ${b} (F)`);