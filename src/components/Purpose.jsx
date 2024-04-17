import React from 'react';

// import {designer} from 'assets/lottie/designing.gif';
const Purpose = () => {
    return (
        <div className='CreateTamplate w-full h-full pt-[5%] pl-[5%] pr-[5%] pb-[4%]  '>
        <div className='w-full flex flex-row align-middle  '>
            <h2 className='dribble text-[#E55C8B]   text-lg lg:text-3xl mr-3'>dribbble</h2>
            <button className='h-7 w-7 md:h-8 md:w-8 lg:h-9 lg:w-9 border-0  bg-[#d1d1d1] rounded-md  text-2xl flex justify-center align-middle'>{" < "}</button>        
        </div>
        <div className=' w-full h-full lg:pl-[20%] lg:pr-[20%] md:pl-[10%] md:pr-[10%] flex flex-col justify-evenly items-center'>
           <div className='flex flex-col justify-center items-center mb-3'>
                <h1 className='text-2xl lg:text-4xl font-bold mb-[4%] text-center'>What brings you to Dribbble?</h1>
                <p className='text-sm lg:text-lg text-center'>Select the option which describes you. Don't worry, you can explore other options later.</p>
           </div>
            <div className='flex flex-col lg:flex-row justify-between items-center flex-wrap  w-full h-[1230px] md:h-auto'>
                <div className='group flex flex-col justify-start items-center border-2 border-black rounded-xl h-[350px] w-[300px] pl-1 pt-1 pr-1 group-hover:h-auto transition-all duration-500 ease-in-out overflow-hidden relative mb-7 hover:border-[#E55C8B] '>
                  <div className='transition-transform duration-500 ease-in-out pb-[20px] transform group-hover:-translate-y-10 flex flex-col justify-evenly items-center'>
                    <img src="/assets/lottie/designing.gif" alt="" className='w-[200px] h-[200px]' />
                    <h3 className='text-center font-bold text-xl'> I'm a designer looking to share my work</h3>
                    <p className='extraDetails text-center text-[#737373] group-hover:block hidden'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur quam id, veritatis </p>
                  </div>
                  
                    <div className=" h-5 w-5 absolute bottom-2">
                        <input type="checkbox" id="designer" name="designer" className="opacity-0 absolute h-full w-full z-10 cursor-pointer" />
                        <div className="block h-full w-full rounded-full border-2 border-gray-300 checkmark cursor-pointer"></div>
                    </div>

                </div>
                <div className='group flex flex-col justify-start items-center border-2 border-black rounded-xl h-[350px] w-[300px] pl-1 pt-1 pr-1 group-hover:h-auto transition-all duration-500 ease-in-out overflow-hidden relative mb-7 hover:border-[#E55C8B] '>
                  <div className='transition-transform duration-500 ease-in-out pb-[20px] transform group-hover:-translate-y-10 flex flex-col justify-evenly items-center'>
                    <img src="/assets/lottie/hiring.gif" alt="" className='w-[200px] h-[200px]' />
                    <h3 className='text-center font-bold text-xl'>I'm looking to hire a designer</h3>
                    <p className='extraDetails text-center text-[#737373] group-hover:block hidden'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur quam id, veritatis </p>
                  </div>
                  
                    <div className=" h-4 w-5 absolute bottom-2">
                        <input type="checkbox" id="designer" name="designer" className="opacity-0 absolute h-full w-full z-10 cursor-pointer" />
                        <div className="block h-full w-full rounded-full border-2 border-gray-300 checkmark cursor-pointer"></div>
                    </div>

                </div>
                <div className='group flex flex-col justify-start items-center border-2 border-black rounded-xl h-[350px] w-[300px] pl-1 pt-1 pr-1 group-hover:h-auto transition-all duration-500 ease-in-out overflow-hidden relative mb-7 hover:border-[#E55C8B] '>
                  <div className='transition-transform duration-500 ease-in-out pb-[20px] transform group-hover:-translate-y-10 flex flex-col justify-evenly items-center'>
                    <img src="/assets/lottie/idea.gif" alt="" className='w-[200px] h-[200px]' />
                    <h3 className='text-center font-bold text-xl'> I'm looking for design inspiration</h3>
                    <p className='extraDetails text-center text-[#737373] group-hover:block hidden'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur quam id, veritatis </p>
                  </div>
                  
                    <div className=" h-5 w-5 absolute bottom-2">
                        <input type="checkbox" id="designer" name="designer" className="opacity-0 absolute h-full w-full z-10 cursor-pointer" />
                        <div className="block h-full w-full rounded-full border-2 border-gray-300 checkmark cursor-pointer"></div>
                    </div>

                </div>
                
            </div>
            <div className='flex flex-col w-full justify-evenly items-center'>
                <h2 className='text-xl font-bold mb-5'> Anything else? You can select multiple</h2>
                <button className='bg-[#E55C8B] text-white rounded-md h-[40px] w-[150px]'>Next</button>
                <h3 className='font-bold mt-3 text-[#767676]'> or Press RETURN</h3>
            </div>
            
        </div>
    </div>
    );
};

export default Purpose;