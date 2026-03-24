import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import profile from "../../public/images/profile/liam2.jpg";
import { useInView, useMotionValue, useSpring, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import AnimatedText from "@/components/AnimatedText";
import TransitionEffect from "@/components/TransitionEffect";

function AnimatedNumberFramerMotion({ value }) {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [motionValue, value, isInView]);

  useEffect(
    () =>
      springValue.on("change", (latest) => {
        if (ref.current && latest.toFixed(0) <= value) {
          ref.current.textContent = latest.toFixed(0);
        }
      }),
    [springValue, value]
  );

  return <span ref={ref}>{value}</span>;
}

// ─── Age Counter ────────────────────────────────────────────────────────────
const BIRTHDAY = new Date("2005-05-19T00:00:00");

function getAge() {
  const now = new Date();
  const diff = now - BIRTHDAY;
  const years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
  const months = Math.floor((diff % (1000 * 60 * 60 * 24 * 365.25)) / (1000 * 60 * 60 * 24 * 30.44));
  const days = Math.floor((diff % (1000 * 60 * 60 * 24 * 30.44)) / (1000 * 60 * 60 * 24));
  return { years, months, days };
}

const AgeCounter = () => {
  const [age, setAge] = useState(getAge());
  useEffect(() => {
    const t = setInterval(() => setAge(getAge()), 1000 * 60 * 60);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="my-16 flex flex-col items-center gap-4" data-egg="age-counter" style={{ cursor: "default" }}>
      <h2 className="font-bold text-4xl text-center text-dark dark:text-light">Age</h2>
      <div className="flex gap-6 sm:gap-3">
        {[{ v: age.years, l: "years" }, { v: age.months, l: "months" }, { v: age.days, l: "days" }].map(({ v, l }) => (
          <motion.div
            key={l}
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-1 px-6 py-4 rounded-xl border border-solid border-dark/20 dark:border-light/20 min-w-[80px]"
          >
            <span className="text-4xl font-bold text-primary dark:text-primaryDark sm:text-3xl">{v}</span>
            <span className="text-xs text-dark/50 dark:text-light/50 uppercase tracking-widest">{l}</span>
          </motion.div>
        ))}
      </div>
      <p className="text-sm text-dark/50 dark:text-light/50">Born 19 May 2005 · Laholm, Sweden</p>
    </div>
  );
};


// ─── Schemas ─────────────────────────────────────────────────────────────────
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://liamkarlsson.com" },
    { "@type": "ListItem", position: 2, name: "About", item: "https://liamkarlsson.com/about" },
  ],
};

