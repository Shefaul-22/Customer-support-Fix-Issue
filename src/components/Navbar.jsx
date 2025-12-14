import React from 'react';

const Navbar = () => {
    return (

        <div className="flex justify-between items-center p-4 bg-[#ffffff]">
            <div className="text-[16px]  md:text-2xl font-bold">CS-Ticket System</div>
            <div className=" items-center flex flex-row-reverse md:flex-row gap-4">

                <ul className="hidden md:flex gap-5 cursor-pointer">
                    <li>Home</li>
                    <li>FAQ</li>
                    <li>Changelog</li>
                    <li>Blog</li>
                    <li>Download</li>
                    <li>Contact</li>

                </ul>

                <div className="dropdown dropdown-end md:hidden relative">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none"
                            viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                                d="M4 6h16M4 12h16M4 18h7" />
                        </svg>
                    </div>

                    <ul tabIndex={0}
                        className="menu menu-sm dropdown-content bg-gray-100 rounded-box shadow mt-3  w-48 cursor-pointer space-y-1">

                        <li className='bg-gray-200 rounded-sm p-1'>Home</li>
                        <li className='bg-gray-200 rounded-sm p-1'>FAQ</li>
                        <li className='bg-gray-200 rounded-sm p-1'>Changelog</li>
                        <li className='bg-gray-200 rounded-sm p-1'>Blog</li>
                        <li className='bg-gray-200 rounded-sm p-1'>Download</li>
                        <li className='bg-gray-200 rounded-sm p-1'>Contact</li>

                    </ul>
                </div>


                <button className="px-2 py-2 md:px-4 md:py-2 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] font-normal md:font-semibold text-white cursor-pointer"><span>+</span> New Ticket</button>


            </div>
        </div>


    );
};

export default Navbar;