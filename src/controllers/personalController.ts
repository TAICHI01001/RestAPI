import { Request, Response } from "express";
const Personal = require("../model/personal");

const getAllPersonal = async (req: Request, res: Response) => {
  const personal = await Personal.find();
  res.json(personal);
};

const getPersonalById = async (req: Request, res: Response) => {
  const personal = await Personal.findById(req.params.id);

  try {
    if (personal) {
      res.json(personal);
    } else {
      res.status(404).json({ error: "cannot found personal" });
    }
  } catch (err) {
    console.error(err);
  }
};

const createPersonal = async (req: Request, res: Response) => {
  const personal = new Personal(req.body);
  const savePersonal = await personal.save();
  res.status(201).json(savePersonal).end();
};

const updatePersonal = async (req: Request, res: Response) => {
  const updatePersonal = await Personal.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );

  if (updatePersonal) {
    res.json(updatePersonal);
  } else {
    res.status(404).json({ error: "cannot update personal" });
  }
};

const deletePersonal = async (req: Request, res: Response) => {
  const deletePersonal = await Personal.findByIdAndDelete(req.params.id);

  if (deletePersonal) {
    res.json({ massage: "deleted personal" });
  } else {
    res.status(404).json({ error: "cannot delete personal" });
  }
};

module.exports = {
  getAllPersonal,
  getPersonalById,
  createPersonal,
  updatePersonal,
  deletePersonal,
};
