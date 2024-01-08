import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';
import axios from 'axios';
import { Link } from "react-router-dom";
import './home.css'

export default function Home() {

    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        loadTasks();
    }, []);

    const loadTasks = async () => {
        try {
            const response = await axios.get("http://localhost:8080/task/allTasks");
            setTasks(response.data);
        } catch (error) {
            console.error('Error loading tasks:', error);
        }
    };

    const deleteTask = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/task/delete/${id}`);
            loadTasks();
        } catch (error) {
            console.error('Error deleting task:', error);
        }
    }

    return (
        <div className="container mt-4">
            <div className="py-4">
                <Table striped bordered hover variant="dark">
                    <thead className="dark">
                        <tr>
                            <th>#</th>
                            <th>Task Name</th>
                            <th>Status</th>
                            <th>Updated On</th>
                            <th>Due Date</th>
                            <th>Progress</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            tasks.map((task, index) => (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{task.title}</td>
                                    <td>{task.status}</td>
                                    <td>{task.updatedOn.substring(0,10) + " at " + task.updatedOn.substring(11)}</td>
                                    <td>{task.dueDate}</td>
                                    <td>{task.progress}</td>
                                    <td>
                                        <Link className="btn btn-outline-primary mx-2" to={`/edittask/${task.id}`}>Edit</Link>
                                        <button className="btn btn-danger mx-2" onClick={() => deleteTask(task.id)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            </div>
        </div>
    );
}
