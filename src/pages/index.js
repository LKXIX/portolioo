import { HireMe } from "@/components/HireMe";
import { LinkArrow } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import TransitionEffect from "@/components/TransitionEffect";

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
    "https://lkinnovations.se"
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
      <article className={`flex min-h-screen items-center text-dark dark:text-light sm:items-start`}>
        <Layout className="!pt-0 md:!pt-16 sm:!pt-16">
          <div className="flex w-full items-start justify-between md:flex-col">
            <div className="flex w-3/4 flex-col items-start self-center lg:w-full lg:text-left">

              <h1 className="py-2 overflow-hidden text-dark dark:text-light text-6xl font-bold w-full capitalize xl:text-6xl">
                Liam Karlsson
              </h1>

              <p className="my-4 text-base font-medium md:text-sm sm:!text-xs">
                Swedish entrepreneur and co-founder of{" "}
                <a href="https://rankad.ai" target="_blank" rel="noopener nofollow" className="underline underline-offset-2">Rankad.ai</a>
                {" "}— an autonomous AI search optimization platform helping brands win inside ChatGPT, Gemini, and Perplexity.
                Also founder of{" "}
                <a href="https://lkinnovations.se" target="_blank" rel="noopener nofollow" className="underline underline-offset-2">LK Innovations AB</a>,
                {" "}a web agency with 50+ delivered projects and a 4.6 Trustpilot rating.
                Selected Founder in Residence at{" "}The Residency, San Francisco.
                Explore my{" "}
                <Link href="/projects" className="underline underline-offset-2">projects</Link>,{" "}
                <Link href="/about" className="underline underline-offset-2">background</Link>, and{" "}
                <Link href="/articles" className="underline underline-offset-2">certifications</Link>.
              </p>

              <div className="mt-2 flex items-center self-start lg:self-center">
                <Link
                  href="/Liam Karlsson CV.pdf"
                  target="_blank"
                  rel="noopener"
                  className={`flex items-center rounded-lg border-2 border-solid bg-dark p-2.5 px-6 text-lg font-semibold
                    capitalize text-light hover:border-dark hover:bg-transparent hover:text-dark
                    dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light
                    md:p-2 md:px-4 md:text-base`}
                  download
                >
                  Resume <LinkArrow className="ml-1 !w-6 md:!w-4" />
                </Link>

                <Link
                  href="mailto:business@liamkarlsson.com"
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                >
                  Contact
                </Link>
              </div>

            </div>
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
