let demL=0;
let demH=0;
for (let i = 1; i < 7; i++) {
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