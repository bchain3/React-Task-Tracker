const Task = ({ task, onDelete, onToggle }) => {
    return (
      <div>
          <div className={`card border-${task.reminder ? 'success' : 'dark'} mb-3`} style={{maxWidth: "30rem", margin: "auto"}} onDoubleClick={() => onToggle(task.id)}>
              <div className="card-header">{task.id}</div>
              <div className="card-body">
                  <h4 className="card-title">{task.text}</h4>
                  <p className="card-text">{task.day}</p>
              </div>
              <div className="d-grid gap-2">
                  <button className={`btn btn-${task.reminder ? 'success' : 'primary'} m-2`} onClick={() => onDelete(task.id)}>Mark as complete</button>
              </div>
          </div>
      </div>
    )
}

export default Task