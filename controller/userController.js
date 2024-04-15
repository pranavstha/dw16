import { User } from "../schema/model.js";
import { sendEmail } from "../utlis/sendMail.js";
import bcrypt from "bcrypt";

export let createUserController = async (req, res, next) => {
    let data = req.body; // {name:"...", password: "password123", address: "123 Example St, City, Country"}
    try {
        let password = data.password;
        let hashedPassword =  await bcrypt.hash(password,10);
        data.password = hashedPassword;
        
        let result = await User.create(data);
        
        await sendEmail({
            from: "Pranav Shrestha<felicific.bird@gmail.com>",
            to:[req.body.email],
            subject: "Registration",
            html:`
            You have successfully registered.
            `,
        });
        res.json({
            success: true,
            message: "User created successfully.",
            result: result,
        });
    } catch (error) {
        res.json({
            success: false,
            message: error.message,
        });
    }
};

export let readUserController = async (req, res, next) => {
    //get users from database
    try {
        // let result = await User.find({});
        // find output are in [{},{},{}]
        // let result = await User.find( {name: "pranav" } );
        // let result = await User.find( {age: {$gt:25} } );
        // let result = await User.find( {age: {$gte:25} } );
        // let result = await User.find( {age: {$lt:25} } );
        // let result = await User.find( {age: {$lte:25} } );
        // let result = await User.find( {age: {$ne:25} } );
        // Homework joy validation
        // finding those whose name is nitan, ram, hari
        //.find({name:"nitan"})
        //.find({name:{$in:["nitan","ram","hari"]}})
        //.find({name:{$nin:["nitan","ram","hari"]}})
        //.find({age: {$gt:15, $lt:17} })
        //.find({name: /nitan/})
        //.find({name: /nitan/i})
        //.find({name: /ni/})
        //.find({name: /^ni/})// starts with 
        //.find({name: /ni$/})// ends with 
        //.find({}).sort("name age")
        //.find({}).sort("-name")
        //.find({}).sort("-name age")
        //.find({}).sort("-name -age")
        //.find({}).select("name -_id")
        //.find({}).select("name email -_id")

        //do not use - and + simultanesouly (except for _id)
        //SKIP
        //.find({}).skip(n) ---------> it skips first 'n' no of values
        //find({}).limit(n) ---------> 
        
        //find({}).limit("5").skip("2"); what ever the order, mongoose follows following sequence
        //find, sort, select, skip, limit
        
        
        let result = await User.find({}).limit(2);
        //find has control over object but select has control over object property
        res.json({
            success: true,
            message: "User read successfully",
            result: result,
        });
    } catch (error) {
        res.json({
            success: false,
            message: error.message,
        });
    }
};

export let readSpecificUserController = async (req, res, next) => {
    try {
        let result = await User.findById(req.params.id);
        res.json({
            success: true,
            message: "User found successfully.",
            result: result,
        });
    } catch (error) {
        res.json({
            success: false,
            message: error.message,
        });
    }
};

export let updateUserController = async (req, res, next) => {
    try {
        let result = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json({
            success: true,
            message: "User updated successfully.",
            result: result,
        });
    } catch (error) {
        res.json({
            success: false,
            message: error.message,
        });
    }
};

export let deleteUserController = async (req, res, next) => {
    try {
        let result = await User.findByIdAndDelete(req.params.id);
        res.json({
            success: true,
            message: "User deleted successfully.",
            result: result,
        });
    } catch (error) {
        res.json({
            success: false,
            message: error.message,
        });
    }
};

/*
searching   -------> find, select
sort        -------> 
pagination  -------> limit and skip
*/