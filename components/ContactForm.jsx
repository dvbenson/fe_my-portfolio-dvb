'use client';
import { NextResponse } from 'next/server';
import React, { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    console.log(response);
    const data = await response.json();
    console.log(data);
    if (response.status === 200) {
      return NextResponse.json({ status: 'success', data });
    } else {
      return NextResponse.json({ status: 'failure' });
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type='text'
        name='name'
        placeholder='Name'
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type='email'
        name='email'
        placeholder='Email'
        value={formData.email}
        onChange={handleChange}
        required
      />
      <input
        type='text'
        name='subject'
        placeholder='Subject'
        value={formData.subject}
        onChange={handleChange}
        required
      />
      <textarea
        name='message'
        placeholder='Message'
        value={formData.message}
        onChange={handleChange}
        required
      ></textarea>
      <button type='submit'>Send</button>
    </form>
  );
}
