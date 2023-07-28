import './TaskCard.css'

const TaskCard = (props) => {
    if (props.completedAtDate) {
        return (
            <div className='TaskItem'>
                <h2 className="text-xl font-bold mb-3">{props.title}</h2>
                <p>Completed on: {props.completedAtDate}</p>
                <p>Assignee: {props.assigneeName}</p>
            </div>
        )
    } else {
        return (
            <div className='TaskItem'>
                <h2 className="text-xl font-bold mb-3">{props.title}</h2>
                <p>Due on: {props.dueDate}</p>
                <p>Assignee: {props.assigneeName}</p>
            </div>
        )
    }
}

export default TaskCard