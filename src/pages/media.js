import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import TransitionEffect from "@/components/TransitionEffect";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

// Press logos / placeholder images — use a generic press image if no specific one exists
import pressHP from "../../public/images/profile/liam2.jpg";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://liamkarlsson.com" },
    { "@type": "ListItem", position: 2, name: "Media", item: "https://liamkarlsson.com/media" },
  ],
};

const pageSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Press & Media – Liam Karlsson",
  url: "https://liamkarlsson.com/media",
  description: "Press coverage and media mentions of Liam Karlsson, co-founder of Rankad.ai and founder of LK Innovations AB. Featured in Hallandsposten, Breakit, Skaraborgs Allehanda, and Yuncture.",
  dateModified: "2026-03-17",
  author: { "@type": "Person", name: "Liam Karlsson", url: "https://liamkarlsson.com" },
};

const pressArticles = [
  {
    publication: "Hallandsposten",
    title: "Liam Karlsson från Veinge jagar drömmen i Silicon Valley",
    date: "March 11, 2026",
    summary: "Hallandsposten covers 20-year-old Liam Karlsson from Veinge chasing his startup dream in Silicon Valley, building an AI search technology company at The Residency in San Francisco.",
    link: "https://www.hallandsposten.se/hallands-affarer/liam-karlsson-fran-veinge-jagar-drommen-i-silicon-valley.f089823e-ee42-4222-90a2-0dc97333bde3",
    tag: "Feature",
  },
  {
    publication: "Breakit",
    title: "AI, mode och Lovable för hårdvara – här är de senaste bolagen i Breakits värld",
    date: "March 17, 2026",
    summary: "Rankad.ai featured in Breakit's Startupkollen as one of Sweden's startups to watch — listed among the latest companies building in AI, fashion, and hardware.",
    link: "https://www.breakit.se/artikel/45777/ai-mode-och-lovable-for-hardvara-har-ar-de-senaste-bolagen-i-breakits-varld",
    tag: "Startup Feature",
  },
  {
    publication: "Skaraborgs Allehanda",
    title: "Tibrosonen i Silicon Valley: \"Våga drömma oerhört stort\"",
    date: "March 12, 2026",
    summary: "The story of Rankad.ai's journey to Silicon Valley, featuring co-founder William Gyltman and the team's selection into The Residency out of 3,600 global applicants.",
    link: "https://www.sla.se/2026/03/12/tibrosonen-i-silicon-valley-vaga-dromma-oerhort-stort-6f864/",
    tag: "Feature",
  },
  {
    publication: "Yuncture",
    title: "20- och 23-åringarna bakom Rankad antagna till Silicon Valleys The Residency",
    date: "March 4, 2026",
    summary: "Yuncture covers how Liam Karlsson (20) and William Gyltman (23) built Rankad from Yuncture's Gothenburg incubator to acceptance into The Residency accelerator in San Francisco.",
    link: "https://www.yuncture.com/news/20-och-23-aringarna-bakom-rankad-antagna-till-silicon-valleys-the-residency",
    tag: "Accelerator",
  },
];

const PressCard = ({ publication, title, date, summary, link, tag }) => (
  <motion.li
    initial={{ y: 200 }}
    whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
    viewport={{ once: true }}
    className="relative w-full p-4 py-6 my-2 rounded-xl flex sm:flex-col items-start justify-between
    bg-light text-dark first:mt-0 border border-solid border-dark
    border-r-4 border-b-4 dark:bg-dark dark:border-light gap-4
    "
  >
    <div className="flex flex-col flex-1 gap-1">
      <span className="text-secondary font-semibold dark:text-secondary text-sm">{publication}</span>
      <Link
        href={link}
        target="_blank"
        rel="noopener nofollow"
        className="text-xl font-semibold hover:underline dark:text-light md:text-lg xs:text-base"
      >
        {title}
      </Link>
      <p className="text-dark/75 dark:text-light/75 text-sm mt-1">{summary}</p>
    </div>
    <div className="flex flex-col items-end justify-between gap-2 sm:flex-row sm:items-center sm:w-full sm:mt-2 shrink-0">
      <span className="text-xs font-medium px-2 py-1 rounded-full border border-solid border-dark/30 dark:border-light/30 text-dark/60 dark:text-light/60 whitespace-nowrap">{tag}</span>
      <span className="text-secondary font-semibold dark:text-secondary text-sm whitespace-nowrap">{date}</span>
    </div>
  </motion.li>
);

