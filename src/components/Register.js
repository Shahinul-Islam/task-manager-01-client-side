import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthProvider";

const Register = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();
  const { createUser, handleGoogleSignin } = useContext(AuthContext);
  const handleSignInForm = (event) => {
    event.preventDefault();
    const form = event.target;
    const userName = form.fullName.value;
    const userEmail = form.email.value;
    const userPassword = form.password.value;
    console.log(userName, userEmail, userPassword);
    createUser(userEmail, userPassword)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        navigate("/admin");
        // ...
      })
      .catch((error) => {
        // const errorCode = error.code;
        // const errorMessage = error.message;
        setErrorMessage(
          error.message
            .split("(")[1]
            .split("/")[1]
            .split(")")[0]
            .split("-")
            .join(" ")
        );
        // ..
      });
    form.reset();
  };

  const signInUsingGoogle = () => {
    handleGoogleSignin()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate("/admin");
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <div>
      <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col w-full mt-10 md:mt-0">
        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
          Sign Up
        </h2>
        <form onSubmit={handleSignInForm}>
          <div className="relative mb-4">
            <label for="fullName" className="leading-7 text-sm text-gray-600">
              Full Name
            </label>
            <input
              required
              type="text"
              name="fullName"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>

          <div className="relative mb-4">
            <label for="email" className="leading-7 text-sm text-gray-600">
              Email
            </label>
            <input
              required
              type="email"
              name="email"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <div className="relative mb-4">
            <label for="password" className="leading-7 text-sm text-gray-600">
              Password
            </label>
            <input
              required
              type="password"
              name="password"
              className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
            />
          </div>
          <p className="text-red-700 text-center uppercase">{errorMessage}</p>
          <input
            type="submit"
            value="Sign Up"
            className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg w-full"
          />
        </form>
        <button
          onClick={signInUsingGoogle}
          className="text-white my-3 bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
        >
          Continue with Google
        </button>
        <p className="text-xs text-gray-500 mt-3">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-800">
            Please Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
