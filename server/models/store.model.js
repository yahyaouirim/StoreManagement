// import the mongoose lib to build the schema
const mongoose = require("mongoose");
// the model - the rules  the entries need to follow

const StoreSchema = new mongoose.Schema({
    storeName: {
        type: String,
        required: [true, "{PATH} is required"],
        minLength: [3, "{PATH} must have at least 3 chars"]
    },
   
    storeNumber: {
        type: Number,
        required: [true, " {PATH} is required"],
        min: [1, "{PATH} must be at least one store"]
    },
    open: {
        type: Boolean,
        default: false
        // required: [true, "open  is required"]
    }

}, { timestamps: true })

const Store = mongoose.model("Store", StoreSchema)
module.exports = Store