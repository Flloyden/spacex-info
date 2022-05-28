import React from 'react';
import { FaArrowCircleUp } from 'react-icons/fa';

const ScrollButton = () => {
  /**
   * The 'scroll button' to help the user to reach the top of the page
   */

  const scrollToTop = () => {
    /**
   * Scrolling to top on click
   */
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className='fs-1 text-light'>
      <FaArrowCircleUp className="position-fixed bottom-0 end-0 m-4" onClick={scrollToTop} role='button' />
    </div>
  );
}

export default ScrollButton;