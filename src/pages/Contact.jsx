import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    city: '',
    interests: ''
  });
  
  // Your loading state for better UX
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await addDoc(collection(db, "volunteers"), {
        ...formData,
        submittedAt: new Date()
      });

      alert("Application submitted successfully! Welcome to the team.");
      
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        city: '',
        interests: ''
      });
      
    } catch (error) {
      console.error("Error adding document: ", error);
      alert("Something went wrong. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="observe-theme bg-slate-50 min-h-screen flex items-center justify-center p-8 pt-32 relative z-10" data-theme="light">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
        
        {/* LEFT COLUMN: The White Form (Spans 3 columns) */}
        <div className="lg:col-span-3 bg-white p-10 md:p-14 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100">
          <h2 className="text-5xl font-light text-indigo-950 mb-4 tracking-tight">Join the Mission.</h2>
          <p className="text-slate-500 mb-12">Become a volunteer and help us rebuild communities.</p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <input 
                type="text" 
                name="firstName"
                placeholder="First Name" 
                required
                value={formData.firstName}
                onChange={handleChange}
                className="bg-transparent border-b-2 border-slate-300 focus:border-orange-500 focus:outline-none py-2 text-indigo-950 transition-colors duration-300 disabled:opacity-50"
                disabled={isSubmitting}
              />
              <input 
                type="text" 
                name="lastName"
                placeholder="Last Name" 
                required
                value={formData.lastName}
                onChange={handleChange}
                className="bg-transparent border-b-2 border-slate-300 focus:border-orange-500 focus:outline-none py-2 text-indigo-950 transition-colors duration-300 disabled:opacity-50"
                disabled={isSubmitting}
              />
            </div>

            <input 
              type="email" 
              name="email"
              placeholder="Email Address" 
              required
              value={formData.email}
              onChange={handleChange}
              className="bg-transparent border-b-2 border-slate-300 focus:border-orange-500 focus:outline-none py-2 text-indigo-950 transition-colors duration-300 disabled:opacity-50"
              disabled={isSubmitting}
            />

            <input 
              type="text" 
              name="city"
              placeholder="City" 
              required
              value={formData.city}
              onChange={handleChange}
              className="bg-transparent border-b-2 border-slate-300 focus:border-orange-500 focus:outline-none py-2 text-indigo-950 transition-colors duration-300 disabled:opacity-50"
              disabled={isSubmitting}
            />

            <textarea 
              name="interests"
              placeholder="How would you like to contribute?" 
              rows="3"
              value={formData.interests}
              onChange={handleChange}
              className="bg-transparent border-b-2 border-slate-300 focus:border-orange-500 focus:outline-none py-2 text-indigo-950 transition-colors duration-300 resize-none disabled:opacity-50"
              disabled={isSubmitting}
            ></textarea>

            <button 
              type="submit"
              disabled={isSubmitting}
              className="self-start mt-6 bg-indigo-950 text-white px-12 py-4 rounded-full font-bold tracking-widest uppercase hover:bg-orange-500 transition-colors duration-300 shadow-lg hover:shadow-orange-500/30 disabled:bg-slate-400 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Submitting...' : 'Submit Application'}
            </button>
          </form>
        </div>

        {/* RIGHT COLUMN: The Navy Info Card (Spans 2 columns) */}
        <div className="lg:col-span-2 relative overflow-hidden bg-indigo-950 text-white p-10 md:p-14 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.2)] flex flex-col justify-between min-h-[500px]">
          {/* Ambient Background Glow Effect */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-orange-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

          <div className="relative z-10">
            <h3 className="text-4xl font-light mb-12 tracking-tight">Headquarters</h3>
            
            <div className="group mb-10">
              <p className="text-orange-500 text-sm font-bold uppercase tracking-[0.2em] mb-3">Address</p>
              <p className="text-lg text-white/80 group-hover:text-white transition-colors duration-300 leading-relaxed">
                123 Gandhi Road<br />
                Vijayawada, Andhra Pradesh<br />
                India 520001
              </p>
            </div>

            <div className="group mb-10">
              <p className="text-orange-500 text-sm font-bold uppercase tracking-[0.2em] mb-3">Direct Line</p>
              <p className="text-lg text-white/80 group-hover:text-white transition-colors duration-300">
                +91 98765 43210
              </p>
            </div>

            <div className="group">
              <p className="text-orange-500 text-sm font-bold uppercase tracking-[0.2em] mb-3">Email</p>
              <p className="text-lg text-white/80 group-hover:text-white transition-colors duration-300">
                hello@sunfoundation.in
              </p>
            </div>
          </div>

          {/* Tactical Map Button */}
          <a href="https://maps.google.com" target="_blank" rel="noreferrer" className="relative z-10 inline-flex items-center gap-4 mt-16 group w-fit">
            <div className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center group-hover:bg-orange-500 group-hover:border-orange-500 transition-all duration-300">
              <span className="text-xl group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform duration-300">↗</span>
            </div>
            <span className="text-sm font-bold uppercase tracking-widest text-white/60 group-hover:text-white transition-colors duration-300">
              Open in Maps
            </span>
          </a>
        </div>

      </div>
    </div>
  );
};

export default Contact;
