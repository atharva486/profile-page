import React, { useRef, useState } from 'react';
import axios from 'axios';
const API_BASE = import.meta.env.VITE_BACKEND_URL;

function Contact() {
  const textareaRef = useRef(null);
  const [Name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const handleInput = () => {
    const textarea = textareaRef.current;
    textarea.style.height = 'auto';
    textarea.style.height = `${textarea.scrollHeight}px`;
  };
  const send_email = async (e) => {
    e.preventDefault();
    let res = await axios.post(`${API_BASE}/api/sendemail`, { Name, email, message });
     setName('');
    setEmail('');
    setMessage('');
    alert(res.data.success ? "Message Sent" : "Something went wrong");
   
  };

  return (
    <div id='contact' className='w-full bg-zinc-950 text-white py-16 px-4 sm:px-6 md:px-20'>
      <div className='text-center'>
        <p className='text-3xl sm:text-4xl font-semibold'>Let's Connect</p>
        <p className='text-sm sm:text-lg text-zinc-400 max-w-xl mx-auto mt-3'>I'm always open to discussing new opportunities, interesting projects, or just having a chat about tech.</p>
      </div>

      <div className='flex flex-col lg:flex-row justify-between mt-10 gap-10'>
        <div className='lg:w-1/2 space-y-6'>
          <p className='text-lg font-semibold'>Get in Touch</p>

          <div className='flex items-center border rounded-2xl p-3 gap-4 transition-all hover:scale-[1.02]'>
            <img src="/email.png" alt="email" className='w-10 h-10' />
            <div>
              <p>Email</p>
              <p className='text-sm text-zinc-400'>atharva007ag@gmail.com</p>
            </div>
          </div>

          <div className='flex items-center border rounded-2xl p-3 gap-4 transition-all hover:scale-[1.02]'>
            <img src="/phone.png" alt="phone" className='w-10 h-10' />
            <div>
              <p>Phone</p>
              <p className='text-sm text-zinc-400'>+91 - 9109418388</p>
            </div>
          </div>

          <div>
            <p className='text-lg mb-3'>Follow Me:</p>
            <div className='flex gap-4'>
              <a href='https://github.com/atharva486' className='border-2 rounded-xl p-3 hover:scale-110 transition'><img src="/github.png" className='w-6 h-6' alt="GitHub" /></a>
              <a href='https://www.linkedin.com/in/atharva-ghogare-546160320/' className='border-2 rounded-xl p-3 hover:scale-110 transition'><img src="/linkedin.png" className='w-6 h-6' alt="LinkedIn" /></a>
            </div>
          </div>
        </div>

        <form onSubmit={send_email} className='lg:w-1/2 space-y-4 border rounded-3xl p-6'>
          <p className='text-lg font-semibold'>Send A Message</p>

          <div>
            <label className='block text-sm mb-1'>Name</label>
            <input type="text" placeholder='Your Name' value={Name} onChange={e => setName(e.target.value)} className='w-full bg-zinc-800 rounded-xl px-4 py-2 text-sm' />
          </div>

          <div>
            <label className='block text-sm mb-1'>Email</label>
            <input type="email" placeholder='your.email@example.com' value={email} onChange={e => setEmail(e.target.value)} className='w-full bg-zinc-800 rounded-xl px-4 py-2 text-sm' />
          </div>

          <div>
            <label className='block text-sm mb-1'>Message</label>
            <textarea
              ref={textareaRef}
              onInput={handleInput}
              value={message}
              rows={1}
              onChange={e => setMessage(e.target.value)}
              placeholder="Tell me about the project.."
              className="w-full bg-zinc-800 rounded-xl px-4 py-2 resize-none overflow-hidden text-sm"
            />
          </div>

          <button type='submit' className='w-full bg-white text-black font-medium rounded-xl py-2 mt-4 hover:bg-gradient-to-r hover:from-sky-600 hover:to-sky-800 hover:text-white transition'>Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
