import React, { useEffect, useState } from 'react'
import "./Meme.css"
import {motion} from 'framer-motion';

const Meme = () => {

    const [memes, setMemes] = useState([]);

    useEffect(() => {
      const options = {
        method: 'GET',
        headers: {
          'X-RapidAPI-Key': process.env.REACT_APP_API_KEY',
          'X-RapidAPI-Host': 'programming-memes-images.p.rapidapi.com'
        }
      };
  
      fetch('https://programming-memes-images.p.rapidapi.com/v1/memes', options)
        .then(response => response.json())
        .then(response => setMemes(response))
        .catch(err => console.error(err));
    }, []);
  
    return (
      <div className='mmain-body-chatgptt'>
        <div className="gallery-container">
            {memes.slice(0, 8).map(meme => (
            <motion.div key={meme.title} className="image-container div-img"
            initial={{x : -650}}
            animate={{x: 0}}
            transition={{type:'spring',stiffness:20}}
            >
                <img src={meme.image} alt={meme.title} className="imgg"/>
            </motion.div>
            ))}
        </div>
      </div>
  )
}

export default Meme
