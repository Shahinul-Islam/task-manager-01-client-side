import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthProvider";

const CompletedTask = () => {
  const { user } = useContext(AuthContext);
  const [loader, setLoader] = useState(true);

  console.log(user);
  const [completedTask, setCompletedTask] = useState([]);
  useEffect(() => {
    // url = https://adminui-app-server.vercel.app/completed
    fetch(`https://adminui-app-server.vercel.app/completed?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setCompletedTask(data));
    setLoader(false);
  }, []);
  const handleDeleteBtn = (id) => {
    console.log("delete btn clicked", id);
    const agree = window.confirm("do you want to delete this");
    if (agree) {
      // console.log("delete this with id ", user._id);
      fetch(`https://adminui-app-server.vercel.app/task/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          const remainingTask = completedTask.filter(
            (singleTask) => singleTask._id !== id
          );
          setCompletedTask(remainingTask);
        });
    }
  };
  return (
    <>
      {loader ? (
        <p>Loading...</p>
      ) : (
        <>
          <div>
            <h2>this is for completed task</h2>
            <table className="min-w-full mb-10">
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
                {completedTask &&
                  completedTask.map((completeTask) => (
                    <tr className="bg-gray-100 border-b">
                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        {completeTask.taskMessage}
                      </td>

                      <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                        <button
                          onClick={() => handleDeleteBtn(completeTask._id)}
                          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 mx-2 border border-blue-500 hover:border-transparent rounded"
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <Link
              to="/my-tasks"
              className="bg-transparent mt-12 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 mx-2 border border-blue-500 hover:border-transparent rounded"
            >
              Not Completed
            </Link>
          </div>
        </>
      )}
    </>
  );
};

export default CompletedTask;
