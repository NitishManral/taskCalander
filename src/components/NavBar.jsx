
import React from 'react';
function NavBar() {
  return (
    <div className='navbar bg-transparent w-full overflow-hidden flex justify-between items-center h-15 border-b-2 p-2'>
        <div className='navLinks  none  md:flex w-5/7 flex-row items-center  ml-5'>
          <h2 className='dribble logo text-[#000000] z-[999]  text-[1.5rem] mr-3'>dribbble</h2>
          <div className='hidden lg:flex flex-row justify-center items-center font-bold  text-[#424242]'>
            <a href='/' className='  text-center m-[1rem] text-base whitespace-nowrap '>Inspiration</a>
            <a href='/' className=' text-center m-[1rem]  text-base whitespace-nowrap'>Find Work</a>
            <a href='/' className='  text-center m-[1rem] text-base whitespace-nowrap'>Go pro</a>
            <a href='/' className='  text-center m-[1rem] text-base whitespace-nowrap'>Learn Design</a>
            <a href='/' className='  text-center m-[1rem] text-base whitespace-nowrap'>News & Events</a>
          </div>
        </div>
        <div className='extras w-2/7 flex flex-row justify-end align-middle h-full p-1'>
          <input type="text" className='w-[100px] bg-[#bebebe] rounded-md hidden md:flex p-2 mr-3 justify-center align-middle' placeholder='search' />
          <div className='relative h-[35px]  md:block w-[35px] mr-3'>
              <span className='absolute bottom-0 left-0 bg-green-500 text-white rounded-full text-sm w-[20px] h-[20px] flex justify-center items-center z-10'>0</span>
              <img src='/assets/images/bag.png' className="absolute top-0 right-0 w-[30px] h-[30px] z-0" alt="bagImage" />
          </div>
          <img src='/assets/images/image-add.png' className="h-[40px] w-[40px] rounded-full border border-black border-1 mr-3 " alt="searchImage" />
          <button className='border-0 bg-[#E55C8B] w-[100px] hidden md:block p-2 rounded-md hover:border-0 hover:border-b-2'>Upload</button>
        </div>
    </div>
  );
}

export default NavBar;
