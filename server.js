const express =require('express');

const port = 3000;

const app = express();

app.get('/', (req,res) => {res.send("Hello Browser")});

app.get('/erick', (req,res) => {res.send("Hello Erick Nava")});

app.get('/angelica', (req,res) => {res.send("Hello Angelica")}); 

<<<<<<< HEAD
app.get('/Mike', (req,res) => {res.send("Hello Mike")});
=======
app.get('/skyler', (req,res) => {res.send("Hello Skyler")});

app.get('/frank', (req,res) => {res.send("Hello Frank")});

>>>>>>> d14114adb450cb16a8f3125d32394c0f84cbb3d1
app.listen(port, ()=>console.log("Listening"));