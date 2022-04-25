const express = require("express");
const router = express.Router();
const controllers=require("../controllers/Formation");







//@POST method
//@desc post a formation
//@path : http://localhost:8999/formation
router.post("/", controllers.PostFormation);


//@methode GET
//@desc GET all  formation
//@path : http://localhost:8999/formation
router.get("/",controllers.GetAllFormation);

//@methode GET
//@desc GET one formation
//@path : http://localhost:8999/formation
//Parms id
router.get("/:id", controllers.GetOneFormation);



//@method DELETE
//@desc delete one formation by id
//@path : http://localhost:8999/formation/id
//@Params id
router.delete("/:id", controllers.DeleteOneFormation);

//@method PUT
//@desc update a formation by id
//@path : http://localhost:8999/formation/id
//@Params id body
router.put("/:id", controllers.UpdateFormation);


module.exports = router;


