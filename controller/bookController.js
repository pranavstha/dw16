import { Book } from "../schema/model.js";

export let createBookController = async (req, res, next) => {
    let data = req.body; // {title:"...", author: "...", price: 10, quantity: 20}
    try {
        let result = await Book.create(data);
        res.json({
            success: true,
            message: "Book created successfully.",
            result: result,
        });
    } catch (error) {
        res.json({
            success: false,
            message: error.message,
        });
    }
};

export let readBookController = async (req, res, next) => {
    try {
        let result = await Book.find({});
        res.json({
            success: true,
            message: "Books read successfully",
            result: result,
        });
    } catch (error) {
        res.json({
            success: false,
            message: error.message,
        });
    }
};

export let readSpecificBookController = async (req, res, next) => {
    try {
        let result = await Book.findById(req.params.id);
        res.json({
            success: true,
            message: "Book found successfully.",
            result: result,
        });
    } catch (error) {
        res.json({
            success: false,
            message: error.message,
        });
    }
};

export let updateBookController = async (req, res, next) => {
    try {
        let result = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json({
            success: true,
            message: "Book updated successfully.",
            result: result,
        });
    } catch (error) {
        res.json({
            success: false,
            message: error.message,
        });
    }
};

export let deleteBookController = async (req, res, next) => {
    try {
        let result = await Book.findByIdAndDelete(req.params.id);
        res.json({
            success: true,
            message: "Book deleted successfully.",
            result: result,
        });
    } catch (error) {
        res.json({
            success: false,
            message: error.message,
        });
    }
};
