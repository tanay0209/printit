import { useState } from 'react';
import { Menu, X, ChevronRight, Globe, Headset, ShoppingCart, User } from 'lucide-react';

const topNavItems = [
    { text: 'Contact Us', icon: <Headset size={20} /> },
    { text: 'EN/INR', icon: <Globe size={20} /> },
    { text: 'Cart', icon: <ShoppingCart size={20} /> },
    { text: 'Sign in', icon: <User size={20} /> }
];

const bottomNavItems = [
    {
        title: 'Products',
        menu: ['All Products', 'New Arrivals', 'Best Sellers', 'Trending', 'Custom Products']
    },
    {
        title: 'Start Selling',
        menu: ['How to Start', 'Seller Dashboard', 'Marketplace Guidelines', 'Become a Partner']
    },
    {
        title: 'Tools and apps',
        menu: ['Design Studio', 'Mobile App', 'Product Mockups', 'Analytics']
    },
    {
        title: "Resources",
        menu: ['Blog', 'Help Center', 'Webinars', 'Guides', 'Community Forums']
    },
    {
        title: "Pricing",
        menu: ['Product Pricing', 'Shipping Rates', 'Subscription Plans', 'Bulk Orders']
    },
    {
        title: 'Pro Sellers',
        menu: ['Top Sellers', 'Success Stories', 'Tips for Growth', 'Exclusive Perks']
    },
    {
        title: 'PrintIt Connect',
        menu: ['Our Community', 'Events', 'Collaboration Opportunities', 'Contact Support']
    },
];

function MobileNavigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState('');

    const toggleMenu = () => setIsOpen(!isOpen);
    const toggleSubmenu = (title: string) => {
        setActiveSubmenu(activeSubmenu === title ? '' : title);
    };

    return (
        <nav className='lg:hidden bg-black'>
            <button onClick={toggleMenu} className="fixed top-4 left-4 z-50 bg-black text-white rounded-full p-2 transition-colors duration-300 hover:bg-gray-800">
                {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            <div className={`fixed inset-0 bg-white z-40 overflow-y-auto transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="p-4 mt-16">
                    <ul className="space-y-4">
                        {topNavItems.map((item, index) => (
                            <li key={index} className="flex items-center space-x-2 p-2 hover:bg-gray-100 rounded">
                                {item.icon}
                                <span>{item.text}</span>
                            </li>
                        ))}
                    </ul>

                    <hr className="my-4" />

                    <ul className="space-y-2">
                        {bottomNavItems.map((item, index) => (
                            <li key={index}>
                                <button
                                    onClick={() => toggleSubmenu(item.title)}
                                    className="flex justify-between items-center w-full p-2 hover:bg-gray-100 rounded"
                                >
                                    <span>{item.title}</span>
                                    <ChevronRight size={20} className={`transform transition-transform duration-300 ${activeSubmenu === item.title ? 'rotate-90' : ''}`} />
                                </button>
                                <ul className={`ml-4 mt-2 space-y-2 overflow-hidden transition-max-height duration-300 ${activeSubmenu === item.title ? 'max-h-screen' : 'max-h-0'}`}>
                                    {item.menu.map((subItem, subIndex) => (
                                        <li key={subIndex} className="p-2 hover:bg-gray-100 rounded">{subItem}</li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default MobileNavigation;
