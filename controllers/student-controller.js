const StudentService = require('../service/student-service');
const ApiError = require('../exceptions/api-error');
const {validationResult} = require('express-validator');

class StudentController{
    async registraition(req,res,next){
        try{
            const errors = validationResult(req); 
            if(!errors.isEmpty()) {
                return next(ApiError.BadRequest('Ошибка при валидации', errors.array()))
            }
            const user_id = req.user._id;
            console.log(user_id);
            const {name, second_name, surname, education_data, telephon_number, birth_date} = req.body;
            const StudentData = await StudentService.registration(user_id, name, second_name, surname, education_data, telephon_number, birth_date);
            return res.json(StudentData);
        }
        catch(e){
            next(e);
        }
    }

    async update(req,res,next){
        try{
            const error = validationResult(req);
            if(!error.isEmpty()) {
                return next(ApiError.BadRequest('Ошибка при валидации', errors.array()));
            }
            const user_id = req.user.id;
            const {name, second_name, surname, education_data, telephon_number, birth_date} = req.body;
            const update = {name: name, second_name: second_name, surname: surname, education_data: education_data, birth_date: birth_date, telephon_number: telephon_number};
            const StudentData = StudentService.update(user_id, update);
            return res.json(StudentData);
        }
    catch(e){
        next(e);
    }}
}

module.exports = new StudentController();