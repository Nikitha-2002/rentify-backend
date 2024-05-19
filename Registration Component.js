// Example: Registration Component
import React, { useState } from 'react';
import axios from 'axios';

const Register = () => {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phoneNumber: '', password: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/register', form);
      // Handle success (e.g., redirect to login)
    } catch (error) {
      // Handle error
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="firstName" value={form.firstName} onChange={handleChange} placeholder="First Name" required />
      <input type="text" name="lastName" value={form.lastName} onChange={handleChange} placeholder="Last Name" required />
      <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" required />
      <input type="text" name="phoneNumber" value={form.phoneNumber} onChange={handleChange} placeholder="Phone Number" required />
      <input type="password" name="password" value={form.password} onChange={handleChange} placeholder="Password" required />
      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
