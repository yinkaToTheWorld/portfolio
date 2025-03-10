import {Typography,}  from '@mui/material/'; 



const Edu = () => {
    return(
      <>

      <Typography className='title-edu' variant='h3'>Education & Experience</Typography>


    <div className="edu-div">

    <a href='https://www.inecnigeria.org/' target="_blank" rel="noopener noreferrer" className='edu' ><br/><br/>
    <Typography  variant='body1'>2022</Typography><br/>
    <Typography style={{color:'#74F38F'}} variant='h5'>Data collection & managment</Typography><br/><br/><br/>
    <Typography  variant='body1'>INEC headquaters Kaduna</Typography><br/><br/><br/>
    </a>
   
    <a href='https://ihifix.com/' target="_blank" rel="noopener noreferrer" className='edu' ><br/><br/>
    <Typography  variant='body1'>2023</Typography><br/>
    <Typography style={{color:'#74F38F'}} variant='h5'>Backend Engineering</Typography><br/><br/><br/>
    <Typography  variant='body1'>Ihifix technologies</Typography><br/><br/><br/>
    </a>

    <a href='https://auk.edu.ng/' target="_blank" rel="noopener noreferrer" className='edu' ><br/><br/>
    <Typography  variant='body1'>2023</Typography><br/>
    <Typography style={{color:'#74F38F'}} variant='h5'>BSc. Software Engineering</Typography><br/><br/><br/>
    <Typography  variant='body1'>Al-Qalam university katsina</Typography><br/><br/><br/>
    </a>

    </div>
   
      </>  
    )    
    }
    export default Edu;