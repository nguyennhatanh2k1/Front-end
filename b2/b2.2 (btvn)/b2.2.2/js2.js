let n = Number(prompt('Enter a number'));
let s = 1;
for (let i = 1; i < n+1; i++){
s = s* i;
}
alert(`The factorial of ${n} is ${s}`);