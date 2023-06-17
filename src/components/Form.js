import { useState } from "react";
import Button from "./Button";
export default function Form({ onSubmitTask }) {
  const [taskContent, setTaskContent] = useState("");
  return (
    <form
      className="form-task"
      onSubmit={(e) => {
        e.preventDefault();
        if (!taskContent) return;
        const task = {
          content: taskContent,
          complete: false,
          id: crypto.randomUUID(),
        };
        onSubmitTask(task);
        setTaskContent("");
      }}
    >
      <input
        type="text"
        placeholder="What's today on your list?"
        value={taskContent}
        onChange={(e) => setTaskContent(e.target.value)}
      />
      <Button>Submit Task</Button>
    </form>
  );
}
