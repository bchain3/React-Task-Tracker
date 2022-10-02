import Task from "./Task";

const Tasks = ({ tasks, onDelete, onToggle }) => {

    // when dealing with objects you have to put obj in () inside .map(() => ({obj}))

    return (
      <>
        {tasks.map((task) => (
            <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}></Task>
        ))};
      </>
    )
}

export default Tasks