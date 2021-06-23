const express = require('express');
const crudRouter = express.Router();

const Task = require('../model/Task');

//get all tasks
crudRouter.get('/tasks', async (request, response)=>{
    console.log("Get all tasks");
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
// create a task
crudRouter.post('/task', async(request, response)=>{
    try{
        const newTask= new Task({
            taskNumber: request.body.taskNumber,
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
// modify/update a task
// modify status of task

module.exports= crudRouter;