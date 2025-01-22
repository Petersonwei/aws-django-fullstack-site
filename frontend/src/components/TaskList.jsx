import React, { useState, useEffect } from 'react';
import axios from 'axios';


const TaskList = () => {

    const [tasks, setTasks] = useState([]);
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
            const res = await axios.get('http://localhost:8000/tasks');
            setTasks(res.data);
        } catch (err) {
            console.error('Error fetching tasks:', err);
            setErr('Failed to fetch data from server');
        }
    };

    return (
        <div>
            <h1>Task List</h1>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        <span>{task.title}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TaskList;