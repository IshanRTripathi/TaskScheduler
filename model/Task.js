const mongoose= require('mongoose');

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
    }
});


module.exports= mongoose.model('Tasks', TaskSchema);