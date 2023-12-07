import React, { useState } from "react";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { useEffect } from "react";
import { useTitle } from "../hooks/useTitle";

const Registration = () => {
  const { signupUserWithEmailAndPassword, updateUserProfile } =
    useContext(AuthContext);
  const initialForState = {
    fullName: "",
    email: "",
    password: "",
    photoUrl: "",
  };
  const formFields = [
    {
      name: "fullName",
      type: "text",
      placeholder: "Full Name",
      label: "Full Name",
      required: true,
    },
    {
      name: "photoUrl",
      type: "url",
      placeholder: "Photo Url",
      label: "Photo Url",
      required: true,
    },
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
  const [formData, setFormData] = useState(initialForState);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  // for route title
  useTitle("Registration");
  //   promise method
  /*   const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    signupUserWithEmailAndPassword(formData.email, formData.password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);

        updateUserProfile(formData.fullName, formData.photoUrl);
      })
      .catch((error) => {
        console.log("error", error);
      });
  }; */

  //   async way
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);
    try {
      const userCredential = await signupUserWithEmailAndPassword(
        formData.email,
        formData.password
      );
      const user = userCredential.user;
      await updateUserProfile(formData.fullName, formData.photoUrl);
      console.log("Uer registration and profile update successfully", user);
    } catch (error) {
      console.error("Error during registration and profile update", error);
    }
  };

  return (
    <div className="mx-auto max-w-lg p-6">
      <h2 className="text-2xl font-semibold mb-4">Registration</h2>
      <form onSubmit={handleSubmit}>
        {formFields.map((field) => (
          <div key={field.name} className="mb-4">
            <label className="block text-gray-700">{field.label}</label>
            <input
              type={field.type}
              name={field.name}
              placeholder={field.placeholder}
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:border-blue-400"
              onChange={handleChange}
              required={field.required}
            />
          </div>
        ))}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Registration;
