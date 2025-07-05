import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles/HireMe.css'
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

  const [isSent, setIsSent] = React.useState(false);

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

    setIsSent(true);

     setTimeout(() => {
        navigate('/');
      }, 7000);

      try {
        await axios.post('http://localhost:8000/contact/send-request/', form, {
          headers: { 'Content-Type': 'application/json' }
        });
      } catch (error) {
        alert('Failed to send request. Please try again.');
      }
    };

  return (
    <>
     {isSent ? (
      <div style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 1rem' }} className="loop-wrapper">
        <p className='sending'>Is Sending...</p>
        <div className="mountain"></div>
        <div className="hill"></div>
        <div className="tree"></div>
        <div className="tree"></div>
        <div className="tree"></div>
        <div className="rock"></div>
        <div className="truck"></div>
        <div className="wheels"></div>
      </div>
    ) :(
    <form style={{ maxWidth: '1440px', margin: '0 auto', padding: '0 1rem' }} className="request-form" onSubmit={handleSubmit}>
      <label htmlFor="email">Email(Where we can continue communication):</label>
      <input
        id="email"
        className="input-field"
        type="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Your email"
        required
      />

      <label htmlFor="project_type">Project Type:</label>
      <select
        id="project_type"
        className="input-field"
        name="project_type"
        value={form.project_type}
        onChange={handleChange}
      >
        {Object.keys(priceRanges).map(type => (
          <option key={type} value={type}>{type}</option>
        ))}
      </select>

      <label htmlFor="min_price">Minimum Price ($):</label>
      <input
        id="min_price"
        className="input-field readonly-field"
        type="number"
        name="min_price"
        value={form.min_price}
        readOnly
      />

      <label htmlFor="max_price">Maximum Price ($):</label>
      <input
        id="max_price"
        className="input-field readonly-field"
        type="number"
        name="max_price"
        value={form.max_price}
        readOnly
      />

      <label htmlFor="message">Project Description:</label>
      <textarea
        id="message"
        className="input-field textarea-field"
        name="message"
        value={form.message}
        onChange={handleChange}
        placeholder="Describe your project details here"
        required
      />

      <button type="submit" className="submit-button">Send Request</button>
    </form>

    )}

    </>
      
  );
}

export default ContactForm;
