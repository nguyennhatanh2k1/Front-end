//ss5- review
//ss1 - các từ khóa khia báo biến : var let const
// var và let có thể thay đổi đc gt của biến
// const là 1 hằng và k thể thay đổi
// global scope - var
// funtion scope - let, const
// {}

//các phép toán tử + - * /
//ss2 - các câu lệnh rẽ nhánh, vòng lặp(loop)
// loop : while, for;
// let check = true;
// let i = 0;
// while (check) {
//     console.log(i);
//     i++;
//     i<10;
// }
// for (let i = 0; i < 10; i++) {
//     console.log(i);       
// }
//ss3 - array :
// cách khai báo array
let arrNumber= [1,2,3,4,5]
// ứng dụng của array: dùng để lưu trữ các đối tượng có giá trị tương đồng với nhau
// cách dùng: C,R,U,D
//- C: create, 
//thêm vào cuối mảng
// vd : 
console.log(arrNumber);
arrNumber.push(6);
console.log(arrNumber);
//them vào đầu mảng
console.log(arrNumber);
arrNumber.unshift(0);
console.log(arrNumber);
//- R:read 
//read one
console.log(arrNumber[2]);
//read all
for (let i = 0; i < arrNumber.length; i++) {
console.log(arrNumber[i]);
}
//- U : update
console.log(arrNumber);
arrNumber[4] = 10;
console.log(arrNumber);
//- D: delete
console.log(arrNumber);
arrNumber.pop();//xóa cuối
arrNumber.shift();//xóa đầu
console.log(arrNumber);