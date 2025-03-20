import logo1 from '../assets/Okin5.png';
import logo2 from '../assets/Olomi.svg';
import logo3 from '../assets/Literalouge.png';
import logo4 from '../assets/jimasun.png';
import { Typography}  from '@mui/material/'; 



const Work = () => {
    return(
      <>
    <Typography variant='h3' className='title-work'>Works</Typography>

    <div className="work-div"  >
      
       <a className='work'  target="_blank" rel="noopener noreferrer"  href="https://okin.com.ng" >
      <img src={logo1} loading="lazy" style={{width:'150px', borderRadius:'100%', paddingTop:'10px'}} alt='work-img' />
    <Typography  style={{ fontSize:'16px', maxWidth:'250px', textAlign:'justify', padding:'15px', fontFamily:'Roboto, sans-serif'}} >
    Ọkín is the official website of a pioneering tech company dedicated to providing efficient digital
    solutions. It is multifaceted, efficient, and easy to use website application.
</Typography>
 </a>

 <a  className='work' href="https://afritroit.onrender.com" rel="noopener noreferrer"  target="_blank">
      <img src={logo4} loading="lazy" style={{width:'150px', borderRadius:'100%', paddingTop:'10px'}} alt='work-img' />
      <Typography  style={{fontSize:'16px', maxWidth:'250px', textAlign:'justify', padding:'15px', fontFamily:'Roboto, sans-serif'}} >
      Afritroit is a platform dedicated to encouraging citizens to take an active role in governance
      and democracy through articles, opinion pieces, and interactive forums
</Typography>
</a>

<a  className='work' href="https://olomi.onrender.com/" rel="noopener noreferrer"  target="_blank">
      <img src={logo2} loading="lazy" style={{width:'150px', borderRadius:'100%', paddingTop:'10px'}} alt='work-img' />
    <Typography  style={{fontSize:'16px', maxWidth:'250px', textAlign:'justify', padding:'15px', fontFamily:'Roboto, sans-serif'}} >
      Olomi is a software solution for users to place order and make payment for pure water to be
      delivered to the most remote locations in subharan Africa that are facing water scarcity.
</Typography>
</a>
 
 <a className='work' href="https://literalouge.onrender.com/" rel="noopener noreferrer"  target="_blank">
      <img src={logo3} loading="lazy" style={{width:'150px', borderRadius:'100%', paddingTop:'10px'}} alt='work-img' />
    <Typography  style={{fontSize:'16px', maxWidth:'250px', textAlign:'justify', padding:'15px', fontFamily:'Roboto, sans-serif'}} > 
    Literalouge is a website dedicated to preserving and promoting African languages by providing a
    collection of books written in various African languages.
</Typography>
</a>

    </div>
    
      </>  
    )}

    export default Work;