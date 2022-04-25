const classe = require("../models/Classe");



//ajouter un class
exports.PostClasse = async (req, res) => {
      try {
            const newClasse = new classe({ ...req.body });
            const response = await newClasse.save();
            res.status(200).send({ response: response, message: "classe enregistrer" });
      } catch (error) {
            res.status(400).send({ message: "ne peut pas le sauvegarder" }, error);
      }
};

//GET all classes
exports.GetAllClasse = async (req, res) => {
      try {
            const result = await classe.find().populate("etudiant").populate("professeur").populate("formation")
            res.send({ response: result, message: "avoir classe avec succès" });
      } catch (error) {
            res.status(400).send({ message: "ne peut pas obtenir classe" });
            console.log(error)
      }
};

//GET one classe
exports.GetOneClasse = async (req, res) => {
      try {
            const result = await classe.findOne({ _id: req.params.id }).populate("etudiant").populate("professeur").populate("formation")
            res.send({ response: result, message: "avoir classe avec succès" });
      } catch (error) {
            res.status(400).send({ message: "il n'y a pas de classe avec cet identifiant" });
      }
};

//delete one classe by id
exports.DeleteOneClasse = async (req, res) => {
      try {
            const result = await classe.deleteOne({ _id: req.params.id })
            result
                  ? res.send({ message: "classe supprimé" })
                  : res.send({ message: "il n'y a pas de classe avec cet identifiant" });
      } catch (error) {
            res.status(400).send({ message: "il n'y a pas de classe avec cet identifiant" });
      }
};

//update a classe by id
exports.UpdateClasse = async (req, res) => {
      try {
            const result = await classe.updateOne(
                  { _id: req.params.id },
                  { $set: { ...req.body } })
            result.nModified ? 
                  res.send({ message: "classe mis à jour", user: req.body }) :
                  res.send({ message: "classe déjà mis à jour", user: req.body })
      } catch (error) {
            res.status(400).send({ message: "il n'y a pas de classe avec cet identifiant" });
      }
};