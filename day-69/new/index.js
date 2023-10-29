var student = ["Rejone", "rani", 55, true];

// console.log(student[2]);
// console.log(student.length);
// console.log(student.push("kuddus", "Boyati"));
// console.log(student.pop());
// console.log(student.shift());
// console.log(student.unshift("Reju", "Boyati"));
// console.log(student.slice(0, 2));
// console.log(student.splice(2, 4));
// console.log(student);

// console.log(student[0]);
// console.log(student[1]);
// console.log(student[2]);
// console.log(student[3]);

// for (var i = 0; i < student.length; i++) {
//   console.log(student[i]);
// }

var msg = ["lives in ", " and his age is", "."];
var students = [
  ["rejone ", "dhaka", 7.5],
  ["raja ", "narayaognj", 108],
  ["rana ", "pabna", 88],
  ["kana ", "bola", 77],
  ["sada ", "nator", 44],
];
// console.log(student[1][0]);
for (let i = 0; i < students.length; i++) {
  for (let j = 0; j < students[i].length; j++) {
    console.log(students[i][j] + "" + msg[j]);
  }
}
