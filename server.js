const express = require('express');
const { json } = require('express/lib/response');
const app = express();
const noteInput = require("./db/db.json");
const path = require("path");
const PORT = process.env.PORT || 3000;
const fs = require("fs");

app.use(express.static("/public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
});
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"));
});



app.get("/api/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "/db/db.json"))

});


app.post("/api/notes", (req, res) => {
    const noteInput = JSON.parse(fs.readFileSync("/db/db/json"));
    const note = req.body;
    noteInput.push(note);
    fs.writeFileSync("/db/db.json", JSON.stringify(noteInput))
    res.json(noteInput);
});




app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });