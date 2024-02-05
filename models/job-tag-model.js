const {Schema, model} = require('mongoose');

const JobTagSchema = new Schema({
    name: {type: Schema.Types.String, unique: true, required: true},
 //   photos: {type: Schema.Types.String},
//  city: {type: Schema.Types.String},
    vacancy_count: {type: Schema.Types.Number},
    student_count: {type: Schema.Types.Number},
    asVerified: {type: Schema.Types.Boolean}
})

module.exports = model('Vacancy', VacancySchema);