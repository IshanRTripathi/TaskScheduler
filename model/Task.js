const mongoose= require('mongoose');

const statusEnum= ['todo', 'started', 'done', 'blocked', 'deleted'];

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
    }
});


module.exports= mongoose.model('Tasks', TaskSchema);