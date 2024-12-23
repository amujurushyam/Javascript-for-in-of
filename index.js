let arr = ["Shyam", "Hima", "Sumanth", "Vamsi", "Deepika"];

for (let i in arr) {
  console.log(+i + 1 + "-" + arr[i]);
}

for (let [index, value] of arr.entries()) {
  console.log(`${index + 1}-${value}`);
}

let students = [
  { id: 1, s_name: "Pavan", city: "Hyderabad" },
  { id: 2, s_name: "Arjun", city: "Secundrabad" },
  { id: 3, s_name: "Meena", city: "Vizag" },
  { id: 4, s_name: "Rahul", city: "Bengaluru" },
  { id: 5, s_name: "Sita", city: "Chennai" },
  { id: 6, s_name: "Vijay", city: "Mumbai" },
];

for (let index in students) {
  let student = students[index];
  console.log(`${student.s_name} from ${student.city}`);
}

for (let student of students) {
  console.log(`${student.s_name} from ${student.city}`);
}
