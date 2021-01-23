import { useState } from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

const App = () => {
  const [showAddTask, setShowAddtask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "23rd Jan 2021",
      reminder: true,
    },
    {
      id: 2,
      text: "Meeting at School",
      day: "22nd Jan 2021",
      reminder: true,
    },
    {
      id: 3,
      text: "Go out for a movie",
      day: "21st Jan 2021",
      reminder: false,
    },
  ]);

  // add task
  const addtask = (task) => {
    const id = Math.floor(Math.random()*1000)+1;
    const newTask = {id, ...task}
    setTasks([...tasks, newTask]);
  }

  // delete task
  const deleteHandler = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  // toggle reminder
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };
  return (
    <div className="container">
      <Header title="Task Tracker" showAdd={() => setShowAddtask(!showAddTask)} showAddTask={showAddTask} />
      {showAddTask && <AddTask onAdd={addtask} />}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteHandler} onToggle={toggleReminder} /> : 'No Task to Show'}
      
    </div>
  );
};

export default App;
