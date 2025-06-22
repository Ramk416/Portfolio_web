import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
    }, 100); // Give time for FormSubmit to process
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 bg-gradient-to-br from-[#0f1c2e] to-[#020617] text-white"
    >
      <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400" data-aos="fade-up">
        Contact Me
      </h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Left Side - Info */}
        <div data-aos="fade-right">
          <h3 className="text-2xl font-semibold mb-4">Let’s talk!</h3>
          <p className="text-gray-300 mb-4">
            I’m open to opportunities — whether you have a project in mind or
            just want to connect.
          </p>
          <p className="mb-2">
            📧 <strong>Email:</strong>{" "}
            <a
              href="mailto:ramkishan123@gmail.com"
              className="text-cyan-400 hover:underline"
            >
              ramkishan123@gmail.com
            </a>
          </p>
          <p className="mb-2">📞 <strong>Phone:</strong> +91 9876543210</p>
          <p>
            🌐 <strong>Location:</strong> Rajasthan, India
          </p>
        </div>

        {/* Right Side - Form */}
        <form
          action="https://formsubmit.co/ramkishan123@gmail.com"
          method="POST"
          onSubmit={handleSubmit}
          className="bg-gray-800 p-6 rounded-lg shadow-lg space-y-4"
          data-aos="fade-left"
        >
          {/* Hidden Fields */}
          <input type="hidden" name="_next" value="https://your-vercel-url.vercel.app/#contact" />
          <input type="hidden" name="_captcha" value="false" />

          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            required
            value={formData.message}
            onChange={handleChange}
            className="w-full p-3 rounded bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-cyan-500 hover:bg-cyan-600 text-black font-semibold py-3 rounded transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
