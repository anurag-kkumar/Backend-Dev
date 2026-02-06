const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json());

const DB_FILE = "db.json";

// helper functions
const readDB = () => {
    const data = fs.readFileSync(DB_FILE, "utf-8");
    return JSON.parse(data);
};

const writeDB = (data) => {
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2));
};

// home
app.get("/", (req, res) => {
    res.send("Hello world");
});

// get all students or by branch
app.get("/student", (req, res) => {
    const { branch } = req.query;
    const db = readDB();

    if (!branch) {
        return res.json(db.students);
    }

    const result = db.students.filter(s => s.branch === branch);
    res.json(result);
});

// get student by id
app.get("/student/:id", (req, res) => {
    const id = Number(req.params.id);
    const db = readDB();

    const student = db.students.find(s => s.id === id);

    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }

    res.json(student);
});

// register student
app.post("/student/register", (req, res) => {
    const db = readDB();
    const { name, branch } = req.body;

    if (!name || !branch) {
        return res.status(400).json({ message: "Invalid data" });
    }

    const newStudent = {
        id: db.students.length + 1,
        name,
        branch
    };

    db.students.push(newStudent);
    writeDB(db);

    res.status(201).json(newStudent);
});


// ✅ UPDATE student using PUT (db.json)
app.put("/student/modify/:id", (req, res) => {
    const id = Number(req.params.id);
    const data = req.body;

    const db = readDB();
    const index = db.students.findIndex(s => s.id === id);

    if (index === -1) {
        return res.status(404).json({ message: "Student not found" });
    }

    db.students[index] = {
        ...db.students[index],
        ...data
    };

    writeDB(db);

    res.json({
        message: "Student updated successfully",
        student: db.students[index]
    });
});

// delete student
app.delete("/student/delete/:id", (req, res) => {
    const id = Number(req.params.id);
    const db = readDB();

    const exists = db.students.some(s => s.id === id);
    if (!exists) {
        return res.status(404).json({ message: "Student not found" });
    }

    db.students = db.students.filter(s => s.id !== id);
    writeDB(db);

    res.json({
        message: "Student deleted successfully",
        students: db.students
    });
});

// server
app.listen(8000, () => {
    console.log("Server running on port 8000 🚀");
});
