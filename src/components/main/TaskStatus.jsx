import React from 'react';
import { toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

const TaskStatus = ({ taskTickets, setTaskTickets, resolvedTasks, setResolvedTasks, markCompleteTasks, setMarkCompleteTasks }) => {

    // console.log(taskTickets, resolvedCount);

    // When completed button clicked
    const handleComplete = (id, markticket) => {
        setTaskTickets(taskTickets.filter(tt => tt.id !== id));
        setMarkCompleteTasks(markCompleteTasks.filter(mt => mt.id !== id));
        const addResolvedTasks = [...resolvedTasks, markticket]
        setResolvedTasks(addResolvedTasks);
        toast.success("Ticket marked as resolved");
    };

    return (

        <div className='w-full md:w-1/4'>

            <h2 className='font-semibold text-2xl mb-2 md:mb-4'>Task Status</h2>



                {markCompleteTasks.length === 0 && <p className='text-[#627382]'>Select a ticket to add to Task Status</p>}

                {markCompleteTasks.map(markticket => (
                    <div className='bg-gray-300 rounded-md p-4 mb-3'>
                        <div key={markticket.id}>
                            <p className='mb-2 font-semibold text-xl'>{markticket.title}</p>
                            <button
                                className="bg-green-500 text-white px-3 py-2 rounded w-full cursor-pointer"
                                onClick={() => handleComplete(markticket.id, markticket)}
                            >Complete
                            </button>
                        </div>
                    </div>
                ))}


            <h2 className='font-semibold text-2xl mb-1 md:mb-3  mt-4 md:mt-10'>Resolved Task</h2>

            
                {resolvedTasks.length === 0 && <p className='text-[#627382]'>No resolved tasks yet.</p>}

                {
                    resolvedTasks.map(rt => (
                        <div className='bg-gray-300 rounded-md p-2 mb-3'>
                            <div key={rt.id} className=''>
                                <h2>{rt.title}</h2>

                            </div>
                        </div>
                    ))
                }



           
        </div>





    );
};

export default TaskStatus;