const students = {
    name :"madin",
    age : 20,
    grade : "A"
};
function updateGrade(newGrade){
    students.grade = newGrade;
}
console.log(students);
updateGrade("c");
console.log(students);