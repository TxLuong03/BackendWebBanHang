const mongoose = require('mongoose')
const mongoose_delete = require('mongoose-delete');

const LoaiSP_Schema = new mongoose.Schema(
    {
        TenLoaiSP: { type: String, required: false },
        Icon: String,
        Image: String,
        totalProducts: { type: Number, default: 0 },  
    },
    { 
        timestamps: true,   
    },

);

const LoaiSP = mongoose.model('LoaiSP', LoaiSP_Schema);

module.exports = LoaiSP;