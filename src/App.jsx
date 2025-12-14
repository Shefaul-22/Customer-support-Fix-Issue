import { useState, use, Suspense } from "react";

import './App.css'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import AllTickets from "./components/main/AllTickets";

import TaskStatus from "./components/main/TaskStatus";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


const fetchTickets = async () => {
  const res = await fetch("./tiketsData.json");
  return res.json();
};

const ticketsPromise = fetchTickets();
// console.log(ticketsPromise);

export default function App() {
  const tickets = use(ticketsPromise);

  const [taskTickets, setTaskTickets] = useState(tickets);
  const [markCompleteTasks, setMarkCompleteTasks] = useState([])
  const [resolvedTasks, setResolvedTasks] = useState([]);



  // // When ticket card clicked
  // const handleTicketClick = (ticket) => {
  //   if (!taskTickets.find(t => t.id === ticket.id)) {
  //     setTaskTickets([...taskTickets, ticket]);
  //     toast.info(`${ticket.title} added to in-progress`);
  //   }
  // };


  return (
    <div>

      <Navbar></Navbar>

      <Hero inProgress={markCompleteTasks.length} resolved={resolvedTasks.length} ></Hero>

     

      {/* main layout */}
      <main className="bg-[#F5F5F5]">
        <div className="flex flex-col md:flex-row  gap-5 md:gap-8 p-6">

          {/* Tickets List */}
          {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
          {tickets.map(ticket => (
            <TicketCard 
              key={ticket.id} 
              ticket={ticket} 
              onClick={handleTicketClick} 
            />
          ))}
        </div> */}

          <Suspense>
            <AllTickets taskTickets={taskTickets} setTaskTickets={setTaskTickets} markCompleteTasks={markCompleteTasks} setMarkCompleteTasks={setMarkCompleteTasks} ></AllTickets>
          </Suspense>


          {/*   Task status section */}
          <TaskStatus taskTickets={taskTickets} setTaskTickets={setTaskTickets}

            markCompleteTasks={markCompleteTasks} setMarkCompleteTasks={setMarkCompleteTasks}

            resolvedTasks={resolvedTasks} setResolvedTasks={setResolvedTasks} />
        </div>
      </main>

      {/* Footer section */}

      

      <ToastContainer />
    </div>
  );
}
