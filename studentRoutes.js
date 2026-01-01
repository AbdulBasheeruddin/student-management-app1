const express = require('express');
const router = express.Router();

// In-memory student data
let students = [
  { id: 1, name: "Abdul", dept: "CSE", age: 20 },
  { id: 3, name: "Hari", dept: "CSE", age: 21 }
];

// GET - Get all students
router.get('/', (req, res) => {
  res.json(students);
});


// 👉 PASTE THE PUT ROUTE RIGHT HERE 👇
router.put('/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { dept, age } = req.body;

  const student = students.find(s => s.id === id);

  if (!student) {
    return res.status(404).send("Student not found");
  }

  if (dept) student.dept = dept;
  if (age) student.age = age;

  res.send("Department and age updated successfully");
});


// ❗ DO NOT paste below this line
module.exports = router;