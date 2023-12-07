import React from "react";

const ChefRegisterForm = () => {
  // Define an array of form fields
  const formFields = [
    { id: "firstName", label: "First Name", type: "text", required: true },
    { id: "lastName", label: "Last Name", type: "text", required: true },
    { id: "email", label: "Email", type: "email", required: true },
    { id: "phone", label: "Phone Number", type: "tel", required: true },
    { id: "dob", label: "Date of Birth", type: "date", required: true },
    {
      id: "gender",
      label: "Gender",
      type: "select",
      options: ["Male", "Female", "Other"],
      required: true,
    },
    { id: "specialty", label: "Specialty", type: "text", required: true },
    {
      id: "experience",
      label: "Experience (years)",
      type: "number",
      required: true,
    },
    { id: "bio", label: "Bio", type: "textarea", required: true },
  ];

  return (
    <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-black text-2xl p-8 mt-20">
      <h2 className="text-3xl font-semibold mb-6">Chef Registration Form</h2>

      <form className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {formFields.map((field) => (
          <div key={field.id} className="mb-4">
            <label htmlFor={field.id} className="block text-sm font-medium">
              {field.label}
              {field.required && <span className="text-red-500">*</span>}
            </label>

            {field.type === "select" ? (
              <select
                id={field.id}
                name={field.id}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md bg-white"
                required={field.required}
              >
                <option value="" disabled selected>
                  Select {field.label}
                </option>
                {field.options.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            ) : field.type === "textarea" ? (
              <textarea
                id={field.id}
                name={field.id}
                rows="4"
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md bg-white"
                required={field.required}
              ></textarea>
            ) : (
              <input
                type={field.type}
                id={field.id}
                name={field.id}
                className="mt-1 p-2 block w-full border border-gray-300 rounded-md bg-white"
                required={field.required}
              />
            )}
          </div>
        ))}
        <div className="col-span-3">
          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition duration-300"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChefRegisterForm;
