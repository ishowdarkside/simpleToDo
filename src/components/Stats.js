export default function Stats({ tasks }) {
  const tasksInProgress = tasks.filter((el) => !el.complete).length;
  const tasksComplete = tasks.filter((el) => el.complete).length;
  return (
    <footer className="stats">
      {tasks.length > 0 && tasksComplete !== tasks.length && (
        <>
          <p>Total Tasks: {tasks.length} ✔</p>
          <p>In progress: {tasksInProgress} 🕔</p>
          <p>COMPLETE: {tasksComplete} 👍</p>
        </>
      )}
      {tasks.length === 0 && (
        <h1 style={{ fontWeight: 500 }}>Start creating your list 🤗</h1>
      )}
      {tasks.length > 0 && tasks.length === tasksComplete ? (
        <h1 style={{ fontWeight: 500 }}>You are good to go!👍</h1>
      ) : null}
    </footer>
  );
}
