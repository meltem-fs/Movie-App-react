import React from "react";

const Login = () => {
  return (
    <div className="d-flex justify-content-center"
    style={{
      height:"94vh"
    }}
    >
      <div className="w-50 ">
        <img
          className="w-100"
          src={"https://picsum.photos/800/800"}
          alt="sample-movie"
          style={{
            height:"94vh"
          }}
        />
      </div>
      <div className="register-form w-50">
        <h1 className="form-title display-3 ">Login</h1>
        <form id="register" className="w-75 mx-auto">
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter your email adress.."
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="password"
              placeholder="Enter your password.."
              required
            />
          </div>
          <div className="link">Forgot Password?</div>
          <input
            type="submit"
            className="btn btn-primary form-control"
            value="Login"
          />
          <button className="btn btn-primary form-control">
            Continue with Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
