import { useNavigate } from "react-router-dom"

const Home = () => {
   const navigate = useNavigate();

      setTimeout(() => {
         navigate('/main')
      },6000)
      
    return(
<>
<svg  viewBox="100 100 2000 600" >
   <text x="55%" y="50%" dy=".35em" text-anchor="middle" className='svg-text'>yinka2Dworld</text>

</svg>  

      </>  
    )    
    }
    export default Home;