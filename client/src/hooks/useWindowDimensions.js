import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { basemapWidth, basemapHeight, navBarHeight } from '../utils/constants';
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  let left, top;
  if (width < basemapWidth) {
    left = 0;
  } else {
    left = (width - basemapWidth) / 2;
  }
  if (height < basemapHeight + navBarHeight) {
    top = navBarHeight;
  } else {
    top = (height - basemapHeight - navBarHeight) / 2 + navBarHeight;
  }
  return {
    left,
    top,
  };
}

export default function useWindowDimensions() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowDimensions;
}
