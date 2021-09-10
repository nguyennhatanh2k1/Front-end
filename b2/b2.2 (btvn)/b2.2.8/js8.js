let yWeight = Number(prompt('Your weight in kg?'));
let yHeight = Number(prompt('Your height in cm'));
let m = yHeight/100;
let bmi = Math.round(((yWeight/(m*m))/100)*100).toFixed(1);
alert(`Your BMI is ${bmi}`);
if (bmi<16) {
    alert('Severely underweight !');
} else if ((bmi>=16)&&(bmi<18.5)){
    alert('Underweight !');
} else if ((bmi>=18.5)&&(bmi<25)) {
    alert('Normal !');
} else if ((bmi>=25)&&(bmi<=30)) {
    alert('Overweight !');
} else if (bmi>30) {
    alert('Obese !')
}