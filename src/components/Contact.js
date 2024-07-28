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
      <div style={{display:"flex", gap:"1em", justifyContent:"center"}}>
<Link  href='https://www.linkedin.com/in/fawas-ajibade-80aa56255' target="_blank"><LinkedInIcon style={{fill:'#0c2461', fontSize: '60px'}}/> </Link> 
 <Link href='https://twitter.com/okin_tech' target="_blank"> <XIcon style={{fill:'#0c2461', fontSize: '50px'}}/> </Link> 
  <Link href='https://github.com/yinkaToTheWorld' target="_blank"> <GitHubIcon style={{fill:'#0c2461', fontSize: '50px'}}/> </Link>  
  <Link href="mailto:fawazmusty247@gmail.com" > <MailIcon style={{fill:'#0c2461', fontSize: '50px'}}/> </Link>
  <Link href="tel:+2347085812226" > <PhoneIcon style={{fill:'#0c2461', fontSize: '50px'}}/> </Link>
  </div>

<Typography style={{textAlign:'center', color:'#0c2461', fontSize:'20px' }} >&copy; {year} <a href="" style={{textDecoration:'none', color:'#0c2461'}}>Okin Technologies.</a> All Rights Reserved.</Typography>
</div>

</>
   
)
}
export default Contact;