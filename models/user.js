var mongoose=require("mongoose");
var Schema=mongoose.Schema;
const schema=Schema({

    first_name: { type: String, required: true,maxlength:50 },
    last_name: { type: String, required: true,maxlength:50 },

});
module.exports=mongoose.model("User",schema);
