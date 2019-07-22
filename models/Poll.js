const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PollSchema = new Schema({
    party : {
        type : String,
        required : true      
    },
    points : {
        type : String,
        required : true
    }
})

module.exports = Poll = mongoose.model("Poll", PollSchema);
