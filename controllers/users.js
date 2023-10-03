import { v4 as generateId } from 'uuid';
let users = [];

export const getUsers = (req, res) => {
    res.send(users);
    res.send("Hello from user");
}

export const createUser = (req, res) => {
    const user = req.body;
    users.push({ ...user, id: generateId() });
    console.log("POST request reached");
    res.send("POST request reached");
}

export const getUser = (req, res) => {
    const { id } = req.params;
    const findUser = users.find((user) => user.id === id);
    res.send(findUser);
}

export const deleteUser = (req, res) => {
    const { id } = req.params;
    const user = req.body;
    users = users.filter((user) => user.id != id);
    res.send(`User with Id ${id} is deleted from the database!`);
}

export const updateUser = (req, res) => {
    const { id } = req.params;
    const { firstName, lastName, age } = req.body;
    const user = users.find((user) => user.id === id)

    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (age) user.age = age;

    res.send(`The user with Id ${id} is updated!`);

}