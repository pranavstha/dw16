import { Trainee } from "../schema/model.js";

export let createTraineeController = async (req, res, next) => {
    let data = req.body; // {name:"...", age: 25, email: "..."}
    try {
        let result = await Trainee.create(data);
        res.json({
            success: true,
            message: "Trainee created successfully.",
            result: result,
        });
    } catch (error) {
        res.json({
            success: false,
            message: error.message,
        });
    }
};

export let readTraineeController = async (req, res, next) => {
    try {
        let result = await Trainee.find({});
        res.json({
            success: true,
            message: "Trainees read successfully",
            result: result,
        });
    } catch (error) {
        res.json({
            success: false,
            message: error.message,
        });
    }
};

export let readSpecificTraineeController = async (req, res, next) => {
    try {
        let result = await Trainee.findById(req.params.id);
        res.json({
            success: true,
            message: "Trainee found successfully.",
            result: result,
        });
    } catch (error) {
        res.json({
            success: false,
            message: error.message,
        });
    }
};

export let updateTraineeController = async (req, res, next) => {
    try {
        let result = await Trainee.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json({
            success: true,
            message: "Trainee updated successfully.",
            result: result,
        });
    } catch (error) {
        res.json({
            success: false,
            message: error.message,
        });
    }
};

export let deleteTraineeController = async (req, res, next) => {
    try {
        let result = await Trainee.findByIdAndDelete(req.params.id);
        res.json({
            success: true,
            message: "Trainee deleted successfully.",
            result: result,
        });
    } catch (error) {
        res.json({
            success: false,
            message: error.message,
        });
    }
};
