import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const UpdateTask = () => {
  const [updatedTask, setUpdatedTask] = useState("");
  const location = useLocation();
  console.log(location);

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const newTask = form.newMessage.value;
    const latestTask = { newTask };
    console.log(location.state._id);
    // setUpdatedTask(newTask);
    fetch(`https://adminui-app-server.vercel.app/tasks/${location.state._id}`, {
      method: "put",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(latestTask),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        //more codes
      });
  };
  return (
    <div>
      {location.state && location.state ? (
        <form onSubmit={handleUpdate}>
          <input
            name="newMessage"
            defaultValue={location.state.taskMessage}
            className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
          />
          <input
            type="submit"
            name="submit"
            value="Submit"
            className="bg-blue-600 px-2 py-1 mt-3 rounded"
          />
        </form>
      ) : (
        <h2>
          Thank you and Please select{" "}
          <Link to="/my-tasks" className="text-lg text-blue-500">
            any task to update
          </Link>
        </h2>
      )}
    </div>
  );
};

export default UpdateTask;
