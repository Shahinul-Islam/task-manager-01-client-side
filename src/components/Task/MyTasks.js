import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const MyTasks = () => {
  const { user } = useContext(AuthContext);
  console.log(user.email);
  const [loader, setLoader] = useState(true);
  const navigate = useNavigate();
  const [tasks, setTasks] = useState([]);
  const handleCompleteBtn = (id) => {
    console.log("complete btn clicked", id);
    fetch(`https://adminui-app-server.vercel.app/task/${id}`, {
      method: "put",
      headers: {
        "content-type": "application/json",
      },
      // body: JSON.stringify(task),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        //more codes
      });
  };
  const handleUpdateBtn = (id) => {
    console.log("update btn clicked", id);
    navigate("/update-task");
  };

  useEffect(() => {
    fetch(`https://adminui-app-server.vercel.app/mytasks?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setTasks(data));
    setLoader(false);
  }, []);

  return (
    <div>
      <h2>this is for task list</h2>
      {loader ? (
        <p>Loading...</p>
      ) : (
        <table className="min-w-full">
          <thead className="bg-white border-b">
            <tr>
              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                Task
              </th>

              <th
                scope="col"
                className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
              >
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {tasks &&
              tasks.map((task) => (
                <tr className="bg-gray-100 border-b">
                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    {task.taskMessage}
                  </td>

                  <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                    <button
                      onClick={() => handleCompleteBtn(task._id)}
                      className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 mx-2 border border-blue-500 hover:border-transparent rounded"
                    >
                      Complete
                    </button>
                    <Link
                      to="/update-task"
                      state={task}
                      onClick={() => handleUpdateBtn(task._id)}
                      className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    >
                      Update
                    </Link>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default MyTasks;
