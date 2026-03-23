import AnimatedText from "@/components/AnimatedText";
import { motion, useMotionValue } from "framer-motion";
import Head from "next/head";
import Image from "next/image";
import blog1 from "../../public/images/articles/CS.jpg";
import blog2 from "../../public/images/articles/GS.jpg";
import blog3 from "../../public/images/articles/CA.jpg";
import blog4 from "../../public/images/articles/CF.jpg";
import blog5 from "../../public/images/articles/TCT.jpg";
import blog6 from "../../public/images/articles/ASEJS.jpg";
import blog7 from "../../public/images/articles/SEJS.jpg";
import blog8 from "../../public/images/articles/CSJS.jpg";
import blog9 from "../../public/images/articles/CCNAv7.jpg";
import blog10 from "../../public/images/articles/ITME.jpg";
import blog11 from "../../public/images/articles/investmentrisk.jpg";
import blog12 from "../../public/images/articles/CJS.jpg";
import blog13 from "../../public/images/articles/OPSJS.jpg";
import blog14 from "../../public/images/articles/science.jpg";
import blog15 from "../../public/images/articles/Fundementals.jpg";
import blog16 from "../../public/images/articles/Sales.jpg";
import blog17 from "../../public/images/articles/CISCOCYBER.jpg";
import blog18 from "../../public/images/articles/CCNAv7SEC.jpg";
import blog19 from "../../public/images/articles/CCNAv72.jpg";
import blog20 from "../../public/images/articles/Leadershipskills.jpg";
import blog21 from "../../public/images/articles/googlecybersec.jpg";
import blog22 from "../../public/images/articles/googleai.jpg";
import blog23 from "../../public/images/articles/Myndighet.jpg";

import Layout from "@/components/Layout";
import Link from "next/link";
import { useRef } from "react";
import TransitionEffect from "@/components/TransitionEffect";

const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }
  return (
    <>
      <Link
        href={link}
        target="_blank"
        rel="noopener nofollow"
        className="relative"
        onMouseMove={handleMouse}
        onMouseLeave={handleMouseLeave}
      >
        <h2 className="capitalize text-xl font-semibold hover:underline dark:text-light md:text-lg xs:text-base">
          {title}
        </h2>
        <FramerImage
          src={img}
          ref={imgRef}
          alt={title}
          className="w-96 h-auto z-10 hidden absolute rounded-lg md:!hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
          style={{
            x: x,
            y: y,
          }}
          sizes="(max-width: 768px) 60vw,
              (max-width: 1200px) 40vw,
              33vw"
        />
      </Link>
    </>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-2 rounded-xl flex sm:flex-col items-center justify-between 
      bg-light text-dark first:mt-0 border border-solid border-dark
      border-r-4 border-b-4 dark:bg-dark dark:border-light
      "
    >
      <MovingImg img={img} title={title} link={link} />
      <span className="text-secondary font-semibold dark:text-secondary min-w-max pl-4 sm:self-start 
      sm:pl-0 xs:text-sm">
        {date}
      </span>
    </motion.li>
  );
};

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="relative w-full p-4 col-span-1 bg-light border border-dark border-solid rounded-2xl 
    dark:bg-dark dark:border-light">
      <div
        className="absolute  top-0 -right-3 w-[102%] h-[103%] rounded-[2rem]  rounded-br-3xl bg-dark 
        -z-10  "
      />
      <Link
        href={link}
        target="_blank"
        rel="noopener nofollow"
        className="inline-block rounded-lg overflow-hidden w-full"
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          sizes="100vw"
          priority
        />
      </Link>

      <Link href={link} target="_blank" rel="noopener nofollow">
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg">
          {title}
        </h2>
      </Link>
      <p className="text-sm  mb-2">{summary}</p>
      <span className="text-secondary font-semibold dark:text-secondary">
        {time}
      </span>
    </li>
  );
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: "https://liamkarlsson.com" },
    { "@type": "ListItem", position: 2, name: "Achievements & Certificates", item: "https://liamkarlsson.com/articles" },
  ],
};

const collectionSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  name: "Achievements & Certificates – Liam Karlsson",
  url: "https://liamkarlsson.com/articles",
  description: "Professional certificates earned by Liam Karlsson in cybersecurity, AI, web development, and networking — including Google Cybersecurity Specialization, Cisco CCNAv7, and Microsoft Career Essentials in Cybersecurity.",
  dateModified: "2025-06-01",
  author: { "@type": "Person", name: "Liam Karlsson", url: "https://liamkarlsson.com" },
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What certifications does Liam Karlsson have in cybersecurity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Liam Karlsson holds the Google Cybersecurity Specialization (Coursera), Microsoft Career Essentials in Cybersecurity (LinkedIn Learning), Cisco Introduction to Cybersecurity, Cisco CCNAv7 (Introduction to Networks, Switching & Routing, Enterprise Networking Security & Automation), and the Cybersecurity Awareness certifications from LinkedIn Learning.",
      },
    },
    {
      "@type": "Question",
      name: "Does Liam Karlsson have AI and machine learning certifications?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Liam Karlsson holds Google AI Essentials (Coursera, 2024) and has completed online coursework in artificial intelligence including Harvard's CS50 series.",
      },
    },
    {
      "@type": "Question",
      name: "What networking certifications does Liam Karlsson hold?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Liam Karlsson has completed all three modules of the Cisco CCNAv7 curriculum: Introduction to Networks, Switching Routing and Wireless Essentials, and Enterprise Networking Security and Automation.",
      },
    },
  ],
};

export async function getStaticProps() {
  return { props: {} };
}

