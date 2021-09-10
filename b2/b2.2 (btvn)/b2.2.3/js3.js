let age = Number(prompt('How old are you ?'));
if ((age>0)&&(age<14)) {
    alert('You are not enough to view this content');
} else if ((age>=14)&&(age<=100)) {
    alert('Enjoy !');
} else {
    alert('Ảo thật đấy :)))');
}