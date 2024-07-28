import { useNavigate } from "react-router-dom"

const Home = () => {
   const navigate = useNavigate();

      setTimeout(() => {
         navigate('/main')
      },5000)
      
    return(
<>
<svg  viewBox="100 100 1600 600" >
   <text x="55%" y="50%" dy=".35em" text-anchor="middle" className='name1'>Ọkín</text>

</svg>  

      </>  
    )    
    }
    export default Home;