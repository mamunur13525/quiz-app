import React from 'react';
import { IoExitOutline } from 'react-icons/io5';

const Navbar = () => {
    return (
        <nav className=' bg-[#FAFEF0] shadow-md'>
            <div className="container mx-auto flex justify-between items-center py-4 px-3">
                <h1 className='cursor-pointer text-3xl font-semibold'>Mamun</h1>
                <div className='flex items-center gap-2  cursor-pointer'>
                    <span className='text-lg font-semibold'>Logout</span>
                    <IoExitOutline className='text-3xl' />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;