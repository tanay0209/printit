// @ts-nocheck

import { ChevronDown } from 'lucide-react';
import { useState } from 'react';

const Footer = () => {
    const [openSections, setOpenSections] = useState({
        printOnDemand: false,
        integrations: false,
        startSelling: false,
        company: false,
    });

    const toggleSection = (section) => {
        setOpenSections((prevState) => ({
            ...prevState,
            [section]: !prevState[section],
        }));
    };

    return (
        <footer className="bg-black text-white py-6 text-sm">
            <div className='max-w-7xl mx-auto'>
                <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    <div className="space-y-4">
                        <h3 className="font-bold">PrintIt</h3>
                        <p className="text-sm">
                            PrintIt has created the world's largest network for local production and distribution of customized products. Together we bring creativity to life - and into business.
                        </p>
                        <button className="bg-white text-black px-4 py-2 rounded-full">Get started</button>
                        <div className="flex space-x-4 mt-4">
                            <img src="https://a.storyblok.com/f/165154/x/de4bf52166/badge-1.svg" alt="App Store" className="w-24 cursor-pointer" />
                            <img src="https://a.storyblok.com/f/165154/x/61c51d3d38/badge.svg" alt="Google Play" className="w-24 cursor-pointer" />
                        </div>
                    </div>

                    <div className="md:space-y-4">
                        <h3
                            className="font-bold cursor-pointer flex items-center md:cursor-default md:hover:underline"
                            onClick={() => toggleSection('printOnDemand')}
                        >
                            Print on demand <span><ChevronDown size={24} /></span>
                        </h3>
                        <ul className={`space-y-2 mt-2 text-sm md:block ${openSections.printOnDemand ? 'block' : 'hidden'}`}>
                            {[
                                'What is print on demand?',
                                'Product catalog',
                                'Shipping and delivery',
                                'Dropshipping products',
                                'Pro sellers',
                                'White label products',
                                'Returns policy',
                                'Global, yet local',
                                'Sustainability',
                                'Support',
                            ].map(item => (
                                <li key={item} className="hover:text-gray-400 hover:underline">{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="md:space-y-4">
                        <h3
                            className="font-bold cursor-pointer flex  items-center md:cursor-default md:hover:underline"
                            onClick={() => toggleSection('integrations')}
                        >
                            Integrations <span><ChevronDown size={24} /></span>
                        </h3>
                        <ul className={`space-y-2 mt-2 text-sm md:block ${openSections.integrations ? 'block' : 'hidden'}`}>
                            {[
                                'Shopify',
                                'Etsy',
                                'WooCommerce',
                                'Wix',
                                'Squarespace',
                                'BigCommerce',
                                'API',
                            ].map(item => (
                                <li key={item} className="hover:text-gray-400 hover:underline">{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="md:space-y-4">
                        <h3
                            className="font-bold cursor-pointer flex items-center md:cursor-default md:hover:underline"
                            onClick={() => toggleSection('startSelling')}
                        >
                            Start selling <span><ChevronDown size={24} /></span>
                        </h3>
                        <ul className={`space-y-2 mt-2 text-sm md:block ${openSections.startSelling ? 'block' : 'hidden'}`}>
                            {[
                                'Embroidery',
                                'Print on demand t-shirts',
                                'Print on demand hoodies',
                                'Print on demand posters',
                                'Print on demand canvas',
                                'Print on demand calendars',
                                'Print on demand mugs',
                                'Custom products',
                                'Custom clothing',
                                'Custom merchandise',
                            ].map(item => (
                                <li key={item} className="hover:text-gray-400 hover:underline">{item}</li>
                            ))}
                        </ul>
                    </div>

                    <div className="md:space-y-4">
                        <h3
                            className="font-bold cursor-pointer flex items-center md:cursor-default md:hover:underline"
                            onClick={() => toggleSection('company')}
                        >
                            Company <span><ChevronDown size={24} /></span>
                        </h3>
                        <ul className={`space-y-2 mt-2 text-sm md:block ${openSections.company ? 'block' : 'hidden'}`}>
                            {[
                                'PrintItConnect',
                                'About PrintIt',
                                'Leadership team',
                                'Board & investors',
                                'Newsroom',
                                'Blog',
                                'Customer Stories',
                                'Partners',
                                'Careers',
                                'Affiliates program',
                            ].map(item => (
                                <li key={item} className="hover:text-gray-400 hover:underline">{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="container mx-auto px-4 mt-10 text-xs flex justify-between items-center">
                    <div className="space-x-4">
                        {[
                            'Contact us',
                            'Legal',
                            'Privacy policy',
                            'Cookie policy',
                            'API terms',
                            'Sitemap',
                        ].map(item => (
                            <span key={item} className="hover:text-gray-400 hover:underline cursor-pointer">{item}</span>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
