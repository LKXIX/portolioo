// pages/_app.js

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import StatusBar from "@/components/StatusBar";
import CursorTrail from "@/components/CursorTrail";
import EasterEgg from "@/components/EasterEgg";
import "@/styles/globals.css";
import { AnimatePresence } from "framer-motion";
import { Montserrat } from "next/font/google";
import Head from "next/head";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";

const SpotifyNowPlaying = dynamic(() => import("@/components/SpotifyNowPlaying"), { ssr: false });
const VisitorCounter = dynamic(() => import("@/components/VisitorCounter"), { ssr: false });
const SpeedInsights = dynamic(() => import("@vercel/speed-insights/next").then((m) => m.SpeedInsights), { ssr: false });

const montserrat = Montserrat({ subsets: ["latin"], variable: "--font-mont" });

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Liam Karlsson",
  url: "https://liamkarlsson.se",
  description: "Personal portfolio of Liam Karlsson — Swedish freelance web developer and cyber security specialist.",
  author: {
    "@type": "Person",
    name: "Liam Karlsson",
    url: "https://liamkarlsson.se",
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
  url: "https://liamkarlsson.se",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://liamkarlsson.se/?q={search_term_string}",
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
      <CursorTrail />
      <EasterEgg />
      <main
        className={`${montserrat.variable} font-mont bg-light dark:bg-dark w-full min-h-screen h-full`}
      >
        <StatusBar />
        <Navbar />
        <AnimatePresence initial={false} mode="wait">
          <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
        {/* Spotify + visitor counter in footer area */}
        <div className="flex flex-wrap items-center justify-center gap-4 py-4 px-8 border-t border-solid border-dark/5 dark:border-light/5">
          <SpotifyNowPlaying />
          <VisitorCounter />
        </div>
        <Footer />
      </main>
    </>
  );
}
