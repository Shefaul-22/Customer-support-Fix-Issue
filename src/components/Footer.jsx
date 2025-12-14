import React from 'react';

const Footer = () => {
    return (
        <div className="bg-black text-gray-300 py-12 px-6 md:px-0">
            <div className="max-w-7xl mx-auto  grid grid-cols-1 md:grid-cols-4 gap-10">

                
                <div>
                    <h2 className="text-white text-xl font-semibold mb-3">CS — Ticket System</h2>
                    <p className="text-sm leading-6 ">
                        CS — Ticket System helps teams organize, track, and manage customer issues
                        more efficiently. With priority-based workflow, real-time status updates,
                        and smooth ticket handling, we make customer support faster and more effective.
                    </p>
                </div>

          
                <div className='ml-0 md:ml-6'>
                    <h3 className="text-white font-semibold text-lg mb-4">Company</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-white">About Us</a></li>
                        <li><a href="#" className="hover:text-white">Our Mission</a></li>
                        <li><a href="#" className="hover:text-white">Contact Sales</a></li>
                    </ul>
                </div>

                
                <div>
                    <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-white">Products & Services</a></li>
                        <li><a href="#" className="hover:text-white">Customer Stories</a></li>
                        <li><a href="#" className="hover:text-white">Download Apps</a></li>
                    </ul>
                </div>

                
                <div>
                    <h3 className="text-white font-semibold text-lg mb-4">Social Links</h3>
                    <ul className="space-y-3 text-sm">
                        <li className="flex items-center gap-2">
                            <span>🌐</span> @CS — Ticket System
                        </li>

                        <li className="flex items-center gap-2">
                            <span>📘</span> @CS — Ticket System
                        </li>

                        <li className="flex items-center gap-2">
                            <span>🐦</span> @CS — Ticket System
                        </li>

                        <li className="flex items-center gap-2">
                            <span>📩</span> support@cst.com
                        </li>
                    </ul>
                </div>

            </div>

            
            <div className="border-t border-gray-700 mt-10 pt-5 text-center text-sm text-gray-400">
                © 2025 CS — Ticket System. All rights reserved.
            </div>
        </div>
    );
};

export default Footer;