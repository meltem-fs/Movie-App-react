import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand text-light">MOVİE APP</a>
    <form className="d-flex" role="search">
      <button className="btn btn-outline-success" type="submit">Login</button>
      <button className="btn btn-outline-success" type="submit">Register</button>
    </form>
  </div>
</nav>
    </div>
  )
}

export default Navbar