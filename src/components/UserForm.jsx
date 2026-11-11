import { useState } from "react";

const emptyForm = { name: "", email: "", age: "" };

function UserForm() {
  const [formData, setFormData] = useState(emptyForm);
  const [submittedData, setSubmittedData] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmittedData(formData);
  };

  const handleReset = () => {
    setFormData(emptyForm);
    setSubmittedData(null);
  };

  return (
    <div className="card">
      <h3>User Form</h3>
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input name="name" type="text" value={formData.name} onChange={handleChange} required />

        <label>Email</label>
        <input name="email" type="email" value={formData.email} onChange={handleChange} required />

        <label>Age</label>
        <input name="age" type="number" min="1" value={formData.age} onChange={handleChange} required />

        <div className="btn-row">
          <button type="submit">Submit</button>
          <button type="button" className="secondary" onClick={handleReset}>Reset</button>
        </div>
      </form>

      {submittedData && (
        <div className="output">
          <h4>Submitted Information</h4>
          <p>Name: {submittedData.name}</p>
          <p>Email: {submittedData.email}</p>
          <p>Age: {submittedData.age}</p>
        </div>
      )}
    </div>
  );
}

export default UserForm;
