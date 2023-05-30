'use client';
import { NextResponse } from 'next/server';
import React, { useState } from 'react';
import Button from './Button';

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
        className=' xxs:w-[280px] xs:w-[320px] sm:w-[400px] md:w-[460px] lg:w-[520px] rounded-lg shadow-xl flex flex-col px-8 py-8 bg-[#FFFBFF] my-16'
      >
        <div className='flex justify-center items-center'>
          <div className=' rounded-full p-2 bg-purple w-40 h-12 text-center flex justify-center items-center shadow-md'>
            <h1 className='text-[#121212] text-2xl xl:text-2xl font-heading'>
              Get in touch
            </h1>
          </div>
        </div>
        <label htmlFor='name' className='text-[#121212] mt-8 font-heading'>
          Full Name
        </label>
        <input
          type='text'
          name='name'
          value={formData.name}
          onChange={handleChange}
          className='bg-[#FFFBFF] border-b focus:border-none py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 focus:ring-gray'
          required
        />
        <label htmlFor='email' className='text-[#121212] font-light mt-8 font-heading'>
          Email
        </label>
        <input
          type='email'
          name='email'
          value={formData.email}
          onChange={handleChange}
          className='bg-[#FFFBFF] border-b focus:border-none py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 focus:ring-gray'
          required
        />
        <label htmlFor='subject' className='text-[#121212] font-light mt-8 font-heading'>
          Subject
        </label>
        <input
          type='text'
          name='subject'
          value={formData.subject}
          onChange={handleChange}
          className='bg-[#FFFBFF] border-b focus:border-none py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 focus:ring-gray'
          required
        />
        <label htmlFor='message' className='text-[#121212] font-light mt-8 font-heading'>
          Message
        </label>
        <textarea
          name='message'
          value={formData.message}
          onChange={handleChange}
          className='bg-[#FFFBFF] border-b focus:border-none py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 focus:ring-gray'
          required
        ></textarea>
        <div className='items-center text-center mt-8'>
          <Button label='Send' type='submit' variant={'quarternary'}/>
        </div>
      </form>
    </div>
  );
}
