import React, { useState } from 'react';
import saltFlats3 from '../assets/salt flat3.jpg';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [formErrors, setFormErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear validation message when the user starts typing
    if (formErrors[name]) {
      setFormErrors({ ...formErrors, [name]: '' });
    }
  };

  const validateField = (e) => {
    const { name, value } = e.target;
    if (!value) {
      setFormErrors({ ...formErrors, [name]: `${name} is required` });
    } else if (name === 'email' && !/\S+@\S+\.\S+/.test(value)) {
      setFormErrors({ ...formErrors, [name]: 'Email is invalid' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate fields before submitting
    const errors = {};
    if (!formData.name) errors.name = 'Name is required';
    if (!formData.email) errors.email = 'Email is required';
    if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = 'Email is invalid';
    if (!formData.message) errors.message = 'Message is required';

    setFormErrors(errors);

    if (Object.keys(errors).length === 0) {
      // Proceed with form submission logic, e.g., sending data to a server
      console.log('Form data:', formData);
      alert('Form submitted successfully!');
      // Reset form data
      setFormData({
        name: '',
        email: '',
        message: '',
      });
    }
  };

  return (
    <div id='main' className='relative h-screen flex justify-center items-center'>
      <img
        className='w-full h-screen object-cover'
        src={saltFlats3}
        alt='/' 
      />
      <div className='w-full max-w-md p-8 bg-white/90 rounded-lg shadow-lg'>
        <h2 className='text-4xl font-bold text-center text-blue-800'>Contact</h2>
        <form className='mt-8 space-y-6' onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className='block text-sm font-bold text-gray-700'>Name:</label>
            <input
              type="text"
              name="name"
              id="name"
              className='mt-1 p-2 w-full border rounded-md'
              value={formData.name}
              onChange={handleInputChange}
              onBlur={validateField}
            />
            {formErrors.name && <p className='text-red-500'>{formErrors.name}</p>}
          </div>
          <div>
            <label htmlFor="email" className='block text-sm font-bold text-gray-700'>Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              className='mt-1 p-2 w-full border rounded-md'
              value={formData.email}
              onChange={handleInputChange}
              onBlur={validateField}
            />
            {formErrors.email && <p className='text-red-500'>{formErrors.email}</p>}
          </div>
          <div>
            <label htmlFor="message" className='block text-sm font-bold text-gray-700'>Message:</label>
            <textarea
              name="message"
              id="message"
              className='mt-1 p-2 w-full border rounded-md'
              rows="4"
              value={formData.message}
              onChange={handleInputChange}
              onBlur={validateField}
            ></textarea>
            {formErrors.message && <p className='text-red-500'>{formErrors.message}</p>}
          </div>
          <button type="submit" className='w-full p-2 bg-blue-800 text-white rounded-md'>
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;