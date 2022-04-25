const express = require("express");
const router = express.Router();
const controllers=require("../controllers/Evenement");







//@POST method
//@desc post a evenement
//@path : http://localhost:8999/admin/evenement
//Params body
router.post("/", controllers.PostEvenement);


//@methode GET
//@desc GET all  evenement
//@path : http://localhost:8999/evenement
router.get("/",controllers.GetAllEvenement);

//@methode GET
//@desc GET one evenement
//@path : http://localhost:8999/evenement
//Parms id
router.get("/:id", controllers.GetOneEvenement);



//@method DELETE
//@desc delete one evenement by id
//@path : http://localhost:8999/evenement
//@Params id
router.delete("/:id", controllers.DeleteOneEvenement);

//@method PUT
//@desc update a evenement by id
//@path : http://localhost:8999/evenement
//@Params id body
router.put("/:id", controllers.UpdateEvenement);


module.exports = router;