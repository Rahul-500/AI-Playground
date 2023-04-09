import React, { useRef } from 'react'
import "./Contact.css"
import emailjs from "@emailjs/browser"
import {motion} from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) =>{
        e.preventDefault();
        emailjs
        .sendForm(
            "service_0hmowhk",
            "template_qh7supw",
            form.current,
            "WdeO98MQ13EwBcJ6w"
        )
        .then(
            (result)=>{
                toast.success('Message Sent...!', {
                    position: toast.POSITION.TOP_CENTER,
                    className: 'toast-message'
                });
                console.log("message sent")
            },
            (error)=>{
                console.log(error.text);

            }
        );
    };

  return (
    <div className='abc'>
<motion.div className="container main-bbbodyyy-chatgpt backkkkk"
                initial={{x : -650}}
                animate={{x: 0}}
                transition={{type:'spring',stiffness:50}}
>
    <div className="content">
      <div className="image-box">
       <img src="https://www.blogtyrant.com/wp-content/uploads/2019/12/best-contact-us-pages-2.png" alt=""/> 
      </div>
    <form ref={form} onSubmit={sendEmail} className="formmm">
      <div className="topic">Send us a message</div>
      <div className="input-box">
        <input placeholder='Enter your Name' type="text" required name='user_name'/ >
        <label>Enter your name</label>
      </div>
      <div className="input-box">
        <input placeholder='Enter your mail' type="text" required name='user_email'/>
        <label>Enter your email</label>
      </div>
      <div className="message-box">
        <textarea 
            className='textareaaaa-11'
            required
            rows={4}
            columns={80}
            placeholder={"Enter your message here..."} name="message"  ></textarea>
      </div>
      <div className="input-box">
        <input type="submit" value="Send Message"/>
      </div>
      <ToastContainer />
    </form>
  </div>
  </motion.div>
  </div>
  )
}

export default Contact