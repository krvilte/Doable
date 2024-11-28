import { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  collection,
  deleteDoc,
  getDocs,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../config/firebase";
import {
  setTasks,
  deleteTask,
  toggleComplete,
  toggleEdit,
} from "../../redux/slices/taskSlice";
import EditTaskForm from "../../components/editTaskForm";

const TaskList = ({ status }) => {
  const dispatch = useDispatch();
  const [showDropdown, setShowDropdown] = useState(null);
  const tasks = useSelector((state) => state.tasks.items);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const fetchTask = async () => {
      const tasksSnapshot = await getDocs(collection(db, "tasks"));
      const tasksList = tasksSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      dispatch(setTasks(tasksList));
    };

    fetchTask();
  }, [dispatch]);

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

  const handleComplete = async (taskId, completed) => {
    try {
      await updateDoc(doc(db, "tasks", taskId), { completed: !completed });
      dispatch(toggleComplete(taskId, completed));
    } catch (error) {
      console.error("Error completing task: ", error);
    }
  };

  const handleEdit = (taskId) => {
    dispatch(toggleEdit(taskId));
    setShowDropdown(null); // Hide dropdown after editing
  };

  const handleDelete = async (taskId) => {
    try {
      await deleteDoc(doc(db, "tasks", taskId));
      dispatch(deleteTask(taskId));
    } catch (error) {
      console.log("Error while deleting task: ", error);
    }
  };

  return (
    <ol className="flex flex-col py-2 list-decimal">
      {tasks
        .filter((item) => item.status === status)
        .map((item) =>
          item.isEditing ? (
            <EditTaskForm key={item.id} taskId={item.id} />
          ) : (
            <li
              key={item.id}
              className="relative flex justify-between list-none px-4 p-1 rounded cursor-pointer text-black hover:bg-gray-200"
            >
              <div className="flex items-center gap-x-2">
                <input
                  id="default-checkbox"
                  onChange={() => handleComplete(item.id, item.completed)}
                  checked={item.completed}
                  type="checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded dark:bg-gray-700 dark:border-gray-600"
                />
                <span className={item.completed ? "line-through " : ""}>
                  {item.text}
                </span>
              </div>

              <div className="flex gap-x-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-6 h-6"
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
                  <div
                    ref={dropdownRef}
                    className="absolute top-full mt-2 right-0 bg-white flex flex-col border border-gray-300 rounded shadow-lg z-10"
                  >
                    {!item.completed && (
                      <button
                        onClick={() => handleEdit(item.id)}
                        className="w-full px-4 py-1 text-left hover:bg-gray-100 transition-colors rounded-t"
                      >
                        Edit
                      </button>
                    )}
                    <button
                      onClick={() => handleDelete(item.id)}
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
  );
};

export default TaskList;
