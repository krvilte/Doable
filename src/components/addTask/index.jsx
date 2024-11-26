import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { addTask } from "../../redux/slices/taskSlice";

const AddNewTask = ({ status }) => {
  const dispatch = useDispatch();

  const handleSubmit = () => {
    const newTask = {
      id: nanoid(),
      text: "Add your task :)",
      status: status,
      completed: false,
    };

    dispatch(addTask(newTask));
  };

  return (
    <button
      onClick={handleSubmit}
      className="text-left text-base w-full px-4 py-1 rounded text-black bg-transparent hover:bg-gray-200"
    >
      + Add Task
    </button>
  );
};

export default AddNewTask;
