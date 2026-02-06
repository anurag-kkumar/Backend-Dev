const express = require("express");
const app = express();

// middleware
app.use(express.json());

// data
const student = [
    { id: 1, name: "anurag", branch: "cse" },
    { id: 2, name: "Aman", branch: "ese" },
    { id: 3, name: "ravi", branch: "ml" }
];

// home route
app.get("/", (req, res) => {
    res.send("Hello world");
});

// user route
app.get("/user", (req, res) => {
    res.send("user page");
});

// get student by branch (query)
app.get("/student", (req, res) => {
    const branch = req.query.branch;

    const result = branch
        ? student.filter(s => s.branch === branch)
        : student;

    res.json(result);
});

// get student by id (params)
app.get("/student/:id", (req, res) => {
    const id = Number(req.params.id);

    const result = student.find(s => s.id === id);

    if (!result) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    res.json(result);
});

// register student
app.post("/student/register", (req, res) => {
    const data = req.body;

    if (!data || Object.keys(data).length === 0) {
        return res.status(400).json({
            message: "Invalid student data"
        });
    }

    student.push(data);

    res.status(201).json({
        message: "Student registered successfully",
        student: data
    });
});

// update student using spread operator
app.put("/student/modify/:id", (req, res) => {
    const id = Number(req.params.id);
    const data = req.body;

    const index = student.findIndex(s => s.id === id);

    if (index === -1) {
        return res.status(404).json({
            message: "Student not found"
        });
    }

    student[index] = {
        ...student[index],
        ...data
    };

    res.json({
        message: "Student updated successfully",
        updatedStudent: student[index]
    });
});

// server
app.listen(8000, () => {
    console.log("Server is running on port 8000");
});
