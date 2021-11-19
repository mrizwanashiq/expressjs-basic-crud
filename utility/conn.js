var mongoose=require("mongoose");

mongoose.connect("mongodb://localhost:27017/myfirstdb",{ useNewUrlParser: true,useUnifiedTopology: true,});
module.exports={
    'user':require("../models/user"),
}
