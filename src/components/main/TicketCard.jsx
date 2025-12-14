import React from 'react';
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const TicketCard = ({
    ticket, markCompleteTasks, setMarkCompleteTasks }) => {


    // When ticket card clicked
    const handleTicketClick = (ticket) => {

        if (!markCompleteTasks.find(t => t.id === ticket.id)) {

            const markAsComplete = [...markCompleteTasks, ticket]
            setMarkCompleteTasks(markAsComplete);

            toast.info(`${ticket.title} added to in-progress`);
        }
    };

    return (
        <div
            className=" p-4 rounded shadow-2xl cursor-pointer bg-[#ffffff]"
            onClick={() => handleTicketClick(ticket)}
        >
            {/* <h2 className="font-bold">{ticket.title}</h2>
            <p>{ticket.description}</p>
            <p>Priority: {ticket.priority}</p>
            <p>Status: {ticket.status}</p> */}

            <div className='flex justify-between'>
                <h3 className='font-medium text-xl text-[#001931]'>{ticket.title}</h3>
                <p className={`flex items-center gap-2 px-3 py-1  ${ticket.status === "Open"
                    ? "bg-[#E6FFF0] text-[#0B5E06]"
                    : "bg-[#F8F3B9] text-[#9C7700]"
                    } font-medium rounded-full `}>

                    <span
                        className={`w-4 h-4 rounded-full ${ticket.status === "Open"
                            ? "bg-green-600"
                            : "bg-yellow-500"
                            }`}
                    ></span>
                    {ticket.status}
                </p>

            </div>

            <div className='my-2'>
                <p className='text-[#787697]'>{ticket.description}</p>
            </div>

            <div className='flex justify-between'>

                <div className='space-x-4 flex flex-wrap '>
                    <span className='text-[#627382]'>{ticket.id}</span>
                    <span className={
                        ticket.priority === "HIGH PRIORITY"
                            ? "text-[#F83044]"
                            : ticket.priority === "MEDIUM PRIORITY"
                                ? "text-[#FEBB0C]"
                                : "text-[#02A53B]"
                    }>
                        {ticket.priority}
                    </span>

                </div>
                <div className='flex items-center space-x-4'>
                    <span className='text-[#627382]'>{ticket.customer}</span>

                    <span className='flex text-[#627382]'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M7 11h2v2H7zm0 4h2v2H7zm4-4h2v2h-2zm0 4h2v2h-2zm4-4h2v2h-2zm0 4h2v2h-2z" /><path fill="currentColor" d="M5 22h14c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2h-2V2h-2v2H9V2H7v2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2M19 8l.001 12H5V8z" /></svg>{ticket.createdAt}</span>

                </div>
            </div>
        </div>
    );
};

export default TicketCard;