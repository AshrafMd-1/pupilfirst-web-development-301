import TaskCard from "./TaskCard.jsx";

function App() {
    return (
        <div className="page">
            <header>
                <h1>Smarter Tasks</h1>
                <p><span>Project: </span> Graduation Final Year Project (Revamp College Website)</p>
            </header>
            <main className="main">
                <div className="tasks">
                    <h1>Pending</h1>
                    <TaskCard title="Build the website with static content" date="10th April" assignee="Rohit S"
                              isCompleted="false"/>
                    <TaskCard title="Add blog" date="22nd March" assignee="Rohit M" isCompleted="false"/>
                    <div className="new-task">
                        <p>➕ New task</p>
                    </div>
                </div>
                <div className="tasks">
                    <h1>Done</h1>
                    <TaskCard title="Design the mockup" date="10th March" assignee="Rohit S" isCompleted="true"/>
                    <TaskCard title="Get approval from principal" date="20th April" assignee="Ajay S"
                              isCompleted="true"/>
                </div>

            </main>
        </div>
    )
}

export default App
