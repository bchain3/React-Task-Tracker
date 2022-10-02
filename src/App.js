import { useState, useEffect } from "react"; // State to create app level state, Effect to load tasks when page is loaded

import Header from './components/Header';
import Tasks from "./components/Tasks";
import AddTask from "./AddTask";

function App() {

  // const[nameOfState, function to update state]
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    let localTasks = getTasks();
    setTasks(localTasks);
  }, [])

  // we pass down state from app.js to all other files
  const deleteTask = (id) => {
    // removes from UI
    setTasks(tasks.filter((task) => task.id !== id));
   
    let localTasks = getTasks();
    localTasks.forEach((element, index) => {
      if(element.id === id) {
        //console.log(element.text);
        localTasks.splice(index, 1);
      }
    });
    localStorage.setItem('tasks', JSON.stringify(localTasks));
    setTasks(localTasks);
  }

  // setTasks is used to change state
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => 
      task.id === id ? {...task, reminder: !task.reminder} : task)
    );
  }

  const addTask = (task) => {
    let localTasks = getTasks();
    let id = {'id':localTasks.length};
    let tempTask = {...id, ...task};
    //console.log(tempTask);
    localTasks.push(tempTask);
    localStorage.setItem('tasks', JSON.stringify(localTasks));
    setTasks(localTasks);
  }


  // Local storage to store tasks

  const getTasks = () => {
    let localTasks;
    if(localStorage.getItem('tasks') == null) {
      //console.log('tasks is null');
      localTasks = [];
    }
    else {
      //console.log('tasks has some data')
      localTasks = JSON.parse(localStorage.getItem('tasks'));
    }
    return localTasks;
  }

  // React stuff happening below
  return (
    <div className="App">
      <Header title="Task Tracker"/>
      <AddTask onAddTask={addTask}/>
      <Tasks tasks={tasks} onDelete={deleteTask} onToggle ={toggleReminder}/>
    </div>
  );
}

export default App;
