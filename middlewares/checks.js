const {check} = require('express-validator') 

const checks= [
    check('TypeOfBlood')
        .notEmpty().withMessage('el campo name es requerido')
        .isIn(['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-']).withMessage('enter a correct blood type'),
    check('RedBloodCells')
        .notEmpty().withMessage('enter a quantity of Red Cells')
        .isNumeric().withMessage('the value is of numeric type'),
    check('WhiteBloodCells')
        .notEmpty().withMessage('enter a quantity of White Cells')
        .isNumeric().withMessage('the value is of numeric type'),
    check('Platelets')
        .notEmpty().withMessage('enter a quantity of Platelets')
        .isNumeric().withMessage('the value is of numeric type'),
    check('Hemoglobin')
        .notEmpty().withMessage('enter a quantity of Hemoglobin')
        .isNumeric().withMessage('the value is of numeric type'),
    check('Hematocrit')
        .notEmpty().withMessage('enter a quantity of Hematocrit')
        .isNumeric().withMessage('the value is of numeric type'),
    check('ReticulocyteCount')
        .notEmpty().withMessage('enter a quantity of Reticulocytes')
        .isNumeric().withMessage('the value is of numeric type'),
    check('MCV')
        .notEmpty().withMessage('indicates Medium Corpuscular Volume')
        .isNumeric().withMessage('the value is of numeric type'),
    check('DateOfLastExamination')
        .notEmpty().withMessage('indicate Date of the medical exam')
        .isDate().withMessage('the format is invalid,teh correct format is ISO 8601, example: 2023-07-03'),
]
module.exports = checks;