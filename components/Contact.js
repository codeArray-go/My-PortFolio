"use client";

import { useState } from "react";
import Image from "next/image";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="w-full text-white px-6 py-20">
      <h1 className="uppercase text-center font-bold text-4xl mb-20">
        Let's connect
      </h1>
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14">
        {/* Left Content */}
        <div className="flex flex-col gap-4">
          <h2 className="text-3xl md:text-3xl font-extrabold">Get in Touch</h2>

          <p className="text-gray-400 leading-relaxed">
            If you’d like to discuss a project, collaboration, or opportunity,
            feel free to reach out. I’m always open to meaningful conversations.
          </p>

          <p className="text-gray-500 text-sm">Open to remote opportunities</p>

          <Image
            src={`${process.env.NEXT_PUBLIC_URL}/Connect.png`}
            alt="Remote work illustration"
            width={300}
            height={220}
            className="mt-6 rounded-lg opacity-90"
          />
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-zinc-800 rounded-xl p-8 flex flex-col gap-6"
        >
          <div>
            <label className="block text-sm text-gray-400 mb-2">Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-sm outline-none focus:border-white transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-sm outline-none focus:border-white transition-colors"
            />
          </div>

          <div>
            <label className="block text-sm text-gray-400 mb-2">Message</label>
            <textarea
              name="message"
              rows={5}
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-3 text-sm outline-none resize-none focus:border-white transition-colors"
            />
          </div>

          <button
            type="submit"
            className="mt-2 bg-white text-black font-semibold py-3 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
