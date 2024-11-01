import { HireMe } from "@/components/HireMe";
import { LinkArrow } from "@/components/Icons";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import lightBulb from "../../public/images/svgs/miscellaneous_icons_1.svg";
import profilePic from "../../public/images/profile/liam2.jpg";
import TransitionEffect from "@/components/TransitionEffect";
import { TypeAnimation } from 'react-type-animation';

export default function Home() {
  return (
    <>
      <Head>
        <title>Liam Karlsson</title>
        <meta name="description" content="Explore Liam's personal portfolio." />
      </Head>

      <TransitionEffect />
      <article
        className={`flex min-h-screen items-center text-dark dark:text-light sm:items-start`}
      >
        <Layout className="!pt-0 md:!pt-16 sm:!pt-16">
          <div className="flex w-full items-start justify-between md:flex-col">
            <div className="w-1/4 hidden md:block"> {/* This will hide the image on mobile */}
              <Image
                src={profilePic}
                alt="Liam Karlsson"
                className="rounded-lg w-full h-auto" // Adjusted to ensure proper sizing
                priority
              />
            </div>
            <div className="flex w-1/2 flex-col items-center self-center lg:w-full lg:text-center">
              <TypeAnimation
                sequence={[
                  'Liam Karlsson',
                  1200, // wait 1s before replacing the text
                  'Turning vision into reality with code & design.',
                  1200,
                ]}
                wrapper="span"
                speed={50}
                style={{ display: 'inline-block' }} // inline-block is required for the animation
                repeat={Infinity}
                className="py-2 mx-auto flex-col items-center justify-center overflow-hidden sm:py-0 inline-block text-dark dark:text-light text-6xl font-bold w-full capitalize xl:text-6xl"
              />

              <p className="my-4 text-base font-medium md:text-sm sm:!text-xs">
                Enthusiastic student with technical skills and
                experience in collaboration & independent work. Dedicated to applying my skills to solve problems, support and improve the working environment. I am committed to turning ideas into innovative applications. Explore my latest projects and certificates, showcasing my expertise in every realm.
              </p>
              <div className="mt-2 flex items-center self-start lg:self-center">
                <Link
                  href="/LK.pdf"
                  target={"_blank"}
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
                  className="ml-4 text-lg font-medium capitalize text-dark underline 
                  dark:text-light md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>

        <HireMe />
        <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
          <Image
            className="relative h-auto w-full"
            src={lightBulb}
            alt="Liam"
          />
        </div>
      </article>
    </>
  );
}
