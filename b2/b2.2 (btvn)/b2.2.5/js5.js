let n = Number(prompt('Enter n (n >= 0)'));
let x = Number(prompt('Enter x (x >= 0)'));
if ((x >= 0) && (x < n / 2)) {
    alert(`${x} is in lower half of ${n}`);
} else if ((x > n / 2) && (x <= n)) {
    alert(`${x} is in higher half of ${n}`);
} else if (x == n / 2) {
    alert(`${x} is half of ${n}`);
}
else {
    alert('Not in range');
}