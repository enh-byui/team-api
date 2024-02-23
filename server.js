const express =require('express');

const port = 3000;

const app = express();

app.get('/', (req,res) => {res.send("Hello Browser")});

app.get('/erick', (req,res) => {res.send("Hello Erick Nava")});

app.listen(port, ()=>console.log("Listening"));