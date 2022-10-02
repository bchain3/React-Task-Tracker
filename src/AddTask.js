import { useState } from "react"

const AddTask = ({onAddTask}) => {

    const [text, setText] = useState('');
    const [day, setDay] = useState('');
    const [reminder, setReminder] = useState(false);

    const onSubmit = (e) => {
      e.preventDefault();
      onAddTask({text, day, reminder});

      setText('');
      setDay('');
      setReminder(false);
    };

    return (
      <div>
        <div className="card border-dark mb-3" style={{maxWidth: "30rem", margin: "auto"}}>
            <div className="card-body">
              <div className="form-group" onSubmit={onSubmit}>
                <div className="form-floating m-3">
                  <input type="text" className="form-control" id="taskName" value={text} onChange={(e) => setText(e.target.value)}/>
                  <label htmlFor="taskName">Task Name</label>
                </div>
                <div className="form-floating m-3">
                  <input type="text" className="form-control" id="deadline" value={day} onChange={(e) => setDay(e.target.value)}/>
                  <label htmlFor="deadline">Task Deadline</label>
                </div>

                <div className="form-check m-3">
                  <input 
                    className="form-check-input" 
                    type="checkbox" 
                    checked={reminder}
                    id="flexCheckDefault" 
                    value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)
                  }/>
                  <label className="form-check-label" htmlFor="flexCheckDefault">Reminder</label>
                </div>

                <div className="d-grid gap-2">
                  <button type="submit" className="btn btn-primary m-2" onClick={onSubmit}>Add Task</button>
                </div>
              </div>
            </div>
        </div>
      </div>
    )
}

export default AddTask