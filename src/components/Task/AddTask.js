import React, { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";

const AddTask = () => {
  const { user } = useContext(AuthContext);
  const handleAddTask = (event) => {
    event.preventDefault();
    const form = event.target;
    const taskMessage = form.task.value;
    const taskImage = form.myIamge;
    const email = user.email;
    const completed = false;
    const update = false;
    const taskData = { taskMessage, taskImage, email, completed, update };
    // console.log(taskMessage, taskImage);
    fetch("https://adminui-app-server.vercel.app/task", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(taskData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div>
        <form
          className="bg-orange-400 p-6 md:w-1/2 mx-auto"
          onSubmit={handleAddTask}
        >
          <h2 className="text-center text-2xl font-bold my-3">Add Tasks</h2>
          <label
            for="task"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Task
          </label>
          <input
            type="text"
            id="task"
            name="task"
            className="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-blue-500  block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 outline-none"
            required
          />
          <label
            for="image"
            className=" mt-2 block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Image
          </label>

          <input type="file" name="myImage" accept="image/*" />
          <br />

          <input
            type="submit"
            name="submit"
            value="Submit"
            className="bg-white px-2 py-1 mt-3 rounded"
          />
        </form>
      </div>
    </div>
  );
};

export default AddTask;
