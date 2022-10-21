import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Login = () => {
  const [error, setError] = useState();
  const { signIn, setLoading } = useContext(AuthContext);
  let location = useLocation();
  const nevigate = useNavigate();

  let from = location.state?.from?.pathname || "/";

  const handleSignIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        form.reset();
        if (user.emailVerified) {
          nevigate(from, { replace: true });
        } else {
          toast.error('Your email is not verified, please verify email');
        }


        console.log(user);
      })
      .catch((e) => {
        console.error(e);
        setError(e.message);
      })
      .finally(() => {
        setLoading(false)
      })
  };
  return (
    <div className="p-20  flex flex-col items-center">
      <form onSubmit={handleSignIn} className="p-10 shadow-2xl w-[450px] ">
        <p className="text-center text-3xl font-regular">Login</p>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
        </div>
        <div className="text-red-500">{error}</div>
        <div className="form-control mt-6">
          <button className="btn bg-btn-color text-black border-btn-color hover:bg-orange-300 hover:border-orange-300">
            Login
          </button>
        </div>
        <div className="text-center">
          <small className="mr-2">New to Ema-john?</small>
          <Link
            to="/signup"
            className="label-text-alt link link-hover text-orange-400"
          >
            Create New Account
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
