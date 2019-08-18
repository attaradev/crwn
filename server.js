import path from 'path';
import express, { json, urlencoded } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { throwError } from 'rxjs';

const inProduction = process.env.NODE_ENV === 'production';

if (!inProduction) dotenv.config();

const port = process.env.PORT || 5000;
const app = express();

app.use(json());
app.use(urlencoded({ extended: true }));
app.use(cors());

if (inProduction) {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get(
    '*',
    (req, res) => {
      res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
}

app.listen(port, error => {
  if (error) throw error;
  console.log(`Server is listening on PORT ${port}!`);
});
