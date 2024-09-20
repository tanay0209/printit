import { Star } from "lucide-react";

function HeroSection() {
    return (
        <div className="py-8 px-4 sm:px-6 lg:px-0 bg-orange-100 lg:bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row lg:h-screen">
                    <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:order-2 lg:h-full">
                        <img
                            src="/hero-section.jpg"
                            alt="HeroSection"
                            className="w-full h-auto lg:h-full"
                        />
                    </div>
                    <div className="flex flex-col justify-center gap-3 w-full lg:w-1/2 lg:pr-8 lg:order-1 lg:py-12">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mt-6 lg:mt-0">
                            Print on demand for your ecommerce business
                        </h1>
                        <h3 className="text-2xl sm:text-3xl mt-4">
                            Sign up for free and only pay for what you sell
                        </h3>
                        <p className="text-base lg:text-lg mt-4">
                            Turn your passion into profit with the world's largest print on demand network
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 items-center mt-6">
                            <button className="w-full sm:w-auto bg-black text-white rounded-full py-2 px-6 text-center">
                                Get Started for free
                            </button>
                            <button className="w-full sm:w-auto border bg-white border-black rounded-full py-2 px-6 text-center mt-4 sm:mt-0">
                                See our products
                            </button>
                        </div>
                        <div className="flex flex-col mt-8">
                            <img
                                src="https://a.storyblok.com/f/165154/300x86/7d28c66657/shopify_monotone_black.svg"
                                alt="Shopify"
                                className="h-12 w-36 sm:h-16 sm:w-48"
                            />
                            <div className="flex items-center gap-2 mt-4">
                                <div className="flex">
                                    {[...Array(5)].map((_, index) => (
                                        <Star key={index} fill="green" stroke="0" size={16} />
                                    ))}
                                </div>
                                <p className="font-thin">4.8/5</p>
                            </div>
                            <p className="text-sm text-gray-400 mt-1">based on 910 reviews</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeroSection;