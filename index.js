const express = require('express');
const router = require('./routes/router');
const cors = require('cors');
//import path from 'path';
//import { fileURLToPath } from 'url';

const PORT = process.env.PORT || 3001;
//const __filename = fileURLToPath(import.meta.url);
//const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

//app.use(express.static(__dirname));
app.use('/api', router);

app.listen(PORT,()=>console.log(`Server started on ${PORT} PORT `));