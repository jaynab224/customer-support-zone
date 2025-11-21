import React, { use } from "react";
import Container from "./Container";
import CustomerTicketsCard from "./CustomerTicketsCard";
import Task from "./Task";
import Resolved from "./Resolved";

const CustomerTickets = ({
  cardData,
  setInPorgress,
  inProgress,
  setClicked,
  clicked,
  setResolve,
  resolve,
  complete,
  setComplete,
  removeCard,

}) => {
  const tickets = use(cardData);

  return (
    <div className="bg-[#f5f5f5] text-cyan-950 ">
      <Container>
        <div className="grid grid-cols-3 gap-6">
          <div className="col-span-2">
            <h1 className="text-3xl font-bold pt-9 pb-8">Customer Tickets</h1>
            <div className="grid grid-cols-2 gap-3">
              {tickets.map((ticket) => (
                <div className="mb-3 text-black col-span-1 ">
                  <CustomerTicketsCard
                    setClicked={setClicked}
                    clicked={clicked}
                    inProgress={inProgress}
                    setInPorgress={setInPorgress}
                    ticket={ticket}
                  ></CustomerTicketsCard>
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-1">
            <h1 className="text-2xl font-bold pt-9 pb-3">Task Status</h1>
            <Task
              setInPorgress={setInPorgress}
              inProgress={inProgress}
              clicked={clicked}
              setResolve={setResolve}
              resolve={resolve}
              complete={complete}
              setComplete={setComplete}
              removeCard={removeCard}
            ></Task>

            <h1 className="text-2xl font-bold pt-3 pb-1">Resolved Task</h1>
            <Resolved complete={complete}></Resolved>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CustomerTickets;
