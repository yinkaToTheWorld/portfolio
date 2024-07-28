import profilePic from '../assets/pic.png' 
import {Link, Typography}  from '@mui/material/';



const About = () => {
    return(
<>

<div className="stage" style={{display:'flex', }}>
  <Typography style={{color:'#0c2461', fontSize:'60px', marginLeft:'17px'}}>Ọkín</Typography>
<figure class="ball"></figure>
</div>

    <div className='about-container' >
    
      <Typography variant='h5' className='info-msg'> 
      
        I am Ajibade Fawas Muhammad. 
        As a full-stack developer, I bring a unique blend of expertise
       in both frontend and backend technologies, allowing me to create seamless and
        dynamic web and mobile applications. With a passion for clean code
         and user-centric design and leveraging my skill in languages
           such as JavaScript, Python, Java, and other tools and technologies like Reactjs, React Native, Node.js 
            HTML, CSS, mongoDb, mongoose, mySql, and many more, i'm committed to continuous
             learning and staying updated with the latest industry trends. I 
              deliver high-quality solutions that exceed client expectations and contribute to the
               growth of their business.
   </Typography>


  <div className='details'>
    <img src={profilePic} className='info-img' alt="logo" />
   <button className='btn' ><Link style={{fontSize:'30px', color:'white', textDecoration:'none'}} href="https://flowcv.com/resume/mrnv4rhpdc"> View my cv</Link> </button>
   </div>

        </div>
   
         
      </>
       
    )    
    }
    export default About;