import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef(null);
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-start justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}{" "}
          <a
            className="capitalize text-secondary dark:text-secondary"
            href={companyLink}
            target="_blank"
            rel="noopener nofollow"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize text-dark/75 font-medium dark:text-light/50 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm whitespace-pre-line">{work}</p>
      </motion.div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });

  return (
    <div className="my-32">
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16">
        Experience
      </h2>

      <div ref={ref} className="relative w-[75%] mx-auto lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-0 w-[4px] md:w-[2px] md:left-[30px] xs:left-[20px] h-full bg-dark origin-top dark:bg-secondary dark:shadow-3xl"
          style={{ scaleY: scrollYProgress }}
        />
        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">

          <Details
            position="Co-founder & CEO"
            company="Rankad.ai"
            companyLink="https://rankad.ai"
            time="Sep 2025–Present"
            address="Gothenburg, Sweden · Hybrid"
            work="Rankad.ai turns AI search into a revenue channel. Our autonomous agents track, optimize, and grow your brand across ChatGPT, Gemini, and Perplexity on autopilot.

Selected into The Residency, San Francisco in 2026 — 1 of 25 founders from 3,500+ global applicants. Featured in Breakit, Hallandsposten, Skaraborgs Allehanda, and Yuncture."
          />

          <Details
            position="Founder, Web Developer & Designer"
            company="LK Innovations AB"
            companyLink="https://lkinnovations.se"
            time="Mar 2024–Present"
            address="Halland, Sweden · Hybrid"
            work="LK Innovations AB helps businesses grow online through data-driven web development and SEO.

• 50+ clients served globally
• Up to +1100% traffic growth achieved
• 4.6 Trustpilot rating
• Services: custom websites, technical development, SEO strategies, ongoing data-driven optimization"
          />

          <Details
            position="Account Manager & IT Support Specialist"
            company="Axami Systems AB"
            companyLink="https://axami.se"
            time="Dec 2024–Aug 2025"
            address="Halmstad, Sweden · On-site"
            work="• Youngest member of the team
• 100+ cold calls per day, booking meetings with qualified prospects
• Held demos and presentations that converted leads to paying customers
• Managed 50+ active client relationships and ongoing support cases
• Monitored and maintained IT systems for high availability and stable operations
• Identified and resolved critical vulnerabilities for improved security
• Handled 50+ support tickets per month, both internal and external
• Built, debugged and optimized websites and technical solutions for performance and security
• Reduced incidents and improved system reliability through proactive monitoring
• Acted as a bridge between technical delivery and business outcomes"
          />

          <Details
            position="Futures Trader"
            company="Topstep"
            companyLink="https://topstep.com"
            time="May 2023–Aug 2025"
            address="Remote"
            work="• Managed $80K+ in funded trading capital (Topstep, One of One Funding)
• Achieved ~60% win rate with 1:2–1:3 risk/reward
• Specialized in futures trading (NASDAQ, S&P 500)
• Passed multiple funding evaluations and traded live capital
• Developed and executed rule-based strategies with strict risk management
• Analyzed price action, liquidity and macro for high-probability setups
• Mentored beginners and shared structured trading strategies"
          />

          <Details
            position="AI Copywriter & Fact Checker"
            company="Outlier"
            companyLink="https://outlier.ai"
            time="Nov 2024–Feb 2025"
            address="Oakland, USA · Remote"
            work="• Worked with leading AI labs (incl. Meta) on model training and evaluation
• Provided human feedback to improve generative AI model performance in Swedish
• Evaluated, ranked and optimized AI-generated content by quality and relevance
• Verified factual accuracy and reduced hallucinations in model responses
• Improved AI language understanding, nuance and contextual interpretation
• Wrote structured prompts and content to guide model behavior
• Specialized in Swedish language tasks, localization and high precision"
          />

          <Details
            position="Senior Sales Associate"
            company="Key Solutions"
            companyLink="https://www.keysolutions.se"
            time="Oct 2024–Dec 2024"
            address="Gothenburg, Sweden · Hybrid"
            work="• Ranked #2 two months in a row out of 100+ salespeople in door-to-door sales
• Closed deals totalling multiple 7-figure amounts
• Delivered 5–6-figure deals on a daily basis
• Led client meetings and conducted high-volume cold outreach
• Performed in-depth needs analyses to deliver tailored, high-value solutions
• Built and maintained long-term client relationships driving repeat business
• Mentored colleagues and shared proven sales strategies and insights"
          />

          <Details
            position="Receptionist"
            company="Nordic Wellness"
            companyLink="https://nordicwellness.se"
            time="Feb 2024–Jan 2025"
            address="Laholm, Sweden · On-site"
            work="• Welcomed and served 350+ customers daily in a high-pace environment
• Handled cash and transactions of five-figure amounts daily with high precision
• Delivered exceptional customer service under stress and peak hours
• Managed queues and optimized customer experience for efficient operations
• Resolved customer issues quickly with focus on a positive experience"
          />

          <Details
            position="CEO & Founder"
            company="Mâlm UF"
            companyLink="https://www.instagram.com/malm_uf/"
            time="Aug 2023–Jul 2024"
            address="Halmstad, Sweden · Hybrid"
            work="• Founded and ran a UF (Young Enterprise) company in sales and marketing
• Started as a marketing agency, pivoted to e-commerce (clothing — French cotton sweatshirts)
• Generated five-figure revenue within months as a solo operator after the team left
• Ran the entire business solo — from outreach to closing
• Won award for best salesperson at the event
• Offered employment at Key Solutions based on performance"
          />

          <Details
            position="Receptionist & Cleaner"
            company="Hallandsgården"
            companyLink="https://hallandsgarden.se"
            time="Apr 2022–Sep 2023"
            address="Mellbystrand, Sweden · On-site"
            work="• Handled 25+ guests daily across reception and housekeeping
• Delivered service to customers from different countries and cultures
• Maintained high standards in cleaning and upkeep of rooms, kitchens and common areas
• Managed multiple responsibilities simultaneously with high quality and attention to detail"
          />

          <Details
            position="Gardener"
            company="Laholmshem"
            companyLink="https://www.laholmshem.se"
            time="Jul 2022–Aug 2022"
            address="Laholm, Sweden · On-site"
            work="Precision hedge trimming, professional lawn mowing, and installation and repair of various garden objects. Adapted to varied working environments and delivered high-quality outdoor maintenance for residential properties."
          />

          <Details
            position="Farm Worker"
            company="Skogaby Lantbruk"
            companyLink=""
            time="May 2021–Aug 2021"
            address="Laholm, Sweden · On-site"
            work="• Responsible for cleanliness and structure in large farm environments (barn, work areas)
• Operated tractors and handled heavy machinery
• Moved materials and equipment to optimize workflow
• Worked independently with high discipline and attention to detail"
          />

        </ul>
      </div>
    </div>
  );
};

export default Experience;
