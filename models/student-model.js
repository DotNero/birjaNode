const {Schema, model} = require('mongoose');

const StudentSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    name: {type: Schema.Types.String, unique: true, required: true},
    surname: {type: Schema.Types.String},
    second_name: {type: Schema.Types.String},
    birth_date: {type: Schema.Types.Date},
    telephon_number: {type: Schema.Types.String},
    education_data: {type: Schema.Types.String}, //json
    avatar: {type: Schema.Types.String},
    isVerified: {type: Schema.Types.Boolean}
})

module.exports = model('Student', StudentSchema);