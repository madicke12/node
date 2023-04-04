import express from "express";
import ReviewsCtrl from './reviews.controller.js'
const router = express.Router();
router.route("/movie/:id").get(ReviewsCtrl.apiGetReviews)
router.route("/new").post(ReviewsCtrl.apiPosttReviews)
router.route("/:id")
    .get(ReviewsCtrl.apiGetReviews)
    .put(ReviewsCtrl.apiUpdateReview)
    .delete(ReviewsCtrl.apiDeleteReiew)
export default router;
