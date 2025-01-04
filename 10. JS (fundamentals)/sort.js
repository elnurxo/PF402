let students = [
  { fullName: "Abdulla Şaiq", age: 45 },
  { fullName: "Cəfər Abbasov", age: 21 },
  { fullName: "Nizami Gıncəvi", age: 65 },
  { fullName: "Dilşad Əsədova", age: 35 },
];

const sortedByAges = students.toSorted((stu1, stu2) => stu1.age - stu2.age);
students.sort((stu1, stu2) => stu1.fullName.localeCompare(stu2.fullName));
console.log(students);
