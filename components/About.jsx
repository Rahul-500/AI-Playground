import React from 'react'
import "./About.css"
import {motion} from 'framer-motion';
import rahul from "../aboutImages/Rahul.jpg"
import sai from "../aboutImages/Sai.jpg"
import praveen from "../aboutImages/praveen.jpeg"

const About = () => {
  return (
    <motion.div
    initial={{x : -750}}
    animate={{x: 0}}
    transition={{type:'spring',stiffness:28}}
    >
       <h1 style={{color: "white"}}>DEV TEAM</h1>
    <h2 className="h2" style={{fontFamily: 'cursive'}}>"We are a team of innovators and dreamers dedicated to ai playground that sparks creativity and exploration "</h2>
    <ul className="wrapper">
        <li className="box">
            <div className="img-area">
                <img src={rahul} alt="demo"/>
                
            </div>
            <h4>Rahul Patil</h4>
            <div className="iiiiiimage">
                <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/rahul-patil-95b010224/"><img src="https://static-00.iconduck.com/assets.00/linkedin-icon-512x512-vkm0drb1.png" alt="" /></a>
                <a target="_blank" rel='noreferrer'href="https://www.instagram.com/rahul_patil_33_/?next=%2F" ><img src="https://cdn.pixabay.com/photo/2018/11/13/22/01/instagram-3814080__340.png" alt=""/></a>
                <a target="_blank" rel='noreferrer' href="https://github.com/Rahul-500" ><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCbmLVIGyVVDqk_7ey7S1UbliLmqOHVMXJJA&usqp=CAU" alt=""/></a>
            </div>
            
           
        </li>
        <li className="box">
            <div className="img-area">
                <img src={praveen} alt="demo"/>           
            </div>
            <h4>Praveen Jugal</h4>
            <div className="iiiiiimage">
            <a target="_blank" rel='noreferrer' href="http://www.linkedin.com/in/praveen-jugal-50427a20a/?originalSubdomain=in"><img src="https://static-00.iconduck.com/assets.00/linkedin-icon-512x512-vkm0drb1.png" alt=""/></a>
            <a target="_blank" rel='noreferrer' href="https://instagram.com/prav_752?igshid=YmMyMTA2M2Y=" ><img src="https://cdn.pixabay.com/photo/2018/11/13/22/01/instagram-3814080__340.png" alt=""/></a>
            <a target="_blank" rel='noreferrer' href="https://github.com/prav752" ><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCbmLVIGyVVDqk_7ey7S1UbliLmqOHVMXJJA&usqp=CAU" alt=""/></a>
            </div>

        </li>
        <li className="box">
            <div className="img-area">
                <img src={sai} alt="demo"/>               
            </div>
            <h4>Saidarshan Benagi</h4>
            <div className="iiiiiimage">
                <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/saidarshan-benagi-700315205/"><img src="https://static-00.iconduck.com/assets.00/linkedin-icon-512x512-vkm0drb1.png" alt=""/></a>
                <a target="_blank" rel='noreferrer' href="https://www.instagram.com/benagi_saidarshan_22/" ><img src="https://cdn.pixabay.com/photo/2018/11/13/22/01/instagram-3814080__340.png" alt=""/></a>
                <a target="_blank" rel='noreferrer' href="" ><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCbmLVIGyVVDqk_7ey7S1UbliLmqOHVMXJJA&usqp=CAU" alt=""/></a>
            </div>

        </li>
    </ul>
    </motion.div>
  )
}

export default About
