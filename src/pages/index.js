import { HireMe } from "@/components/HireMe";
import { LinkArrow } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import TransitionEffect from "@/components/TransitionEffect";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import { LogoCloud } from "@/components/ui/logo-cloud";

const AIChatHero = dynamic(
  () => import("@/components/ui/v0-ai-chat").then((m) => m.AIChatHero),
  { ssr: false }
);

const pressLogos = [
  {
    alt: "Hallandsposten",
    href: "https://www.hallandsposten.se/hallands-affarer/liam-karlsson-fran-veinge-jagar-drommen-i-silicon-valley.f089823e-ee42-4222-90a2-0dc97333bde3",
    src: "/images/press/hallandsposten.png",
  },
  {
    alt: "Breakit",
    href: "https://www.breakit.se/artikel/45777/ai-mode-och-lovable-for-hardvara-har-ar-de-senaste-bolagen-i-breakits-varld",
    src: "/images/press/breakit.png",
  },
  {
    alt: "Skaraborgs Allehanda",
    href: "https://www.sla.se/2026/03/12/tibrosonen-i-silicon-valley-vaga-dromma-oerhort-stort-6f864/",
    src: "/images/press/sla.png",
  },
  {
    alt: "Sveriges Radio",
    href: "https://sverigesradio.se",
    src: "/images/press/sverigesradio.png",
  },
  {
    alt: "Laholms Tidning",
    href: "https://www.laholmstidning.se",
    src: "/images/press/laholmstidning.png",
  },
  {
    alt: "Yuncture",
    href: "https://www.yuncture.com/news/20-och-23-aringarna-bakom-rankad-antagna-till-silicon-valleys-the-residency",
    src: "/images/press/yuncture.svg",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Who is Liam Karlsson?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Liam Karlsson is a Swedish entrepreneur and co-founder of Rankad.ai, an autonomous AI search optimization platform. He is also the founder of LK Innovations AB, a web agency that has delivered 50+ websites and SEO projects. Born in 2005 and based in Sweden, he has been selected as a Founder in Residence at The Residency in San Francisco.",
      },
    },
    {
      "@type": "Question",
      name: "What is Rankad.ai?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Rankad.ai is an autonomous AI Search Optimization platform co-founded by Liam Karlsson. It helps brands become the recommended answer inside ChatGPT, Gemini, and Perplexity on autopilot. Rankad.ai was selected into The Residency in San Francisco out of 3,500+ applicants globally.",
      },
    },
    {
      "@type": "Question",
      name: "What is LK Innovations?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "LK Innovations AB is a Swedish web agency founded by Liam Karlsson in March 2024. It has delivered websites and SEO for 50+ clients, achieving up to +1100% traffic increases. The agency holds a 4.6 rating on Trustpilot and is based in Laholm, Sweden.",
      },
    },
    {
      "@type": "Question",
      name: "How can I contact Liam Karlsson?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "For web development and freelance projects, email business@liamkarlsson.com. For Rankad.ai and AI search enquiries, email contact@rankad.ai or call +46 704 81 81 83. Connect on LinkedIn at linkedin.com/in/liamkarlsson.",
      },
    },
    {
      "@type": "Question",
      name: "What technologies does Liam Karlsson work with?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Liam Karlsson works with React, Next.js, Node.js, Tailwind CSS, PHP, MySQL, and modern AI tools. He specialises in SEO, AEO (Answer Engine Optimization), web performance, and AI-driven search visibility.",
      },
    },
  ],
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Liam Karlsson",
  url: "https://liamkarlsson.com",
  image: "https://liamkarlsson.com/images/profile/liam2.jpg",
  jobTitle: "Co-founder & CEO at Rankad.ai | Founder of LK Innovations AB",
  description: "Swedish entrepreneur born 2005. Co-founder of Rankad.ai (AI search optimization platform, selected into The Residency San Francisco). Founder of LK Innovations AB, delivering 50+ web and SEO projects. IT security specialist and futures trader.",
  address: { "@type": "PostalAddress", addressLocality: "Laholm", addressCountry: "SE" },
  email: "business@liamkarlsson.com",
  telephone: "+46704818183",
  sameAs: [
    "https://www.linkedin.com/in/liamkarlsson/",
    "https://rankad.ai",
    "https://lkinnovations.se",
  ],
  knowsAbout: ["AI Search Optimization", "AEO", "SEO", "Web Development", "React", "Next.js", "Node.js", "Cyber Security", "Futures Trading"],
  founder: [
    { "@type": "Organization", name: "Rankad.ai", url: "https://rankad.ai" },
    { "@type": "Organization", name: "LK Innovations AB", url: "https://lkinnovations.se" },
  ],
};

