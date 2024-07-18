import React, { useState } from "react";
import kiwify_logo from "../../assets/vetor.png";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log(formData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform validation checks
    const errors = {};
    if (!formData.email) {
      errors.email = "esse campo é obrigatorio";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "O email deve ser um email valido";
    }
    if (!formData.password) {
      errors.password = "esse campo é obrigatorio";
    } else if (formData.password.length < 8) {
      errors.password = "Password must be at least 8 characters long";
    }

    // If there are errors, set the state and return
    if (Object.keys(errors).length) {
      setErrors(errors);
      return;
    }

    // Submit the form data
    console.log("Submitting form data:", formData);
    setErrors({});
  };
  return (
    <>
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div>
          {/* logo and label*/}
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <img
              src={kiwify_logo}
              alt="Workflow"
              className="mx-auto h-12 w-auto"
            />
            <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
              Logue com sua conta
            </h2>
            <p className="mt-2 text-center text-base leading-5 text-gray-600">
              ou{" "}
              <Link to="/">
                <span className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                  crie uma
                </span>
              </Link>
            </p>
          </div>
          {/* Login Form*/}
          <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <form
              className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10"
              onSubmit={handleSubmit}
            >
              {/* Email*/}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-5 mb-1 text-gray-700"
                >
                  E-mail
                </label>
                <div>
                  <input
                    type="text"
                    autocomplete="username"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`form-input block py-2 px-3 border ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    } rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full`}
                  ></input>
                </div>
                <div>
                  {errors.email && (
                    <div className="text-xs text-red-500">{errors.email}</div>
                  )}
                </div>
              </div>
              {/* Pawwrord*/}
              <div className="mt-6">
                <label
                  for="password"
                  className="block text-sm font-medium leading-5 text-gray-700"
                >
                  Password
                </label>
                <div>
                  <input
                    type="password"
                    autocomplete="current-password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className={`form-input block py-2 px-3 border ${
                      errors.password ? "border-red-500" : "border-gray-300"
                    } rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full`}
                  ></input>
                  <div>
                    {errors.password && (
                      <div className="text-red-500 text-xs mt-1">
                        <div>{errors.password}</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {/* Forgot password*/}
              <div className="mt-2 flex items-center justify-end">
                <div className="text-sm leading-5">
                  <a
                    href="/"
                    className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150"
                  >
                   Esqueceu sua senha?
                  </a>
                </div>
              </div>
              {/* Login button*/}
              <div className="mt-6">
                <span className="block w-full rounded-md shadow-sm">
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                  >
                    Entrar
                  </button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
