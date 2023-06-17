export default function Task({ task, taskNum, onFinishTask, onRemoveTask }) {
  return (
    <div class={task.complete ? "task task-complete" : "task"}>
      <div className="info-wrapper">
        <span>TASK {taskNum}</span>
        <h2 className={task.complete ? "task-finish" : ""}>{task.content}</h2>
      </div>
      <div className="button-wrapper">
        {!task.complete && (
          <button onClick={() => onFinishTask(task)}>✔</button>
        )}
        <button onClick={() => onRemoveTask(task)}>❌</button>
      </div>
    </div>
  );
}
