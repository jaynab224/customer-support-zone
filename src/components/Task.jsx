import React from "react";
import { toast } from "react-toastify";

const Task = ({
  clicked,
  inProgress,
  setInPorgress,
  setResolve,
  resolve,
  complete,
  setComplete,
  removeCard,
}) => {
  return (
    <div className=" p-3 rounded-xl">
      {clicked.length === 0 ? (
        <h1>Select a ticket to add to Task Status</h1>
      ) : (
        <div className="space-y-4">
          {clicked.map((click) => (
            <div className="p-3 rounded-lg shadow bg-gray-50">
              <h1 className="font-semibold text-[18px] mb-3">{click.title}</h1>
              <button
                onClick={() => {
                  toast(`Complete " ${click.title} "`);
                  setInPorgress(inProgress - 1);
                  setResolve(resolve + 1);
                  setComplete([...complete, click]);
                  removeCard(click);
                }}
                className="bg-green-700 w-full py-2 rounded-xl text-white font-medium cursor-pointer hover:bg-green-600"
              >
                Complete
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Task;
