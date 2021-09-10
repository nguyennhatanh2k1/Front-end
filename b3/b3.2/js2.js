let num = prompt('Enter a sequence of numbers, separated by ",":').split(',');
let arr = [];
for (let i = 0; i < num.length; i++) {
    arr.push(num[i]);}
let min = arr[0];
for (let i in arr) {
    if (arr[i]<=min) {
        min=arr[i];}
}
alert(`The smallest number is ${min}`);