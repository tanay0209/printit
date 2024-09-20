
function UniqueSection() {
    return (
        <div className="py-8 px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-center py-6 font-bold">Why choose PrintIt</h2>
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row">
                    <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
                        <img
                            src="https://a.storyblok.com/f/165154/1450x1450/97cf3c3c7e/0341_2024-brand-vi-rollout-dedicated-hero-1450x1450-1.png/m/1000x0/"
                            alt="PrintIt Features"
                            className="w-full h-auto rounded-lg"
                        />
                    </div>
                    <div className="flex flex-col gap-6 w-full lg:w-1/2 lg:pl-8">
                        {[
                            { title: "World's largest print-on-demand network", description: "140+ print partners in 32 countries. PrintIt is a truly global service." },
                            { title: "Sell globally, produce locally", description: "Your products are produced close to your customers, wherever they are." },
                            { title: "100% free editing tools", description: "Create your custom products using our suite of free tools." },
                            { title: "60+ logistics partners", description: "Our global network of logistics partners ensures your products are delivered fast." },
                            { title: "High-quality products", description: "We partner with the world's leading brands to ensure the best quality products." },
                            { title: "Endless creativity with Shutterstock Images", description: "Access millions of images and graphics to create unique products you can sell in your store." },
                            { title: "1-click integration to the leading ecommerce platforms", description: "Connect your store to PrintIt using our integrations with Shopify, Etsy and more." }
                        ].map((item, index) => (
                            <div key={index} className="flex flex-col gap-1">
                                <p className="text-lg sm:text-xl font-semibold">▻ {item.title}</p>
                                <p className="text-base sm:text-lg">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UniqueSection;