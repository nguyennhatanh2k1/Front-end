let radius = Number(prompt('Enter the radius of the circle'));
let area = (radius ** 2) * 3.14;
let s1 = (Math.round(area * 100) / 100).toFixed(1);
alert(`The circle area is ${s1}`);
// alert(`The circle area is ${area}`);