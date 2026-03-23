import Link from "next/link";
import React from "react";
import Layout from "./Layout";
import { GithubIcon, InstagramIcon, LinkedInIcon, TwitterIcon } from "./Icons";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium dark:text-light dark:border-light">
      <Layout className="py-12 lg:py-8">

        {/* Top grid */}
        <div className="grid grid-cols-4 gap-8 mb-10 lg:grid-cols-2 sm:grid-cols-1">

          {/* Brand */}
          <div className="flex flex-col gap-3">
            <span className="text-base font-bold text-dark dark:text-light">Liam Karlsson</span>
            <p className="text-sm text-dark/60 dark:text-light/60 leading-relaxed">
              Co-founder of Rankad.ai. Founder of LK Innovations AB. Building the future of AI search.
            </p>
            <nav className="flex items-center gap-3 mt-1" aria-label="Social media links">
              <motion.a href="https://x.com/LiamKarlsson05" target="_blank" rel="noopener nofollow" whileHover={{ y: -2 }} aria-label="X profile" className="w-4 text-dark/60 dark:text-light/60 hover:text-dark dark:hover:text-light transition-colors">
                <TwitterIcon />
              </motion.a>
              <motion.a href="https://www.instagram.com/liamkarlsson__/" target="_blank" rel="noopener nofollow" whileHover={{ y: -2 }} aria-label="Instagram profile" className="w-4 text-dark/60 dark:text-light/60 hover:text-dark dark:hover:text-light transition-colors">
                <InstagramIcon />
              </motion.a>
              <motion.a href="https://github.com/LKXIX" target="_blank" rel="noopener nofollow" whileHover={{ y: -2 }} aria-label="GitHub profile" className="w-4 text-dark/60 dark:text-light/60 hover:text-dark dark:hover:text-light transition-colors">
                <GithubIcon />
              </motion.a>
              <motion.a href="https://www.linkedin.com/in/liamkarlsson/" target="_blank" rel="noopener nofollow" whileHover={{ y: -2 }} aria-label="LinkedIn profile" className="w-4 text-dark/60 dark:text-light/60 hover:text-dark dark:hover:text-light transition-colors">
                <LinkedInIcon />
              </motion.a>
            </nav>
          </div>

          {/* Navigation */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-dark/40 dark:text-light/40">Navigation</span>
            <nav className="flex flex-col gap-2" aria-label="Footer navigation">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/projects", label: "Projects" },
                { href: "/articles", label: "Achievements" },
                { href: "/media", label: "Press & Media" },
                { href: "/blog", label: "Blog" },
                { href: "/stack", label: "My Stack" },
              ].map(({ href, label }) => (
                <Link key={href} href={href} className="text-sm text-dark/60 dark:text-light/60 hover:text-dark dark:hover:text-light transition-colors w-fit">
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Blog topics */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-dark/40 dark:text-light/40">Blog Topics</span>
            <nav className="flex flex-col gap-2" aria-label="Blog topics">
              {[
                { href: "/blog", label: "AEO & AI Search" },
                { href: "/blog", label: "SEO Strategy" },
                { href: "/blog", label: "Web Development" },
                { href: "/blog", label: "Startups" },
                { href: "/blog", label: "Sales & Growth" },
              ].map(({ href, label }) => (
                <Link key={label} href={href} className="text-sm text-dark/60 dark:text-light/60 hover:text-dark dark:hover:text-light transition-colors w-fit">
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold uppercase tracking-widest text-dark/40 dark:text-light/40">Contact</span>
            <div className="flex flex-col gap-2">
              <a href="mailto:business@liamkarlsson.com" className="text-sm text-dark/60 dark:text-light/60 hover:text-dark dark:hover:text-light transition-colors w-fit">
                business@liamkarlsson.com
              </a>
              <a href="mailto:contact@rankad.ai" className="text-sm text-dark/60 dark:text-light/60 hover:text-dark dark:hover:text-light transition-colors w-fit">
                contact@rankad.ai
              </a>
              <a href="https://rankad.ai" target="_blank" rel="noopener nofollow" className="text-sm text-dark/60 dark:text-light/60 hover:text-dark dark:hover:text-light transition-colors w-fit">
                rankad.ai ↗
              </a>
              <a href="https://lkinnovations.se" target="_blank" rel="noopener nofollow" className="text-sm text-dark/60 dark:text-light/60 hover:text-dark dark:hover:text-light transition-colors w-fit">
                lkinnovations.se ↗
              </a>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="border-t border-solid border-dark/10 dark:border-light/10 pt-6 flex items-center justify-between sm:flex-col sm:gap-3 sm:text-center">
          <span className="text-xs text-dark/40 dark:text-light/40">
            {new Date().getFullYear()} &copy; Liam Karlsson. All Rights Reserved.
          </span>
          <span className="text-xs text-dark/40 dark:text-light/40">
            Built with Next.js · Powered by <a href="https://rankad.ai" target="_blank" rel="noopener nofollow" className="hover:text-primary transition-colors">Rankad.ai</a>
          </span>
        </div>

      </Layout>
    </footer>
  );
};

export default Footer;
