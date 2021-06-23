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
// create a task
crudRouter.post('/task', async(request, response)=>{
    console.log("Adding a new task")
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

/*//delete a post
router.delete('/:postId', async (req, res)=>{
    try{
        const removedPost= await Post.remove({_id:req.params.postId});
        res.json(removedPost);
    }catch(err){
        res.json({message: err});
    }
});

//update a post
router.patch('/:postId', async (req, res)=>{
    try{
        const updatedPost= await Post.updateOne(
            {_id: req.params.postId},
            {$set: {title: req.body.title}}
        );

        res.json(updatedPost);
    } catch (err){
        res.json({message: err});
    }
});
*/
module.exports= crudRouter;