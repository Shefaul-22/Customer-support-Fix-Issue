import React from 'react';
import TicketCard from './TicketCard';

const AllTickets = ({  taskTickets,  markCompleteTasks, setMarkCompleteTasks }) => {

   

    console.log(taskTickets);
    
    
    return (
        <div className='w-full md:w-3/4'>

            <h2 className='font-semibold text-2xl mb-2 md:mb-4'>Customer Tickets</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                { taskTickets.map(ticket => (

                    <TicketCard
                        key={ticket.id}
                        ticket={ticket}
                        
                        
                        markCompleteTasks={markCompleteTasks} setMarkCompleteTasks={setMarkCompleteTasks}
                    />
                ))}
            </div>

        </div>
    );
};

export default AllTickets;