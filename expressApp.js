
const express = require("express");
const app = express();

app.use(express.json());

let patients = [
    { id: 1, name: "Amit", age: 35 },
    { id: 2, name: "Riya", age: 25 }
];

app.get("/patients", (req, res) => {
    res.json(patients);
});

app.get("/patients/:id", (req, res) => {
    const patient = patients.find(p => p.id == req.params.id);
    res.json(patient);
});

app.post("/patients", (req, res) => {
    patients.push(req.body);
    res.send("Patient added");
});

app.put("/patients/:id", (req, res) => {
    const id = req.params.id;

    patients = patients.map(p =>
        p.id == id ? req.body : p
    );

    res.send("Patient updated");
});

app.delete("/patients/:id", (req, res) => {
    patients = patients.filter(p => p.id != req.params.id);
    res.send("Patient deleted");
});

app.listen(4000, () => {
    console.log("Express server running on port 4000");
});
