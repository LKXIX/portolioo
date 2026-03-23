import { motion } from "framer-motion";
import Link from "next/link";

const STATUS = {
  text: "Building Rankad.ai in San Francisco",
  link: "https://rankad.ai",
  emoji: "🟢",
};

const StatusBar = () => (
  <motion.div
    initial={{ y: -40, opacity: 0 }}
    animate={{ y: 0, opacity: 1 }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className="w-full bg-dark dark:bg-light text-light dark:text-dark text-xs font-medium py-2 px-4 flex items-center justify-center gap-2 text-center"
  >
    <span>{STATUS.emoji}</span>
    <span>{STATUS.text}</span>
    <a
      href={STATUS.link}
      target="_blank"
      rel="noopener nofollow"
      className="underline underline-offset-2 opacity-70 hover:opacity-100 transition-opacity ml-1"
    >
      rankad.ai →
    </a>
  </motion.div>
);

export default StatusBar;
