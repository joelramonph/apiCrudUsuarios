const uuid = require('uuid');

const userDB = [
    {
    id: "7b8cfed7-c430-431a-b1e9-5df486ac016c",
    first_name: "Joel",
    last_name: "Parra",
    email: "joel.parar@gmail.com",
    password:"1234",
    birthday: "1980/10/11"  
    },
    {
        id: "01d44571-418e-4903-8aaa-0aee8e49c246",
        first_name: "Pedro",
        last_name: "Escamoso",
        email: "Pedro.escamosor@gmail.com",
        password:"5678",
        birthday: "1985/11/11"  
        },

];


const getAllUsers = () => {
    return userDB
}


const getUserById = (id) => {
    const data = userDB.find(user => user.id === id)
    return data
}


const createNewUser = (data) => {
    const newUser =  {
        id: uuid.v4(),
        first_name: data.first_name,
        last_name: data.last_name,
        email: data.email,
        password: data.password,
        birthday: data.birthday
    }

    userDB.push(newUser)
    return newUser

}

module.exports = {
    getAllUsers,
    getUserById,
    createNewUser
}














