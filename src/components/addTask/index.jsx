import { useDispatch } from "react-redux";
import { addTask } from "../../redux/slices/taskSlice";
import { db } from "../../config/firebase";
import { collection, addDoc, Timestamp } from "firebase/firestore";

const AddNewTask = ({ status }) => {
  const dispatch = useDispatch();

  const newTask = {
    text: "Add your task :)",
    status: status,
    completed: false,
    isEditing: true,
    timestamp: Timestamp.now().toDate().toISOString(),
  };

  const handleAddTask = async () => {
    try {
      const docRef = await addDoc(collection(db, "tasks"), newTask);
      dispatch(addTask({ ...newTask, id: docRef.id }));
      console.log(docRef.id);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <button
      onClick={handleAddTask}
      className="text-left text-base w-full px-4 py-1 rounded text-black bg-transparent hover:bg-gray-200"
    >
      + Add Task
    </button>
  );
};

export default AddNewTask;
