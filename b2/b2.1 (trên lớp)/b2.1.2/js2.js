let n = Number(prompt('Nhập n: '));
let s = 1;
for (let i = 1; i < n+1; i++) {
    s=s*i;
}
alert(`Giai thừa của n số đầu tiên là ${s}`);