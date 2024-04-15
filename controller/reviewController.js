import { Review } from "../schema/model.js";

export let createReviewController = async (req, res, next) => {
    let data = req.body; // {productId: "product123", userId: "user456", description: "This product is amazing!"}
    try {
        let result = await Review.create(data);
        res.json({
            success: true,
            message: "Review created successfully.",
            result: result,
        });
    } catch (error) {
        res.json({
            success: false,
            message: error.message,
        });
    }
};

export let readReviewController = async (req, res, next) => {
    try {
        // let result = await Review.find({});
        let result = await Review.find({})
        .populate("productId")
        .populate("userId")
        .populate("description");
        res.json({
            success: true,
            message: "Review read successfully",
            result: result,
        });
    } catch (error) {
        res.json({
            success: false,
            message: error.message,
        });
    }
};

export let readSpecificReviewController = async (req, res, next) => {
    try {
        let result = await Review.findById(req.params.id);
        res.json({
            success: true,
            message: "Review found successfully.",
            result: result,
        });
    } catch (error) {
        res.json({
            success: false,
            message: error.message,
        });
    }
};

export let updateReviewController = async (req, res, next) => {
    try {
        // let result = await Review.findByIdAndUpdate(req.params.id, req.body, { new: true });
        let result = await Review.find({})
        .populate("productId","name price")
        .populate("userId");
        
        res.json({
            success: true,
            message: "Review updated successfully.",
            result: result,
        });
    } catch (error) {
        res.json({
            success: false,
            message: error.message,
        });
    }
};  

export let deleteReviewController = async (req, res, next) => {
    try {
        let result = await Review.findByIdAndDelete(req.params.id);
        res.json({
            success: true,
            message: "Review deleted successfully.",
            result: result,
        });
    } catch (error) {
        res.json({
            success: false,
            message: error.message,
        });
    }
};