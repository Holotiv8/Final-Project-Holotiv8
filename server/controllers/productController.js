const {Products} = require ('../models')

class productController{
    static async read(req,response,next){
        try {
            let data = await Products.findAll()
            response.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }
    static async readId(req,response,next){
        try {
            let {id} = req.params
            let data = await Products.findByPk(id)
            if (!data) {
                throw { name: 'Data Not Found' }
            }
            response.status(200).json(data)
        } catch (error) {
            next(error)
        }
    }
}

module.exports=productController