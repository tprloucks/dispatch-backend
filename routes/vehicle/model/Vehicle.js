const mongoose = require("mongoose")

const vehicleSchema = new mongoose.Schema({
    year:{
        type: String,
    },
    make:{
        type: String,
    },
    model:{
        type: String,
        unique:true
    },
    color:{
        type: String,
        unique:true
    },
    plate:{
        type: String,
    },
    insurance:{
        type:Boolean,
        default:true
    }

})

module.exports = mongoose.model("user", userSchema)