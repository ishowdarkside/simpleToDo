import Task from "./Task";
export default function TaskContainer({ tasks, onFinishTask, onRemoveTask }) {
  return (
    <div className="task-container">
      {tasks.map((task, i) => (
        <Task
          task={task}
          taskNum={i + 1}
          key={crypto.randomUUID()}
          onFinishTask={onFinishTask}
          onRemoveTask={onRemoveTask}
        />
      ))}
    </div>
  );
}
