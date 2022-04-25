const express = require("express");
const router = express.Router();
const controllers=require("../controllers/Classe");







//@POST method
//@desc ajouter a classe
//@path : http://localhost:8999/admin/classe
router.post("/", controllers.PostClasse);


//@methode GET
//@desc GET all  classe
//@path : http://localhost:8999/admin/classe
router.get("/",controllers.GetAllClasse);

//@methode GET
//@desc GET one classe
//@path : http://localhost:8999/admin/classe
//Parms id
router.get("/:id", controllers.GetOneClasse);



//@method DELETE
//@desc delete one classe by id
//@path : http://localhost:8999/admin/classe
//@Params id
router.delete("/:id", controllers.DeleteOneClasse);

//@method PUT
//@desc update a classe by id
//@path : http://localhost:8999/admin/classe
//@Params id body
router.put("/:id", controllers.UpdateClasse);


module.exports = router;


