const mongoose = require('mongoose');


const Conn = () => {
    mongoose.connect('mongodb://localhost:27017/tarefas',{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => 
        {
            console.log('MongoDB Conectado');
        }
    ).catch(err => console.error('Erro de conexão com o banco',err));
    

    
}

module.exports = Conn;