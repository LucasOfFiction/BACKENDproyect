const {BloodModel} = require('../db/models/BloodSchema.js');
const axios = require('axios');
const mongoose = require('mongoose');

const apiController = {
    async info(req, res){
        const list = await BloodModel.find(req.body);
        res.status(200).json(list)
    }, 
    async create (req, res){
        try{ 
            const response = await axios.get('https://randomuser.me/api/');
            console.log(response.data);
            const userData = response.data.results;
            const newBloodModel = new BloodModel({
                TypeOfBlood: req.body.TypeOfBlood,
                RedBloodCells: req.body.RedBloodCells,
                WhiteBloodCells: req.body.WhiteBloodCells,
                Platelets: req.body.Platelets,
                Hemoglobin: req.body.Hemoglobin,
                Hematocrit: req.body.Hematocrit,
                ReticulocyteCount: req.body.ReticulocyteCount,
                MCV: req.body.MCV,
                DateOfLastExamination: req.body.DateOfLastExamination,
                randomUserData: userData
            });

            await newBloodModel.save();
            res.status(201).json(newBloodModel);
        }
        catch(error){
            res.status(400).json(error);
        }
    },
    async searchForId (req, res){
        console.log('i am in the controller');
        const search= await BloodModel.findById(req.params.id);
        res.status(200).json(search);
    },
    async edit(req, res){
        try {
            await BloodModel.findByIdAndUpdate(req.params.id, req.body);
            res.json({msg:'register update'})
        } catch (error) {
            res.json(error)
        }
    },
    async delete (req, res){
        await BloodModel.findByIdAndDelete(req.params.id)
        res.json({
            msg:'the information was deleted ' +req.params.id
        })
    }
}
module.exports = apiController;