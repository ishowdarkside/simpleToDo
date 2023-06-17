export default function Stats({ tasks }) {
  const tasksInProgress = tasks.filter((el) => !el.complete).length;
  const tasksComplete = tasks.filter((el) => el.complete).length;
  return (
    <footer className="stats">
      <p>Total Tasks: {tasks.length} ✔</p>
      <p>In progress: {tasksInProgress} 🕔</p>
      <p>COMPLETE: {tasksComplete} 👍</p>
    </footer>
  );
}
