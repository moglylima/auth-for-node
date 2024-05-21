import userRespository from "../repositories/userRepository.js";


const userService = {
    createUser: async (email, password, role = 'student') => {

        return userRespository.createUser(email, password, role);
    },
    getUserByEmail: async (email) => {
        return userRespository.getUserByEmail(email);
    },
    getUserById: async (id) => {
        return userRespository.getUserById(id);
    },
    updateUser: async (id, email, password, role) => {

        if (!userRespository.getUserById(id)) {
            return { error: 'User not found' }
        } else {
            return userRespository.updateUser(id, email, password, role);
        }
    }
    ,
    deleteUser: async (id) => {
        return userRespository.deleteUser(id);
    },
    getAllUsers: async () => {
        return userRespository.getAllUsers();
    },
};


export default userService;