const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 3001;
const Conn = require('./conn/conn');
const TarefasRouter = require("./routes/tarefas.routes");

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

Conn();

app.use('/tarefas', TarefasRouter);


app.listen(PORT, () => {
    console.log(`Server Running on http://localhost:${PORT}`);
});
  