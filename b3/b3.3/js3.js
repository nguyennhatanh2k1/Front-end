const arr = [3, 4, 6, -9, 10, -88, 2];
let sNum = Number(prompt('Enter a number'));
let vt = 0;
let check = false;
for (let i in arr) {
    if (arr[i]==sNum) {
        vt = i;
        check = true;
        }
}
if (check == true){
alert(`${sNum} is FOUND in my array at index ${vt}`);
}
else {
alert(`${sNum} is NOT FOUND in my array `);}