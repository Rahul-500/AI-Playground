import React, { useState } from 'react'
import {Configuration, OpenAIApi} from "openai"
import "./ChatGPT.css"
import {Watch} from "react-loader-spinner";
import {motion} from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import CopyToClipboard from 'react-copy-to-clipboard';

const ChatGPT = () => {
    const [question, setQuestion] = useState("");
    const [answer, setAnswer] = useState("");
    const [loading, setLoading] = useState(false);

    const configuration = new Configuration({
        apiKey: "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"
    });
    const openai = new OpenAIApi(configuration);

    const copyToClip = ()=>{
        toast.success('Copied to Clipboard..!', {
            position: toast.POSITION.TOP_CENTER,
            className: 'toast-message'
        });
    }

    const generateAnswer = async() =>{
        if (!question) {
            toast.error('Enter the Question...!', {
                position: toast.POSITION.TOP_CENTER,
                className: 'toast-message'
            });
            return;
          }
        setAnswer("");
        setLoading(true);
        const response = await openai.createCompletion({
            model : "text-davinci-003",
            prompt: question,
            temperature: 0.3,
            max_tokens: 3500,
            top_p: 1.0,
            frequency_penalty: 0.0,
            presence_penalty: 0.0,
        });
        
        setAnswer(response.data.choices[0].text);
        setLoading(false);
    }

  return (
    <div className='main-body-chatgpt'>

        <motion.div className="subbb"
            initial={{x : -650}}
            animate={{x: 0}}
            transition={{type:'spring',stiffness:100}}
            >
            <textarea
                className='textarea-1'
                required
                rows={4}
                columns={80}
                placeholder={"Enter your question here..."}
                onChange={(e)=> setQuestion(e.target.value)}
                ></textarea>

            <button onClick={generateAnswer} className="area btn-29 button">
                <span class = "text-container">
                    <span className='text'>Send</span>
                </span>
            </button>
            <ToastContainer />
        </motion.div>
        {loading &&
        <motion.div className="right"
            initial={{x : -650}}
            animate={{x: 0}}
        >
            <div  className="loading">
                {loading ? (<Watch color="peachpuff"  height="50" width="50"  ariaLabel='Loading'/>) : (<></>)}
            </div>
        </motion.div>
        }
        {answer.length > 0 &&
        <motion.div className="right"
            initial={{x : 80}}
            animate={{x: 0}}
            transition={{type:'spring',stiffness:100}}
        >
            {answer.length > 0 ? (<center className='loading-1'>
                <textarea id="textarea"  cols="42" rows="15" value={answer} className='textarea-2'
                required></textarea>
            </center>) : (<></>)}
            <CopyToClipboard text={answer}>
                <button onClick={copyToClip} className="area btn-29 button exxttrass">
                    <span class = "text-container">
                        <span className='text'>Copy</span>
                    </span>
                </button>
            </CopyToClipboard>
        </motion.div>
        }
    </div>
  )
}

export default ChatGPT
