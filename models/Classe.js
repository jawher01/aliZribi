const mongoose=require("mongoose")

const ClasseSchema=new mongoose.Schema({
    
    nom:{
        required:true,
        type:String
    },
    duree:{
        type:String,
    },
    nb_heure:{
        type:String,
    },
    calendrier:{
        type:String,
    },
    etudiant: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    }],
    professeur: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "user",
    }],
    formation: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "formation",
    },
},
{
    timestamps:true,
}


)

module.exports=mongoose.model("classe",ClasseSchema);
