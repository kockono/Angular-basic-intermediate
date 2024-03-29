const { Schema, model } = require('mongoose');

const userSchema = new Schema ({
    email: {
        type: String,
        unique: true,
        trim: true,
        required: true
    },
    password: {
        type:String,
        required: true
    }
},{
    timestamps:true
});

module.exports = model('Administradores', userSchema);