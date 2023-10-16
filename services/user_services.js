const UserModel = require('../model/usermodel');
const jwt = require('jsonwebtoken');
class userservice {
    static async registeruser(email, password) {
        try {
            const createUser = new UserModel({ email, password });
            return await createUser.save();

        }
        catch (err) {
            throw err;
        }
    }
    // static async loginuser(email, password) {
    //     try {
    //         const createUser = new UserModel({email , password});
    //         return await createUser.save();

    //     }
    //     catch (err) {
    //         throw err;
    //     }
    // }
    static async checkuser(email) {
        try {
            return await UserModel.findOne({ email })

        }
        catch (err) {
            throw err;
        }
    }
    static async generateToken(tokenData, secret, expirytime) {
        return jwt.sign(tokenData, secret, { expiresIn: expirytime });
    }
}
module.exports = userservice;