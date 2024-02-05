module.exports = class CompanyDto {
    email;
    id;
    role;
    password;
    isActivated;
    created_at;

    constructor(model) {
        this.email = model.email;
        this.id = model._id;
        this.password = model.password;
        this.isActivated = model.isActivated;
        this.role = model.role;
    }
}