let num = prompt('Enter a sequence of numbers, separated by ",":').split(',');
let arr = [];
for (let i = 0; i < num.length; i++) {
    if (num[i]%2==1) {
        arr.push(num[i]);
    }
}
alert(`${num} => ${arr}`);