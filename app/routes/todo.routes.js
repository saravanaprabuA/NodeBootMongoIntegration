module.exports = (app) => {

    const todo = require('../controllers/todo.controller.js');
 
    // Create and Save a new todo
    app.post('/api/todo', todo.create);

    // Retrieve all todo
    app.get('/api/todo', todo.findAll);

    // Retrieve a single todo with todoId
    app.get('/api/todo/:todoId', todo.findOne);

    // Update a todo with todoId
    app.put('/api/todo/:todoId', todo.update);

    // Delete a todo with todoId
    app.delete('/api/todo/:todoId', todo.delete);

}