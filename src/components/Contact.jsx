import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast from 'react-hot-toast';
import { FaEnvelope, FaUser, FaPaperPlane } from 'react-icons/fa';

import { styles } from "../styles";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
import { PlaneCanvas } from './canvas';

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

    const serviceId = import.meta.env.VITE_EMAIL_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAIL_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAIL_PUBLIC_KEY;

    emailjs
      .send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          to_name: "Zelealem Tesema",
          from_email: form.email,
          to_email: "zelutesema@gmail.com",
          message: form.message,
        },
        publicKey
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
    <div className="relative">
      {/* Contact-specific background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#0a192f]" />
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(100, 255, 218, 0.15) 1px, transparent 0)`,
          backgroundSize: '40px 40px',
        }}>
          <motion.div
            className="absolute inset-0"
            animate={{
              backgroundPosition: ['0px 0px', '40px 40px']
            }}
            transition={{
              duration: 4,
              ease: "linear",
              repeat: Infinity
            }}
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, rgba(100, 255, 218, 0.15) 1px, transparent 0)`,
              backgroundSize: '40px 40px',
            }}
          />
        </div>
      </div>

      <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden relative z-10`}>
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className='flex-[0.75] bg-[#112240] p-8 rounded-2xl shadow-xl'
        >
          <p className="text-[#64ffda] font-medium tracking-wider uppercase text-sm mb-2">Get in touch</p>
          <h3 className="text-[#e6f1ff] font-bold text-4xl sm:text-5xl mb-8 font-sans">Contact.</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className='mt-8 flex flex-col gap-6'
          >
            <div className="flex flex-col gap-2">
              <label className="text-[#a8b2d1] text-sm font-medium tracking-wide">Your Name</label>
              <div className="relative">
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="What's your name?"
                  className="w-full bg-[#1a1f2e] py-4 px-6 pl-12 placeholder:text-[#8892b0] text-[#e6f1ff] rounded-lg outline-none border border-[#64ffda]/20 focus:border-[#64ffda] transition-all duration-300 font-sans"
                />
                <FaUser className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#64ffda] opacity-70" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[#a8b2d1] text-sm font-medium tracking-wide">Your Email</label>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="What's your email?"
                  className="w-full bg-[#1a1f2e] py-4 px-6 pl-12 placeholder:text-[#8892b0] text-[#e6f1ff] rounded-lg outline-none border border-[#64ffda]/20 focus:border-[#64ffda] transition-all duration-300 font-sans"
                />
                <FaEnvelope className="absolute left-4 top-1/2 transform -translate-y-1/2 text-[#64ffda] opacity-70" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[#a8b2d1] text-sm font-medium tracking-wide">Your Message</label>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Please enter your message here..."
                className="w-full bg-[#1a1f2e] py-4 px-6 placeholder:text-[#8892b0] text-[#e6f1ff] rounded-lg outline-none border border-[#64ffda]/20 focus:border-[#64ffda] transition-all duration-300 resize-none font-sans leading-relaxed"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="group bg-[#64ffda] hover:bg-[#4cd8b2] py-3 px-6 rounded-lg text-[#0a192f] font-semibold flex items-center justify-center gap-2 transition-all duration-300 mt-4 text-sm tracking-wide uppercase"
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

        <div className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
          <PlaneCanvas />
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
