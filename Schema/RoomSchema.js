import mongoose from 'mongoose'

const roomSchema = mongoose.Schema({
    user_id:{
        type:String, // change this to the actual mongoose object id later
        required:true
    },
    messages:{
        type:Array //change this to the correct type later
    },
    exp_time:{
        type:Date,
        required:true,
        default:108000000
    },
    status:{
        type:string,
        enum:['active','inactive'],
        required:true,
        default:"active"
    }
},{
    timestamps:true
});

export const room = mongoose.model('room',roomSchema);