import AnimatedText from "@/components/AnimatedText";
import { GithubIcon } from "@/components/Icons";
import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import proj1 from "../../public/images/projects/Malm.jpg";
import proj2 from "../../public/images/projects/forex.jpg";
import proj3 from "../../public/images/projects/mkdesign.jpg";
import proj4 from "../../public/images/projects/LKportfolio.jpg";
/* import proj3 from "../../public/images/projects/fashion-studio-website.jpg";
import proj4 from "../../public/images/projects/portfolio-cover-image.jpg";
import proj5 from "../../public/images/projects/agency-website-cover-image.jpg";
import proj6 from "../../public/images/projects/devdreaming.jpg"; */
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {

  return (
    <article
      className="relative flex w-full items-center  justify-between rounded-3xl rounded-br-2xl border
border-solid border-dark bg-light p-12 shadow-2xl  dark:border-light dark:bg-dark  lg:flex-col 
lg:p-8 xs:rounded-2xl  xs:rounded-br-3xl xs:p-4 
    "
    >
      <div
        className="absolute  top-0 -right-3 -z-10 h-[103%] w-[101%] rounded-[2.5rem] rounded-br-3xl bg-dark
         dark:bg-light  xs:-right-2 xs:h-[102%] xs:w-[100%]
        xs:rounded-[1.5rem] "
      />

      <Link
        href={link}
        target="_blank"
        rel="noopener nofollow"
        className="w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full"
      >
        <FramerImage
          src={img}
          className="h-auto w-full"
          alt={title}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          priority
        />
      </Link>
      <div className="flex w-1/2 flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6">
        <span className="text-xl font-medium text-secondary dark:text-secondary xs:text-base">
          {type}
        </span>
        <Link
          href={link}
          target="_blank"
          rel="noopener nofollow"
          className="underline-offset-2 hover:underline"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold lg:text-3xl xs:text-2xl">
            {title}
          </h2>
        </Link>
        <p className="my-2 rounded-md font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link
            href={github}
            target="_blank"
            rel="noopener nofollow"
            className="w-10"
            aria-label={`${title} GitHub repository`}
          >
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target="_blank"
            rel="noopener nofollow"
            className="ml-4 rounded-lg bg-dark p-2 px-6 text-lg font-semibold text-light dark:bg-light dark:text-dark sm:px-4 sm:text-base"
            aria-label={`Visit ${title}`}
          >
            Visit Project
          </Link>
        </div>
      </div>
    </article>
  );
};

const Project = ({ title, type, img, link, github }) => {

  return (
    <article
      className="relative flex w-full flex-col items-center justify-center rounded-2xl  rounded-br-2xl 
      border  border-solid  border-dark bg-light p-6  shadow-2xl dark:border-light dark:bg-dark 
      xs:p-4
      "
    >
      <div
        className="absolute  top-0 -right-3 -z-10 h-[103%] w-[102%] rounded-[2rem] rounded-br-3xl bg-dark
         dark:bg-light  md:-right-2 md:w-[101%] xs:h-[102%]
        xs:rounded-[1.5rem]  "
      />

      <Link
        href={link}
        target={"_blank"}
        className="w-full cursor-pointer overflow-hidden rounded-lg"
      >
        <FramerImage
          src={img}
          alt={title}
          className="h-auto w-full"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
        />
      </Link>
      <div className="mt-4 flex w-full flex-col items-start justify-between">
        <span className="text-xl font-medium text-secondary dark:text-secondary lg:text-lg md:text-base">
          {type}
        </span>

        <Link
          href={link}
          target={"_blank"}
          className="underline-offset-2 hover:underline"
        >
          <h2 className="my-2 w-full text-left text-3xl font-bold lg:text-2xl ">
            {title}
          </h2>
        </Link>
        <div className="flex w-full items-center  justify-between">
          <Link
            href={link}
            target={"_blank"}
            className="rounded text-lg
            font-medium underline md:text-base
            "
            aria-label={title}
          >
            Visit
          </Link>
          <Link
            href={github}
            target={"_blank"}
            className="w-8 md:w-6"
            aria-label={title}
          >
            <GithubIcon />
          </Link>
        </div>
      </div>
    </article>
  );
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://liamkarlsson.se" },
    { "@type": "ListItem", position: 2, name: "Projects", item: "https://liamkarlsson.se/projects" },
  ],
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Projects by Liam Karlsson",
  url: "https://liamkarlsson.se/projects",
  description: "Projects and client work by Liam Karlsson: co-founder of Rankad.ai, founder of LK Innovations AB (50+ delivered websites and SEO projects for Swedish and international clients).",
  dateModified: "2026-03-01",
  author: { "@type": "Person", name: "Liam Karlsson", url: "https://liamkarlsson.se" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What projects has Liam Karlsson built?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Liam Karlsson co-founded Rankad.ai, an autonomous AI Search Optimization platform selected into The Residency in San Francisco. He also founded LK Innovations AB, which has delivered 50+ websites and SEO projects for clients including Rankad.ai, Maison Satar, Sportoteket, Djurgruppen, Nordic Hockey Center, and many more Swedish businesses.",
      },
    },
    {
      "@type": "Question",
      name: "Can Liam Karlsson build a website for my business?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Through LK Innovations AB, Liam Karlsson delivers custom websites and SEO for businesses. The agency has a 4.6 Trustpilot rating and has achieved up to +1100% traffic growth for clients. Contact liam@lkinnovations.se or liam@rankad.ai.",
      },
    },
    {
      "@type": "Question",
      name: "What tech stack does Liam Karlsson use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Liam Karlsson uses React, Next.js, Node.js, Tailwind CSS, PHP, and MySQL. For AI projects like Rankad.ai he works with agentic AI infrastructure and LLM-based optimization systems.",
      },
    },
  ],
};

