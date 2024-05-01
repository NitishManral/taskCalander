import React, { useMemo,useState,useEffect } from 'react';
import moment from 'moment';
import { Calendar, momentLocalizer, Views } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
// import events from '../testData/events';
import * as dates from '../testData/dates';
import withDragAndDrop from 'react-big-calendar/lib/addons/dragAndDrop';
import Modal from 'react-modal';
import { useSelector, useDispatch } from 'react-redux';
import { updateTask,deleteTask } from '../feature/taskSlice';
const localizer = momentLocalizer(moment);
const DnDCalendar = withDragAndDrop(Calendar)

const ColoredDateCellWrapper = ({ children }) =>
  React.cloneElement(React.Children.only(children), {
    style: {
      backgroundColor: 'blue',
    },
  });

const Tasks = () => {
    useEffect(() => {
        Modal.setAppElement('#root');
      }, []);
      
    const tasksWithDates = useSelector(state => state.task);
    const tasks = tasksWithDates ? tasksWithDates.map(task => ({
        ...task,
        start: new Date(task.start),
        end: new Date(task.end),
      })) : [];
    // console.log(tasks)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [title, setTitle] = useState("");
    const [desc, setDesc] = useState("");
    const [start, setStart] = useState(new Date());
    const [end, setEnd] = useState(new Date());
    const [id, setId] = useState(0);
    const [selectedEvent, setSelectedEvent] = useState({
        title: "",
        desc: "",
        start: new Date(),
        end: new Date(),
        id: 0,
      });
    const { components, defaultDate, max, views } = useMemo(
        () => ({
            components: {
                timeSlotWrapper: ColoredDateCellWrapper,
            },
            defaultDate: new Date(),
            max: dates.add(dates.endOf(new Date(), 'day'), -1, 'hours'),
            views: Object.keys(Views).map((k) => Views[k]),
        }),
        []
    );
    const moveEvent = ({ event, start, end }) => {
        const updatedTask = {
            ...event,
            start: start.toISOString(),
            end: end.toISOString(),
        };
        dispatch(updateTask(updatedTask));
    };
    const onEventResize = ({ event, start, end, allDay }) => {
        const updatedTask = {
            ...event,
            start: start.toISOString(),
            end: end.toISOString(),
            allDay,
        };
        dispatch(updateTask(updatedTask));
    };
    
    useEffect(() => {
        if (selectedEvent) {
            setTitle(selectedEvent.title);
            setDesc(selectedEvent.desc);
            setStart(selectedEvent.start);
            setEnd(selectedEvent.end);
            setId(selectedEvent.id);
        }
    }, [selectedEvent]);

    const dispatch = useDispatch();

    const handleEdit = () => {
        const updatedTask = {
            title,
            desc,
            start: start.toISOString(),
            end : end.toISOString(),
            id: selectedEvent.id // assuming the selectedEvent has an id property
        };
        dispatch(updateTask(updatedTask));

        setIsModalOpen(false);
        setTitle("");
        setDesc("");
        setStart(new Date());
        setEnd(new Date());
        setId(0);
    };
    const handleDelete = () => {
        dispatch(deleteTask(selectedEvent.id));
        setIsModalOpen(false);
    };
    const onDragStart = ({ event }) => {
        console.log("Drag start: ", event);
    };
    return (
        <div className=' tasks ml-[50px] text-black  m-0 h-full w-auto flex flex-col justify-center items-center rounded-lg font-semibold '>
            
                <div className='w-[100%] h-[100%] backdrop-blur-3xl rounded-lg flex flex-col justify-end items-center '>
                    <DnDCalendar
                        components={components}
                        defaultDate={defaultDate}
                        events={tasks}
                        localizer={localizer}
                        max={max}
                        showMultiDayTimes
                        step={60}
                        views={views}
                        startAccessor="start"
                        endAccessor="end"
                        draggableAccessor={(event) => true}
                        onEventDrop={moveEvent}
                        onEventResize={onEventResize}
                        onDragStart={onDragStart}
                        onSelectEvent={event => {
                            setSelectedEvent(event);
                            setIsModalOpen(true);
                        }}
                        style={{ height: '100%', width: '100%' ,padding:'10px'}}
                    />
                </div>
                <Modal
                    isOpen={isModalOpen}
                    onRequestClose={() => setIsModalOpen(false)}
                    className="flex items-center justify-center fixed left-0 bottom-0 w-full h-full bg-gray-800 bg-opacity-70"
                    style={{ overlay: { zIndex: 50000 } }}
                    >
                    <div className="bg-white rounded-lg ">
                        <div className="flex flex-col items-start p-4">
                        <div className="flex items-center w-full">
                            {/* <div>Task ID: {id}</div> */}
                            <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} className="text-gray-900 font-medium text-lg border-b-2 border-gray-200 focus:outline-none focus:border-blue-500 w-full bg-gray-200" />
                            <svg onClick={() => setIsModalOpen(false)} className="ml-auto fill-current text-gray-700 w-6 h-6 cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18">
                            <path d="M18 1.3L16.7 0 9 7.6 1.3 0 0 1.3 7.6 9 0 16.7 1.3 18 9 10.4l7.7 7.6 1.3-1.3L10.4 9z"/>
                            </svg>
                        </div>
                        <hr/>
                        <div className="mt-2">
                            <input type="text" value={desc} onChange={(e) => setDesc(e.target.value)} className="w-full p-2 border-2 border-gray-200 focus:outline-none focus:border-blue-500 rounded-md bg-gray-200" />
                            <input type="datetime-local" value={start.toISOString().substring(0,16)} onChange={(e) => setStart(new Date(e.target.value))} className="w-full p-2 border-2 border-gray-200 focus:outline-none focus:border-blue-500 rounded-md mt-2 bg-gray-200" />
                            <input type="datetime-local" value={end.toISOString().substring(0,16)} onChange={(e) => setEnd(new Date(e.target.value))} className="w-full p-2 border-2 border-gray-200 focus:outline-none focus:border-blue-500 rounded-md mt-2 bg-gray-200" />
                        </div>
                        
                        <div className="mt-4 mb-2 flex justify-end">
                            <button onClick={ handleEdit} className="text-sm py-2 px-3  bg-blue-500 hover:bg-blue-600 rounded text-white">Update</button>
                            <button onClick={handleDelete} className="ml-2 text-sm py-2 px-3 bg-red-500 hover:bg-red-600 rounded text-white">Delete</button>
                            <button onClick={() => setIsModalOpen(false)} className="ml-2 text-sm py-2 px-3  bg-red-500 hover:bg-red-600 rounded text-white">Close</button>
                        </div>
                        </div>
                    </div>
                </Modal>
        </div>
    );
};

export default Tasks;