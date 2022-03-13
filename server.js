const express = require('express');
const { json } = require('express/lib/response');
const app = express();
const PORT = process.env.PORT || 3000;
const fs = require("fs");

app.use(express.static("./develop/public"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());


app.get("/api/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "/db/db.json"))
});








app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });