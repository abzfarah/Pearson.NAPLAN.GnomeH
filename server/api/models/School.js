var Mongoose = require('mongoose'),
    Schema = Mongoose.Schema;

var SchoolSchema = new Schema({
    schoolId: { type: String, unique: true, required: true },
    schoolCode: { type: String, unique: true, required: true },
    schoolName: { type: String, required: true },
    suburb: { type: String, required: true },
})
var school = Mongoose.model('school', SchoolSchema);


module.exports = {
    SchoolModel: school
};
