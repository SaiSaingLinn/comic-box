import React, { useRef, useEffect } from "react";
import Footer from "./footer";
import Header from "./header";
import Head from 'next/head'
import Router, { useRouter } from 'next/router'
import nProgress from "nprogress";
import 'nprogress/nprogress.css';
import 'slick-carousel/slick/slick-theme.css'
import 'slick-carousel/slick/slick.css'

const Layout = ({ children }, showAfterMs = 250, options = { minimum: 0.01, speed: 500 }) => {
  const router = useRouter();
  const showLayout = router.pathname === "/detail/chapter/[id]" ? false : true;
  const timer = useRef(null);

  const routeChangeStart = () => {
    clearTimeout(timer.current);
    timer.current = setTimeout(nProgress.start, showAfterMs);
  }

  const routeChangeEnd = () => {
    clearTimeout(timer.current);
    nProgress.done()
    window.scrollTo(0, 0)
  }

  useEffect(() => {
    if (options) {
      nProgress.configure(options);
    }

    Router.events.on("routeChangeStart", routeChangeStart);
    Router.events.on("routeChangeComplete", routeChangeEnd);
    Router.events.on("routeChangeError", routeChangeEnd);

    return () => {
      Router.events.on("routeChangeStart", routeChangeStart);
      Router.events.on("routeChangeComplete", routeChangeEnd);
      Router.events.on("routeChangeError", routeChangeEnd);
    }
  }, [showAfterMs, options]);

  return (
    <div className="content">
      <Head>
        {/* <link rel="icon" href="/favicon.png" /> */}
      </Head>
      {showLayout && <Header />}
        <main>
          { children }
        </main>
      {showLayout && <Footer />}
    </div> 
  );
}
 
export default Layout;