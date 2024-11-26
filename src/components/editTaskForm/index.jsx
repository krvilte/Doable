import { useDispatch, useSelector } from "react-redux";
import { editTask } from "../../redux/slices/taskSlice";
import { useState, useRef, useEffect } from "react";

const EditTaskForm = ({ taskId }) => {
  const dispatch = useDispatch();
  const task = useSelector((state) =>
    state.tasks.items.find((item) => item.id === taskId)
  );
  const [text, setText] = useState(task.text);
  const inputRef = useRef(null);

  const saveTask = () => {
    dispatch(editTask({ id: task.id, text }));
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        saveTask();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [text]);

  const handleSubmit = (e) => {
    e.preventDefault();
    saveTask();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        onBlur={saveTask}
        autoFocus
        className="bg-transparent w-full px-4 py-1"
      />
    </form>
  );
};

export default EditTaskForm;
