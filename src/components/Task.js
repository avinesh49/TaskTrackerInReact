import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
      <h3>
        {task.text}
        <FaTimes cursor="pointer" onClick={() => onDelete(task.id)} />
      </h3>
      <small>{task.day}</small>
    </div>
  );
};

export default Task;
