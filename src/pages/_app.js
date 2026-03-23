// pages/_app.js

import { SpeedInsights } from "@vercel/speed-insights/next";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-mont" });

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Liam Karlsson",
  url: "https://liamkarlsson.com",
  description: "Personal portfolio of Liam Karlsson — Swedish freelance web developer and cyber security specialist.",
  author: {
    "@type": "Person",
    name: "Liam Karlsson",
    url: "https://liamkarlsson.com",
    jobTitle: "Freelance Web Developer & Cyber Security Specialist",
    sameAs: [
      "https://www.linkedin.com/in/liamkarlsson/",
      "https://github.com/liamkarlsson"
    ],
  },
};

const siteNavSchema = {
  "@context": "https://schema.org",
  "@type": "SiteLinksSearchBox",
  url: "https://liamkarlsson.com",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://liamkarlsson.com/?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

export default function App({ Component, pageProps }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteNavSchema) }}
        />
      </Head>
      <SpeedInsights />
      <main
        className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen h-full`}
      >
        <Navbar />
        <AnimatePresence initial={false} mode="wait">
          <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
        <Footer />
      </main>
    </>
  );
}
