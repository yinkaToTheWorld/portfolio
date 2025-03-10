import {Typography, Link}  from'@mui/material/';
import XIcon from '@mui/icons-material/X';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';

const Contact = () => {
  const year = new Date().getFullYear()
return(
    
<>

    <div className='contact'>
      <div style={{display:"flex", gap:"1.3em", justifyContent:"center", marginBottom:''}}>
<Link  href='https://www.linkedin.com/in/fawas-ajibade-80aa56255' target="_blank" rel="noopener noreferrer"><LinkedInIcon style={{fill:'#0c2461', fontSize: '40px'}}/> </Link> 
 <Link href='https://twitter.com/yinka2dworld' target="_blank" rel="noopener noreferrer"> <XIcon style={{fill:'#0c2461', fontSize: '40px'}}/> </Link> 
  <Link href='https://github.com/yinka2dworld' target="_blank" rel="noopener noreferrer"> <GitHubIcon style={{fill:'#0c2461', fontSize: '40px'}}/> </Link>  
  <Link href="mailto:fawazmusty247@gmail.com" > <MailIcon style={{fill:'#0c2461', fontSize: '40px'}}/> </Link>
  <Link href="tel:+2347085812226" > <PhoneIcon style={{fill:'#0c2461', fontSize: '40px'}}/> </Link>
  </div>

<Typography style={{textAlign:'center', color:'#0c2461', fontSize:'15px' }} >&copy; {year} yinka2Dworld | All Rights Reserved.</Typography>
</div>

</>
   
)
}
export default Contact;