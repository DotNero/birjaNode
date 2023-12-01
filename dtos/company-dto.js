module.exports = class UserDto {
    name;
    about;
    isAdministrated;

    constructor(model) {
        this.name = model.name;
        this.id = model._id;
        this.about = model.about;
        this.isAdministrated = model.isAdministrated;
    }
}