const express = require("express");
const app = express();

app.use((req, res) => {
    console.log("Requested");
    res.send("Hi, we got your resquest. This is your response!")
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});
