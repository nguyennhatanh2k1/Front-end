//b1
const btn1 = document.getElementById("btn1");
btn1.onclick = function btn1 () {
    let p1 = document.getElementById("p1");
    if (p1.style.display === "none") {
        p1.style.display = "block";
    } else {
        p1.style.display = "none";
    }
}
//b2
// let btn2 = document.querySelector('.btn2');
// let box2 = document.querySelector('.box2');
let btn2 = document.getElementById('btn2');
let p2 = document.getElementById('p2');
let str = '0123456789abcdef';
btn2.onclick = function btn2() {
    let color = '#';
    for(let i = 0 ; i < 6 ; i++ ) {
        color += str[Math.floor(Math.random() * 16)];
    }
    p2.style.backgroundColor = color;
}

//b3
let btn3 = document.getElementById("btn3");
let p31 = document.getElementById("p31");
let p32 = document.getElementById("p32");
console.log(btn3);
const a = document.getElementById("p31");
const b = document.getElementById("p32");
btn3.onclick = function btn3 () {
    let shift = p31.innerHTML;
    p31.innerHTML = p32.innerHTML;
    p32.innerHTML = shift;
}
//b4
let btn4 = document.getElementById('btn4');
let p4 = document.getElementById('p4');
let i = 0;
btn4.onclick = function btn4 () {
    p4.style.fontSize = 'calc(14px + '+ i +'px )';
    i++;
    if (i>10) {
        p4.style.fontSize = '14px';
        i-=10;
    }
}
