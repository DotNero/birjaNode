const CompanyService = require('../service/company-service');
const ApiError = require('../exceptions/api-error');
const {validationResult} = require('express-validator');

class CompanyController{
    async registraition(req,res,next){
        try{
            const errors = validationResult(req); 
            if(!errors.isEmpty()) {
                return next(ApiError.BadRequest('Ошибка при валидации', errors.array()))
            }
            const {user_id, name, about} = req.body;
            const CompanyData = CompanyService.registraition(user_id, name, about);
            return res.json(CompanyData);
        }
        catch(e){
            next(e);
        }
    }
    async update(req,res,next){
        try{
            const errors = validationResult(req);
            if(!error.isEmpty()) {
                return next(ApiError.BadRequest('Ошибка при валидации', errors.array()));
            }
            const {user_id, name, about} = req.body;
            
            
        }
    catch(e){
        next(e);
    }}
}

module.exports = new CompanyController();