import Home from '../Home/Home';
import Testimonial from '../Testimonial/Testimonial';
import ContactMe from "../ContactMe/MainCard";
import { useEffect } from 'react';

function Everything() {
    useEffect(() => {
        // Get the hash from the URL
        const hash = window.location.hash;
    
        if (hash !== '') {
          // Find the target div using the hash
          const target = document.getElementById(hash.substr(1));
    
          if (target) {
            const topOffset = target.offsetTop - 200;
            window.scrollTo({ top: topOffset, behavior: 'smooth' });
          }
        }
      }, []);
  return (
    <div>
      <Home/>
      <Testimonial/>
      <ContactMe/> 
    </div>
  );
}

export default Everything;
