import React from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';

const ScrollButton = () => {
  /**
   * The 'scroll button' to help the user to reach the top of the page
   */

  const scrollToTop = () => {
  /**
   * Scrolling to top when scrollbutton is clicked
   */
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
      /* This is the behavior of the scroll button */
    });
  };

  return (
    <div className='fs-1 text-light'>
      <FaArrowCircleUp className="position-fixed bottom-0 end-0 m-4" onClick={scrollToTop} role='button' />
    </div>
  );
}

export default ScrollButton;