import React, { useRef,useState,useEffect } from 'react';
import axios  from 'axios';
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
  const insert_value_name = (e)=>{
    setName(e.target.value);
  }
  const insert_value_email = (e)=>{
 
    setEmail(e.target.value);
  }
  const insert_value_message = (e)=>{
    setMessage(e.target.value);
  }
  const send_email = async (e)=>{
    e.preventDefault();
    let res = await axios.post(`${API_BASE}/api/sendemail`,{Name,email,message});
    if(res.data.success)
      console.log("message sent");
    else
      console.log("message not sent")
  }


  return (
    <>
      <div id='contact' className='w-full bg-zinc-950 text-white h-[120vh] py-20 flex flex-col'>
        <div className='w-full text-center'>
          <p className='text-4xl font-semibold'>Let's Connect</p>
          <p className='text-lg text-zinc-400 w-1/2 mx-auto mt-5'>I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.</p>
        </div>
        <div className='w-full flex justify-between px-20 py-10  '>
          <div className='w-1/2 py-10 h-fit'>
            <p className='text-lg font-semibold mb-5'>Get in Touch</p>
            <div className='w-2/3 bg-zinc-950 items-center flex gap-2 mb-5 border   rounded-2xl font-light text-lg transition-all duration-600 hover:mx-5'>
              <img src="/email.png" alt="email_img" className='ml-3 px-3 w-1/6' />
              <div className=' flex flex-col gap-2'>
                <p className='px-10'>Email</p>
                <p className='px-10'>atharva007ag@gmail.com</p>
              </div>
            </div>
            <div className='w-2/3 bg-zinc-950 items-center flex gap-2 rounded-2xl  border  font-light text-lg transition-all duration-600 hover:mx-5'>
              <img src="/phone.png" alt="phone_img" className='ml-3 px-3 w-1/6' />
              <div className=' flex flex-col gap-2'>
                <p className='px-10'>Phone</p>
                <p className='px-10'>+91 - 9109418388</p>
              </div>
            </div>
            <div className='my-10'>
              <p className='text-lg'>Follow Me:</p>
              <div className='flex w-1/2 gap-15 mt-5'>
                <a href='https://github.com/atharva486' className='border-2 rounded-xl p-3 transition-transform hover:scale-125 duration-900 hover:text-blue-300'><img src="/github.png"  className='w-full h-full' alt="Github" /></a>
                <a href='https://www.linkedin.com/in/atharva-ghogare-546160320/' className='border-2 rounded-xl p-3 transition-transform hover:scale-125 duration-900 hover:text-blue-300'><img src="/linkedin.png" alt="Linkedin" className='w-full h-full' /></a>
              </div>
            </div>
          </div>
          <div className=' flex flex-col gap-3 w-1/2 rounded-3xl border px-10 pt-5 pb-10 h-fit'>
            <p className=' px-3 font-semibold'>Send A Message</p>
            <form className='gap-5 flex flex-col' onSubmit={(e)=>send_email(e)} >
              <div className='flex flex-col gap-1'>
                <label value='name' className='px-2 text-lg'>Name</label>
                <input type="text" placeholder='Your Name' value={Name} onChange={(e)=>{insert_value_name(e)}} className='bg-zinc-800 rounded-3xl px-3 py-2' />
              </div>
              <div className='flex flex-col gap-1'>
                <label value='email' className='px-2 text-lg'>Email</label>
                <input type="email" placeholder='your.email@example.com' value={email} onChange={(e)=>{insert_value_email(e)}} className='bg-zinc-800 rounded-3xl px-3 py-2' />
              </div>
              <div className='flex flex-col gap-1'>
                <label value='Message' className='px-2 text-lg' >Message</label>
                <textarea onChange={(e)=>{insert_value_message(e)}}
                  ref={textareaRef}
                  onInput={handleInput}
                  rows={1}
                  value={message}
                  placeholder="Tell me about the project.."
                  className="bg-zinc-800 rounded-3xl px-3 py-2 w-full resize-none overflow-hidden text-white"
                />
              </div>
              <button type='submit' className=' px-3 py-2 mt-5 text-lg border rounded-2xl bg-gradient-to-r from-white to-white text-black hover:from-sky-600 hover:to-sky-800'>Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Contact
