import React, { useState } from 'react'
import {Configuration, OpenAIApi} from "openai"
import "./ImageGen.css"
import {Watch} from "react-loader-spinner";
import {motion} from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ImageGen = () => {
    const [prompt, setPrompt] = useState("");
    const [image, setImage] = useState("");
    const [loading, setLoading] = useState(false);

    const configuration = new Configuration({
        apiKey: process.env.REACT_APP_API_KEY
    });
    const openai = new OpenAIApi(configuration);

    const generateAnswer = async() =>{

        if (!prompt) {
            toast.error('Enter the Question...!', {
                position: toast.POSITION.TOP_CENTER,
                className: 'toast-message'
            });
            return;
          }

        setImage("");
        setLoading(true);
        console.log(prompt);
        const response = await openai.createImage({
            prompt: prompt,
            n: 1,
            size: "1024x1024",
          });
          setImage(response.data.data[0].url);
        
        console.log(response);
        setLoading(false);
    }

  return (
    <>

    <div className='mainn-body-chatgptt'>

        <motion.div className="leftt"
            initial={{x : -650}}
            animate={{x: 0}}
            transition={{type:'spring',stiffness:100}}
        >
            <textarea
                className='textarea-11'
                required
                rows={4}
                columns={80}
                placeholder={"Enter your Prompt here to generate Image..."}
                onChange={(e)=> setPrompt(e.target.value)}
            ></textarea>

            <button onClick={generateAnswer} className="areaa btn-299 buttonn">
                <span class = "text-container">
                    <span className='text'>Send</span>
                </span>
            </button>
            <ToastContainer />
        </motion.div>

        {loading &&
        <motion.div className="rightt"
            initial={{x : -650}}
            animate={{x: 0}}
        >
            <div  className="loadingg">
                {loading ? (<Watch color="peachpuff"  height="50" width="50"  ariaLabel='Loading'/>) : (<></>)}
            </div>
        </motion.div>
        }
        {image.length > 0 &&
        <motion.div className="rightt"
            initial={{x : 80}}
            animate={{x: 0}}
            transition={{type:'spring',stiffness:100}}
        >
            {image.length > 0 ? (<center className='loading-11'>
                <img src={image} alt="Not Found" className='immaage'></img>
            </center>) : (<></>)}
        </motion.div>
        }

    </div>

    </>
  )
}

export default ImageGen
