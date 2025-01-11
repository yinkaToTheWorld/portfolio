import profilePic from '../assets/pic.png' 
import {Link, Typography}  from '@mui/material/';
import { useState, useEffect } from 'react';


const About = () => {

  const fullText = `
  I am Ajibade Fawas Muhammad.
  As a versatile and passionate full-stack developer, I specialize in crafting seamless, dynamic, and user-centric web and mobile applications. 
  My expertise spans both frontend and backend development, enabling me to build solutions that integrate functionality with exceptional design.
  
  I have honed my skills in languages like JavaScript, Python, and Java, along with tools and frameworks such as React.js, React Native, Node.js, HTML, CSS, MongoDB, Mongoose, and MySQL, among others. 
  With a commitment to clean, efficient code and a focus on delivering outstanding user experiences, I ensure my work aligns with modern industry standards.

  Beyond technical proficiency, I am deeply committed to continuous learning, staying ahead of emerging trends, and leveraging innovative technologies to solve complex problems. 
  By delivering high-quality, scalable solutions, I aim to exceed client expectations and drive measurable growth for their businesses.
`;

const [displayedText, setDisplayedText] = useState("");
const [index, setIndex] = useState(0);

useEffect(() => {
  if (index < fullText.length) {
    const timer = setTimeout(() => {
      setDisplayedText((prev) => prev + fullText[index]);
      setIndex(index + 1);
    }, 50); 
    return () => clearTimeout(timer);
  }
}, [index, fullText]);


    return(
<>

<div className="stage" style={{display:'flex', }}>
  <Typography style={{color:'#0c2461', fontSize:'40px', marginLeft:'20px'}}>yinka2Dworld</Typography>
<figure class="ball"></figure>
</div>

    <div className='about-container' >
    
    <Typography variant="h5" className="info-msg">
      {displayedText}
    </Typography>
     
  <div className='details'>
    <img loading="lazy" src={profilePic} className='info-img' alt="logo" />
   <button className='btn' ><Link target="_blank" rel="noopener noreferrer" style={{fontSize:'30px', color:'white', textDecoration:'none'}} href="https://flowcv.com/resume/mrnv4rhpdc"> View my cv</Link> </button>
   </div>

        </div>
   
         
      </>
       
    ) }
    export default About;