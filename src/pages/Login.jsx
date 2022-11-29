import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signIn } from "../auth/firebase";
import { forgotPassword, signUpProvider } from "../auth/firebase";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  console.log("email :>> ", email);
  console.log("password", password);

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(email, password, navigate);
  };
  const handleGoogle = () => {
    signUpProvider(navigate);
  };

  return (
    <div
      className="d-flex justify-content-center login  "
      style={{
        maxHeight: "88vh",
      }}
    >
      <div
        className="img w-50  d-none d-md-block "
        style={{
          height: "110vh",
        }}
      >
        <img
          src={"https://picsum.photos/200"}
          alt=""
          className="w-100 "
          style={{
            height: "500",
          }}
        />
      </div>

      <div className="form w-50  ">
        <h1 className="display-3 text-danger">Login</h1>
        <form onSubmit={handleSubmit} className="w-75 mx-auto fs-2">
          <div className="mb-3 mx-auto">
            <label htmlFor="exampleInputEmail1" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter your email adress.."
              value={email || ""}
              onChange={(e) => setEmail(e.target.value)}
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Enter your email password.."
              value={password || ""}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div
            style={{
              color: "red",
              textDecoration: "none",
            }}
            onClick={() => forgotPassword(email)}
          >
            Forgot Password?
          </div>
          <br />
          <button type="submit" className="btn btn-danger w-100">
            Login
          </button>

          <br />
          <button
            onClick={handleGoogle}
            type="button"
            className="btn btn-danger w-100"
          >
            Continue with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
