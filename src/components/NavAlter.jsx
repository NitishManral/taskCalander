import React ,{useState} from 'react';
import '../styles/navAlter.css'
import AddTaskModal from './AddTaskModal';

const NavAlter = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

    return (
<div className='element h-full flex flex-col text-left text-nowrap z-20 overflow-hidden justify-start items-center p-1 bg-black bg-opacity-50 backdrop-blur text-white rounded-r-lg absolute top-0 left-0 '>            
        <h2 className=' logo text-[#DD5746] z-[999]  text-[1rem] p-1 w-full '><span className='animate-fade-in-out'>.</span>task</h2>
            <div className='w-full flex flex-row justify-between items-start '>
                <img src='/assets/images/image-add.png' className="h-[40px] w-[40px] rounded-full border border-black border-1 mr-3 " alt="searchImage" />
                <div className='w-full  flex flex-col '  >
                    <h2 className='logo text-xs '> Hello, 👋 </h2>
                    <h3 className='text-lg'>Nitish</h3>
                </div>
            </div>
            <div className='h-[1px] w-full bg-gradient-to-r from-transparent via-[#000000] to-transparent my-2'></div>
            <div className='w-full flex flex-col justify-between items-center ml-4'>
                <div className='w-full flex flex-row justify-between items-center ' onClick={openModal}>
                    <img src='/assets/images/addTask.svg' className="h-[25px] w-[25px] mr-5 " alt="searchImage" />
                    <h2 className=' w-full   text-sm  '> Add Task </h2>
                </div>
                <AddTaskModal isOpen={modalIsOpen} onRequestClose={closeModal} />

            </div>
        </div>
    );
};

export default NavAlter;