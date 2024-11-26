import Layout from "../../components/layout";
import AddNewTask from "../../components/addTask";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteTask,
  toggleComplete,
  toggleEdit,
} from "../../redux/slices/taskSlice";
import { useState, useEffect } from "react";
import EditTaskForm from "../../components/editTaskForm";

const Board = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.items);
  const [showDropdown, setShowDropdown] = useState(null);

  const handleDropdown = (taskId) => {
    if (showDropdown === taskId) {
      setShowDropdown(null);
    } else {
      setShowDropdown(taskId);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleEdit = (taskId) => {
    dispatch(toggleEdit(taskId));
    setShowDropdown(null);
  };
  return (
    <Layout>
      <main>
        <div className="m-4">
          <h1 className="text-xl font-semibold">Eisenhower Matrix</h1>

          <div className="mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            <div className="p-4 m-auto lg:mr-0 w-full w-full max-w-[460px] rounded border border-black/50 shadow-sm">
              <h2 className="text-lg pb-2 font-semibold border-b-[1px] border-black/20">
                DO FIRST
              </h2>
              <ol className="flex flex-col py-2 list-decimal">
                {tasks
                  .filter((item) => item.status === "do")
                  .map((item) =>
                    item.isEditing ? (
                      <EditTaskForm key={item.id} taskId={item.id} />
                    ) : (
                      <li
                        key={item.id}
                        className="relative flex justify-between list-none px-4 py-1 rounded cursor-pointer text-black hover:bg-gray-200"
                      >
                        <div className="flex items-center gap-x-2">
                          <input
                            id="default-checkbox"
                            onClick={() => dispatch(toggleComplete(item.id))}
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600"
                          />
                          <span
                            className={item.completed ? "line-through " : ""}
                          >
                            {item.text}
                          </span>
                        </div>

                        <div className="flex gap-x-2 items-center ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-5 h-5"
                            onClick={() => {
                              handleDropdown(item.id);
                            }}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                            />
                          </svg>

                          {showDropdown === item.id && (
                            <div className="absolute top-full mt-2 right-0 bg-white flex flex-col border border-gray-300 rounded shadow-lg z-10">
                              <button
                                onClick={() => handleEdit(item.id)}
                                className="w-full px-4 py-1 text-left hover:bg-gray-100 transition-colors rounded-t"
                              >
                                Edit
                              </button>
                              <button
                                onClick={() => dispatch(deleteTask(item.id))}
                                className="w-full px-4 py-1 text-left hover:bg-gray-100 transition-colors rounded-b"
                              >
                                Delete
                              </button>
                            </div>
                          )}
                        </div>
                      </li>
                    )
                  )}
              </ol>

              <AddNewTask status={"do"} />
            </div>
            <div className="p-4 m-auto lg:ml-0 w-full max-w-[460px] rounded border border-black/50 shadow-sm">
              <h2 className="text-lg pb-2 font-semibold border-b-[1px] border-black/20">
                SCHEDULE
              </h2>
              <ol className="flex flex-col py-2 list-decimal">
                {tasks
                  .filter((item) => item.status === "schedule")
                  .map((item) =>
                    item.isEditing ? (
                      <EditTaskForm key={item.id} taskId={item.id} />
                    ) : (
                      <li
                        key={item.id}
                        className="relative flex justify-between list-none px-4 py-1 rounded cursor-pointer text-black hover:bg-gray-200"
                      >
                        <div className="flex items-center gap-x-2">
                          <input
                            id="default-checkbox"
                            onClick={() => dispatch(toggleComplete(item.id))}
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600"
                          />
                          <span
                            className={item.completed ? "line-through " : ""}
                          >
                            {item.text}
                          </span>
                        </div>

                        <div className="flex gap-x-2 items-center ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-5 h-5"
                            onClick={() => {
                              handleDropdown(item.id);
                            }}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                            />
                          </svg>

                          {showDropdown === item.id && (
                            <div className="absolute top-full mt-2 right-0 bg-white flex flex-col border border-gray-300 rounded shadow-lg z-10">
                              <button
                                onClick={() => handleEdit(item.id)}
                                className="w-full px-4 py-1 text-left hover:bg-gray-100 transition-colors rounded-t"
                              >
                                Edit
                              </button>
                              <button
                                onClick={() => dispatch(deleteTask(item.id))}
                                className="w-full px-4 py-1 text-left hover:bg-gray-100 transition-colors rounded-b"
                              >
                                Delete
                              </button>
                            </div>
                          )}
                        </div>
                      </li>
                    )
                  )}
              </ol>

              <AddNewTask status={"schedule"} />
            </div>
            <div className="p-4 m-auto lg:mr-0 w-full w-full max-w-[460px] rounded border border-black/50 shadow-sm">
              <h2 className="text-lg pb-2 font-semibold border-b-[1px] border-black/20">
                DELEGATE
              </h2>
              <ol className="flex flex-col py-2 list-decimal">
                {tasks
                  .filter((item) => item.status === "delegate")
                  .map((item) =>
                    item.isEditing ? (
                      <EditTaskForm key={item.id} taskId={item.id} />
                    ) : (
                      <li
                        key={item.id}
                        className="relative flex justify-between list-none px-4 py-1 rounded cursor-pointer text-black hover:bg-gray-200"
                      >
                        <div className="flex items-center gap-x-2">
                          <input
                            id="default-checkbox"
                            onClick={() => dispatch(toggleComplete(item.id))}
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600"
                          />
                          <span
                            className={item.completed ? "line-through " : ""}
                          >
                            {item.text}
                          </span>
                        </div>

                        <div className="flex gap-x-2 items-center ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-5 h-5"
                            onClick={() => {
                              handleDropdown(item.id);
                            }}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                            />
                          </svg>

                          {showDropdown === item.id && (
                            <div className="absolute top-full mt-2 right-0 bg-white flex flex-col border border-gray-300 rounded shadow-lg z-10">
                              <button
                                onClick={() => handleEdit(item.id)}
                                className="w-full px-4 py-1 text-left hover:bg-gray-100 transition-colors rounded-t"
                              >
                                Edit
                              </button>
                              <button
                                onClick={() => dispatch(deleteTask(item.id))}
                                className="w-full px-4 py-1 text-left hover:bg-gray-100 transition-colors rounded-b"
                              >
                                Delete
                              </button>
                            </div>
                          )}
                        </div>
                      </li>
                    )
                  )}
              </ol>

              <AddNewTask status={"delegate"} />
            </div>
            <div className="p-4 m-auto lg:ml-0 w-full max-w-[460px] rounded border border-black/50 shadow-sm">
              <h2 className="text-lg pb-2 font-semibold border-b-[1px] border-black/20">
                ELEMINATE
              </h2>
              <ol className="flex flex-col py-2 list-decimal">
                {tasks
                  .filter((item) => item.status === "delete")
                  .map((item) =>
                    item.isEditing ? (
                      <EditTaskForm key={item.id} taskId={item.id} />
                    ) : (
                      <li
                        key={item.id}
                        className="relative flex justify-between list-none px-4 py-1 rounded cursor-pointer text-black hover:bg-gray-200"
                      >
                        <div className="flex items-center gap-x-2">
                          <input
                            id="default-checkbox"
                            onClick={() => dispatch(toggleComplete(item.id))}
                            type="checkbox"
                            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600"
                          />
                          <span
                            className={item.completed ? "line-through " : ""}
                          >
                            {item.text}
                          </span>
                        </div>

                        <div className="flex gap-x-2 items-center ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-5 h-5"
                            onClick={() => {
                              handleDropdown(item.id);
                            }}
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                            />
                          </svg>

                          {showDropdown === item.id && (
                            <div className="absolute top-full mt-2 right-0 bg-white flex flex-col border border-gray-300 rounded shadow-lg z-10">
                              <button
                                onClick={() => handleEdit(item.id)}
                                className="w-full px-4 py-1 text-left hover:bg-gray-100 transition-colors rounded-t"
                              >
                                Edit
                              </button>
                              <button
                                onClick={() => dispatch(deleteTask(item.id))}
                                className="w-full px-4 py-1 text-left hover:bg-gray-100 transition-colors rounded-b"
                              >
                                Delete
                              </button>
                            </div>
                          )}
                        </div>
                      </li>
                    )
                  )}
              </ol>

              <AddNewTask status={"delete"} />
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Board;