export async function getStaticProps() {
  return { props: {} };
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Liam Karlsson – Co-founder of Rankad.ai & Founder of LK Innovations</title>
        <meta name="description" content="Liam Karlsson is a Swedish entrepreneur, co-founder of Rankad.ai (AI search optimization) and founder of LK Innovations AB. Selected Founder in Residence at The Residency, San Francisco." />
        <meta property="og:title" content="Liam Karlsson – Co-founder of Rankad.ai & Founder of LK Innovations" />
        <meta property="og:description" content="Swedish entrepreneur. Co-founder of Rankad.ai. Founder of LK Innovations AB. Selected into The Residency, San Francisco." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://liamkarlsson.com" />
        <meta property="og:image" content="https://liamkarlsson.com/images/profile/liam2.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Liam Karlsson – Rankad.ai & LK Innovations" />
        <meta name="twitter:description" content="Swedish entrepreneur. Co-founder of Rankad.ai. Founder of LK Innovations AB." />
        <meta name="twitter:image" content="https://liamkarlsson.com/images/profile/liam2.jpg" />
        <link rel="canonical" href="https://liamkarlsson.com" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </Head>

      <TransitionEffect />
      <article className="flex min-h-screen items-center text-dark dark:text-light sm:items-start">
        <Layout className="!pt-0 md:!pt-16 sm:!pt-16">

          {/* Centered hero */}
          <div className="flex flex-col items-center text-center w-full max-w-3xl mx-auto">

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="py-2 text-dark dark:text-light text-6xl font-bold capitalize xl:text-5xl md:text-4xl sm:text-3xl"
            >
              Liam Karlsson
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 text-base text-dark/60 dark:text-light/60 leading-relaxed max-w-xl"
            >
              I co-founded{" "}
              <a href="https://rankad.ai" target="_blank" rel="noopener nofollow" className="text-dark dark:text-light font-medium hover:underline underline-offset-2">Rankad.ai</a>
              {" "}— an AI search optimization platform helping brands become the answer inside ChatGPT, Gemini, and Perplexity. Selected into{" "}
              <span className="text-dark dark:text-light font-medium">The Residency, San Francisco</span>{" "}
              out of 3,500+ global applicants. I also run{" "}
              <a href="https://lkinnovations.se" target="_blank" rel="noopener nofollow" className="text-dark dark:text-light font-medium hover:underline underline-offset-2">LK Innovations</a>
              {" "}— 50+ web &amp; SEO projects delivered.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-8 flex items-center justify-center gap-4 flex-wrap"
            >
              <Link
                href="mailto:business@liamkarlsson.com"
                className="flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-base font-semibold
                  text-light hover:border-dark hover:bg-transparent hover:text-dark
                  dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
                  transition-all duration-200 md:p-2 md:px-4"
              >
                Get in Touch <LinkArrow className="ml-1 !w-5" />
              </Link>
              <Link
                href="/projects"
                className="text-base font-medium text-dark/60 dark:text-light/60 hover:text-dark dark:hover:text-light underline underline-offset-4 transition-colors"
              >
                View my work
              </Link>
            </motion.div>

            {/* AI Chat Widget */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-12 w-full"
            >
              <AIChatHero />
            </motion.div>

          </div>

          <LogoCloud logos={pressLogos} />

          {/* Cal.com inline embed */}
          <div style={{ marginTop: "5rem" }}>
            <p style={{
              fontSize: "0.65rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: "0.15em",
              textAlign: "center",
              marginBottom: "1.5rem",
              color: "rgba(130,130,130,0.8)",
            }}>
              Book a quick call
            </p>
            <div
              id="my-cal-inline-quick-chat-liam"
              style={{ width: "100%", height: "600px", overflow: "scroll", borderRadius: "1rem", border: "1px solid rgba(255,255,255,0.07)" }}
            />
            <Script
              id="cal-embed"
              strategy="lazyOnload"
              dangerouslySetInnerHTML={{
                __html: `
                  (function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if(typeof namespace === "string"){cal.ns[namespace] = cal.ns[namespace] || api;p(cal.ns[namespace], ar);p(cal, ["initNamespace", namespace]);} else p(cal, ar); return;} p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
                  Cal("init", "quick-chat-liam", {origin:"https://app.cal.com"});
                  Cal.ns["quick-chat-liam"]("inline", {
                    elementOrSelector:"#my-cal-inline-quick-chat-liam",
                    config: {"layout":"month_view","useSlotsViewOnSmallScreen":"true"},
                    calLink: "rankad/quick-chat-liam",
                  });
                  Cal.ns["quick-chat-liam"]("ui", {"cssVarsPerTheme":{"light":{"cal-brand":"#6366f1"},"dark":{"cal-brand":"#6366f1"}},"hideEventTypeDetails":false,"layout":"month_view"});
                `,
              }}
            />
          </div>

        </Layout>

        <HireMe />
        <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
          <Image className="relative h-auto w-full" src={lightBulb} alt="Liam Karlsson portfolio" />
        </div>
      </article>
    </>
  );
}