const profileSchema = {
  "@context": "https://schema.org",
  "@type": "ProfilePage",
  dateModified: "2026-03-01",
  mainEntity: {
    "@type": "Person",
    name: "Liam Karlsson",
    url: "https://liamkarlsson.com",
    image: "https://liamkarlsson.com/images/profile/liam2.jpg",
    jobTitle: "Co-founder & CEO at Rankad.ai | Founder of LK Innovations AB",
    description: "Swedish entrepreneur born 2005. Co-founder of Rankad.ai, an autonomous AI Search Optimization platform selected into The Residency San Francisco. Founder of LK Innovations AB, 50+ client projects delivered. Currently studying IT Security at Teknikhögskolan (2025–2027). Former Account Manager & IT Support Specialist at Axami Systems.",
    address: { "@type": "PostalAddress", addressLocality: "Laholm", addressCountry: "SE" },
    email: "business@liamkarlsson.com",
    telephone: "+46704818183",
    knowsAbout: ["AI Search Optimization", "AEO", "SEO", "React", "Next.js", "Node.js", "Cyber Security", "IT Security", "Network Security", "PHP", "MySQL", "Tailwind CSS", "Futures Trading"],
    sameAs: [
      "https://www.linkedin.com/in/liamkarlsson/",
      "https://rankad.ai",
      "https://lkinnovations.se",
    ],
    alumniOf: [
      { "@type": "EducationalOrganization", name: "Kattegatt Tech College", url: "https://kattegattgymnasiet.se" },
      { "@type": "EducationalOrganization", name: "Teknikhögskolan", url: "https://teknikhogskolan.se" },
      { "@type": "EducationalOrganization", name: "The Residency San Francisco", url: "https://theresidency.com" },
    ],
    founder: [
      { "@type": "Organization", name: "Rankad.ai", url: "https://rankad.ai" },
      { "@type": "Organization", name: "LK Innovations AB", url: "https://lkinnovations.se" },
    ],
  },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is Liam Karlsson's professional background?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Liam Karlsson is a Swedish entrepreneur born in 2005. He is co-founder and CEO of Rankad.ai, an autonomous AI search optimization platform selected into The Residency in San Francisco out of 3,500+ global applicants. He is also founder of LK Innovations AB, a web agency that has delivered 50+ projects with measurable SEO results. Previously he worked as Account Manager & IT Support Specialist at Axami Systems AB.",
      },
    },
    {
      "@type": "Question",
      name: "What is Rankad.ai and what does Liam Karlsson do there?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Rankad.ai is an autonomous AI Search Optimization platform that helps brands become the recommended answer inside ChatGPT, Gemini, and Perplexity on autopilot. Liam Karlsson co-founded Rankad.ai in September 2025 and serves as CEO. The company has been featured in Breakit and was selected into The Residency, San Francisco in 2026.",
      },
    },
    {
      "@type": "Question",
      name: "What is LK Innovations AB?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "LK Innovations AB is a Swedish web agency founded by Liam Karlsson in March 2024. It delivers custom websites, web development, and SEO for businesses. The agency has completed 50+ projects, achieved up to +1100% traffic increases for clients, and holds a 4.6 rating on Trustpilot.",
      },
    },
    {
      "@type": "Question",
      name: "Where did Liam Karlsson study?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Liam Karlsson studied Information and Media Technology at Kattegatt Tech College in Halmstad (2021–2024), graduating with 2800+ merit points. He is currently enrolled in the IT Security Specialist programme at Teknikhögskolan (2025–2027). In February 2026 he was selected as Founder in Residence at The Residency in San Francisco.",
      },
    },
    {
      "@type": "Question",
      name: "What certifications does Liam Karlsson hold?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Liam Karlsson holds 26+ professional certifications including: Google Cybersecurity Specialization, Cisco CCNAv7 (all three modules), Google AI Essentials, Microsoft Career Essentials in Cybersecurity, Certified Topstep Funded Trader, and Lovable Vibe Coding Platinum. See the full list on his achievements page.",
      },
    },
  ],
};

export async function getStaticProps() {
  return { props: {} };
}

