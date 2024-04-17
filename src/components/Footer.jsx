import React from 'react';

const Footer = () => {
    return (
        <div className='w-full h-auto   p-[2%]'>
            <div className='flex flex-col md:flex-row mb-3'>
            <div className='w-full h-1/2 md:w-1/4 md:h-auto mb-3 flex flex-col justify-center items-center'>
                <h2 className='dribble w-full text-[#E55C8B] text-left text-3xl mb-4'>dribbble</h2>
                <p className='mb-4 text-black text-sm leading-relaxed tracking-wide'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime voluptatibus quibusdam veniam, consequuntur iusto doloremque.</p>
                <div className='flex flex-row justify-evenly  items-center w-full h-auto mb-2'>
                    <img src='/assets/images/dribbble.svg' alt='dribbble' className='w-8 h-8'/>
                    <img src='/assets/images/twitter.svg' alt='twitter' className='w-8 h-8'/>
                    <img src='/assets/images/facebook.svg' alt='facebook' className='w-8 h-8'/>
                    <img src='/assets/images/pinterest.svg' alt='linkedin' className='w-8 h-8'/> 
                 </div>
            </div>
            <div className='w-full h-1/2 md:w-1/4 md:h-auto mb-3 flex flex-row  justify-between items-center md:hidden'>
                <h3 className=' font-bold text-sm'>For Designer</h3>
                <h3 className=' font-bold text-sm'>Hire Designer</h3>
                <h3 className=' font-bold text-sm'>Company</h3>
                <h3 className=' font-bold text-sm'>Brands</h3>
            </div>
            <div className='w-full h-[50%] md:w-3/4 md:h-auto hidden md:flex justify-center items-center mb-3'>
                <div className='w-1/3 h-[90%] flex flex-col justify-center items-center text-center mb-3'>
                    <h3 className=' font-bold text-xl'>About</h3>
                    <ul className='text-black text-sm'>
                            <li className='m-2'><a href='/'>Teams</a></li>
                            <li className='m-2'><a href='/'>Careers</a></li>
                            <li className='m-2'><a href='/'>Support</a></li>
                            <li  className='m-2'><a href='/'>Media Kit</a></li>
                            <li  className='m-2'><a href='/'>Dribbble Meetups</a></li>
                    </ul>
                </div>
                <div className='w-1/3 h-[90%] flex flex-col justify-center items-center text-center mb-3'>
                    <h3 className=' font-bold text-xl'>About</h3>
                    <ul className='text-black text-sm'>
                    <li className='m-2'><a href='/'>Teams</a></li>
                            <li className='m-2'><a href='/'>Careers</a></li>
                            <li className='m-2'><a href='/'>Support</a></li>
                            <li  className='m-2'><a href='/'>Media Kit</a></li>
                            <li  className='m-2'><a href='/'>Dribbble Meetups</a></li>
                    </ul>
                </div>
                <div className='w-1/3 h-[90%] flex flex-col justify-center items-center text-center mb-3'>
                    <h3 className=' font-bold text-xl'>About</h3>
                    <ul className='text-black text-sm'>
                    <li className='m-2'><a href='/'>Teams</a></li>
                            <li className='m-2'><a href='/'>Careers</a></li>
                            <li className='m-2'><a href='/'>Support</a></li>
                            <li  className='m-2'><a href='/'>Media Kit</a></li>
                            <li  className='m-2'><a href='/'>Dribbble Meetups</a></li>
                    </ul>
                </div>
                <div className='w-1/3 h-[90%] flex flex-col justify-center items-center text-center mb-3'>
                    <h3 className=' font-bold text-xl'>About</h3>
                    <ul className='text-black text-sm'>
                    <li className='m-2'><a href='/'>Teams</a></li>
                            <li className='m-2'><a href='/'>Careers</a></li>
                            <li className='m-2'><a href='/'>Support</a></li>
                            <li  className='m-2'><a href='/'>Media Kit</a></li>
                            <li  className='m-2'><a href='/'>Dribbble Meetups</a></li>
                    </ul>
                </div>
            </div>
            </div>
            <hr className='w-full h-1 bg-black mb-3'/>
            <div className='w-full h-auto text-[#969393] font-bold flex flex-row justify-between items-center'>
                <h3 className=' text-sm'>© 2021 Dribbble. All rights reserved.</h3>
                <div className='md:flex flex-row hidden'>
                    <h3 className='text-[#969393] text-sm pr-3'><span className='text-bold text-black'>232,321,435 </span> shots dribbbled</h3>
                    <div className='h-[25px] w-[25px] bg-[#E55C8B] rounded-full'></div>
                </div>
            </div>
        </div>
    );
};

export default Footer;