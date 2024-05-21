import bcrypt from "bcrypt";
import userService from "../services/userService.js";

const userController = {
    createUser: async (req, res) => {
        const { email, password, role } = req.body;
        try {
            const userExist = await userService.getUserByEmail(email);
            if (userExist) {
                res.status(400).json({ message: 'User already exists' });
            } else {
                const user = await userService.createUser({
                    email,
                    password: await bcrypt.hash(password, 10),
                    role,
                });
                res.status(201).json(user);
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    getUserByEmail: async (req, res) => {
        const { email } = req.params;
        try {
            const user = await userService.getUserByEmail(email);
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    getUserById: async (req, res) => {
        const { id } = req.params;
        try {
            const user = await userService.getUserById(id);
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    updateUser: async (req, res) => {
        const { id } = req.params;
        const { email, password, role } = req.body;
        try {
            const userExist = await userService.getUserById(id);
            if (!userExist) {
                res.status(404).json({ message: 'User not found' });
            } else {
                const user = await userService.updateUser(id, email, password, role);
                res.status(200).json(user);
            }
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    deleteUser: async (req, res) => {
        const { id } = req.params;
        try {
            const user = await userService.deleteUser(id);
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
    getAllUsers: async (req, res) => {
        try {
            const users = await userService.getAllUsers();
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    },
};


export default userController;