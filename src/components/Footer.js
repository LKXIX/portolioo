import Link from "next/link";
import React from "react";
import Layout from "./Layout";
import { GithubIcon, InstagramIcon, LinkedInIcon, TwitterIcon } from "./Icons";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer
      className="w-full border-t-2 border-solid border-dark
    font-medium text-lg dark:text-light dark:border-light sm:text-base
    "
    >
      <Layout className="py-8 flex items-center justify-between lg:flex-col lg:py-6 gap-4">
        <span className="text-sm">{new Date().getFullYear()} &copy; Liam Karlsson. All Rights Reserved.</span>

        <nav className="flex items-center gap-4" aria-label="Social media links">
          <motion.a href="https://x.com/LiamKarlsson05" target="_blank" rel="noopener nofollow" whileHover={{ y: -2 }} aria-label="X profile" className="w-5">
            <TwitterIcon />
          </motion.a>
          <motion.a href="https://www.instagram.com/liamkarlsson__/" target="_blank" rel="noopener nofollow" whileHover={{ y: -2 }} aria-label="Instagram profile" className="w-5">
            <InstagramIcon />
          </motion.a>
          <motion.a href="https://github.com/LKXIX" target="_blank" rel="noopener nofollow" whileHover={{ y: -2 }} aria-label="GitHub profile" className="w-5">
            <GithubIcon />
          </motion.a>
          <motion.a href="https://www.linkedin.com/in/liamkarlsson/" target="_blank" rel="noopener nofollow" whileHover={{ y: -2 }} aria-label="LinkedIn profile" className="w-5">
            <LinkedInIcon />
          </motion.a>
        </nav>

        <Link
          href="mailto:business@liamkarlsson.com"
          className="underline underline-offset-2 text-sm"
        >
          business@liamkarlsson.com
        </Link>
      </Layout>
    </footer>
  );
};

export default Footer;