export async function getStaticProps() {
  return { props: {} };
}

export default function Media() {
  return (
    <>
      <Head>
        <title>Press & Media – Liam Karlsson</title>
        <meta name="description" content="Press coverage of Liam Karlsson, co-founder of Rankad.ai. Featured in Hallandsposten, Breakit, Skaraborgs Allehanda, and Yuncture. From Veinge, Sweden to Silicon Valley." />
        <meta property="og:title" content="Press & Media – Liam Karlsson" />
        <meta property="og:description" content="Press coverage of Liam Karlsson — co-founder of Rankad.ai. Featured in Hallandsposten, Breakit, Skaraborgs Allehanda, and Yuncture." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://liamkarlsson.com/media" />
        <meta property="og:image" content="https://liamkarlsson.com/images/profile/liam2.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://liamkarlsson.com/media" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }} />
      </Head>

      <TransitionEffect />
      <main className="w-full mb-16 flex flex-col items-center justify-center dark:text-light overflow-hidden">
        <Layout className="pt-16">
          <AnimatedText
            text="Press & Media"
            className="!text-8xl !leading-tight mb-4 lg:!text-7xl sm:!text-6xl xs:!text-4xl"
          />
          <p className="text-center text-dark/75 dark:text-light/75 text-lg mb-16 max-w-2xl mx-auto sm:text-base sm:mb-8">
            Coverage of Liam Karlsson and Rankad.ai in Swedish and international press.
          </p>

          {/* Featured press cards */}
          <ul className="flex flex-col items-center relative w-full">
            {pressArticles.map((article) => (
              <PressCard key={article.link} {...article} />
            ))}
          </ul>

          {/* Press contact CTA */}
          <div className="mt-24 w-full rounded-2xl border border-solid border-dark bg-light p-8 dark:border-light dark:bg-dark text-center">
            <h2 className="font-bold text-3xl mb-4 text-dark dark:text-light">Press Enquiries</h2>
            <p className="text-dark/75 dark:text-light/75 mb-6 max-w-lg mx-auto">
              For media requests, interviews, or speaking engagements related to Rankad.ai or AI search, reach out directly.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="mailto:contact@rankad.ai"
                className="inline-block rounded-lg border-2 border-solid bg-dark px-6 py-2 font-semibold text-light hover:border-dark hover:bg-transparent hover:text-dark dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light"
              >
                contact@rankad.ai
              </a>
              <Link
                href="/about"
                className="inline-block rounded-lg border-2 border-solid border-dark px-6 py-2 font-semibold text-dark hover:bg-dark hover:text-light dark:border-light dark:text-light dark:hover:bg-light dark:hover:text-dark"
              >
                About Liam →
              </Link>
            </div>
          </div>

          {/* Internal navigation */}
          <nav className="mt-12 flex flex-wrap gap-4 justify-center" aria-label="Explore more">
            <Link href="/" className="inline-block rounded-lg border-2 border-solid bg-dark px-4 py-2 font-semibold text-light hover:border-dark hover:bg-transparent hover:text-dark dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light">Home</Link>
            <Link href="/about" className="inline-block rounded-lg border-2 border-solid bg-dark px-4 py-2 font-semibold text-light hover:border-dark hover:bg-transparent hover:text-dark dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light">About</Link>
            <Link href="/projects" className="inline-block rounded-lg border-2 border-solid bg-dark px-4 py-2 font-semibold text-light hover:border-dark hover:bg-transparent hover:text-dark dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light">Projects</Link>
            <Link href="/articles" className="inline-block rounded-lg border-2 border-solid bg-dark px-4 py-2 font-semibold text-light hover:border-dark hover:bg-transparent hover:text-dark dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light">Achievements</Link>
          </nav>

        </Layout>
      </main>
    </>
  );
}
