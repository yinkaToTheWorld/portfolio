import {Typography, Link }  from '@mui/material/';
const Notfound = () => {
    return(
<div className="404">
<Typography variant='h2' style={{ marginLeft:'100px', marginTop:'200px', color:'red'}}><strong>Page not Found !</strong> </Typography><br/>
<Link href='/'> <h1 style={{ marginLeft:'170px', }}>...Go to home page...</h1></Link>
</div>
    )
}
export default Notfound;