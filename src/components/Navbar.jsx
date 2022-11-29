import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { logOut } from "../auth/firebase";
import { AuthContext } from "../context/AuthContextProvider";

const Navbar = () => {
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);
  return (
    <div className="justify-content-center" style={{ height: "5rem" }}>
      <nav
        className="navbar text-center"
        style={{ backgroundImage: "linear-gradient(to right, red , yellow)" }}
      >
        <div className="container-fluid">
          <Link
            style={{
              textDecoration: "none",
              fontSize: "3rem",
              color: "yellow",
            }}
            to="/"
          >
            Movie App
          </Link>
          {/* <p>Welcome To My Movie Page</p> */}
          <form className="d-flex m-1" role="search">
            {currentUser ? (
              <>
                <h5 className="mt-3">{currentUser?.displayName}</h5>

                <button
                  onClick={() => logOut()}
                  className="btn btn-outline-danger m-2 "
                  type="submit"
                >
                  Logaut
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => navigate("/login")}
                  className="btn btn-outline-danger m-2 "
                  type="submit"
                >
                  Login
                </button>
                <button
                  onClick={() => navigate("/register")}
                  className="btn btn-outline-danger m-2"
                  type="submit"
                >
                  Register
                </button>
              </>
            )}
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
