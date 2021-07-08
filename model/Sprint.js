const mongoose= require('mongoose');

const SprintSchema= mongoose.Schema({
    duration: {
        type: Number,
        description: "Duration of sprint in weeks",
        required: true
    },
    sprintName: {
        type: String,
        description: "Name of the sprint",
        required: true
    },
    isClosed:{
        type: Boolean,
        description: "Signifies if the sprint is closed"
    },
    isOpen:{
        type: Boolean,
        description: "Signifies if the sprint is open"
    },
    startDate:{
        type: Date,
        default: Date.now()
    }
})