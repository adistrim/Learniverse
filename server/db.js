const mongoose = require('mongoose');
const { Schema, default: mongoose } = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const userSchema = new Schema({
    email: {
        type: String,
        unique: true
    },
    password: String,
    firstname: String,
    lastname: String,
})

const adminSchema = new Schema({
    email: {
        type: String,
        unique: true
    },
    password: String,
    firstname: String,
    lastname: String,
})

const courseSchema = new Schema({
    title: String,
    description: String,
    price: Number,
    imageUrl: String,
    creatorId: ObjectId
})

const purchaseSchema = new Schema({
    userId: ObjectId,
    courseId: ObjectId
})

const User = mongoose.model('user', userSchema);
const Admin = mongoose.model('admin', adminSchema);
const Course = mongoose.model('course', courseSchema);
const Purchase = mongoose.model('purchase', purchaseSchema);

module.exports = {
    User,
    Admin,
    Course,
    Purchase
};
