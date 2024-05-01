// AddTaskModal.jsx
import React, { useState } from 'react';
import Modal from 'react-modal';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useDispatch } from 'react-redux';
import { setTask } from '../feature/taskSlice';

const AddTaskModal = ({ isOpen, onRequestClose }) => {
 

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [start, setStart] = useState(new Date());
  const [end, setEnd] = useState(new Date());

  const dispatch = useDispatch();
  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Check if end date is greater than start date
    if (end < start) {
      alert("End date must be greater than start date.");
      return;
    }
  
    // Convert the start and end dates to ISO strings
    const isoStart = start.toISOString();
    const isoEnd = end.toISOString();
  
    // Prepare the data
    const data = {
      title,
      desc,
      start: isoStart,
      end: isoEnd,
    };
  
    // Dispatch the setTask action with the new task as the payload
    dispatch(setTask(data));
  
    console.log(data)
  
    // After dispatching the action, you can clear the form if needed
    setTitle('');
    setDesc('');
    setStart(new Date());
    setEnd(new Date());
  
    // If you're using this function as a submit handler for a form, you might want to close the modal after submitting the form
    onRequestClose();
  };


  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      className="flex items-center justify-center fixed left-0 bottom-0 w-full h-full bg-transparent "
      style={{ overlay: { zIndex: 50000, backdropFilter: 'blur(5px)' } }}
    >
      <div
        className="bg-black bg-opacity-50 backdrop-blur rounded-lg shadow-lg relative"
        style={{ overlay: { zIndex: 50000, backdropFilter: 'blur(5px)' } }}
      >
        <div className="flex flex-col items-start p-5">
          <input
            type="text"
            id="title"
            name="title"
            placeholder='Title'
            onChange={e => { setTitle(e.target.value) }}
            className="text-gray-900 text-base font-bold p-2 border-b-2 border-gray-200 focus:outline-none focus:border-blue-500 w-full h-[30px] shadow-md rounded-md"
          />
          <input
            type="text"
            id="desc"
            name="desc"
            placeholder='Description'
            onChange={e => setDesc(e.target.value)}
            className="text-gray-900 text-base font-bold p-2 border-b-2 border-gray-200 focus:outline-none focus:border-blue-500 w-full h-[30px] shadow-md rounded-md"
          />

          <hr  />

          <div className="flex flex-col items-center w-full justify-between">
            <label htmlFor="start" className="w-full text-gray-700 text-sm font-bold mb-2 ">Start :</label>
            <div className='w-full flex flex-row'>
              <DatePicker
                selected={start}
                onChange={date => setStart(date)}
                dateFormat="P"
                className="w-[100px] p-2 border-2 border-gray-200 focus:outline-none focus:border-blue-500 rounded-md shadow-md"
              />
              <DatePicker
                selected={start}
                onChange={date => setStart(date)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="h:mm aa"
                className="w-[100px] p-2 border-2 border-gray-200 focus:outline-none focus:border-blue-500 rounded-md shadow-md"
              />
            </div>
          </div>

          <div className="flex flex-col items-center w-full justify-between">
            <label htmlFor="end" className="w-full text-gray-700 text-sm font-bold mb-1 ">End :</label>
            <div className='w-full flex flex-row'>
              <DatePicker
                selected={end}
                onChange={date => setEnd(date)}
                dateFormat="P"
                className="w-[100px] p-2 border-2 border-gray-200 focus:outline-none focus:border-blue-500 rounded-md shadow-md"
              />
              <DatePicker
                selected={end}
                onChange={date => setEnd(date)}
                showTimeSelect
                showTimeSelectOnly
                timeIntervals={15}
                timeCaption="Time"
                dateFormat="h:mm aa"
                className="w-[100px] p-2 border-2 border-gray-200 focus:outline-none focus:border-blue-500 rounded-md shadow-md"
              />
            </div>
          </div>

          <div className="mt-2 flex flex-row items-center justify-between w-full">
            <button
              type="submit"
              onClick={handleFormSubmit}
              className={`text-sm p-2 rounded text-white ${title.trim() ? 'bg-blue-500 hover:bg-blue-600' : 'bg-gray-500 cursor-not-allowed'}`}
              disabled={!title.trim()}
            >
              Add Task
            </button>

            <button onClick={onRequestClose} className="text-sm p-2 bg-red-500 hover:bg-red-600 rounded text-white">Close</button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default AddTaskModal;