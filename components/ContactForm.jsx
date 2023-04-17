'use client';
import { NextResponse } from 'next/server';
import React, { useState } from 'react';
import styles from '../styles/contact.module.css';

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
    const data = await response.json();
    if (response.status === 200) {
      return NextResponse.json({ status: 'success', data });
    } else {
      return NextResponse.json({ status: 'failure' });
    }
  };
  return (
    <div className='flex flex-col justify-center items-center '>
      <form
        onSubmit={handleSubmit}
        className='sm:min-w-[320px] md:min-w-[400px] lg:min-w-[480px] rounded-lg shadow-xl flex flex-col px-8 py-8 bg-white dark:bg-blue-500 my-16'
      >
        <div className='flex justify-center items-center'>
          <div className=' rounded-full p-2 bg-gray w-40 h-12 text-center flex justify-center items-center shadow-md'>
            <h1 className='text-2xl xl:text-2xl'>Get in touch:</h1>
          </div>
        </div>
        <label htmlFor='name' className='text-dark-gray font-light mt-8'>
          Full Name
        </label>
        <input
          type='text'
          name='name'
          value={formData.name}
          onChange={handleChange}
          className='bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 '
          required
        />
        <label htmlFor='email' className='text-dark-gray font-light mt-8'>
          Email
        </label>
        <input
          type='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          className='bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1'
          required
        />
        <label htmlFor='subject' className='text-dark-gray font-light mt-8'>
          Subject
        </label>
        <input
          type='text'
          name='subject'
          value={formData.subject}
          onChange={handleChange}
          className='bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1'
          required
        />
        <label htmlFor='message' className='text-dark-gray font-light mt-8'>
          Message
        </label>
        <textarea
          name='message'
          value={formData.message}
          onChange={handleChange}
          className='bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1'
          required
        ></textarea>
        <div className='items-center text-center mt-8'>
          <button type='submit' className={styles.button_form}>
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
