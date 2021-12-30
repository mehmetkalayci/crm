import mongoose from 'mongoose';

export const ContactSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: 'Enter a first name'
    },
    lastName: {
        type: String,
        required: 'Enter a last name'
    },
    email: {
        type: String,
        unique: true
    },
    company: {
        type: String,
    },
    phoneNumber: {
        type: String,
    },
    created_at: {
        type: Date,
        default: Date.now
    }
});