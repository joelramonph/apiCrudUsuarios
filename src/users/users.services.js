const usersControllers = require('./users.controllers')


const getUsers = (req, res) => {
    const data = usersControllers.getAllUsers()
    res.status(200).json(data)
}

const getUserById = (req, res) => {
    const id = req.params.id
    const data = usersControllers.getUserById()
    if(data){
        res.status(200).json.data
    } else {
        res.status(404).json({message: 'Invalid ID'})
    }
}

const postNewUser = (req, res) => {
    const data = req.body;

    if(data.first_name &&
       data.last_name &&
       data.email &&
       data.password &&
       data.birthday
     ) {
         const response = usersControllers.createNewUser(data);
         res.status(200).json(response);
     } else {
         res.status(400).json({message: 'Missing Data'});
     }
}

module.exports = {
    getUserById,
    getUsers,
    postNewUser
}