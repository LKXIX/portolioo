import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SpotifyIcon = () => (
  <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
  </svg>
);

const BarVisualizer = () => (
  <span className="flex items-end gap-[2px] h-3">
    {[1, 2, 3].map((i) => (
      <motion.span
        key={i}
        className="w-[3px] bg-primary dark:bg-primaryDark rounded-full"
        animate={{ height: ["4px", "12px", "4px"] }}
        transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15, ease: "easeInOut" }}
      />
    ))}
  </span>
);

const SpotifyNowPlaying = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetch_ = () =>
      fetch("/api/spotify")
        .then((r) => r.json())
        .then(setData)
        .catch(() => setData({ isPlaying: false }));

    fetch_();
    const interval = setInterval(fetch_, 30000);
    return () => clearInterval(interval);
  }, []);

  if (!data) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex items-center gap-3 px-4 py-3 rounded-xl border border-solid border-dark/10 dark:border-light/10 bg-light dark:bg-dark w-fit max-w-xs"
      >
        <span className="text-[#1DB954]"><SpotifyIcon /></span>

        {data.isPlaying ? (
          <>
            {data.albumArt && (
              <img src={data.albumArt} alt={data.album} className="w-8 h-8 rounded object-cover" />
            )}
            <div className="flex flex-col min-w-0">
              <a
                href={data.songUrl}
                target="_blank"
                rel="noopener nofollow"
                className="text-xs font-semibold text-dark dark:text-light truncate hover:underline"
              >
                {data.title}
              </a>
              <span className="text-xs text-dark/50 dark:text-light/50 truncate">{data.artist}</span>
            </div>
            <BarVisualizer />
          </>
        ) : (
          <span className="text-xs text-dark/50 dark:text-light/50">Not playing</span>
        )}
      </motion.div>
    </AnimatePresence>
  );
};

export default SpotifyNowPlaying;
