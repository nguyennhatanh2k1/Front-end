let SofName = prompt('Enter a sequence of names, separated by ",":').split(',');
let arr = [];
for (let i = 0; i < SofName.length; i++) {
        arr.push(`<${SofName[i]}>`);
}
alert(`${SofName} => ${arr}`);