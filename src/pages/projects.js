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
        target={"_blank"}
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
          target={"_blank"}
          className="underline-offset-2 hover:underline"
        >
          <h2 className="my-2 w-full text-left text-4xl font-bold lg:text-3xl xs:text-2xl">
            {title}
          </h2>
        </Link>
        <p className=" my-2 rounded-md font-medium text-dark dark:text-light sm:text-sm">
          {summary}
        </p>
        <div className="mt-2 flex items-center">
          <Link
            href={github}
            target={"_blank"}
            className="w-10"
            aria-label="Crypto Screener Application github link"
          >
            <GithubIcon />
          </Link>
          <Link
            href={link}
            target={"_blank"}
            className="ml-4 rounded-lg
             bg-dark p-2 px-6 text-lg font-semibold text-light dark:bg-light dark:text-dark 
             sm:px-4 sm:text-base
            "
            aria-label="Crypto Screener Application"
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

export default function Projects() {
  return (
    <>
      <Head>
        <title>Projects Page</title>
        <meta
          name="description"
          content="Discover the latest webapp projects created by Liam Karlsson, a developer with 
        expertise in React.js and full-stack development. Browse software engineering articles and see the certificates that Liam has earned."
        />
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
          <div className="col-span-12">
              <FeaturedProject
                type="Web Application"
                title="MK Designgolv Website"
                summary="A web application for MK Designgolv AB, a Swedish company specializing in high-quality and uniquely designed flooring solutions. The application is built using Hostinger Website Builder, featuring a user-friendly interface, responsive design, and mobile compatibility. It is hosted on Hostinger and provides a seamless browsing experience for customers.
For more details, visit: mkdesigngolv.com.
"
                img={proj3}
                link="https://mkdesigngolv.com"
                github="#"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                type="Web Application"
                title="Liam Karlsson's Portfolio Website"
                summary="LiamKarlsson.com – My personal portfolio website designed to showcase my achievements, skills, and projects. It serves as a central hub for employers and clients to easily explore what I'm capable of. The site highlights my expertise in web development, design, and SEO, demonstrating my ability to create modern, responsive, and high-performing applications. The webpage is built with HTML, Tailwind CSS, Javascript, React and Next.js
"
                img={proj4}
                link="https://liamkarlsson.com"
                github="#"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                type="Web Application"
                title="Mâlm UF Web Application"
                summary="A web application for Mâlm UF, a Swedish company that specializes in the production of unique and high-quality Clothes. The application is built using HTML, CSS, Javascript, Express.js and Node.js It has a user-friendly interface, a responsive design, and it is mobile-friendly. The application is hosted on Replit."
                img={proj1}
                link="https://31214db6-963f-43d6-b0d5-c58dbc7fbae5-00-2fp48im1x2e0k.kirk.replit.dev/"
                github="#"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                type="E-Book"
                title="Forex Trading Guide"
                summary="Unlock the World of Forex Trading: A Comprehensive Guide

                Embark on a journey through the intricacies of Forex trading with this comprehensive ebook. Starting with the foundational principles, delve into the complexities of market analysis, including both fundamental and technical approaches. Learn invaluable risk management strategies to safeguard your investments and discover the art of crafting a personalized trading strategy tailored to your goals.
                
                Navigate the landscape of brokerages with confidence and master the often-overlooked aspect of emotional discipline. Gain insights into the diverse participants shaping the market and equip yourself with continuous learning techniques to stay ahead in this dynamic field.
                
                Packed with expert tips and tricks, this ebook is your ultimate companion in the world of Forex trading. Connect with the creator and join a community of like-minded individuals on a journey towards financial success."
                img={proj2}
                link="#" /* <a href="https://31214db6-963f-43d6-b0d5-c58dbc7fbae5-00-2fp48im1x2e0k.kirk.replit.dev/" download>Ladda ner E-bok</a> */
                github="#"
              />
            </div>
            {/*
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Website"
                title="Fashion Studio Website"
                img={proj3}
                link="https://devdreaming.com/videos/build-stunning-fashion-studio-website-with-reactJS-locomotive-scroll-gsap"
                github="https://github.com/codebucks27/wibe-studio"
              />
            </div>
            <div className="col-span-12">
              <FeaturedProject
                type="Portfolio Website"
                title="React Portfolio Website"
                summary="A professional portfolio website using React JS, Framer-motion, and Styled-components. It has smooth page transitions, cool background effects, unique design and it is mobile responsive."
                img={proj4}
                link="https://devdreaming.com/videos/build-stunning-portfolio-website-react-js-framer-motion"
                github="https://github.com/codebucks27/react-portfolio-final"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Website Template"
                img={proj5}
                title="Agency Website Template"
                link="https://devdreaming.com/videos/build-stunning-fashion-studio-website-with-reactJS-locomotive-scroll-gsap"
                github="https://github.com/codebucks27/wibe-studio"
              />
            </div>
            <div className="col-span-6 sm:col-span-12">
              <Project
                type="Blog Website"
                img={proj6}
                title="DevDreaming"
                link="https://devdreaming.com"
                github="https://github.com/codebucks27"
              />
            </div> */}
          </div>
        </Layout>
      </main>
    </>
  );
}
