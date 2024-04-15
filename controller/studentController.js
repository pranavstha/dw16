//crud

import { Student } from "../schema/model.js";

export let createStudentController = async(req, res, next)=>{

    let data = req.body; // {name:"...", age:30, isMArried:false}
    try{
        let result = await Student.create(data);
            res.json({
                success: true,
                message: "Student created successfully.",
                result: result,
            });
    } catch(error) {
        res.json({
            success: false,
            message: error.message,
        });

    }
    // console.log("i am a post method");
};

export let readStudentController = async (req,res,next)=>{
 
    let result = await Student.find({});

    try{
        res.json({
            success: true,
            message: "Student read successfully",
            result: result,
        });
    }
    catch(error){
        res.json({
            success: false,
            message: error.message,
        })
    }
}



export let readSpecificStudentController = async(req,res,next)=>{
    
    try{
        let result = await Student.findByIdAndUpdate(req.params.id, req.body)
        res.json({
            success: true,
            message: "Student updated successfully.",
            result: result
        })
    }

    catch(error){
        res.json({
            success: false,
            message: error.message
        })

    }
}

export let updateStudentController = async(req,res,next)=>{
    
    try{
        let result = await Student.findByIdAndUpdate(req.params.id, req.body)
        res.json({
            success: true,
            message: "Student updated successfully.",
            result: result
        })
    }

    catch(error){
        res.json({
            success: false,
            message: error.message
        })

    }
}

export let deleteStudentController = async(req,res,next)=>{
    try{
        let result = await Student.findByIdAndDelete(req.params.id)
        res.json({
            success: true,
            message: "Student deleted successfully.",
            result: result
        })
    }

    catch(error){
        res.json({
            success: false,
            message: error.message
        })

    }
}