const express = require('express');
const { json } = require('express/lib/response');
const notes = require("./db/db.json");
const path = require("path");
const PORT = process.env.PORT || 3000;
const fs = require("fs");
const app = express();

app.use(express.static("./public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/notes.html"));
});
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"));
});


 app.get("/api/notes", (req, res) => {
    fs.readFile("db/db.json", "utf8", (err, data) => {
        if (err) {
          console.log(err);
          return;
        }
        res.json(notes);
      });
    });
    
    //res.sendFile(path.join(__dirname, "/db/db.json"))
    //   res.json(JSON.parse(fs.readFileSync(path.join(__dirname, "/db/db.json"), (err, data) => {
    //     if (err) throw err;
    //     }))
    //     );
//});

app.post("/api/notes", (req, res) => {
    const notes = JSON.parse(fs.readFileSync("./db/db/json"));
    const note = req.body;
    notes.push(note);
    fs.writeFileSync("./db/db.json", JSON.stringify(notes))
    res.json(notes);
});




app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });