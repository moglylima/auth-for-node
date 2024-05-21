import userService from "../services/userService.js";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";
import { jsonSecret } from "../config/jsonSecret.js";


const authController = {
    login: async (req, res) => {
        const { email, password } = req.body;
        try {
            const user = await userService.getUserByEmail(email);
            if (!user) {
                res.status(404).json({ message: 'User not found' });
            } else {
                const match = await bcrypt.compare(password, user.password);
                if (match) {
                    const token = jsonwebtoken.sign({ id: user._id, email: user.email, role: user.role }, jsonSecret.secret, { expiresIn: '1h' });
                    res.status(200).json({ token });
                } else {
                    res.status(401).json({ message: 'Invalid e-mail or password' });
                }
            }
        }

        catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
};

export default authController;