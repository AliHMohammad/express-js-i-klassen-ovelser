import express, { request, response } from "express";
import { todos } from "./data.js";

const app = express();
const port = 4000;

// Øvelser i klassen

app.use(express.json());

app.listen(port, () => {
    console.log("Server started on port " + port);
})

app.get("/", (request, response) => {
    response.setHeader("Content-Type", "text/plain")
    response.send(`Hello`)
})

app.get("/artists", (request, response) => {
    response.setHeader("Content-Type", "text/plain");
    response.send(`Get artists!`)
})

app.post("/artists", (req, res) => {
    res.setHeader("Content-Type", "text/plain");
    res.send(`Create artist!`)
})

app.put("/artists/:id", (req, res) => {
    const id = Number(req.params.id);
    res.setHeader("Content-Type", "text/plain");
    res.send(`Update artist!`)
})

app.delete("/artists/:id", (req, res) => {
    const id = Number(req.params.id);
    res.setHeader("Content-Type", "text/plain");
    res.send(`Delete artist!`)
})

app.patch("/artists/:id", (req, res) => {
    const id = Number(req.params.id);
    res.setHeader("Content-Type", "text/plain");
    res.send(`Patch artist!`);
})


app.get("/todos", (req, res) => {
    res.json(todos)
})


app.post("/todos", (request, response) => {
    const newTask = request.body;
    todos.push(newTask);
    response.send(todos)
})

app.get("/todos/:id", (request, response) => {
    const fetchID = Number(request.params.id);

    const result = todos.find(todo => todo.id === fetchID);

    response.json(result);
})

app.put("/todos/:id", (request, response) => {
    const id = Number(request.params.id);
    const body = request.body;

    let taskToUpdate = todos.find(todo => todo.id === id)
    
    taskToUpdate.task = body.task;
    taskToUpdate.completed = body.completed;

    console.log(taskToUpdate);

    response.json(todos);
})