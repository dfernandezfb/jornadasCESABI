import React from 'react'
import { useState, useEffect } from 'react';

const useMediaQuery = () => {
  const [dimension, setDimension] = useState({ height: 0, width: 0});
  const handleResize = () => {
    setDimension({
      height: window.innerHeight,
      width: window.innerWidth
    })
  }
  useEffect(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
  }, [])

  return dimension

}
 
export default useMediaQuery;