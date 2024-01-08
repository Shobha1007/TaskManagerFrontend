import React from 'react'
import { Link } from 'react-router-dom'
// import { Link } from "react-router-dom";
import './navbar.css'
export default function Navbar(){
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" to="/">
            TASK MANAGER
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <Link className="btn btn-outline-light" to="/addtask">
            Add Task
          </Link>
        </div>
      </nav>

        </div>
    )
}