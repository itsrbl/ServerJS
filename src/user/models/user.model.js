const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
	full_name: { type: String, default: '' },
	email: { type: String, default: '' },
	password: { type: String, default: '' },
	isDeleted: { type: Boolean, default: false, enum: [true, false] },
}, { timestamps: true, versionKey: false })

const model = mongoose.model('user', UserSchema);

module.exports = model;