export default function About() {
  return (
    <>
      <Head>
        <title>About Liam Karlsson – Co-founder of Rankad.ai & LK Innovations</title>
        <meta name="description" content="Liam Karlsson is a Swedish entrepreneur, co-founder of Rankad.ai and founder of LK Innovations AB (50+ projects, 4.6 Trustpilot). Selected Founder in Residence at The Residency, San Francisco 2026." />
        <meta property="og:title" content="About Liam Karlsson – Co-founder of Rankad.ai & LK Innovations" />
        <meta property="og:description" content="Swedish entrepreneur. Co-founder of Rankad.ai (AI search optimization). Founder of LK Innovations AB. Selected into The Residency San Francisco." />
        <meta property="og:type" content="profile" />
        <meta property="og:url" content="https://liamkarlsson.com/about" />
        <meta property="og:image" content="https://liamkarlsson.com/images/profile/liam2.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://liamkarlsson.com/about" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(profileSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </Head>
      <TransitionEffect />
      <main
        className={`flex  w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="Passion Fuels Purpose!"
            className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />

          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 
            md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                BIOGRAPHY
              </h2>
              <p className="font-medium">
                Hi, I&apos;m <strong>Liam Karlsson</strong> — Swedish entrepreneur born in 2005. I co-founded{" "}
                <a href="https://rankad.ai" target="_blank" rel="noopener nofollow" className="underline underline-offset-2">Rankad.ai</a>,
                {" "}an autonomous AI Search Optimization platform helping brands win inside ChatGPT, Gemini, and Perplexity. In 2026 we were selected into{" "}
                <strong>The Residency</strong> in San Francisco — one of 25 startups chosen from 3,500+ global applicants.
              </p>
              <p className="my-4 font-medium">
                I also founded{" "}
                <a href="https://lkinnovations.se" target="_blank" rel="noopener nofollow" className="underline underline-offset-2">LK Innovations AB</a>,
                {" "}a web agency delivering custom websites and SEO for 50+ clients with measurable results — up to +1100% traffic growth and a 4.6 Trustpilot rating.
              </p>
              <p className="font-medium">
                I started building client websites at 16, became a top sales performer at Key Solutions at 18, worked in IT security and account management at Axami Systems, and managed $80K+ in funded futures trading capital. I am currently studying IT Security at Teknikhögskolan (graduating 2027) and serve on the management board there, while also advising three junior entrepreneurship companies as a business advisor for Ung Företagsamhet.
              </p>
              <p className="my-4 font-medium">
                I move fast, build things that work, and help companies become visible where it matters — including inside AI assistants that are reshaping how people discover businesses.
              </p>
            </div>
            <div className="relative col-span-3 h-max rounded-2xl border-2 border-solid border-dark 
            bg-light p-8 dark:border-light dark:bg-dark
            xl:col-span-4 md:col-span-8 md:order-1
            ">
              <div
                className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%]  rounded-[2rem] rounded-br-3xl 
                bg-dark
        dark:bg-light  "
              />
              <Image
                className="h-auto w-full rounded-2xl"
                src={profile}
                alt="Liam Karlsson"
                data-egg="profile-photo"
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
                priority
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row 
            xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumberFramerMotion value={50} />+
                </span>
                <h2 className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75
                xl:text-center md:text-lg sm:text-base xs:text-sm">
                  satisfied clients
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumberFramerMotion value={50} />+
                </span>
                <h2 className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75
                xl:text-center md:text-lg sm:text-base xs:text-sm">
                  projects delivered
                </h2>
              </div>

              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumberFramerMotion value={5} />+
                </span>
                <h2 className="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75
                xl:text-center md:text-lg sm:text-base xs:text-sm">
                  years of experience
                </h2>
              </div>
            </div>
          </div>

          <AgeCounter />
          <Skills />
          <Experience />
          <Education />

          {/* FAQ Section — crawlable, schema-backed */}
          <section className="mt-32 w-full" aria-label="Frequently asked questions about Liam Karlsson">
            <h2 className="font-bold text-4xl w-full text-center mb-16">Frequently Asked Questions</h2>
            <dl className="space-y-8 max-w-3xl mx-auto">
              <div>
                <dt className="font-semibold text-xl text-dark dark:text-light">What is Liam Karlsson&apos;s professional background?</dt>
                <dd className="mt-2 text-dark/75 dark:text-light/75">Liam Karlsson is a Swedish entrepreneur born in 2005. He is co-founder and CEO of Rankad.ai (autonomous AI search optimization, selected into The Residency San Francisco), founder of LK Innovations AB (50+ client projects, 4.6 Trustpilot), and a former Account Manager & IT Support Specialist at Axami Systems AB.</dd>
              </div>
              <div>
                <dt className="font-semibold text-xl text-dark dark:text-light">What is Rankad.ai and what does Liam Karlsson do there?</dt>
                <dd className="mt-2 text-dark/75 dark:text-light/75">Rankad.ai is an autonomous AI Search Optimization platform helping brands win inside ChatGPT, Gemini, and Perplexity on autopilot. Liam co-founded it in September 2025 and serves as CEO. It has been covered by Breakit and was selected into The Residency San Francisco in 2026 out of 3,500+ applicants.</dd>
              </div>
              <div>
                <dt className="font-semibold text-xl text-dark dark:text-light">What is LK Innovations AB?</dt>
                <dd className="mt-2 text-dark/75 dark:text-light/75">LK Innovations AB is a Swedish web agency founded by Liam in March 2024. It delivers custom websites, SEO, and digital marketing for businesses — 50+ projects completed, up to +1100% traffic growth, 4.6 Trustpilot rating. See <Link href="/projects" className="underline underline-offset-2">client projects →</Link></dd>
              </div>
              <div>
                <dt className="font-semibold text-xl text-dark dark:text-light">Where did Liam Karlsson study?</dt>
                <dd className="mt-2 text-dark/75 dark:text-light/75">Kattegatt Tech College, Halmstad (Information and Media Technology, 2021–2024, 2800+ merit points). Currently studying IT Security at Teknikhögskolan (2025–2027). In 2026, selected as Founder in Residence at The Residency, San Francisco.</dd>
              </div>
              <div>
                <dt className="font-semibold text-xl text-dark dark:text-light">What certifications does Liam Karlsson hold?</dt>
                <dd className="mt-2 text-dark/75 dark:text-light/75">26+ certifications including Google Cybersecurity Specialization, Cisco CCNAv7 (all 3 modules), Google AI Essentials, Certified Topstep Funded Trader, and Lovable Vibe Coding Platinum. <Link href="/articles" className="underline underline-offset-2">View the full list →</Link></dd>
              </div>
            </dl>
          </section>

        </Layout>
      </main>
    </>
  );
}
