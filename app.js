'use strict';

const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://0.0.0.0:27018/local');

// Constants
const PORT = 5000;
const HOST = '0.0.0.0';

// App
const app = express();

app.get('/', (req, res) => {
  res.send('Hello world\n');
});

app.get('/data', (req, res) => {
	 mongoose.db.collection('titles', function (err, collection) {
       collection.find({}).toArray(arr => {
       		console.log('asdasdsadasda11111111')
			res.json(arr);
       });
   });
  
});

app.listen(PORT, HOST);

console.log(`Running on http://${HOST}:${PORT}`);