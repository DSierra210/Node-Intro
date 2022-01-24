const express = require("express");
const { request } = require("http");
const app = express();
const path = require("path");
const redditData = require("./data.json");

// app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res) => {
  res.render("home.ejs",{name:'Home'});
});

app.get("/cats", (req, res) => {
  const cats = ["Momo", "Tyson", "Sunshine", "Plum", "Alias"];
  res.render("cats.ejs", { cats, name:"Cats" });
});

app.get("/r/:subreddit", (req, res) => {
  const { subreddit } = req.params;
  const data = redditData[subreddit];
  if (data) {
    res.render("subreddit.ejs", { ...data });
  } else {
    res.render("notfound.ejs", { subreddit, name:'Not Found' });
  }
});

app.get("/rand", (req, res) => {
  const num = Math.floor(Math.random() * 10) + 1;
  res.render("random.ejs", { num, name:'Random Number' });
});

app.listen(3000, () => {
  console.log("Now listening on port 3000");
});