export async function getStaticProps() {
  return { props: {} };
}

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects – Rankad.ai, LK Innovations & Client Work by Liam Karlsson</title>
        <meta
          name="description"
          content="Projects by Liam Karlsson: co-founder of Rankad.ai (AI search optimization) and founder of LK Innovations AB — 50+ delivered websites and SEO projects for Swedish and international clients."
        />
        <meta property="og:title" content="Projects – Rankad.ai, LK Innovations & Client Work by Liam Karlsson" />
        <meta property="og:description" content="Co-founder of Rankad.ai. Founder of LK Innovations AB — 50+ client websites and SEO projects with up to +1100% traffic growth." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://liamkarlsson.se/projects" />
        <meta property="og:image" content="https://liamkarlsson.se/images/profile/liam2.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://liamkarlsson.se/projects" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </Head>

      <TransitionEffect />
      <main
        className={`mb-16  flex w-full flex-col items-center justify-center dark:text-light`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="Imagination Trumps Knowledge!"
            className="mb-16 !text-8xl !leading-tight lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <div className="grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0">

            {/* Rankad.ai */}
            <div className="col-span-12">
              <FeaturedProject
                type="AI-Powered SaaS — Co-founded"
                title="Rankad.ai"
                summary="Rankad.ai is an autonomous AI Search Optimization platform helping brands become the recommended answer inside ChatGPT, Gemini, and Perplexity on autopilot. Co-founded by Liam Karlsson in September 2025. Selected into The Residency in San Francisco in 2026 — one of 25 startups chosen from 3,500+ global applicants. Featured in Breakit as one of Sweden's startups to watch. Built using modern agentic AI infrastructure."
                img={proj4}
                link="https://rankad.ai"
                github="#"
              />
            </div>

            {/* LK Innovations */}
            <div className="col-span-12">
              <FeaturedProject
                type="Web Agency — Founded"
                title="LK Innovations AB"
                summary="LK Innovations AB is a Swedish web agency founded by Liam Karlsson in March 2024. The agency has delivered 50+ websites and SEO projects for clients across Sweden and internationally, achieving up to +1100% traffic growth and generating measurable revenue results. Holds a 4.6 rating on Trustpilot with verified client reviews. Services include custom web development, technical SEO, and digital marketing."
                img={proj3}
                link="https://lkinnovations.se"
                github="#"
              />
            </div>

            {/* MK Designgolv */}
            <div className="col-span-12">
              <FeaturedProject
                type="Client Website — LK Innovations"
                title="MK Designgolv AB"
                summary="Website for MK Designgolv AB, a Swedish company specialising in high-quality and uniquely designed flooring. Built with a user-friendly interface, responsive design, and mobile compatibility. Client review: 'Fick väldigt fint bemötande av Liam ändansen dag 1. Kanon service och väldigt duktig på att bygga hemsidor.' — MK Designgolv AB."
                img={proj3}
                link="https://mkdesigngolv.com"
                github="#"
              />
            </div>

            {/* Mâlm UF */}
            <div className="col-span-12">
              <FeaturedProject
                type="Web Application — CEO & Founder"
                title="Mâlm UF"
                summary="As CEO of Mâlm UF, Liam Karlsson led a student fashion company producing exclusive zip hoodies, t-shirts, and sweaters. The web application was built using HTML, CSS, JavaScript, Express.js, and Node.js with a user-friendly and mobile-responsive interface. Hosted on Replit."
                img={proj1}
                link="https://31214db6-963f-43d6-b0d5-c58dbc7fbae5-00-2fp48im1x2e0k.kirk.replit.dev/"
                github="#"
              />
            </div>

            {/* LK Innovations client list */}
            <div className="col-span-12">
              <div className="w-full rounded-2xl border border-solid border-dark bg-light p-8 dark:border-light dark:bg-dark">
                <h2 className="text-3xl font-bold mb-2 text-dark dark:text-light">LK Innovations — Selected Client Work</h2>
                <p className="text-dark/75 dark:text-light/75 mb-8 text-sm">50+ projects delivered for Swedish and international businesses across e-commerce, services, AI, sport, and lifestyle.</p>
                <ul className="grid grid-cols-2 gap-3 md:grid-cols-1 text-sm text-dark/75 dark:text-light/75">
                  {[
                    { name: "Rankad.ai", type: "AI-lösningar" },
                    { name: "Maison Satar", type: "Mode & Livsstil" },
                    { name: "Adore Performance", type: "Sport & Coaching" },
                    { name: "BrandVault", type: "Mode & Livsstil" },
                    { name: "Sportoteket AB", type: "Sport & E-handel" },
                    { name: "Forcy AB", type: "Webbutveckling" },
                    { name: "OptiflowAI", type: "AI-lösningar" },
                    { name: "X-World", type: "Digital plattform" },
                    { name: "Djurgruppen", type: "E-handel" },
                    { name: "Nordic Hockey Center", type: "Sport & Recreation" },
                    { name: "SagaBoulevard", type: "Webbutveckling" },
                    { name: "Wrapped Up Kristianstad", type: "E-handel" },
                    { name: "MAA Bygg AB", type: "Tjänsteföretag" },
                    { name: "Tim Hit och Dit", type: "Tjänsteföretag" },
                    { name: "Bilvårdsshoppen", type: "Bil & E-handel" },
                    { name: "Nordic Cookware", type: "Kök & E-handel" },
                    { name: "Nordic Glow Store", type: "E-handel" },
                    { name: "Ninnis Flora", type: "Blommor & E-handel" },
                    { name: "Jarls Service AB", type: "Tjänsteföretag" },
                    { name: "Mammahjälpen", type: "Ideell organisation" },
                    { name: "VisionSales", type: "Webbutveckling" },
                    { name: "MK Design Golv", type: "Webbutveckling" },
                    { name: "Fragrance Swap", type: "E-handel" },
                    { name: "Requritas", type: "Konsulttjänster" },
                    { name: "Scaper Team", type: "Utomhusmiljö" },
                    { name: "JuridikAI", type: "AI-lösningar" },
                  ].map(({ name, type }) => (
                    <li key={name} className="flex justify-between border-b border-dark/10 dark:border-light/10 py-2">
                      <span className="font-medium text-dark dark:text-light">{name}</span>
                      <span className="text-dark/50 dark:text-light/50">{type}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>

          {/* FAQ Section */}
          <section className="mt-32 w-full" aria-label="Frequently asked questions about Liam Karlsson's projects">
            <h2 className="font-bold text-4xl w-full text-center mb-16">Frequently Asked Questions</h2>
            <dl className="space-y-8 max-w-3xl mx-auto">
              <div>
                <dt className="font-semibold text-xl text-dark dark:text-light">What projects has Liam Karlsson built?</dt>
                <dd className="mt-2 text-dark/75 dark:text-light/75">Liam Karlsson co-founded Rankad.ai (autonomous AI search optimization, selected into The Residency San Francisco) and founded LK Innovations AB, which has delivered 50+ websites and SEO projects for clients including Sportoteket, Djurgruppen, Nordic Hockey Center, Maison Satar, and JuridikAI.</dd>
              </div>
              <div>
                <dt className="font-semibold text-xl text-dark dark:text-light">Can Liam Karlsson build a website for my business?</dt>
                <dd className="mt-2 text-dark/75 dark:text-light/75">Yes. Through LK Innovations AB, Liam delivers custom websites and SEO with measurable results. The agency has a 4.6 Trustpilot rating. Contact <a href="mailto:liam@lkinnovations.se" className="underline">liam@lkinnovations.se</a> or visit <Link href="/" className="underline underline-offset-2">liamkarlsson.se</Link> to get in touch.</dd>
              </div>
              <div>
                <dt className="font-semibold text-xl text-dark dark:text-light">What tech stack does Liam Karlsson use?</dt>
                <dd className="mt-2 text-dark/75 dark:text-light/75">React, Next.js, Node.js, Tailwind CSS, PHP, and MySQL for web projects. For Rankad.ai, agentic AI infrastructure and LLM-based optimization systems. See the full skills breakdown on the <Link href="/about" className="underline underline-offset-2">about page</Link>.</dd>
              </div>
            </dl>
          </section>

        </Layout>
      </main>
    </>
  );
}
