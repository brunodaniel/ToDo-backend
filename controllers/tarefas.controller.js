const TarefasService = require('./../services/tarefas.service');
const tarefasService = new TarefasService;


class TarefasController{
    getTarefas = async (req,res) => {
        const tarefas = await tarefasService.findAll();
        res.status(200).send(tarefas);
    }

    getTarefasById = async (req,res) => {
        const tarefas = await tarefasService.findById(req.params.id)
        .then((tarefas) => {
            res.status(200).send(tarefas);
        }).catch((err) => {
            console.error(err);
            res.status(500).send({message:"Erro no servidor"})
        })
    }

    createTarefa = async (req,res) => {
        await tarefasService.create(req.body)
        .then(() => {
            res.status(201).send({message:"Cadastrado com sucesso"})
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send({message:"Erro no cadastro"})
        })
    }

    editTarefa = async (req,res) => {
        console.log(req.body);
        await tarefasService.edit(req.params.id, req.body)
        .then(() => {
            res.status(201).send({message:"Tarefa editada com sucesso"})
        })
        .catch((err) => {
            console.error(err);
            res.status(500).send({message:"Erro na edição"})

        })
    }

    deleteTarefa = async (req,res) => {
        await tarefasService.delete(req.params.id)
        .then(() => {
            res.status(200).send({message:"Excluido com sucesso"});
        })
        .catch(err => {
            console.error(err);
            res.status(500).send({message:"Erro na exclusão"})
        })
    }
}


module.exports = TarefasController;