const TarefasModel = require('./../models/tarefa');

class tarefasService{
    findAll = async () => await TarefasModel.find();
    findById = async (id) => await TarefasModel.findById(id);
    create = async (tarefa) => await TarefasModel.create(tarefa);
    edit = async(id, tarefa) => await TarefasModel.updateOne({_id: id}, tarefa);
    delete = async(id) => await TarefasModel.deleteOne({_id: id})
}

module.exports = tarefasService;