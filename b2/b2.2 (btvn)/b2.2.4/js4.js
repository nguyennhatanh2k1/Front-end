let x = Number(prompt('Enter a number'));
if ((x>=0)&&(x<4.5)) {
    alert('Lower half of 9');
} else if ((x>4.5)&&(x<=9)) {
    alert('Higher half of 9');
} else if (x==4.5) {
    alert('Half of 9');
} 
else {
    alert('Not in range');
}