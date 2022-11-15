//bring the express module here
const { response } = require("express");
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



app.get("/todos", function(){
    res.json(db); //send whole database back
})

/*
GET ToDo
Return the details to a matching idea
*/

app.get("/todos/:id", function(){
    let id = req.params.id; // id we are looking for
    let matchingItem; // where we store 

  
  //loops thru positions
    for(let i=0, i<db.length; i++) {
        let entry = db[i];
        if(entry.id == id){
            matchingItem = entry;
            break;
        }
    }

    res.json(matchingItem);
})

/*DELETE ToDo with the item from the matching ID
return OK message
*/

app.delete("/todos/id", function (){
    let id = req.params.id;


    for(let i=0; i<db.length; i++){
        if(id == db[i].id){
            db.splice(i, 1);
            break;
        }
    }

    res.sendStatus(204);
})


/*
POST ToDo
add an item to database
needs an input for task and description
return an OK msg
*/

app.post("/todos", function(){
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


    // 400 your fault error. 500 computer fault error. 200 good. 
    //200 good plus info avail. 204 good no info avail. 
    res.sendStatus(204); //a thumbs up
})

/*PUT ToDo
make an update with matching ID
*/
app.put("/todos/id", function (){
   
    let id = req.params.id;

    for(let i=0; i<db.length; i++){
        if(id == db[i].id){
            matchingItem =db [i];
            break;
        }
    }

    res.sendStatus(202);
})

app.listen(PORT, function(){
    console.log("application start on port", PORT);
})
