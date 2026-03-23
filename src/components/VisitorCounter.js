import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const VisitorCounter = () => {
  const [count, setCount] = useState(null);

  useEffect(() => {
    fetch("/api/visitors", { method: "POST" })
      .then((r) => r.json())
      .then((d) => setCount(d.count))
      .catch(() => {});
  }, []);

  if (!count) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="flex items-center gap-2 text-xs text-dark/50 dark:text-light/50"
    >
      <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse" />
      <span>You are visitor <span className="font-semibold text-dark dark:text-light">#{count.toLocaleString()}</span></span>
    </motion.div>
  );
};

export default VisitorCounter;
