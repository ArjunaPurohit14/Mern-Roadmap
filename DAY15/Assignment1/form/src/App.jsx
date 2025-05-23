import { useState } from "react";

function App() {
  const [formData, setFormData] = useState({ name: "", email: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent reload
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">User Form</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Enter your name"
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Enter your email"
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded"
          />

          <div>
          <p className="mb-1">Select Gender:</p>
          <label className="mr-4">
            <input
              type="radio"
              name="gender"
              value="Male"
              checked={formData.gender === "Male"}
              onChange={handleChange}
            />
            <span className="ml-1">Male</span>
          </label>
          <label className="mr-4">
            <input
              type="radio"
              name="gender"
              value="Female"
              checked={formData.gender === "Female"}
              onChange={handleChange}
            />
            <span className="ml-1">Female</span>
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="Other"
              checked={formData.gender === "Other"}
              onChange={handleChange}
            />
            <span className="ml-1">Other</span>
          </label>
        </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>

        {submitted && (
          <div className="mt-4 text-center">
            <p className="text-green-600 font-semibold">Form submitted!</p>
            <p>👤 Name: {formData.name}</p>
            <p>📧 Email: {formData.email}</p>
            <p>Gender: {formData.gender}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
   