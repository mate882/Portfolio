import React, {useState} from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Register(){
    const [formData, setFormData] = useState({
        email: '',
        password1: '',
        password2: ''
    });

    const handleChange = e => {
        setFormData({ ...formData, [e.target.name]: e.target.value});       
    };

    const handleSubmit = async e => {
        e.preventDefault();

        const { email, password1, password2 } = formData;

        if (password1.length < 8) {
            alert('Password must be at least 8 characters long.');
            return;
        }

        if (password1 !== password2) {
            alert('Passwords do not match.');
            return;
        }

        try {
            const res = await axios.post('http://localhost:8000/accounts/register/', formData);
            alert('Registration successful, please login!');
        } catch (err) {
            alert(err.response?.data?.detail || JSON.stringify(err.response?.data) || 'Something went wrong.');
        }
    };


    return (
        <form onSubmit={handleSubmit}>
        <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            required
        />
        <input
            type="password"
            name="password1"
            placeholder="Password"
            onChange={handleChange}
            required
        />
        <input
            type="password"
            name="password2"
            placeholder="Confirm Password"
            onChange={handleChange}
            required
        />
        <button type="submit">Register</button>
        </form>
    );
}

export default Register;
