import { Globe, Headset, ShoppingCart, User } from 'lucide-react';
import { BottomNavigationItem, NavigationItem } from "./index"

const topNavItems = [
    { text: 'Contact Us', icon: <Headset /> },
    { text: 'EN/INR', icon: <Globe /> },
    { text: 'Cart', icon: <ShoppingCart fill='true' /> },
    { text: 'Sign in', icon: <User fill='true' /> }
];

const bottomNavItems = [
    {
        title: 'Products',
        menu: [
            'All Products',
            'New Arrivals',
            'Best Sellers',
            'Trending',
            'Custom Products'
        ]
    },
    {
        title: 'Start Selling',
        menu: [
            'How to Start',
            'Seller Dashboard',
            'Marketplace Guidelines',
            'Become a Partner'
        ]
    },
    {
        title: 'Tools and apps',
        menu: [
            'Design Studio',
            'Mobile App',
            'Product Mockups',
            'Analytics'
        ]
    },
    {
        title: "Resources",
        menu: [
            'Blog',
            'Help Center',
            'Webinars',
            'Guides',
            'Community Forums'
        ]
    },
    {
        title: "Pricing",
        menu: [
            'Product Pricing',
            'Shipping Rates',
            'Subscription Plans',
            'Bulk Orders'
        ]
    },
    {
        title: 'Pro Sellers',
        menu: [
            'Top Sellers',
            'Success Stories',
            'Tips for Growth',
            'Exclusive Perks'
        ]
    },
    {
        title: 'PrintIt Connect',
        menu: [
            'Our Community',
            'Events',
            'Collaboration Opportunities',
            'Contact Support'
        ]
    },
];

function Navigation() {
    return (
        <nav className='hidden lg:flex w-full flex-col sticky top-0 bg-white z-50'>
            <div className='w-full flex py-3 justify-around items-center border-b'>
                <div className='font-semibold text-xl cursor-pointer'>PrintIt</div>
                <div className='flex gap-4'>
                    <ul className='flex gap-4'>
                        {topNavItems.map((item, index) => (
                            <NavigationItem key={index} text={item.text} icon={item.icon} />
                        ))}
                    </ul>
                    <div className='rounded-full cursor-pointer bg-black text-white hover:text-gray-400 px-3 py-2 text-sm transition-all duration-100'>
                        Sign up for free
                    </div>
                </div>
            </div>
            <div className='w-full flex items-center border-b justify-center'>
                <ul className='flex gap-4 cursor-pointer h-full'>
                    {bottomNavItems.map((item, index) => (
                        <BottomNavigationItem key={index} item={item.title} dropDownItems={item.menu} />
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default Navigation;
