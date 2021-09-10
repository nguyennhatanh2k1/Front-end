let product = [
    {
    ID : 1,
    Name : 'Xiaomi portable charger 20000mah',
    Brand :'Xiaomi',
    Price : '428',
    Color : 'White',
    Category : 'Charger'  },
    {
    ID :2,
    Name : 'VSmart Active 1',
    Brand :'VSmart',        
    Price : '5487',
    Color : 'Black',
    Category : 'Phone'  },
    {
    ID : 3,
    Name : 'IPhone X',
    Brand :'Apple',
    Price : '21490',        
    Color : 'Gray',
    Category : 'Phone'  },
    {
    ID : 4,
    Name : 'Samsung Galaxy A9',
    Brand :'Samsung',
    Price : '8490',
    Color : 'Blue',
    Category : 'Phone'  },
]
function logAll() {
    for (let i of product) {
        console.log(`Name : ${i.Name}`);
        console.log(`Brand : ${i.Brand}`);
        console.log(`Price : ${i.Price}`);
        console.log(`Color : ${i.Color}`);
        console.log(`Category : ${i.Category}`);
    } 
}
function logOne(obj) {
    console.log(`Name : ${obj.Name}`);
    console.log(`Brand : ${obj.Brand}`);
    console.log(`Price : ${obj.Price}`);
    console.log(`Color : ${obj.Color}`);
    console.log(`Category : ${obj.Category}`);
}
//1.1
for (let i of product) {
    console.log('-----------------------------');
    console.log(`Name : ${i.Name}`);
    console.log(`Price : ${i.Price}`);
}
//1.2
console.log('-----------------------------');
let position = Number(prompt('Enter product position:'));
for (let i of product) {
    if (i.ID==position) {
        logOne(i);
    }
}
//1.3
let sCategory = prompt('Enter product category:');
for (let i of product) {
    if (i.Category==sCategory) {
        console.log('-----------------------------');
        console.log(`Name : ${i.Name}`);
        console.log(`Price : ${i.Price}`);
    }
}
//1.4
product[0].Providers = 'Phukienzero Dientuccc'.split(' ');
product[1].Providers = 'Tgdd';
product[2].Providers = 'Tgdd';
product[3].Providers = 'Tgdd';
for (let i of product) {
    console.log('-----------------------------');
    console.log(`Name : ${i.Name}`);
    console.log(`Price : ${i.Price}`);
    console.log(`Providers : ${i.Providers}`);
}
// //1.5
console.log('-----------------------------');
let sProvider = prompt('Enter provider');
for (let i of product) {
    if (i.Providers.indexOf(sProvider)!=-1) {
        {
        logOne(i);
        console.log(`Providers : ${i.Providers}`);
        }
    }
}