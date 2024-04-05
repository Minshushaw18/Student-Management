import mongoose from 'mongoose';


const eComplaintSchema = new mongoose.Schema({

    email: { type:String, required:true, unique:true, 
        validate:{
        validator:function(value){
            return /\b[A-Za-z0-9._%+-]+@iiitg\.ac\.in\b/.test(value);
        },
        message: props => `${props.value} is not a valid IIITG email address!`
    }
},
    contactNumber: { type:String, required:true},
    rollNumber: { type:Number, required:true},
    complainType: { type:String, required:true},
    title: { type:String, required:true},
    description: { type:String, required:true},
    date: {
        type: Date,
        default: Date.now // Set the default value to the current date
    },
    status: { type:String,  default:'Pending', enum: ['Pending', 'Accepted', 'Succesful']},
    picturePath: { type:String, default: null},
    otp: { code: String, createdAt: Date },
    
},)

const EComplaintModel = mongoose.model('eComplaint',eComplaintSchema);
export default EComplaintModel;