import React, { useEffect } from 'react'
import ElevateAppBar from 'src/views/app-bar';
import { useRouter } from 'next/router';

const Header = () => {
  const router = useRouter();
  // postion fixed in chapter page and null in other page for full screen without scroll in mobile 
  useEffect(() => {
    if (router.pathname === '/detail/chapter/[id]') {
      if (typeof window !== "undefined") {
      // Client-side-only code
        document.body.style.cssText = `
          width: 100%; 
          position: fixed; 
          overflow-y: scroll; 
          -webkit-overflow-scrolling: touch; 
          top: 0; 
          left: 0;
          height: 100%;
          height: -moz-available;
          height: -webkit-fill-available;
          height: fill-available;
          height: stretch;
        `;
      }
    } else {
      if (typeof window !== "undefined") {
        document.body.style.cssText = `
          position: relative;
        `;
      }
    }
    if (typeof window !== "undefined") {
      // Client-side-only code
      // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
      let vh = window.innerHeight * 0.01;
      // Then we set the value in the --vh custom property to the root of the document
      document.documentElement.style.setProperty('--vh', `${vh}px`);
    }
    if (typeof window !== "undefined") {
      // Client-side-only code
      // We listen to the resize event
      window.addEventListener('resize', () => {
        // We execute the same script as before
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);
      });
    }
  }, [router.pathname])

  return (
    <ElevateAppBar />
  );
}

export default Header;