import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

export default function EditTasks() {
  let navigate = useNavigate();

  const {id} = useParams();
  
  
  const [user, setUser] = useState({
    title: "",
    status: "",
    updatedOn: new Date().toJSON(),
    dueDate: "",
    progress:"",
  });

  const { title, status,updatedOn, dueDate, progress } = user;

  const onInputChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(()=>{
    loadUsers();
  },[])
  const onSubmit = async (e) => {
    e.preventDefault();   
    await axios.put("http://localhost:8080/task/update", user);
    navigate("/");
  };

  const loadUsers = async ()=>{
    const result = await axios.get(`http://localhost:8080/task/id/${id}`);
    setUser(result.data);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded p-4 mt-2 shadow">
          <h2 className="text-center m-4">Edit Task</h2>

          <form onSubmit={(e) => onSubmit(e)}>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Task 
              </label>
              <input
                type={"text"}
                className="form-control"
                placeholder="Enter Task"
                name="title"
                value={title}
                onChange={(e) => onInputChange(e)}
              />
            </div>
            <div className="mb-3">
              <label htmlFor="status" className="form-label">
                Status
              </label>
              <select className="form-control" id="status" name="status"
                  value={status}
                  onChange={(e) => onInputChange(e)} required>
                  <option value="PENDING">In Progress</option>
                  <option value="COMPLETED">Completed</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="dueDate" className="form-label">
                DueDate
              </label>
              <input
                type={"date"}
                className="form-control"
                name="dueDate"
                value={dueDate}
                onChange={(e) => onInputChange(e)}
                required
              />
            </div>
            
            <div className="mb-3">
              <label htmlFor="progress" className="form-label">
                Progress
              </label>
              <input
                type="number" min="0" max="100" placeholder="Enter progress"
                className="form-control"
                name="progress"
                value={progress}
                onChange={(e) => onInputChange(e)}
              />
              <div className="input-group-append">
                  <span className="input-group-text">%</span>
              </div>
            </div>

            
            <button type="submit" className="btn btn-outline-primary">
              Submit
            </button>
            <Link className="btn btn-outline-danger mx-2" to="/">
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}