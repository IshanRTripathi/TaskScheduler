const express = require('express');
const crudRouter = express.Router();

const Task = require('../model/Task');
const statusList = require('../model/Status');
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
//get task by taskID
crudRouter.get('/tasks/:taskID', async (request, response)=>{
    const taskID= request.params['taskID'];
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
        let query= {};
        for(let key in request.body) {
            query[key]= request.body[key];
        }
        console.log(query);
        const newTask= new Task(
            query
            // {
            //     taskNumber: request.body.taskNumber,
            //     status: request.body.status,
            //     title: request.body.title,
            //     description: request.body.description,
            //     storyPoints: request.body.storyPoints,
            //     createdBy: request.body.createdBy,
            //     modifiedBy: request.body.modifiedBy
            // }
        );

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
    const taskID= request.params['taskID'];
    const body= request.body;
    body.dateModified= Date.now();
    body.updatedBy= 'ishanr';
    try {
        if(statusList.status.indexOf(body.status)===-1){
            throw 422;          //, no status found as given in the input";
        }
        const updateTask = await Task.findByIdAndUpdate({_id: taskID}, body, {new: true});
        response.send(updateTask);
    } catch (err) {
        response.sendStatus(404).send(err);
    }
    // }

    //================================

    // try{
    //     const updatedTask= Task.findOne({_id: taskID});
    //
    //     console.log(updatedTask);
    //     await updatedTask.save()
    //         .then(data => {
    //             console.log("Saving data !");
    //             response.json(data);
    //         })
    //         .catch(err => {
    //             console.log("Error saving data !");
    //             response.json(err);
    //         });
    //     response.send(task);
    // } catch (e) {
    //     response.json(e);
    // }
    //================================
    // const updatedTask= Task.findByIdAndUpdate(taskID, request.body, {new: true})
    //     .then((task)=>{
    //         if(!task){
    //             return response.status(404).send(response.json);
    //         }
    //         else {
    //
    //             response.send(task);
    //         }
    //     }).catch((error)=>{
    //         response.status(500).send(error);
    //     })
    //===========================================
    // response.json(updatedTask);
    // let query= {};
    // for(let key in request.body) {
    //
    // }
    // console.log(query);

    // const task= await Task.updateOne({_id: taskID}, {$set: {query}}
                // {$set:
                //         {
                //             title: body.title,
                //             description: body.description,
                //             storyPoints: body.storyPoints,
                //             dateModified: Date.now(),
                //             taskNumber: body.taskNumber,
                //             status: body.status
                //         }
                // }
    //         );
    // response.json(task);
    // if(!task) return response.status(404).send("No task present !");
    // // console.log(task);

    // const updatedProduct = await Task.updateMany({_id: request.params._id}, query);
    // response.json(updatedProduct);
});
module.exports= crudRouter;