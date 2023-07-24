const UserModel = require('../model/usermodel');
class userservice {
    static async registeruser(email, password) {
        try {
            const createUser = new UserModel({email , password});
            return await createUser.save();

        }
        catch (err) {
            throw err;
        }
    }
}
module.exports = userservice;