const express = require("express");
const app = express();
const PORT = process.env.PORT || 8000;


const articlesInfo = {
  "learn-react": 
}
// initialize middleware
app.use(express.json({ extended: false }));

// just a test route for now
app.get("/", (req, res) => res.send("hello, world"));

app.post("", (req, res) => res.send(`Hello ${req.body}));



app.listen(8000, () => console.log(`server started at port ${PORT}`));
