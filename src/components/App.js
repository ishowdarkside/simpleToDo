import Header from "./Header";
import Form from "./Form";
import Stats from "./Stats";
import TaskContainer from "./TaskContainer";
import { useState } from "react";
export default function App() {
  const [tasks, setTasks] = useState([]);

  function handleTaskSubmit(task) {
    setTasks((currTasks) => [...currTasks, task]);
  }

  function handleFinishTask(updatedTask) {
    setTasks((currTasks) =>
      currTasks.map((task) =>
        task.id === updatedTask.id
          ? { ...updatedTask, complete: !task.complete }
          : task
      )
    );
  }

  function handleRemoveTask(removeTask) {
    setTasks((currTasks) =>
      currTasks.filter((task) => task.id !== removeTask.id)
    );
  }
  return (
    <div className="section">
      <div className="container">
        <Header />
        <Form onSubmitTask={handleTaskSubmit} />
        <TaskContainer
          tasks={tasks}
          onFinishTask={handleFinishTask}
          onRemoveTask={handleRemoveTask}
        />
        <Stats tasks={tasks} />
      </div>
    </div>
  );
}
