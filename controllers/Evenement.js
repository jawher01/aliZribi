const evenement = require("../models/Evenement");


//post a evenement
exports.PostEvenement = async (req, res) => {
      try {
            const newEvenement = new evenement({ ...req.body });
            const response = await newEvenement.save();
            res.send({ response: response, message: "evenement enregistrer" });
      } catch (error) {
            res.status(404).send({ message: "ne peut pas le sauvegarder" }, error);
      }
};

//GET all evenement
exports.GetAllEvenement= async (req, res) => {
      try {
            const result = await evenement.find().populate("participant")
          
            res.send({ response: result, message: "avoir evenements avec succès" });
           
      } catch (error) {
            res.status(400).send({ message: "ne peut pas obtenir l'evenements" });
      }
};

//GET one evenement
exports.GetOneEvenement = async (req, res) => {
      try {
            const result = await evenement.findOne({ _id: req.params.id }).populate("participant")
            res.send({ response: result, message: "avoir evenement avec succès" });
      } catch (error) {
            res.status(400).send({ message: "il n'y a pas de evenement avec cet identifiant" });
      }
};

//delete one evenement by id
exports.DeleteOneEvenement= async (req, res) => {

      try {
            const result = await evenement.deleteOne({ _id: req.params.id })
            result
                  ? res.send({ message: "classe supprimé" })
                  : res.send({ message: "il n'y a pas des evenements avec cet identifiant" });

      } catch (error) {
            res.status(400).send({ message: "il n'y a pas des evenements avec cet identifiant" });
      }
};

//update a evenement by id
exports.UpdateEvenement = async (req, res) => {
      try {
            const result = await evenement.updateOne(
                  { _id: req.params.id },
                  { $set: { ...req.body } })
            result.nModified ?
                  res.send({ message: "evenement mis à jour", user: req.body }) :
                  res.send({ message: "evenement déjà mis à jour", user: req.body })
      } catch (error) {
            res.status(400).send({ message: "il n'y a pas des evenements avec cet identifiant" });
      }
};

