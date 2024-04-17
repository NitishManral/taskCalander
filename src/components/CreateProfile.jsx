import React, { useEffect } from 'react';
import { useState } from 'react';
const CreateProfile = () => {
    // Component logic goes here
    const [imageUrl, setImageUrl] = useState('/assets/images/image-add.png');
        const uploadImage = () => {
        const input = document.createElement('input');
        input.type = 'file';
        input.accept = 'image/*';
        input.onchange = (event) => {
            const file = event.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onloadend = () => {
                    setImageUrl(reader.result);
                };
                reader.readAsDataURL(file);
            }
        };
        input.click();
    }
    useEffect(() => {
        
    }, []);
    return ( 
        <div className='CreateTamplate w-full h-full pt-[5%] pl-[5%] pr-[5%] pb-[4%]  '>
            <h2 className='dribble text-[#E55C8B] w-full  text-lg lg:text-3xl '>dribbble</h2>
            <div className=' w-full h-full lg:pl-[20%] lg:pr-[20%] md:pl-[10%] md:pr-[10%] flex flex-col justify-evenly'>
                <div className='w-full flex flex-col '>
                    <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold pb-5 md:hidden'> Welcome! <br /> Let's create your profile</h1>
                    <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold pb-5 hidden md:block'> Welcome! Let's create your profile</h1>
                    <p className='text-sm md:text-lg text-[#0E0A24]'>Let other know you better! You can do this <a href='#' className='underline text-blue-700'>later</a></p>
                </div>
                <div className='addAvtar flex flex-col'> 
                    <h2 className='  pb-[5%] text-2xl font-bold'>Add an avatar</h2>
                    <div className='uploadAvater flex flex-row justify-start'>
                        <div className='avatar border border-black border-dashed h-44 w-44 rounded-[50%] ' onClick={uploadImage}
                          style={{ 
                            backgroundImage: `url(${imageUrl})`,
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat'
                          }}
                        ></div>
                        <div className='updoadOption flex flex-col ml-[10%]'>
                            <button className='border border-[#D9D9D9] rounded-md mb-[10%] w-[60%]' onClick={uploadImage}>Choose Image </button>
                            <button className='border-0 font-bold text-[#535453]'> {" >"} Or choose one of our default</button>
                            
                        </div>
                    </div>
                </div>
                <div className='addLocation'>
                    <h2 className='text-sm md:text-lg'>Add a location</h2>
                    <input type='text' placeholder='Location' className='border-b-2 w-full h-10 rounded-md'/>
                </div>
                <button className='border-0 bg-[#E55C8B] w-1/4 h-10 rounded-md hover:border-0 hover:border-b-2'>Next</button>
            </div>
        </div>
    );
};

export default CreateProfile;