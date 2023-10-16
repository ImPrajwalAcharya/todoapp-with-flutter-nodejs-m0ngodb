const userservice = require("../services/user_services");
exports.register = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const sucessresres = await userservice.registeruser(email, password);
        res.json({ status: true, success: "User registered" });
    }
    catch (err) {
        throw err;
    }
}
exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const user = await userservice.checkuser(email);
        if (!user) {
            res.status(400).json({ status: false, success: "User not found" });
        }
        else {
            const isMatch = await user.comparePassword(password);

            if (!isMatch) {
                res.status(400).json({ status: false, success: "Invalid password" });
            }
            else {
                let tokenData = { _id: user._id, email: user.email };
                const token = await userservice.generateToken(tokenData, "1234", "1h");
                res.status(200).json({ status: true, token: token });
            }


        }
    }
    catch (err) {
        throw err;
    }
}