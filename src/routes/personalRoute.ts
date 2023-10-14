import express from "express";
const personalController = require(`../controllers/personalController`);
const router = express.Router();

//Get all personal
router.get(`/`, personalController.getAllPersonal);

//Get a single personal
router.get(`/:id`, personalController.getPersonalById);

//Create new personal
router.post(`/`, personalController.createPersonal);

//Update personal
router.put(`/:id`, personalController.updatePersonal);

//Delete personal
router.delete(`/:id`, personalController.deletePersonal);

module.exports = router;
