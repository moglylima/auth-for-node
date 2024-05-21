import userModel from "../models/usersModel.js";

const userRespository = {
    createUser: async (user) => {
        const userExist = await userModel.findOne({ email: user.email })
        if (userExist) {
            return { error: 'User already exists' }
        } else {
            return userModel.create(user);
        }
    },
    getUserByEmail: async (email) => {
        return userModel.findOne({ email });
    },
    getUserById: async (id) => {
        return userModel.findById(id);
    },
    updateUser: async (id, email, password, role) => {
        return userModel.findByIdAndUpdate(id, { email, password, role }, { new: true });
    },
    deleteUser: async (id) => {
        return userModel.findByIdAndDelete(id);
    },
    getAllUsers: async () => {
        return userModel.find();
    },
};


export default userRespository;