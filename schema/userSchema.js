import { Schema } from "mongoose";

/* 

manipulation
trim
lowercase
uppercase
default


validation
required

*********for string
minLength
maxLength
********* fro number
min
max

// trim: true,
// lowercase: true,
// uppercase: true,
// default : "nitan",

*/


let userSchema = new Schema({
    name: {
        type: String,
        // minLength: [3,"name must be at least 3 characters"],
        // maxLength: [30, "name must be at most 5 characters"],

        // validate: (value) => {

        //   let isValidName = /^[A-Za-z'\-]+(?: [A-Za-z'\-]+)*$/.test(value);
        //   if (isValidName) {
            
        //   } else {
        //       let error = new Error("Invalid name");
        //       throw error
        //   }
        // },

        // required: [true, "Name field is required"]
    },
    password: {
        type: String,
        // validate: (value) => {

        //   let isValidPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(value);
        //   if (isValidPassword) {
            
        //   } else {
        //       let error = new Error("Password must contain at least one number, and one special character including a mix of uppercase and lowercase letters");
        //       throw error
        //   }
        // },
        // required: [true, "Password field is required"],
    },
    phoneNumber: {
        type: Number,
        // validate: (value)=>{
        //   let strNumber = String(value);
        //   let length = strNumber.length;

        //   if(length!==10)
        //   {
        //     let error = new Error("Phone number mut be exact 10 character long");
        //     throw error;
        //   }
        // },
        // required: [true, "PhoneNumber field is required"]
    },
    roll: {
        type: Number,
        // min: [10, "roll must be at least 10"],
        // max: [50, "roll must be at most 50"]
    },
    isMarried: {
        type: Boolean,
        // required: [true, "IsMarried field is required"],
    },
    spouseName: {
        type: String,
    },
    email: {
        type: String,
        // required: [true, "Email field is required"],
        unique: true,

        // validate: (value) => {

        //   let isValidEmail = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/.test(value);
        //   if (isValidEmail) {
            
        //   } else {
        //       let error = new Error("Invalid Email");
        //       throw error
        //   }
        // },

    },
    gender: {
        type: String,
    //     validate: (value) => {
    //       if (value !== "male" && value !== "female" && value !== "other") {
    //           let error = new Error("Unspecified gender");
    //           throw error;
    //       }
    //   },
        // required: [true, "Gender field is required"],
    },
    dob: {
        type: Date,
        // required: [true, "DOB field is required"],
    },
    location: {
        country: {
            type: String,
            // required: [true, "Country field is required"],
        },
        exactLocation: {
            type: String,
            // required: [true, "ExactLocation field is required"],
        },
    },
    favTeacher: {
        type: [String],
        // required: [true, "FavTeacher field is required"],
    },
    favSubject: {
        type: [{
            bookName: {
                type: String,
                // required: [true, "BookName field is required"],
            },
            bookAuthor: {
                type: String,
                // required: [true, "BookAuthor field is required"],
            },
        }],
        // required: [true, "FavSubject field is required"],
    },
});

export default userSchema;