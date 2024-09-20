
function PromoSection() {
    return (
        <div className="py-8 bg-orange-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col lg:flex-row items-center">
                    <div className="w-full lg:w-1/2 lg:order-2">
                        <img
                            src="https://a.storyblok.com/f/165154/1200x1200/35ff04c4c9/cc-55_marketing-assets-for-personalization-studio.gif/m/"
                            alt="Promo Section"
                            className="w-full h-auto rounded-lg"
                        />
                    </div>
                    <div className="flex flex-col gap-4 w-full lg:w-1/2 lg:pr-8 lg:order-1 mt-8 lg:mt-0">
                        <p className='text-base sm:text-lg font-normal'>For print on demand sellers</p>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-semibold leading-tight">Accelerate business growth with innovative design tools and apps</h1>
                        <h3 className="text-xl sm:text-2xl mt-2">See how our cutting-edge solutions can help you reach new customers and maximize your profits.</h3>
                        <div className="flex mt-6">
                            <button className="bg-black text-white rounded-full py-2 px-6 text-sm sm:text-base">Get Started</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PromoSection;