const todoServices = require('../services/todo_services');
exports.createtodo = async (req, res, next) => {

    try {
        const { userid, title, descriptions } = req.body;
        const todo = todoServices.createTask(
            userid,
            title,
            descriptions
        );
        res.json({ status: true, success: "Task Added" });
        // res.status(200).json({ status: true, message: "Created Sucessfully " });
    }
    catch (err) {
        res.json({ status: false, success: "error" + err });
    }
};
exports.gettodo = async (req, res, next) => {
    try {
        const { userid } = req.body;
        const todo = await todoServices.getTask(userid);
        res.json({ status: true, success: "sucess", data: todo });
    }
    catch (err) {
        res.json({ status: false, success: "error" + err });
    }

}
exports.deleteTask = async (req, res, next) => {
    try {
        const { id } = req.body;
        const todo = await todoServices.deleteTask(id);
        res.json({ status: true, success: "deleted" });
    }
    catch (err) {
        res.json({ status: false, success: "error" + err });
    }
}