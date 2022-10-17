import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/UserContext";

const Register = () => {
  const { createUser, signIn } = useContext(AuthContext);
  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const cpassword = form.cPassword.value;
    //user create
    createUser(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        form.reset();
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
    //userlogin
    signIn(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                className="input input-bordered focus:border-none"
              />
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="Your email"
                className="input input-bordered focus:border-none"
              />
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                required
                placeholder="Enter password"
                className="input input-bordered focus:border-none"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Confirm password</span>
              </label>
              <input
                type="password"
                name="cPassword"
                placeholder="Confirm password"
                required
                className="input input-bordered focus:border-none"
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Register</button>

              <label className="label">
                <span className="label-text-alt">
                  Already have an account?{" "}
                  <Link
                    className="font-bold text-base text-primary link link-hover"
                    to="/login"
                  >
                    Log In
                  </Link>
                </span>
              </label>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
