//1
// function reverse(str) {
//     let str_output = '';
//     for (let i = str.length-1;i>=0 ; i--) {
//         str_output += str[i];
//     }
//     return str_output;
// }
// let str_input = prompt('Enter string');
// console.log(reverse(str_input));

//2
// let str = prompt('Enter a string').split(' ');
// let strArr= [];
// for (let i of str) {
//     strArr.push(i.charAt(0).toUpperCase()+i.substring(1));
// }
// console.log(strArr.join(' '));

//3
// let enterArr = prompt('Enter an array,separated by " "').split(' ');
// function unique(arr) {
//     let sortArr = arr.sort();
//     let newArr = [sortArr[0]];
//     for (let i = 1; i < sortArr.length; i++) {
//       if (sortArr[i] !== sortArr[i - 1]) {
//         newArr.push(sortArr[i]);
//       }
//     }
//     return newArr;
//   }
// console.log(unique(enterArr));

//4
// let staff = [
//     {
//         id : 1,
//         name : 'Hoàng Nam Cao',
//         age : 26,
//         salary : 1500,
//         position : 'Mentor',
//     },
//     {
//         id : 2,
//         name : 'Trần Văn Nhân',
//         age : 24,
//         salary : 1200,
//         position : 'Mentor',
//     },
//     {
//         id : 3,
//         name : 'Nguyễn Trưởng Phòng',
//         age : 30,
//         salary : 2000,
//         position : 'Leader',
//     },
// ]
// function outStaff(i) {
//     console.log(`#${i.id}. ${i.name}`);
//     console.log(`    Complete: ${i.complete}`);
// }
// let loop = true;
// while (loop) 
// {
// let select = prompt('Enter your command (Read, Create, Update, Delete)');
// if (select == 'Read'||select =='read') {
//     console.log('--------------------------');
//     for (let i of staff) {
//         outStaff(i);
//     }
// }
// else if (select == 'Create'||select =='create') 
// {
//     let newName = prompt("Enter new staff's name");
//     let newAge = prompt("Enter new staff's age");
//     let newSalary = prompt("Enter new staff's salary");
//     let newPosition = prompt("Enter new staff's position");
//     let newStaff =
//     {
//         id : staff.length+1,
//         name : newName,
//         age : newAge,
//         salary : newSalary,
//         position : newPosition,
//     };
//     staff.push(newStaff);
// } 
// else if (select == 'Update'||select =='update') {
//     let id = Number(prompt('Enter id update'));
//     for (let i of staff) {
//         if (i.id==id) {
//             let newTitle = prompt('Enter new title (position)');
//             i.position = newTitle;
//         }
//     }
// } 
// else if (select == 'Complete'||select =='complete') {
//     let id = Number(prompt('Enter position complete'));
//     for (let i of course) {
//         if (i.id==id) {
//             i.complete = true;
//         }
//     }
// } 
// else if (select == 'Delete'||select =='delete') {
//     let id = Number(prompt('Enter id delete'));
//     for (let i of staff) {
//         if (i.id==id) {
//             course.slice(id-1,1);
//         }
//     }

// } 
// else {
//     loop=false;
// }
// }

//5
let day = Number(prompt('Enter day (day > 0 )'));
let month = Number(prompt('Enter month (month > 0)'));
let year = Number(prompt('Enter year (year > 0)'));
let check = false;
switch (month) {
    case 2:
    {
        if (year % 4 == 0) {
            if (day>0 && day <30) {
                alert(day+'/'+month+'/'+year +" là ngày hợp lệ");
                check = true;
            } else {
                alert(day+'/'+month+'/'+year +" không là ngày hợp lệ");
            }
        } 
        else {
            if (day>0 && day <29) {
                alert(day+'/'+month+'/'+year +" là ngày hợp lệ");
                check = true;
            } else {
                alert(day+'/'+month+'/'+year +" không là ngày hợp lệ");
                
            }
        }
        break;
    };
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12 :
    {
        if (day>0 && day <32) {
            alert(day+'/'+month+'/'+year +" là ngày hợp lệ");
            check = true;
        } else {
            alert(day+'/'+month+'/'+year +" không là ngày hợp lệ");
            
        }
        break;
    };
    case 4:
    case 6:
    case 9:
    case 11 :
    {
        if (day> 0 && day < 31) {
            alert(day+'/'+month+'/'+year +" là ngày hợp lệ");
            check = true;
        } else {
            alert(day+'/'+month+'/'+year +" không là ngày hợp lệ");
            
        }
        break;
    };
    default:
        {
        alert(day+'/'+month+'/'+year +" không là ngày hợp lệ");
        break;
        }
}
if (check == true) {
    switch (month) {
        case 2:
        {
            if (year %4 == 0 ||year %400 == 0) {
                if (day == 29) {
                    alert("Ngày tiếp theo là: "+1+'/'+(month+1)+'/'+year );
                }
                else if (day >0 && day <29){
                    alert("Ngày tiếp theo là: "+(day+1)+'/'+month+'/'+year );
                }
            } 
            else {
                if (day == 28) {
                    alert("Ngày tiếp theo là: "+1+'/'+(month+1)+'/'+year );
                } else if (day >0 && day <28){
                    alert("Ngày tiếp theo là: "+(day+1)+'/'+month+'/'+year );
                }
            }
            break;
        }
        case 12:
        {
            if (day == 31) {
                alert("Ngày tiếp theo là: "+1+'/'+1+'/'+(year+1) );
            } else if (day >=1 && day <=30){
                alert("Ngày tiếp theo là: "+(day+1)+'/'+month+'/'+year );
            }
            break;
        }
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        {
            if (day == 31) {
                alert("Ngày tiếp theo là: "+1+'/'+(month+1)+'/'+year );
            } else if (day >0 && day <31){
                alert("Ngày tiếp theo là: "+(day+1)+'/'+month+'/'+year );
            }
            break;
        }
        case 4:
        case 6:
        case 9:
        case 11:
        {
            if (day == 30) {
                alert("Ngày tiếp theo là: "+1+'/'+(month+1)+'/'+year );
            } else if (day >0 && day <30){
                alert("Ngày tiếp theo là: "+(day+1)+'/'+month+'/'+year );
            }
            break;
        }
    }
}