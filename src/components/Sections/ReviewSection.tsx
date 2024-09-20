import ReviewCard from "../ReviewCard";

const reviews = [
    {
        name: 'Alice Johnson',
        stars: 5,
        review: 'Absolutely fantastic! The product is of great quality and works perfectly. Highly recommend it to anyone looking for something reliable and well-made.'
    },
    {
        name: 'John Smith',
        stars: 5,
        review: 'Exceeded my expectations! The design is sleek and the performance is outstanding. I’m very happy with my purchase and will definitely be coming back for more.'
    },
    {
        name: 'Emily Clark',
        stars: 4,
        review: 'Very good quality and solid build. The product has been performing well, and I’m pleased with the results. Customer service was also very responsive and helpful.'
    },
    {
        name: 'Michael Brown',
        stars: 5,
        review: 'Superb product! It’s exactly what I was looking for. The craftsmanship is excellent, and it was delivered on time. I’m extremely satisfied with my purchase.'
    }
];


function ReviewSection() {
    return (
        <div
            className="py-8"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center py-6 font-bold">What our Customers say!</h2>
                <div
                    className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4"
                >
                    {reviews.map(review => {
                        return <ReviewCard review={review.review} name={review.name} stars={review.stars} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default ReviewSection