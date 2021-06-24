const mongoose= require('mongoose');

const statusEnum= ['todo', 'started', 'done', 'blocked', 'deleted'];

const TaskSchema= mongoose.Schema({
    taskNumber:{
        type: Number,
        required: true
    },
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    dateCreated:{
        type:Date,
        default: Date.now
    },
    dateModified:{
        type:Date,
        default: Date.now
    },
    storyPoints:{
        type: Number,
        default: 1
    },
    status:{
        type: String,
        enum: statusEnum,
        default: 'todo'
    }
});


module.exports= mongoose.model('Tasks', TaskSchema);