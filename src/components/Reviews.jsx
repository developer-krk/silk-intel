
function ReviewCard({ review }) {
    return (
        <div className="review-card">
            <h5>{review.user}</h5>
            <p>{review.rating}⭐️</p>
            <p>{review.comment}</p>
        </div>
    )
}
function Reviews({ reviews }) {
    return (
        <div className="reviews">
            <h3>Reviews</h3>
            {
                reviews.map((review) => <ReviewCard key={review.id} review={review} />)
            }
        </div>
    )
}

export default Reviews