const {Schema, model} = require('mongoose');

const CompanyModel = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    name: {type: Schema.Types.String, unique: true, required: true},
 //   photos: {type: Schema.Types.String},
//  city: {type: Schema.Types.String},
    about: {type: Schema.Types.String},
    asAdministrated: {type: Schema.Types.Boolean}
})

module.exports = model('Company', CompanyModel);