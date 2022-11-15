//bring the express module here
let express = require ("express");

// initiate the app
let app = express();

//allow app to use json
app.use(express.json());

//port for application
let PORT = 6000;

let db=[]
let nextId = 2347;



/*
GET ToDo
Return a summary of all the todo items
*/



/*
GET ToDo
Return the details to a matching idea
*/


/*DELETE ToDo with the item from the matching ID
return OK message
*/




/*
POST ToDo
add an item to database
needs an input for task and description
return an OK msg
*/

app.post("/todos" function(){
    let paylod = req.body;

   //get task infrom from the request body
    let task = payload.task;
    let description = payload.description;
    
   //get an id we can use
    let id = nextId;

    //increment the id plus one
    nextId++;

    let element = {
        id: id,
        task: task,
        description: description,
        done: false,
    }

    db.push(element);
})

/*PUT ToDo
make an update with matching ID
*/




app.listen(PORT, function(){
    console.log("application start on port", PORT);
})
