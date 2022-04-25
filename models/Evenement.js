const mongoose=require("mongoose")

const EvenementSchema=new mongoose.Schema({
    
    nom:{
        required:true,
        type:String
    },
    description:{
        required:true,
        type:String
    },
    img:{
        type:String,
    },
    participant:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    }
},

{
    timestamps:true,
}


)

module.exports=mongoose.model("evenement",EvenementSchema);