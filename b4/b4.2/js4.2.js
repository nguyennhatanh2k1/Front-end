let course = [
    {
        id : 1,
        name : 'HTML',
        complete:false,
    },
    {
        id : 2,
        name : 'CSS',
        complete:false,
    },
    {
        id : 3,
        name : 'Basic of JS',
        complete:false,
    },
    {
        id : 4,
        name : 'Node Package Manager',
        complete:false,
    },
    {
        id : 5,
        name : 'GIT',
        complete:false,
    },
]
function outCourse(i) {
    console.log(`#${i.id}. ${i.name}`);
    console.log(`    Complete: ${i.complete}`);
}

console.log('Hi there, this is your learning tasks to front-end developer career:');
let loop = true;
while (loop) 
{
//2.1
// for (let i of course) {
//     outCourse(i);
// }
//2.2
let select = prompt('Enter your command (New, Update, Comlete, Delete, Read)');
if (select == 'New'||select =='new') 
{
    let nameCourse = prompt('Enter new task');
    let newCourse =
    {
        id : course.length+1,
        name: nameCourse,
        complete: false
    };
    course.push(newCourse);
} 
//2.3
else if (select == 'Update'||select =='update') {
    let id = Number(prompt('Enter position update'));
    for (let i of course) {
        if (i.id==id) {
            let newTitle = prompt('Enter new title');
            i.name = newTitle;
        }
    }
} 
//2.4
else if (select == 'Complete'||select =='complete') {
    let id = Number(prompt('Enter position complete'));
    for (let i of course) {
        if (i.id==id) {
            i.complete = true;
        }
    }
} 
//2.5
else if (select == 'Delete'||select =='delete') {
    let id = Number(prompt('Enter position delete'));
    for (let i of course) {
        if (i.id==id) {
            course.slice(id-1,1);
        }
    }

} 
else if (select == 'Read'||select =='read') {
    console.log('--------------------------');
    for (let i of course) {
        outCourse(i);
    }
}
else {
    loop=false;
}
}

//2.6
for (let i of course) {
    if (i.complete==true) {
        console.log(`${i.id}. [x] ${i.name}`);
    }
    else{
        console.log(`${i.id}. [ ] ${i.name}`);
    }
}