let number = Number(prompt("Enter the total number of 1's and 0's ?"));
for (let i = 0; i < number; i++) {
    if (i%2==1) {
        console.log('1');
    } else if (i%2==0) {
        console.log('0');
    }
}