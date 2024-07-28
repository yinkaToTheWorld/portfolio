import logo1 from '../assets/CodeX.png';
import logo2 from '../assets/Mairuwa.png';
import logo3 from '../assets/Literalouge.png';
import { Typography,}  from '@mui/material/'; 



const Work = () => {
    return(
      <>

    <Typography variant='h3' className='title-work'>Works</Typography>

    <div className="edu-div"  >
    <a  className='work' href="https://deenx-frontend.onrender.com" target="_blank">
      <img src={logo1} style={{width:'250px', borderRadius:'100%'}} alt='work-img' />
    <Typography variant='h4' ><strong style={{ color:'white'}}> CodeX</strong> </Typography>
    <Typography  style={{ fontSize:'18px', maxWidth:'400px',  color:'#0c2461', fontFamily:'Roboto, sans-serif'}} >
    CodeX is a lifestyle blogsite that contains alot of articles that depicts   
    different aspects and diciplines in the tech world from a simple, intresting and concise perspective.
</Typography>
    </a>

    <a  className='work' href="https://mairuwa.onrender.com" target="_blank">
      <img src={logo2} style={{width:'250px', height:'250px',}} alt='work-img' />
    <Typography variant='h4' ><strong style={{ color:'white'}}>Mairuwa</strong> </Typography>
    <Typography  style={{fontSize:'18px', maxWidth:'400px', color:'#0c2461', fontFamily:'Roboto, sans-serif'}} >
      Mairuwa is a software solution for users to place order and make payment for pure water to be
       delivered to them from the comfort of their home within the shortest time possible.
</Typography>
</a>

<a  className='work' href="https://literalouge.onrender.com" target="_blank">
      <img src={logo3} style={{width:'250px', borderRadius:'100%'}} alt='work-img' />
    <Typography variant='h4' ><strong style={{ color:'white'}}>Literalouge</strong> </Typography>
    <Typography  style={{fontSize:'18px', color:'#0c2461', maxWidth:'400px',  fontFamily:'Roboto, sans-serif'}} > 
    Literalouge is software platform that provides access to literature works in local african languages  
    and a podium for users to outline thier views and opinions on the works.
</Typography>
</a>
    </div>
    
      </>  
    )    
    }
    export default Work;