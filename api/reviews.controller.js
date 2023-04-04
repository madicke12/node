import ReviewsDAO from "../dao/reviewsDao";

export default class ReviewsController {
  static async apiPostReview(req, res, next) {
    try {
      const movieId = req.body.movieId;
      const review = req.body.review;
      const user = req.body.user;

      const reviewResponse = await ReviewsDAO.addReviews(movieId, user, review);
      res.json({ status: "success" });
    } catch (e) {
      res.status(500).json({ erro: e.message });
    }
  }
  static async apiGetReviews(req, res, next) {
    try {
      let id = req.params.id || {};
      let review = await ReviewsDAO.getReview(id);
      if (!review) {
        res.status(404).json({ error: "Not found" });
        return;
      }
      res.json(review);
    } catch (e) {
      console.log(`api,${e}`);
      res.status(500).json({ error: e });
    }
  }
}
