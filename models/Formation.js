const mongoose=require("mongoose")

const FormationSchema=new mongoose.Schema({
    
    nom:{
        required:true,
        type:String
    },
    description:{
        required:true,
        type:String
    },
    type:{
        type:String,
        required:true,
    },
    duree:{  
        type:String, 
    },
    prix:{ 
        type:String,
    },
    date_debut:{
        type:String,
    },
    date_fin:{
        type:String,
    },
    //hethy zeyda
    cours:{
        type:String,
    },
    etudiant:{
        type:String,
    },
},
{
    timestamps:true,
}
)

module.exports=mongoose.model("formation",FormationSchema);
