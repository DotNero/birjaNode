module.exports = class StudentDto {
    name;
    surname;
    second_name;
    avatar;
    telephon_number;
    birth_date;
    education_data;
    isVerified;

    constructor(model) {
        this.name = model.name;
        this.surname = model.surname;
        this.second_name = model.second_name;
        this.avatar = model.avatar;
        this.telephon_number = model.telephon_number;
        this.birth_date = model.birth_date;
        this.education_data = model.education_data;
        this.isVerified = model.isVerified;
    }
}