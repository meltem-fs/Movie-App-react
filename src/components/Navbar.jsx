import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div style={{height:"6vh"}} >
      <nav className="navbar bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand text-light">MOVİE APP</a>
          <form className="d-flex" role="search">
            <button
              onClick={() => navigate("/login")}
              className="btn btn-outline-info"
              type="submit"
            >
              Login
            </button>
            <button
              onClick={() => navigate("/register")}
              className="btn btn-outline-info"
              type="submit"
            >
              Register
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default Navbar