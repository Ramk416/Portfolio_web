import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email); // basic email regex
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setLoading(true);

    fetch("https://formsubmit.co/ajax/ramkishan123@gmail.com", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Accept: "application/json"
      },
      body: JSON.stringify(formData)
    })
      .then(() => {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => toast.error("Failed to send message."))
      .finally(() => setLoading(false));
  };

  return (
    <section id="contact" className="py-20 px-6 bg-gradient-to-br from-[#0f1c2e] to-[#020617] text-white">
      <ToastContainer />

      <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400" data-aos="fade-up">
        Contact Me
      </h2>

      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 items-start">
        {/* Info */}
        <div data-aos="fade-right">
          <h3 className="text-2xl font-semibold mb-4">Let’s talk!</h3>
          <p className="text-gray-300 mb-4">
            I’m open to opportunities — whether you have a project in mind or just want to connect.
          </p>
          <p className="mb-2">
            📧 <strong>Email:</strong>{" "}
            <a href="mailto:ramkishan123@gmail.com" className="text-cyan-400 hover:underline">
              ramkishan123@gmail.com
            </a>
          </p>
          <p className="mb-2">📞 <strong>Phone:</strong> +91 9876543210</p>
          <p>🌐 <strong>Location:</strong> Rajasthan, India</p>
        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-800 p-6 rounded-lg shadow-lg space-y-4"
          data-aos="fade-left"
        >
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
            className={`w-full bg-cyan-500 hover:bg-cyan-600 text-black font-semibold py-3 rounded transition flex justify-center items-center`}
            disabled={loading}
          >
            {loading ? (
              <span className="flex items-center">
                <svg
                  className="animate-spin mr-2 h-5 w-5 text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
                Sending...
              </span>
            ) : (
              "Send Message"
            )}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
