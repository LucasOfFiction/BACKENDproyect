const {BloodModel} =require('../db/models/BloodSchema')
const validarID = async (req, res, next) => {

    try{
        const search = await BloodModel.findById(req.params.id);
        console.log('i am in the  middleware');
        if(search !== null){
            next()
        } else {
            res.status(401).json({
                msg: " the id entered is incorrect " + req.params.id
            })
        }

    } catch(error){
        res.status(401).json(error)
    }

}

module.exports = {validarID}