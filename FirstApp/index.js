const express = require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('This is the home page!')
})

app.get('/r/:subreddit',(req,res)=>{
    const {subreddit} = req.params;
    res.send(`This is the ${subreddit} subreddit!`)
})

app.get('/search',(req,res)=>{
    const {q} = req.query;
    if (!q){
        return res.send("you did not search for anything")
    }
    res.send(`you were searching for ${q}`)
})

app.post('/cats', (req,res)=>{
    res.send("Post request to /cats!!")
})

app.get('/cats', (req,res)=>{
    res.send("Meow!!")
})

app.get('/dogs',(req,res)=>{
    res.send('Woof!')
})

app.get('*', (req,res)=>{
    res.send("I dont know that path!")
})





app.listen(8080, () => {
    console.log("Listening on port 8080");

})