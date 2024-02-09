const ApiError = require('../exceptions/api-error');
const CompanyModel = require('../models/company-model');
const StudentModel = require('../models/student-model');
const UserModel = require('../models/user-model');
const StudentDto = require('../dtos/company-dto');

//не трогал

class StudentService{
    async registration(user_id, name, second_name, surname, education_data, telephon_number, birth_date) {
        const name_candidate = await StudentModel.findOne({name: name});
        const candidate = await StudentModel.findOne({user: user_id});
        if(candidate){
                throw ApiError.BadRequest('Студент уже зарегистрирован этим пользователем')
            }
        const student_candidate = await StudentModel.findOne({user_id});
        if(student_candidate){
                throw ApiError.BadRequest('Этот пользователь уже зарегистрировал компанию');
            }
            if(name_candidate){
                throw ApiError.BadRequest('Cтудент c таким названием уже зарегистрирована');
            }
        const isVerified = false; 
        console.log(user_id);
        const student = await StudentModel.create({user: user_id, name, second_name, surname, education_data, telephon_number, birth_date, isVerified});
        const studentDto = new StudentDto(student);
        const role_change_result = await UserModel.updateOne({id: user_id}, {role: 'company'});
        if(!role_change_result){
            throw ApiError.BadRequest('Не получилось изменить роль');
        }
        return(studentDto);
    }

    async update(user_id, update) {
        const filter = {user: user_id}
        
        const candidate = await StudentModel.findOne(filter);
        if(!candidate){
            throw('Студент не найден');
        }
        const student = await StudentModel.updateOne(filter, update);
        const StudentData = new StudentDto(student);

        return StudentData;
    }

}

module.exports = new StudentService();