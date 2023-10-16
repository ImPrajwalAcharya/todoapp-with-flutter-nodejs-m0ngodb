const { model } = require('mongoose');
const todoModel = require('../model/todomodel');
class todoServices {
    static async createTask(
        userid,
        title,
        descriptions
    ) {
        const task = new todoModel({
            userid,
            title,
            descriptions
        });
        return await task.save();
    }
    static async getTask(userid) {

        return await todoModel.find({ userid: userid });
    }
    static async deleteTask(id) {
        return await todoModel.deleteOne({ _id: id });
    }

}

module.exports = todoServices;