const router = require('express').Router();
const UserController = require('../controller/usercontroller');
router.post('/register', UserController.register);
module.exports = router;