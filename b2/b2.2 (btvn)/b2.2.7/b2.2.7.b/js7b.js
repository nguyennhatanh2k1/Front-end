let number = Number(prompt("Enter the total number of L's and H's ?"));
let demL=0;
let demH=0;
for (let i = 1; i < number+1; i++) {
    if (i%2==1) {
        // console.log('L');
        demL++;
    } else if (i%2==0) {
        // console.log('H');
        demH++;
    }
}
console.log(`${demL} L`);
console.log(`${demH} H`);