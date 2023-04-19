import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import * as path from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express()
const port = 3000

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.redirect('index.html')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
