import React, { useContext, useState } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Register = () => {
  const { createUser, updateUserProfile, verifyEmail } = useContext(AuthContext);
  const [accepted, setAccepted] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const photoURL = form.photoURL.value;
    const password = form.password.value;
    /* console.log(name, email, photoURL, password); */

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        form.reset();
        updateUsetProfileInfo(name, photoURL);
        sendEmailForVerification();
        toast.success('Please verify your email!');
        console.log(user);
      })
      .catch((error) => console.error(error));
  };

  const updateUsetProfileInfo = (name, photoURL) => {
    const profile = {
      displayName: name,
      photoURL: photoURL,
    }
    updateUserProfile(profile)
      .then(() => { })
      .then(e => console.error(e))

  }

  const handleAccepted = event => {
    setAccepted(event.target.checked);
  }

  const sendEmailForVerification = () => {
    verifyEmail()
      .then(() => { })
      .catch(e => console.error(e))
  }

  return (
    <div className="p-20  flex flex-col items-center">
      <form onSubmit={handleSubmit} className="p-10 shadow-2xl w-[450px] ">
        <p className="text-center text-3xl font-regular">Sign Up</p>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Your name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Photo URL</span>
          </label>
          <input
            type="text"
            name="photoURL"
            placeholder="Photo Url"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="Your email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mb-3">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="Your password"
            className="input input-bordered"
            required
          />
        </div>
        <div onClick={handleAccepted}>
          <input type="checkbox" id="terms" name="terms" value="terms" />
          <label htmlFor="terms"> {<>
            Accept <Link to='/terms' className="underline text-blue-500">Terms and Conditions</Link>
          </>}</label>
        </div>

        <div className="form-control mt-6">
          <button className="btn bg-btn-color text-black border-btn-color bg-orange-300 border-orange-300   hover:bg-orange-500 hover:border-orange-500" disabled={!accepted}>
            Sign Up
          </button>
        </div>
        <div className="text-center">
          <small className="mr-2">Already have an account?</small>
          <Link
            to="/login"
            className="label-text-alt link link-hover text-orange-400"
          >
            Please Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
