import { Star } from 'lucide-react'


interface ReviewCardProps {
    name: string,
    stars: number,
    review: string
}

function ReviewCard({ name, stars, review }: ReviewCardProps) {
    return (
        <div className='flex flex-col w-full justify-between border p-2 rounded-md space-y-2 hover:bg-gray-100 cursor-default hover:scale-105 transition duration-100 shadow-md'>
            <p className='text-gray-600 font-bold'>{review}</p>
            <div className='flex'>
                {[...Array(5)].map((_, index) => (
                    <Star
                        key={index}
                        size={20}
                        fill={index < stars ? "gold" : "none"}
                        stroke={index < stars ? "gold" : "gray"}
                    />
                ))}
            </div>
            <p className='text-gray-400 font-semibold'>- {name}</p>
        </div>
    )
}

export default ReviewCard