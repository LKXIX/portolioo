import { HireMe } from "@/components/HireMe";
import { LinkArrow } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import profilePic from "../../public/images/profile/liam-hero.png";
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
        text: "For web development and freelance projects, email liam@rankad.ai. For Rankad.ai and AI search enquiries, email contact@rankad.ai or call +46 704 81 81 83. Connect on LinkedIn at linkedin.com/in/liamkarlsson.",
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
  url: "https://liamkarlsson.se",
  image: "https://liamkarlsson.se/images/profile/liam2.jpg",
  jobTitle: "Co-founder & CEO at Rankad.ai | Founder of LK Innovations AB",
  description: "Swedish entrepreneur born 2005. Co-founder of Rankad.ai (AI search optimization platform, selected into The Residency San Francisco). Founder of LK Innovations AB, delivering 50+ web and SEO projects. IT security specialist and futures trader.",
  address: { "@type": "PostalAddress", addressLocality: "Laholm", addressCountry: "SE" },
  email: "liam@rankad.ai",
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
        <meta property="og:url" content="https://liamkarlsson.se" />
        <meta property="og:image" content="https://liamkarlsson.se/images/profile/liam2.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Liam Karlsson – Rankad.ai & LK Innovations" />
        <meta name="twitter:description" content="Swedish entrepreneur. Co-founder of Rankad.ai. Founder of LK Innovations AB." />
        <meta name="twitter:image" content="https://liamkarlsson.se/images/profile/liam2.jpg" />
        <link rel="canonical" href="https://liamkarlsson.se" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </Head>

      <TransitionEffect />

      {/* Dot-grid background */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          backgroundImage:
            "radial-gradient(circle, rgba(120,120,140,0.13) 1.2px, transparent 1.2px)",
          backgroundSize: "20px 20px",
          backgroundPosition: "0 0",
        }}
      />
      {/* Diagonal accent lines — very subtle, like asics grid */}
      <div
        aria-hidden="true"
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 0,
          pointerEvents: "none",
          backgroundImage:
            "repeating-linear-gradient(45deg, rgba(120,120,140,0.035) 0px, rgba(120,120,140,0.035) 1px, transparent 1px, transparent 40px)",
        }}
      />

      <article className="relative flex min-h-screen items-start text-dark dark:text-light" style={{ zIndex: 1 }}>
        <Layout className="!pt-0 !pb-0 md:!pt-0 sm:!pt-0">

          {/* ── Magazine hero ── */}
          <div className="w-full">

            {/* Top label row */}
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center justify-between pt-6 pb-0 px-1"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-dark/30 dark:text-light/30">
                Gothenburg · San Francisco
              </span>
              <span className="flex items-center gap-2 text-xs font-medium text-dark/60 dark:text-light/60 border border-dark/10 dark:border-light/10 rounded-full px-3 py-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                Building Rankad.ai
              </span>
            </motion.div>

            {/* ── Stacked layout: names wrap the photo ── */}
            <div className="relative w-full" style={{ minHeight: "clamp(340px, 60vh, 640px)" }}>

              {/* LIAM — top left, overlaps photo */}
              <motion.h1
                initial={{ opacity: 0, x: -40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.05 }}
                className="absolute top-0 left-0 font-black uppercase leading-none text-dark dark:text-light select-none z-10 pointer-events-none"
                style={{ fontSize: "clamp(4rem, 14vw, 11rem)", letterSpacing: "-0.03em" }}
              >
                LIAM
              </motion.h1>

              {/* KARLSSON — bottom right, overlaps photo */}
              <motion.h1
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.05 }}
                className="absolute right-0 font-black uppercase leading-none text-dark dark:text-light select-none z-10 pointer-events-none"
                style={{ bottom: "-0.15em", fontSize: "clamp(4rem, 14vw, 11rem)", letterSpacing: "-0.03em" }}
              >
                KARLSSON
              </motion.h1>

              {/* Center photo — sits between the two names */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
              >
                <Image
                  src={profilePic}
                  alt="Liam Karlsson"
                  width={760}
                  height={1000}
                  className="w-auto object-contain object-bottom drop-shadow-2xl"
                  priority
                  style={{ height: "clamp(340px, 60vh, 640px)", marginBottom: "-2px" }}
                />
              </motion.div>

              {/* Left float — mid height */}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute left-0 z-20 sm:hidden"
                style={{ top: "50%", transform: "translateY(-50%)", maxWidth: "170px" }}
              >
                <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", fontSize: "1.05rem", lineHeight: 1.6, color: "inherit" }} className="text-dark/70 dark:text-light/70">
                  &ldquo;Whether you think you can, or think you can&apos;t &mdash;{" "}
                  <em style={{ fontStyle: "normal", borderBottom: "1px solid currentColor" }}>you&apos;re right.&rdquo;</em>
                </p>
              </motion.div>

              {/* Right float — mid height */}
              <motion.div
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="absolute right-0 z-20 text-right sm:hidden"
                style={{ top: "50%", transform: "translateY(-50%)", maxWidth: "170px" }}
              >
                <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic", fontSize: "1.05rem", lineHeight: 1.6 }} className="text-dark/70 dark:text-light/70">
                  Founder.<br />
                  <span style={{ position: "relative", display: "inline-block" }}>
                    Builder.
                    <motion.svg
                      viewBox="0 0 70 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      style={{ position: "absolute", bottom: "-4px", left: 0, width: "100%", height: "10px", overflow: "visible" }}
                      aria-hidden="true"
                    >
                      <motion.path
                        d="M2 6 C8 2, 16 9, 24 5 C32 1, 40 8, 48 4 C56 0, 63 7, 68 5"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        fill="none"
                        initial={{ pathLength: 0, opacity: 0 }}
                        animate={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 1, delay: 1.2, ease: "easeInOut" }}
                      />
                    </motion.svg>
                  </span><br />
                  20 years old.
                </p>
              </motion.div>

            </div>

            {/* CTAs + mobile description */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col items-center gap-3 mt-6"
            >
              {/* Mobile-only description */}
              <p className="hidden sm:block text-sm text-dark/50 dark:text-light/50 text-center max-w-xs leading-relaxed" style={{ fontFamily: "'Playfair Display', Georgia, serif", fontStyle: "italic" }}>
                Making brands the answer AI gives.
              </p>
              <div className="flex items-center gap-4">
                <Link
                  href="mailto:hi@liamkarlsson.se"
                  className="flex items-center gap-1.5 rounded-lg border-2 border-solid bg-dark px-5 py-2.5 text-sm font-semibold text-light hover:bg-transparent hover:text-dark dark:bg-light dark:text-dark dark:hover:bg-dark dark:hover:text-light transition-all duration-200"
                >
                  Contact me <LinkArrow className="!w-4" />
                </Link>
                <Link
                  href="/projects"
                  className="text-sm font-medium text-dark/50 dark:text-light/50 hover:text-dark dark:hover:text-light underline underline-offset-4 transition-colors"
                >
                  View my work
                </Link>
              </div>
            </motion.div>

            {/* AI Chat Widget */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-10 w-full max-w-2xl mx-auto"
            >
              <AIChatHero />
            </motion.div>

          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <LogoCloud logos={pressLogos} />
          </motion.div>

          {/* Cal.com inline embed */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            style={{ marginTop: "5rem" }}
          >
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
          </motion.div>

        </Layout>

        <HireMe />
        <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
          <Image className="relative h-auto w-full" src={lightBulb} alt="Liam Karlsson portfolio" />
        </div>
      </article>
    </>
  );
}