export default function Articles() {
  return (
    <>
      <Head>
        <title>Achievements & Certificates – Liam Karlsson</title>
        <meta name="description" content="Liam Karlsson's professional certificates: Google Cybersecurity Specialization, Cisco CCNAv7, Google AI Essentials, Microsoft Cybersecurity, and 15+ more in security, networking, and web development." />
        <meta property="og:title" content="Achievements & Certificates – Liam Karlsson" />
        <meta property="og:description" content="20+ professional certificates earned by Liam Karlsson in cybersecurity, AI, web development, and networking." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://liamkarlsson.com/articles" />
        <meta property="og:image" content="https://liamkarlsson.com/images/profile/liam2.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://liamkarlsson.com/articles" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </Head>
      <TransitionEffect />
      <main
        className={`w-full mb-16 flex flex-col items-center justify-center dark:text-light overflow-hidden`}
      >
        <Layout className="pt-16">
          <AnimatedText
            text="Achievements & Certificates!"
            className="!text-8xl !leading-tight mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />

          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16 ">
            <FeaturedArticle
              img={blog1}
              title="Career Essentials In Cybersecurity by Microsoft & LinkedIn"
              time="1 min read"
              summary="Cybersecurity, Information Security Awareness and Threat & Vulnerability Management are the key topics covered in this course."
              link="https://www.linkedin.com/learning/certificates/4095dab9b5cd98b2296290f189d1ab101a562b7ef537b2cec6ac1caf22af70bf"
            />

            <FeaturedArticle
              img={blog21}
              title="Google Cybersecurity: Google Cybersecurity Specialization"
              time="1 min read"
              summary="This course covers several key areas in cybersecurity, including threat and vulnerability management, incident response, and security frameworks & controls. It also touches on security hardening, emphasizing practical skills in Linux system administration, Linux command line usage, and scripting with SQL and Python. Additionally, students will learn about Security Information and Event Management (SIEM) tools, focusing on monitoring, detecting, and responding to security incidents. This curriculum provides a strong foundation for understanding and managing cybersecurity risks in various IT environments.
              "
              link="https://www.coursera.org/account/accomplishments/specialization/OHYFT3J7E2NV"
            />
          </ul>

          <h2 className="font-bold text-4xl w-full text-center mt-32 my-16">
            All Achievements & Certificates
          </h2>

          <ul className="flex flex-col items-center relative">
            <Article
              title="Cybersecurity Awareness: Cybersecurity Terminology"
              img={blog3}
              date="January 07, 2024"
              link="https://www.linkedin.com/learning/certificates/e495bf6d35bba50fd9c12dbfc10a9e1b3db156729e07d4914bb636b9ca13101f"
            />
            <Article
              title="Google AI Essentials"
              img={blog22}
              date="September 1, 2024"
              link="https://www.coursera.org/account/accomplishments/verify/1LTF0GSD4MSQ"
            />
            <Article
              title="Cybersecurity Foundations"
              img={blog4}
              date="January 20, 2024"
              link="https://www.linkedin.com/learning/certificates/ddb162594ac2fa4b3eb30dcff57fb239e82b307077680f5a5d0442339faf2874"
            />
            <Article
              title="The Cybersecurity Threat Landscape
              "
              img={blog5}
              date="January 07, 2024"
              link="https://www.linkedin.com/learning/certificates/773ccbebe9eaeafdf0a8952334bb1f7a33b7f501f6cc5530c7dc940c188989b7"
            />
            <Article
              title="Walmart Advanced Software Engineering Job
              Simulation"
              img={blog6}
              date="January 06, 2024"
              link="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Walmart%20USA/oX6f9BbCL9kJDJzfg_Walmart%20USA_5HT84wwTYWJvpPf3b_1704551875328_completion_certificate.pdf"
            />
            <Article
              title="Digital informationssäkerhetsutbildning för alla (Disa)"
              img={blog23}
              date="February 10, 2024"
              link="https://media.licdn.com/dms/document/media/v2/D4D2DAQGwg9f3Abauzg/profile-treasury-document-pdf-analyzed/profile-treasury-document-pdf-analyzed/0/1738761652350?e=1740009600&v=beta&t=LvHu2DhB6BO-_gsS99qotkj5wYnfFMUawhpcuIPt0AA"
            />
            <Article
              title="Electronic Arts - Software Engineering Job Simulation"
              img={blog7}
              date="December 17, 2023"
              link="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Electronic%20Arts/a77WE3de8qrxWferQ_Electronic%20Arts_5HT84wwTYWJvpPf3b_1702845732584_completion_certificate.pdf"
            />
            <Article
              title="Fidelity - Customer Service Job Simulation
              "
              date="December 16, 2023"
              img={blog8}
              link="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Fidelity%20Investments/mjBDAH6fdSc5BHBKu_Fidelity%20Investments_5HT84wwTYWJvpPf3b_1702741761226_completion_certificate.pdf"
            />
                        <Article
              title="CCNAv7: Introduction to Networks"
              date="June 07, 2023"
              img={blog9}
              link="#"
            />
                        <Article
              title="Introduction to Microsoft Excel"
              date="December 03, 2023"
              img={blog10}
              link="https://www.coursera.org/account/accomplishments/certificate/VL3Q7QBJKAL8"
            />
                        <Article
              title="Investment Risk Management
              "
              date="December 08, 2023"
              img={blog11}
              link="https://www.coursera.org/account/accomplishments/certificate/KPKYJ5J9VNF8"
            />
                                    <Article
              title="MasterCard - Cybersecurity Job Simulation"
              date="December 17, 2023"
              img={blog12}
              link="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/mastercard/vcKAB5yYAgvemepGQ_Mastercard_5HT84wwTYWJvpPf3b_1702847223489_completion_certificate.pdf"
            />                        <Article
            title="Red Bull - On-Premise Sales Job Simulation
            "
            date="December 17, 2023"
            img={blog13}
            link="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Red%20Bull/s6RNpxzBkpREvE4xk_Red%20Bull_5HT84wwTYWJvpPf3b_1702826981252_completion_certificate.pdf"
          />
          <Article
            title="The Science of Leadership
            "
            date="December 08, 2023"
            img={blog14}
            link="https://www.udemy.com/certificate/UC-5acaaf68-72ab-41a0-9f0e-c736c7916a52/"
          />
          <Article
            title="Fundamentals of digital marketing
            "
            date="October 15, 2023"
            img={blog15}
            link="https://skillshop.exceedlms.com/student/award/GMt1X8Xu4iPo9C4i2KntWJGA"
          />
                    <Article
            title="Sales Training: Practical Sales Techniques
            "
            date="November 09, 2023"
            img={blog16}
            link="https://www.udemy.com/certificate/UC-ea41cc17-a060-43ae-ab22-bfe0a55dc57c/"
          />
                              <Article
            title="Cisco Introduction to Cybersecurity
            "
            date="December 06, 2023"
            img={blog17}
            link="/LKintrotocybsec.pdf"
          />
                                        <Article
            title="CCNAv7: Switching, Routing, and Wireless Essentials
            "
            date="June 13, 2024"
            img={blog19}
            link="/LKCCNAv72.pdf"
          />
                              <Article
            title="CCNAv7: Enterprise Networking, Security, and Automation
            "
            date="June 02, 2024"
            img={blog18}
            link="/LKCCNAv7sec.pdf"
          />
          <Article
            title="Leadership: Practical Leadership Skills
            "
            date="June 17, 2024"
            img={blog20}
            link="https://www.udemy.com/certificate/UC-f2828470-749d-45b1-b5de-8bda1696c9ad/"
          />
                    <Article
            title="Software Engineering Job Simulation by Goldman Sachs"
            date="December 17, 2023"
            img={blog2}
            link="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Goldman%20Sachs/NPdeQ43o8P9HJmJzg_Goldman%20Sachs_5HT84wwTYWJvpPf3b_1702829296488_completion_certificate.pdf"
          />
          
          </ul>

          {/* FAQ Section */}
          <section className="mt-32 w-full" aria-label="Frequently asked questions about Liam Karlsson's certifications">
            <h2 className="font-bold text-4xl w-full text-center mb-16">Frequently Asked Questions</h2>
            <dl className="space-y-8 max-w-3xl mx-auto">
              <div>
                <dt className="font-semibold text-xl text-dark dark:text-light">What cybersecurity certifications does Liam Karlsson have?</dt>
                <dd className="mt-2 text-dark/75 dark:text-light/75">Google Cybersecurity Specialization, Microsoft Career Essentials in Cybersecurity, Cisco Introduction to Cybersecurity, and all three Cisco CCNAv7 modules. See all certificates listed above.</dd>
              </div>
              <div>
                <dt className="font-semibold text-xl text-dark dark:text-light">Does Liam Karlsson have AI certifications?</dt>
                <dd className="mt-2 text-dark/75 dark:text-light/75">Yes — Google AI Essentials (Coursera, 2024) and ongoing coursework including Harvard CS50 series. Learn more about Liam&apos;s technical background on the <Link href="/about" className="underline underline-offset-2">about page</Link>.</dd>
              </div>
              <div>
                <dt className="font-semibold text-xl text-dark dark:text-light">What networking certifications does Liam Karlsson hold?</dt>
                <dd className="mt-2 text-dark/75 dark:text-light/75">All three Cisco CCNAv7 modules: Introduction to Networks, Switching Routing and Wireless Essentials, and Enterprise Networking Security and Automation.</dd>
              </div>
            </dl>
          </section>

          {/* Internal navigation */}
          <nav className="mt-16 flex flex-wrap gap-4 justify-center" aria-label="Explore more">
            <Link href="/" className="inline-block rounded-lg border-2 border-solid bg-dark px-4 py-2 font-semibold text-light hover:border-dark hover:bg-transparent hover:text-dark dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light">Home</Link>
            <Link href="/about" className="inline-block rounded-lg border-2 border-solid bg-dark px-4 py-2 font-semibold text-light hover:border-dark hover:bg-transparent hover:text-dark dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light">About Liam</Link>
            <Link href="/projects" className="inline-block rounded-lg border-2 border-solid bg-dark px-4 py-2 font-semibold text-light hover:border-dark hover:bg-transparent hover:text-dark dark:bg-light dark:text-dark dark:hover:border-light dark:hover:bg-dark dark:hover:text-light">Projects</Link>
          </nav>

        </Layout>
      </main>
    </>
  );
}

