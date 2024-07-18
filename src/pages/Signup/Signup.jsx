import React, { useState } from "react";
import kiwify_logo from "../../assets/vetor.png";
import { Link } from "react-router-dom";

const Signup = ({openModal}) => {
  const [formData, setFormData] = useState({
    email: "",
    re_email: "",
    password: "",
    terms_check: false,
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
    console.log(formData);
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;

    // Perform validation checks
    const errors = {};
    if (name === "email" && !value) {
      errors.email = "esse campo é obrigatorio";
    } else if (name === "email" && !/\S+@\S+\.\S+/.test(value)) {
      errors.email = "Please enter a valid email";
    }
    if (name === "re_email" && !value) {
      errors.re_email = "esse campo é obrigatorio";
    } else if (name === "re_email" && !/\S+@\S+\.\S+/.test(value)) {
      errors.re_email = "Please enter a valid email";
    } else if (name === "re_email" && value !== formData.email) {
      errors.re_email = "The two emails must be the same";
    }
    if (name === "password" && !value) {
      errors.password = "esse campo é obrigatorio";
    } else if (name === "password" && value.length < 8) {
      errors.password = "Password must be at least 8 characters long";
    }
    if (name === "terms_check" && !value) {
      errors.terms_check = "(esse campo é obrigatorio)";
    }

    // If there are errors, set the state and return
    if (Object.keys(errors).length) {
      setErrors(errors);
    } else {
      // Otherwise, clear the errors for this field
      setErrors((prevErrors) => ({ ...prevErrors, [name]: null }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform final validation check on submit
    const errors = {};
    if (!formData.email) {
      errors.email = "esse campo é obrigatorio";
    }
    if (!formData.re_email) {
      errors.re_email = "esse campo é obrigatorio";
    }
    if (!formData.password) {
      errors.password = "esse campo é obrigatorio";
    }
    if (!formData.terms_check) {
      errors.terms_check = "(esse campo é obrigatorio)";
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
          {/* Logo and label */}
          <div className="sm:mx-auto sm:w-full sm:max-w-md">
            <img
              src={kiwify_logo}
              alt="Kiwify"
              className="mx-auto h-12 w-auto"
            />
            <h2 className="mt-6 text-center text-3xl leading-9 font-extrabold text-gray-900">
              Cadastre-se
            </h2>
            <p className="mt-2 text-center text-base leading-5 text-gray-600">
              Ou &nbsp;
              <Link to="/login">
                <span className="font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:underline transition ease-in-out duration-150">
                  logue com uma conta existente
                </span>
              </Link>
            </p>
          </div>
          {/* Signup Form */}
          <form
            onSubmit={handleSubmit}
            className="mt-8 sm:mx-auto sm:w-full sm:max-w-md"
          >
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
              {/* Email */}
              <div>
                <label className="block text-sm font-medium leading-5 mb-1 text-gray-700">
                  E-mail
                </label>
                <div>
                  <input
                    type="email"
                    autoComplete="off"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`form-input block py-2 px-3 border ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    } rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full`}
                  />
                </div>
                <div>
                  {errors.email && (
                    <div className="text-xs text-red-500 mt-1">
                      {errors.email}
                    </div>
                  )}
                </div>
              </div>
              {/* Re-enter email */}
              <div className="mt-6">
                <label className="block text-sm font-medium leading-5 mb-1 text-gray-700">
                  confirme seu Email
                </label>
                <div>
                  <input
                    type="email"
                    autoComplete="off"
                    name="re_email"
                    value={formData.re_email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`form-input block py-2 px-3 border ${
                      errors.re_email ? "border-red-500" : "border-gray-300"
                    } rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full`}
                  />
                </div>
                <div>
                  {errors.re_email && (
                    <div className="text-xs text-red-500 mt-1">
                      {errors.re_email}
                    </div>
                  )}
                </div>
              </div>

              {/* Password */}
              <div className="mt-6">
                <label className="block text-sm font-medium leading-5 text-gray-700">
                  Senha
                </label>
                <div>
                  <input
                    type="password"
                    autoComplete="off"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={`form-input block py-2 px-3 border ${
                      errors.password ? "border-red-500" : "border-gray-300"
                    } rounded-md shadow-sm focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5 w-full`}
                    aria-autocomplete="list"
                  />
                  <div>
                    {errors.password && (
                      <div className="text-xs text-red-500 mt-1">
                        {errors.password}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              {/* terms and condition check */}
              <div className="mt-6">
                <label className="relative flex items-start mt-2">
                  <div className="flex items-center h-5">
                    <input
                      type="checkbox"
                      name="terms_check"
                      value={formData.terms_check}
                      onChange={handleChange}
                      className={`form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out cursor-pointer ${
                        errors.terms_check && "border-red-500"
                      }`}
                    ></input>
                  </div>
                  <div className="ml-2 text-sm leading-5">
                    <span className="font-medium text-gray-700">
                      Eu li e aceito os termos da XXXXX{" "}
                      <a
                        href="https://kiwify.com.br/termos-de-uso"
                        target="_blank"
                        rel="noreferrer"
                        className="underline"
                      >
                        termos de uso
                      </a>
                      ,{" "}
                      <a
                        href="https://kiwify.com.br/licenca-de-uso-software"
                        target="_blank"
                        rel="noreferrer"
                        className="underline"
                      >
                        licensa de uso
                      </a>
                      {" "}
                      <a
                        href="https://kiwify.com.br/politica-de-conteudo"
                        target="_blank"
                        rel="noreferrer"
                        className="underline"
                      >
                        
                      </a>
                    </span>
                    {errors.terms_check && (
                      <div className="text-red-500 border-b-0">
                        {errors.terms_check}
                      </div>
                    )}
                  </div>
                </label>
              </div>
              {/* Submit button */}
              <div className="mt-6">
                <span className="block w-full rounded-md shadow-sm">
                  <button
                    type="submit"
                    className="w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition duration-150 ease-in-out"
                  >
                    Registrar
                  </button>
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;
