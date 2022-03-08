import Head from "next/head";
import Script from "next/script";
import Router from "next/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import "../styles/globals.scss";
import "../styles/_config.scss";
import "swiper/css";
import "swiper/css/bundle";
// import { useEffect } from "react";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());
NProgress.configure({ showSpinner: false });

function MyApp({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);

  // useEffect(() => {
  //   const images = document.querySelectorAll("img");

  //   images.forEach((image) => {
  //     image.setAttribute("loading", "lazy");
  //   });
  // });

  return getLayout(
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="" />
        <title>Cloudtician</title>
      </Head>

      <Script src="/fontawesome.js" />

      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
