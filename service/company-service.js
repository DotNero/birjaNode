const ApiError = require('../exceptions/api-error');
const CompanyModel = require('../models/company-model');
const StudentModel = require('../models/student-model');
const UserModel = require('../models/user-model');
const CompanyDto = require('../dtos/company-dto');

class CompanyService{
    async registraition(user_id, name, about) {
        const name_candidate = await CompanyModel.findOne({name});
        const candidate = await CompanyModel.findOne({user_id});
            if(candidate){
                throw ApiError.BadRequest('Компания уже зарегистрирована этим пользователем')
            }
        const student = await StudentModel.findOne({user_id});
            if(student){
                throw ApiError.BadRequest('Этот пользователь является студентом');
            }
            if(name_candidate){
                throw ApiError.BadRequest('Компания c таким названием уже зарегистрирована');
            }
        const isAdministrated = false; 
        const company = await CompanyModel.create({user: user_id, name, about, isAdministrated});
        const companyDto = new CompanyDto(company);
        const role_change_result = await UserModel.updateOne({id: user_id}, {$set: {role: 'company'}});
        if(!role_change_result){
            throw ApiError.BadRequest('Не получилось изменить роль');
        }
        return(companyDto);
    }

}

module.exports = new CompanyService();