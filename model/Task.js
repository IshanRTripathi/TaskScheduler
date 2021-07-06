const mongoose= require('mongoose');
const statusEnum = require('../model/Status').status;

const TaskSchema= mongoose.Schema({
    taskNumber:{
        type: Number,
        required: true,
        unique: true,
        autoIncrement: true
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
    },
    createdBy:{
        type: String,
        required: true
    },
    updatedBy:{
        type: String
    },
    assignee:{
        type: String,
        required:true
    },
    reporter:{
        type:String,
        required:true
    }
});


module.exports= mongoose.model('Tasks', TaskSchema);