import React, {useState} from 'react';
import {FaArrowCircleUp} from 'react-icons/fa';
import { Button } from './Styles';

  
const ScrollButton = () =>{
  /*The 'scroll button' to help the user to reach the top of the page */
  
  const [setVisible] = useState(false)
  
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300){
      setVisible(true)
    } 
    else if (scrolled <= 300){
      setVisible(false)
    }
  };
  
  const scrollToTop = () =>{
    /*The 'scroll button' in action */
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      
    });
  };
  
  window.addEventListener('scroll', toggleVisible);
  
  return (
    <Button>
    <FaArrowCircleUp onClick={scrollToTop} class="m-2"
      />
   </Button>
    
  );
}
  
export default ScrollButton;