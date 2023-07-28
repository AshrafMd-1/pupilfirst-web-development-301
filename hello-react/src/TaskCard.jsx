import './TaskCard.css'

const TaskCard = (props) => {
    if (props.isCompleted === "true") {
        return (
            <div className='TaskItem'>
                <h2 className="text-xl font-bold mb-3">{props.title}</h2>
                <p>Completed on: {props.date}</p>
                <p>Assignee: {props.assignee}</p>
            </div>
        )
    } else {
        return (
            <div className='TaskItem'>
                <h2 className="text-xl font-bold mb-3">{props.title}</h2>
                <p>Due on: {props.date}</p>
                <p>Assignee: {props.assignee}</p>
            </div>
        )
    }
}

export default TaskCard