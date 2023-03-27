const express = require("express");
const app = express();

// app.use((req, res) => {
//     console.log("Requested");
//     res.send("Hi, we got your resquest. This is your response!")
// });

// Test get request
app.get("/", (req, res) => {
    res.send("Home/Root!");
});

app.get("/products", (req, res) => {
    res.send("Products!");
});

app.get("/details", (req, res) => {
    res.send("Details!");
});

app.get("*", (req, res) => {
    res.send("Path not valid");
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});
