const express = require("express");
const app = express();

// app.use((req, res) => {
//     console.log("Requested");
//     res.send("Hi, we got your resquest. This is your response!")
// });

// Test get request
app.get("/", (req, res) => {
    res.send("Home/Root Page");
});

app.get("/r/:subredditParam", (req, res) => {
    const { subredditParam } = req.params;
    res.send(`Browsing the ${subredditParam} subreddit`);
});

app.get("/r/:subredditParam/:postId", (req, res) => {
    const { subredditParam, postId } = req.params;
    res.send(
        `Viewing the ${subredditParam} subreddit with post Id of ${postId}`
    );
});

app.get("/products", (req, res) => {
    res.send("Products!");
});

app.get("/details", (req, res) => {
    res.send("Details!");
});

app.get("/search", (req, res) => {
    const { q } = req.query;
    if (!q) {
        res.send("Nothing found if nothing searched");
    }
    res.send(`Query request is ${q}`);
});

app.get("*", (req, res) => {
    res.send("Path not valid");
});

app.listen(3000, () => {
    console.log("Listening on port 3000");
});
