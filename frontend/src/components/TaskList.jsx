import { useState, useEffect } from 'react';
import axios from 'axios';


const TaskList = () => {

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [err, setErr] = useState(null);

    // useEffect is a React hook that runs a function after the component mounts.
    // Inside the useEffect hook, the function fetchTasks() is called.
    // Empty array as the 2nd argument means that this effect will run only once.
    useEffect(() => {
        fetchTasks();
    }, []);


    // Defines an asynchronous function called fetchTasks using an arrow function.
    // Declaring it as async allows the function to use the await keyword inside.
    // The function makes an HTTP GET request to the server to fetch the tasks.
    // The await keyword pauses the function execution until
    // the request completes and the response is received.
    // If the request is successful, res will contain the HTTP response object.
    // If an error occurs during the request, the catch will handle the error.
    const fetchTasks = async () => {
        try {
            const res = await axios.get('http://localhost:8000/api/tasks/');
            setTasks(res.data);
        } catch (err) {
            console.error('Error fetching tasks:', err);
            setErr('Failed to fetch data from server');
        }
    };

    // This function adds a new task to the task list.
    // It sends an HTTP POST request to the server.
    // This request includes a JSON object { title: newTask } as the data payload.
    const addTask = async () => {
        // Returns early and does not add a new task, if newTask is empty.
        if (!newTask) return;

        try {
            const res = await axios.post('http://localhost:8000/api/tasks/', {
                title: newTask,
                description: newTask,  // Using the title as description for now
                completed: false,
            });

            setTasks([...tasks, res.data]);
            setNewTask('');
        } 
        catch (err) {
            console.log('Error creating task: ', err);
            setErr('Failed to create task');
        }
    };

    const deleteTask = async (id) => {
        try {
            await axios.delete(`http://localhost:8000/api/tasks/${id}/`);
            setTasks(tasks.filter((t) => t.id !== id));
        } catch (err) {
            console.log('Error deleting task: ', err);
            setErr('Failed to delete task');
        }
    };

    const toggleComplete = async (task) => {
        try {
            const res = await axios.patch(`http://localhost:8000/api/tasks/${task.id}/`, {
                completed: !task.completed,
            });
            setTasks(tasks.map((t) => (t.id === task.id ? res.data : t)));
        } catch (err) {
            console.log('Error updating task: ', err);
            setErr('Failed to update task');
        }
    };

    return (
        <div>
            <h1>Task List</h1>
            {err && <div style={{ color: 'red', marginBottom: '1rem' }}>{err}</div>}

            <div>
                <input 
                    name="newTask"
                    type="text" 
                    value={newTask} 
                    onChange={(e) => setNewTask(e.target.value)} 
                    placeholder="Add a new task..."
                />
                <button 
                    onClick={addTask}>
                    Add Task
                </button>
            </div>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <span 
                            style={{ textDecoration: task.completed 
                                ? 'line-through' 
                                : 'none' }} 
                                onClick={() => toggleComplete(task)}>
                            {task.title}
                        </span>
                        <button onClick={() => deleteTask(task.id)}>
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TaskList;