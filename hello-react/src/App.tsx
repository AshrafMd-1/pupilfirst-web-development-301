import React from "react";
import TaskCard from "./TaskCard.tsx";

function App() {
  return (
    <div className="page">
      <header>
        <h1>Smarter Tasks</h1>
        <p>
          <span>Project: </span> Graduation Final Year Project (Revamp College
          Website)
        </p>
      </header>
      <main className="main">
        <div className="tasks">
          <h1>Pending</h1>
          <TaskCard
            title="Build the website with static content"
            dueDate="10th April"
            assigneeName="Rohit S"
            completedAtDate=""
          />
          <TaskCard
            title="Add blog"
            dueDate="22nd March"
            assigneeName="Rohit M"
            completedAtDate=""
          />
          <div className="new-task">
            <p>➕ New task</p>
          </div>
        </div>
        <div className="tasks">
          <h1>Done</h1>
          <TaskCard
            title="Design the mockup"
            completedAtDate="10th March"
            assigneeName="Rohit S"
            dueDate=""
          />
          <TaskCard
            title="Get approval from principal"
            completedAtDate="20th April"
            assigneeName="Ajay S"
            dueDate=""
          />
        </div>
      </main>
    </div>
  );
}

export default App;
