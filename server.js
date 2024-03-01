const express =require('express');

const port = 3000;

const app = express();

app.get('/', (req,res) => {res.send("Hello Browser")});

app.get('/erick', (req,res) => {res.send("erick")});

app.get('/angelica', (req,res) => {res.send("Hello Angelica")}); 

app.get('/Mike', (req,res) => {res.send("Hello Mike")});

app.get('/skyler', (req,res) => {res.send("skyler")});

app.get('/frank', (req,res) => {res.send("Hello Frank")});

app.listen(port, ()=>console.log("Listening"));