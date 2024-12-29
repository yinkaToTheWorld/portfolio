import logo1 from '../assets/Okin5.png';
import logo2 from '../assets/Olomi.svg';
import logo3 from '../assets/Literalouge.png';
import { Typography,}  from '@mui/material/'; 



const Work = () => {
    return(
      <>
    <Typography variant='h3' className='title-work'>Works</Typography>

    <div className="work-div"  > 

<a className='work' href="https://literalouge.onrender.com" rel="noopener noreferrer"  target="_blank">
      <img src={logo3} style={{width:'250px', borderRadius:'100%'}} alt='work-img' />
    <Typography  style={{fontSize:'18px', color:'#0c2461', maxWidth:'400px',  fontFamily:'Roboto, sans-serif'}} > 
    Literalouge is software platform that provides access to literature works in local african languages  
    and a podium for users to outline thier views and opinions on the works.
</Typography>
</a>


<a  className='work' href="https://olomi.onrender.com/" rel="noopener noreferrer"  target="_blank">
      <img src={logo2} style={{width:'250px', borderRadius:'100%'}} alt='work-img' />
    <Typography  style={{fontSize:'18px', maxWidth:'400px', color:'#0c2461', fontFamily:'Roboto, sans-serif'}} >
      Olomi is a software solution for users to place order and make payment for pure water to be
      delivered to the most remote locations in subharan Africa that are facing water scarcity.
</Typography>
</a>

  <a className='work' target="_blank" rel="noopener noreferrer"  href="https://okin.onrender.com" >
      <img src={logo1} style={{width:'250px', borderRadius:'100%'}} alt='work-img' />
    <Typography  style={{ fontSize:'18px', maxWidth:'400px',  color:'#0c2461', fontFamily:'Roboto, sans-serif'}} >
    Ọkín is the official website of a pioneering tech company dedicated to providing efficient digital
    solutions. It is multifaceted, efficient, and easy to use website application.
</Typography>
 </a>
    </div>
    
      </>  
    )}

    export default Work;