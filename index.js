const express = require('express');
const app = express();
const cors = require('cors');
const port = 3001;
const Conn = require('./conn/conn');
const TarefasRouter = require("./routes/tarefas.routes");

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

const db_url = process.env.DB_URL;
const db_user = process.env.DB_USER;
const db_pass = process.env.DB_PASS;
const db_data = process.env.DB_DATA;


Conn(db_url, db_user, db_pass, db_data);

app.use('/tarefas', TarefasRouter);


app.listen(process.env.PORT || port, () => {
    console.log(`Server Running on http://localhost:${port}`);
});
  