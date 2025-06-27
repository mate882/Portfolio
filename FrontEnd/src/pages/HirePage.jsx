import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const priceRanges = {
  Frontend: { min: 30, max: 100 },
  Backend: { min: 50, max: 150 },
  'Full Stack': { min: 80, max: 200 },
  'Web Design': { min: 30, max: 100 }
};

function ContactForm() {
  const [form, setForm] = useState({
    email: '',
    project_type: 'Frontend',
    min_price: priceRanges['Frontend'].min,
    max_price: priceRanges['Frontend'].max,
    message: ''
  });

  const navigate = useNavigate();

  useEffect(() => {
    const range = priceRanges[form.project_type];
    setForm(prevForm => ({
      ...prevForm,
      min_price: range.min,
      max_price: range.max
    }));
  }, [form.project_type]);

  const handleChange = e => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:8000/contact/send-request/', form, {
        headers: { 'Content-Type': 'application/json' }
      });
      alert('Your project request was sent successfully!');
      navigate('/');
    } catch (error) {
      alert('Failed to send request. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Email:</label>
      <input
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Your email"
        required
      />

      <label>Project Type:</label>
      <select name="project_type" value={form.project_type} onChange={handleChange}>
        {Object.keys(priceRanges).map(type => (
          <option key={type} value={type}>{type}</option>
        ))}
      </select>

      <label>Minimum Price ($):</label>
      <input type="number" name="min_price" value={form.min_price} readOnly />

      <label>Maximum Price ($):</label>
      <input type="number" name="max_price" value={form.max_price} readOnly />

      <label>Project Description:</label>
      <textarea
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Describe your project details here"
        required
      />

      <button type="submit">Send Request</button>
    </form>
  );
}

export default ContactForm;
