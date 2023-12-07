import React, { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useTitle } from "../hooks/useTitle";

const Login = () => {
  const { loginUserWithEmailAndPassword } = useContext(AuthContext);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const formFields = [
    {
      name: "email",
      type: "email",
      placeholder: "Email",
      label: "Email",
      required: true,
    },
    {
      name: "password",
      type: "password",
      placeholder: "Password",
      label: "Password",
      required: true,
    },
  ];
  // for route title
  useTitle("Login");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const userCredential = await loginUserWithEmailAndPassword(
        formData.email,
        formData.password
      );
      const user = userCredential.user;
      console.log("user loggin successfull", user);
    } catch (err) {
      console.error("error happend during loggin", err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="text-center text-3xl font-extrabold text-gray-900">
            Login
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          {formFields.map((field) => (
            <div key={field.name}>
              <div className="mb-4">
                <label
                  htmlFor={field.name}
                  className="block text-gray-700 text-sm font-bold mb-2"
                >
                  {field.label}
                </label>
                <input
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  onChange={handleChange}
                  required={field.required}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-400"
                />
              </div>
            </div>
          ))}
          <p>
            Don't have an account?{" "}
            <Link className="underline text-blue-700" to="/register">
              Regsiter
            </Link>
          </p>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
