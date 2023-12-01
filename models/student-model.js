const {Schema, model} = require('mongoose');

const StudentModel = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    name: {type: Schema.Types.String, unique: true, required: true},
 //   photos: {type: Schema.Types.String},
//  city: {type: Schema.Types.String},
    surname: {type: Schema.Types.String},
    asVerified: {type: Schema.Types.Boolean}
})

module.exports = model('Student', StudentModel);