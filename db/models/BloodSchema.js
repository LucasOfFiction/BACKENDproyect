const{Schema, model} = require('mongoose');

const schema = new Schema({
    TypeOfBlood: {
        type: String,
        required: true,
    },
    RedBloodCells:{
        type: Number,
        required: true,
    },
    WhiteBloodCells:{
        type: Number,
        required: true,
    },
    Platelets:{
        type: Number,
        required: true,
    },
    Hemoglobin:{
        type: Number,
        required: true,
    },
    Hematocrit:{
        type: Number,
        required: true,
    },
    ReticulocyteCount:{
        type: Number,
        required: true,
    },
    MCV:{
        type: Number,
        required: true,
    },
    DateOfLastExamination:{
        type: Date,          
        required: true,
    },
    randomUserData: {
        type: Array,
        required: true,
    }
});
const BloodModel = model('Blood', schema);

module.exports = {BloodModel} ;