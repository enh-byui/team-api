const express =require('express');

const port = 3000;

const app = express();

app.get('/', (req,res) => {res.send("Hello Browser")});

app.get('/erick', (req,res) => {res.send("Hello Erick Nava")});

app.get('/angelica', (req,res) => {res.send("Hello Angelica")}); 

app.get('/skyler', (req,res) => {res.send("Hello Skyler")});

app.get('/frank', (req,res) => {res.send("Hello Frank")});

app.listen(port, ()=>console.log("Listening"));