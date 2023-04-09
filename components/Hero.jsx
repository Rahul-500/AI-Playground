
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import "./Hero.css"
import icon from "../aboutImages/iconss.png"
import {motion} from 'framer-motion'

const Hero = () => {
  return (
    <>
      <motion.h5 className="iconnsss"
      initial={{x:50,opacity:0}}
      animate={{x:0,opacity:1}}
      transition={{type:'spring',stiffness:120,delay:6}}
      >Try it <img src={icon} alt="" /></motion.h5>
    <section className="herooo">
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <motion.h1 className=""
           initial ={{y:-250,opacity:0}}
           animate={{y:0,opacity:1}}
           transition={{type:'spring', stiffness:120,delay:5}}
           > 
            Hi, I'm <span className='text-[#915EFF]'>AI Playground</span>
          </motion.h1>
          <p className='para'>
          "Unlock Your Imagination with AI Playground!" <br className='sm:block hidden' />
          </p>
        </div>
      </div>
        <div className="model">
      <ComputersCanvas />
      </div>
      </section>
      </>
     )
}

export default Hero;