
const express = require("express");
const fs = require("fs");

const app = express();


app.get("/files/:filename", (req, res) => {
    const name = req.params.filename;
    console.log(name);
    fs.readFile(name, "utf-8", function (err, data) {
        res.json({ data });
    })
});

app.listen(3000, () => console.log("Server started on port 3000"));