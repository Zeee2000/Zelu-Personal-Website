import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast from 'react-hot-toast';
import { FaEnvelope, FaUser, FaPaperPlane } from 'react-icons/fa';

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        import.meta.env.VITE_APP_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_APP_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          to_name: "Zelealem Tesema",
          from_email: form.email,
          to_email: "zelutesema@gmail.com",
          message: form.message,
        },
        import.meta.env.VITE_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setLoading(false);
          toast.success('Thank you! I will get back to you as soon as possible.', {
            duration: 4000,
            position: 'top-center',
            style: {
              background: '#333',
              color: '#fff',
              padding: '16px',
              borderRadius: '10px',
            },
            iconTheme: {
              primary: '#4ade80',
              secondary: '#fff',
            },
          });

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.error(error);
          toast.error('Something went wrong. Please try again.', {
            duration: 4000,
            position: 'top-center',
            style: {
              background: '#333',
              color: '#fff',
              padding: '16px',
              borderRadius: '10px',
            },
            iconTheme: {
              primary: '#ef4444',
              secondary: '#fff',
            },
          });
        }
      );
  };

  return (
    <div className="relative w-full h-full min-h-[100vh] flex items-center justify-center py-20">
      <div className="absolute inset-0 bg-[#0a192f] z-0" />
      
      <div className="relative z-10 flex lg:flex-row flex-col gap-10 items-center justify-center w-full max-w-7xl mx-auto px-4">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="bg-[#112240] p-8 rounded-2xl w-full max-w-[500px]"
        >
          <div className="flex flex-col items-start gap-2 mb-8">
            <div className="flex items-center gap-3 text-[#64ffda] mb-2">
              <FaEnvelope className="w-5 h-5" />
              <p className="uppercase tracking-wider text-sm font-medium">Get in touch</p>
            </div>
            <h2 className="text-[#e6f1ff] text-4xl font-bold">Contact.</h2>
          </div>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="flex flex-col gap-6"
          >
            <div className="flex flex-col gap-2">
              <label className="text-[#8892b0] text-sm">Your Name</label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                  <FaUser className="w-5 h-5 text-[#64ffda]" />
                </div>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full bg-[#1a1f2e] py-4 pl-12 pr-6 placeholder:text-[#8892b0] text-[#e6f1ff] rounded-lg outline-none border border-[#64ffda]/20 focus:border-[#64ffda] transition-all duration-300"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[#8892b0] text-sm">Your Email</label>
              <div className="relative">
                <div className="absolute left-4 top-1/2 -translate-y-1/2">
                  <FaEnvelope className="w-5 h-5 text-[#64ffda]" />
                </div>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Enter your email address"
                  className="w-full bg-[#1a1f2e] py-4 pl-12 pr-6 placeholder:text-[#8892b0] text-[#e6f1ff] rounded-lg outline-none border border-[#64ffda]/20 focus:border-[#64ffda] transition-all duration-300"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[#8892b0] text-sm">Your Message</label>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Please enter your message here..."
                className="w-full bg-[#1a1f2e] py-4 px-6 placeholder:text-[#8892b0] text-[#e6f1ff] rounded-lg outline-none border border-[#64ffda]/20 focus:border-[#64ffda] transition-all duration-300 resize-none"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="group bg-[#64ffda] hover:bg-[#4cd8b2] py-3 px-6 rounded-lg text-[#0a192f] font-medium flex items-center justify-center gap-2 transition-all duration-300 mt-4"
            >
              {loading ? (
                "Sending..."
              ) : (
                <>
                  Send Message
                  <FaPaperPlane className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </motion.button>
          </form>
        </motion.div>

        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="lg:flex-1 w-full h-[350px] lg:h-[550px]"
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
