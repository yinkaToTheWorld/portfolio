import About from './components/About';
import Contact from './components/Contact';
import Edu from './components/Edu';
import Work from './components/Work';


export default function Page (params) {
   return(
   <div>
        <About/>
        <Work/>
        <Edu/>
        <Contact/>
    </div>
)}