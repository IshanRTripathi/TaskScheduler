const express = require('express');
const crudRouter = express.Router();

const Task = require('../model/Task');

//get all tasks
crudRouter.get('/tasks', async (request, response)=>{
    console.log("Getting all tasks");
    try{
        try{
            const allTasks= await Task.find();
            response.json(allTasks);
        } catch (err){
            response.json(err);
        }
    } catch(err){
        console.log("error: "+err);
    }
});
//get task by _id
crudRouter.get('/tasks/:taskID', async (request, response)=>{
    const taskID= request.params.taskID;
    console.log("Getting a task with id: "+taskID);
    try{
        try{
            const allTasks= await Task.findById(taskID);
            response.json(allTasks);
        } catch (err){
            response.json(err);
        }
    } catch(err){
        console.log("error: "+err);
    }
});
// create a task
crudRouter.post('/task', async(request, response)=>{
    console.log("Adding a new task")
    try{
        const newTask= new Task({
            taskNumber: request.body.taskNumber,
            status: request.body.status,
            title: request.body.title,
            description: request.body.description,
            storyPoints: request.body.storyPoints
        });

        newTask.save()
            .then(data => {
                response.json(data);
            })
            .catch(err => {
                response.json(err);
            });
    } catch(err){
        response.json("error message: "+err);
        console.log(err);
    }
});
// delete a task
crudRouter.delete('/tasks/:taskNumber', async(request, response)=>{
    try{
        const removedPost= await Task.deleteOne({taskNumber:request.params.taskNumber});
        console.log("Removing the task with taskNumber: ", request.params.taskNumber);
        response.json(removedPost);
    }
    catch (err){
        response.json("message: "+err);
        console.log("Error removing task!");
    }
});
//update a task
crudRouter.patch('/tasks/:taskID', async (request, response)=>{
    const taskID= request.params.taskID;
    const body= request.body;
    console.log("task id: "+taskID);
    // let query= {$set: {}};
    // for(let key in request.body) {
    //     query.$set[key] = request.body[key];
    //     console.log(key+":"+request.body[key]+":"+request.body.key);
    //
    // }
    // console.log("Query passed for update: "+query);

    const task= await Task.updateOne({_id: taskID},
                {$set:
                        {
                            title: body.title,
                            description: body.description,
                            storyPoints: body.storyPoints,
                            dateModified: Date.now(),
                            taskNumber: body.taskNumber,
                            status: body.status
                        }
                }
            );
    response.json(task);
    // if(!task) return response.status(404).send("No task present !");
    // // console.log(task);

    // const updatedProduct = await Task.updateMany({_id: request.params._id}, query);
    // response.json(updatedProduct);
});
module.exports= crudRouter;