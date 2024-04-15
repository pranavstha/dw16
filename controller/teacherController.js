import { Teacher } from "../schema/model.js";

export let createTeacherController = async (req, res, next) => {
    let data = req.body; // { name: "...", subject: "...", experience: 5 }
    try {
        let result = await Teacher.create(data);
        res.json({
            success: true,
            message: "Teacher created successfully.",
            result: result,
        });
    } catch (error) {
        res.json({
            success: false,
            message: error.message,
        });
    }
};

export let readTeacherController = async (req, res, next) => {
    try {
        let result = await Teacher.find({});
        res.json({
            success: true,
            message: "Teachers read successfully",
            result: result,
        });
    } catch (error) {
        res.json({
            success: false,
            message: error.message,
        });
    }
};

export let readSpecificTeacherController = async (req, res, next) => {
    try {
        let result = await Teacher.findById(req.params.id);
        res.json({
            success: true,
            message: "Teacher found successfully.",
            result: result,
        });
    } catch (error) {
        res.json({
            success: false,
            message: error.message,
        });
    }
};

export let updateTeacherController = async (req, res, next) => {
    try {
        let result = await Teacher.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json({
            success: true,
            message: "Teacher updated successfully.",
            result: result,
        });
    } catch (error) {
        res.json({
            success: false,
            message: error.message,
        });
    }
};

export let deleteTeacherController = async (req, res, next) => {
    try {
        let result = await Teacher.findByIdAndDelete(req.params.id);
        res.json({
            success: true,
            message: "Teacher deleted successfully.",
            result: result,
        });
    } catch (error) {
        res.json({
            success: false,
            message: error.message,
        });
    }
};
