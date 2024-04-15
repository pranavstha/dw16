import { Product } from "../schema/model.js";

export let createProductController = async (req, res, next) => {
    let data = req.body; // {name:"...", price: 10, quantity: 20}
    try {
        let result = await Product.create(data);
        res.json({
            success: true,
            message: "Product created successfully.",
            result: result,
        });
    } catch (error) {
        res.json({
            success: false,
            message: error.message,
        });
    }
};

export let readProductController = async (req, res, next) => {
    try {
        let result = await Product.find({});
        res.json({
            success: true,
            message: "Product read successfully",
            result: result,
        });
    } catch (error) {
        res.json({
            success: false,
            message: error.message,
        });
    }
};

export let readSpecificProductController = async (req, res, next) => {
    try {
        let result = await Product.findById(req.params.id);
        res.json({
            success: true,
            message: "Product found successfully.",
            result: result,
        });
    } catch (error) {
        res.json({
            success: false,
            message: error.message,
        });
    }
};

export let updateProductController = async (req, res, next) => {
    try {
        let result = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json({
            success: true,
            message: "Product updated successfully.",
            result: result,
        });
    } catch (error) {
        res.json({
            success: false,
            message: error.message,
        });
    }
};

export let deleteProductController = async (req, res, next) => {
    try {
        let result = await Product.findByIdAndDelete(req.params.id);
        res.json({
            success: true,
            message: "Product deleted successfully.",
            result: result,
        });
    } catch (error) {
        res.json({
            success: false,
            message: error.message,
        });
    }
};