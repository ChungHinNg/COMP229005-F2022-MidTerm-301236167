//  <!--  File name: COMP229005-F2022-MidTerm-301236167
    // Web App name: COMP229005midterm301236167
    // Student ID: 301236167
    // Name: Chung Hin Ng
    // Data: Oct 25, 2022 -->
// create a reference to the model
let TodoModel = require('../models/todo');

// Gets all todo from the Database and renders the page to list them all.
module.exports.todoList = function(req, res, next) {  

    TodoModel.find((err, todoList) => {
        //console.log(todoList);
        if(err)
        {
            return console.error(err);
        }
        else
        {
            res.render('todo/list', {
                title: 'To-Do List', 
                TodoList: todoList,
                userName: req.user ? req.user.username : ''
            })            
        }
    });
}


// Gets a todo by id and renders the details page.
module.exports.details = (req, res, next) => {
    
    let id = req.params.id;

    TodoModel.findById(id, (err, todoToShow) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('todo/details', {
                title: 'To-Do Details', 
                todo: todoToShow
            })
        }
    });
}

// Gets a todo by id and renders the Edit form using the add_edit.ejs template
module.exports.displayEditPage = (req, res, next) => {
    
    // ADD YOUR CODE HERE eddddd

    let id = req.params.id;

    TodoModel.findById(id, (err, itemToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            res.render('todo/add_edit', {
                title: 'Edit Item', 
                todo: itemToEdit
            })
        }
    });    

}

// Processes the data submitted from the Edit form to update a todo
module.exports.processEditPage = (req, res, next) => {

    let id = req.params.id
    
    console.log(req.body);

    let updatedTodo = TodoModel({
        _id: req.body.id,
        task: req.body.task,
        description: req.body.description,
        complete: req.body.complete ? true : false
    });

    // ADD YOUR CODE HERE edddd
    TodoModel.updateOne({_id: id}, updatedTodo, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // console.log(req.body);
            // refresh the list
            res.redirect('/todo/list');
        }
    });
}


// Deletes a todo based on its id.
module.exports.performDelete = (req, res, next) => {

    // ADD YOUR CODE HERE edd
    let id = req.params.id;

    TodoModel.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            res.redirect('/todo/list');
        }
    });

}

// Renders the Add form using the add_edit.ejs template
module.exports.displayAddPage = (req, res, next) => {

  
    // ADD YOUR CODE HERE       ed
   let newItem = TodoModel();

   res.render('todo/add_edit', {
    title: 'Add a new Item',
    todo: newItem
})         

}

// Processes the data submitted from the Add form to create a new todo
module.exports.processAddPage = (req, res, next) => {

    console.log(req.body);

    let newTodo = TodoModel({
        _id: req.body.id,
        task: req.body.task,
        description: req.body.description,
        complete: req.body.complete ? true : false
    });
    // ADD YOUR CODE HERE ed
    TodoModel.create(newTodo, (err, item) =>{
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the book list
            console.log(item);
            res.redirect('/todo/list');
        }
    });


}