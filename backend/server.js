const express = require('express');
const mongoose = require('mongoose');
const router = require('./Router/router');
const cors = require('cors');
const app = express();

mongoose.connect('mongodb+srv://test123:test123@cluster0.chn8e.mongodb.net/tracker?retryWrites=true&w=majority',{useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> app.listen(5001, () => console.log('Server started on 5001')))

app.use(cors())
app.use(express.json())
app.use(router)
