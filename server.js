const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const fs = require("fs");

app.use(express.urlencoded({ extended: false }));
app.use(express.json());








app.listen(PORT, function() {
    console.log('Active on port ' + PORT);
});