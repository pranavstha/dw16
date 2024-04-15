import mongoose from "mongoose";

let connectToMongoDb = () => {
try{
    mongoose.connect("mongodb+srv://pranavshrestha:pranavshrestha@coder.iejjotg.mongodb.net/dw13");
    // mongoose.connect("mongodb://0.0.0.0:27017/dw13");

}
catch(error){
    console.log(error.message);
}
    
};

export default connectToMongoDb;