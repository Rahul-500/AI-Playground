import React, { useState } from 'react';
import "./ImageColor.css"
import {Watch} from "react-loader-spinner";
import {motion} from 'framer-motion';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {saveAs} from "file-saver"


function ImageColor() {
  const [colorImage, setColorImage] = useState(null);
  const [inputImage, setInputImage] = useState(null);
  const [iimm, setiimm] = useState("");
  const [loading, setLoading] = useState(false);


  const handleInputChange = (event) => {
    setInputImage(null);
    setiimm("");
    setInputImage(event.target.files[0]);
    setiimm(URL.createObjectURL(event.target.files[0]));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!inputImage) {
      toast.error('Please select black & white image.!', {
          position: toast.POSITION.TOP_CENTER,
          className: 'toast-message'
      });
      return;
    }

    setLoading(true);
    setColorImage(null)
    event.preventDefault();
    const formData = new FormData();
    formData.append('image_input', inputImage);

    const options = {
      method: 'POST',
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_API_KEY,
        'X-RapidAPI-Host': 'image-colorization2.p.rapidapi.com'
      },
      body: formData
    };

    fetch('https://image-colorization2.p.rapidapi.com/image_colorize', options)
      .then(response => response.blob())
      .then(blob => {
        setColorImage(URL.createObjectURL(blob));
        setLoading(false);
      })
      .catch(err => console.error(err));
  };

  const downloadImage = async () => {
    try {
        const response = await fetch(colorImage);
        const blob = await response.blob();
        saveAs(blob, 'aiImage.png');
      } catch (error) {
        console.error(error);
      }
  }

  return (

    <>

    <div className='main-body-chatgptt'>
        <motion.form onSubmit={handleSubmit} className="lefttt flexx lleeftt"
            initial={{x : -650}}
            animate={{x: 0}}
            transition={{type:'spring',stiffness:100}}
        >
          <div>
            <input
                className='textarea-111 input-upload tteeextarea-11'
                type="file"
                onChange={handleInputChange}
                ></input>

            <button type="submit" className="areaa btn-299 buttonnn">
                <span class = "text-container">
                    <span className='text'>Convert to Color</span>
                </span>
            </button>
            <ToastContainer/>
            </div>
            <div>
              {iimm &&  <img src={iimm} alt="Not Found" className='imagee'></img>}
            </div>
        </motion.form>
        {loading &&
        <motion.div className="righttt"
            initial={{x : -350}}
            animate={{x: 0}}
        >
            <div  className="loadinggg">
                {loading ? (<Watch color="peachpuff"  height="50" width="50"  ariaLabel='Loading'/>) : (<></>)}
            </div>
        </motion.div>
        }
        {colorImage &&
        <motion.div className="righttt"
            initial={{x : 80}}
            animate={{x: 0}}
            transition={{type:'spring',stiffness:100}}
        >
            {colorImage.length > 0 ? (<center className='loading-111'>
                <img src={colorImage} alt="Not Found" className='imageee'></img>
            </center>) : (<></>)}
            <button onClick={downloadImage} className="areaa btn-299 buttonnn extrass">
                <span class = "text-container">
                    <span className='text'>Download</span>
                </span>
            </button>
        </motion.div>
        }

    </div>

    </>
  );
}

export default ImageColor;
