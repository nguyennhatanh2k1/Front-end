//4.1
// let num = prompt('Enter a sequence of numbers, separated by " ":').split(' ');
let num = [5,7,300,90,24,50,75];
let sizeList =num.join(" ");
console.log('Hello my name is Nhat Anh and here is my sheep sizes:');
console.log(sizeList+'\n\n');

//4.2

let maxSize = Math.max(...arr);
console.log(`Now my biggest sheep has size ${maxSize}, let shave it\n\n`);

//4.3
console.log('After shearing, here is my flock');
for (const i in num) {
    if (num[i]==maxSize) {
        num[i]=8;
    }
}
sizeList = num.join(" ");
console.log(sizeList+'\n\n');

//4.4
console.log('MONTH 1');
console.log('One month has, pass, my sheeps have grown here are their sizes');
for (const i in num) {
    num[i]= num[i] + 50; 
    }
sizeList = num.join(" ");
console.log(sizeList+'\n\n');
maxSize = Math.max.apply(null, num);
console.log(`Now my biggest sheep has size ${maxSize}, let shave it\n\n`);

console.log('After shearing, here is my flock');
for (const i in num) {
    if (num[i]==maxSize) {
        num[i]=8;
    }
}
sizeList = num.join(" ");
console.log(sizeList);
//4.5
let n = Number(prompt('Enter n month(s) (n>=2)'));
for (let a = 2; a < n+1; a++) {
    if (a<n) {
        console.log(`MONTH ${a}`);
        console.log('One month has, pass, my sheeps have grown here are their sizes');
        for (const i in num) {
            num[i]= num[i] + 50; 
            }
        sizeList = num.join(" ");
        console.log(sizeList+'\n\n');
        maxSize = Math.max.apply(null, num);
        console.log(`Now my biggest sheep has size ${maxSize}, let shave it\n\n`);
        
        console.log('After shearing, here is my flock');
        for (const i in num) {
            if (num[i]==maxSize) {
                num[i]=8;
            }
        }
        sizeList = num.join(" ");
        console.log(sizeList+'\n\n');
    }
    else if (a==n) {
        console.log(`MONTH ${a}`);
        console.log('One month has, pass, my sheeps have grown here are their sizes');
        for (const i in num) {
            num[i]= num[i] + 50; 
            }
        sizeList = num.join(" ");
        console.log(sizeList+'\n\n');
    }
}    
//4.6
let sum = 0;
for (let i in num) {
    sum += num[i]
}
console.log(`My flock has size in total: ${sum}`);
console.log(`I would get ${sum} * 2$ = ${sum*2}`);
//console.log(...arr); in ra trên cùng 1 dòng