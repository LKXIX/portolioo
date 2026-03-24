import { useEffect, useState, useCallback, useRef } from "react";
import { useRouter } from "next/router";

const random = (min, max) => Math.random() * (max - min) + min;

const COLORS = ["#6366f1", "#06b6d4", "#f59e0b", "#10b981", "#f43f5e", "#818cf8", "#34d399"];

const Confetti = ({ id, onDone }) => {
  const style = {
    position: "fixed",
    left: `${random(5, 95)}vw`,
    top: "-20px",
    width: `${random(6, 16)}px`,
    height: `${random(6, 16)}px`,
    borderRadius: Math.random() > 0.5 ? "50%" : "2px",
    background: COLORS[Math.floor(random(0, COLORS.length))],
    animation: `confettiFall ${random(1.2, 2.6)}s ease-in forwards`,
    zIndex: 9999,
    pointerEvents: "none",
  };
  useEffect(() => {
    const t = setTimeout(onDone, 2800);
    return () => clearTimeout(t);
  }, [onDone]);
  return <div style={style} />;
};

const Toast = ({ message, emoji, onDone }) => {
  useEffect(() => {
    const t = setTimeout(onDone, 4000);
    return () => clearTimeout(t);
  }, [onDone]);
  return (
    <div
      style={{
        position: "fixed",
        bottom: "2rem",
        left: "50%",
        transform: "translateX(-50%)",
        zIndex: 9999,
        animation: "toastIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1) forwards",
      }}
      className="bg-dark dark:bg-light text-light dark:text-dark px-6 py-3 rounded-2xl font-bold text-sm shadow-2xl pointer-events-none whitespace-nowrap border border-white/10"
    >
      {emoji} {message}
    </div>
  );
};

// Matrix rain for "matrix" easter egg
const MatrixRain = ({ onDone }) => {
  useEffect(() => {
    const canvas = document.createElement("canvas");
    canvas.style.cssText = "position:fixed;top:0;left:0;width:100%;height:100%;z-index:9998;pointer-events:none;opacity:0.85;";
    document.body.appendChild(canvas);
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const cols = Math.floor(canvas.width / 20);
    const drops = Array(cols).fill(1);
    const chars = "RANKAD01アイウエオカキクケコ";

    const draw = () => {
      ctx.fillStyle = "rgba(0,0,0,0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = "#6366f1";
      ctx.font = "14px monospace";
      drops.forEach((y, i) => {
        const char = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(char, i * 20, y * 20);
        if (y * 20 > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      });
    };

    const interval = setInterval(draw, 40);
    const timeout = setTimeout(() => {
      clearInterval(interval);
      canvas.remove();
      onDone();
    }, 4000);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
      canvas.remove();
    };
  }, [onDone]);

  return null;
};

// ── Glitch overlay ────────────────────────────────────────────────────────────
const GlitchOverlay = ({ onDone }) => {
  useEffect(() => {
    const el = document.createElement("div");
    el.style.cssText =
      "position:fixed;top:0;left:0;width:100%;height:100%;z-index:9997;pointer-events:none;animation:glitch 0.15s steps(1) infinite;";
    document.body.appendChild(el);
    const timeout = setTimeout(() => { el.remove(); onDone(); }, 1500);
    return () => { clearTimeout(timeout); el.remove(); };
  }, [onDone]);
  return null;
};

// ── Nyan cat trail ────────────────────────────────────────────────────────────
const NyanTrail = ({ onDone }) => {
  useEffect(() => {
    const el = document.createElement("div");
    el.textContent = "🌈🐱";
    el.style.cssText =
      "position:fixed;top:50%;left:-80px;font-size:2rem;z-index:9999;pointer-events:none;animation:nyanRun 2s linear forwards;";
    document.body.appendChild(el);
    const timeout = setTimeout(() => { el.remove(); onDone(); }, 2200);
    return () => { clearTimeout(timeout); el.remove(); };
  }, [onDone]);
  return null;
};

// ── Falling emojis (generic) ─────────────────────────────────────────────────
const EmojiShower = ({ emoji, onDone }) => {
  const [pieces] = useState(() =>
    Array.from({ length: 30 }, (_, i) => ({
      id: i,
      left: `${random(2, 98)}vw`,
      delay: `${random(0, 1.2)}s`,
      dur: `${random(1.5, 3)}s`,
      size: `${random(1.2, 2.4)}rem`,
    }))
  );
  useEffect(() => {
    const t = setTimeout(onDone, 3500);
    return () => clearTimeout(t);
  }, [onDone]);
  return (
    <>
      {pieces.map((p) => (
        <div
          key={p.id}
          style={{
            position: "fixed",
            left: p.left,
            top: "-3rem",
            fontSize: p.size,
            animation: `confettiFall ${p.dur} ${p.delay} ease-in forwards`,
            zIndex: 9999,
            pointerEvents: "none",
          }}
        >
          {emoji}
        </div>
      ))}
    </>
  );
};

// ── Konami code detector ─────────────────────────────────────────────────────
const KONAMI = ["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];

const EGGS = [
  // ── Originals ──────────────────────────────────────────────────────────────
  {
    trigger: "rankad",
    emoji: "🚀",
    message: "You found it. Rankad.ai is the future of search.",
    confetti: true,
  },
  {
    trigger: "liam",
    emoji: "👋",
    message: "Hey, that's me! Nice to meet you.",
    confetti: false,
  },
  {
    trigger: "silicon",
    emoji: "🌉",
    message: "San Francisco, here we come.",
    confetti: true,
  },
  {
    trigger: "hello",
    emoji: "🤖",
    message: "Hello to you too, human.",
    confetti: false,
  },
  {
    trigger: "matrix",
    emoji: "🕶️",
    message: "There is no spoon.",
    confetti: false,
    matrix: true,
  },
  {
    trigger: "coffee",
    emoji: "☕",
    message: "I run on coffee and Next.js.",
    confetti: false,
  },
  {
    trigger: "ship",
    emoji: "🚢",
    message: "Ship it. Move fast. Break nothing.",
    confetti: true,
  },

  // ── Personal ────────────────────────────────────────────────────────────────
  {
    trigger: "fragrance",
    emoji: "🌸",
    message: "A man of culture. Scent is memory.",
    confetti: false,
  },
  {
    trigger: "perfume",
    emoji: "🫧",
    message: "Top notes: ambition. Heart: code. Base: success.",
    confetti: false,
  },
  {
    trigger: "0519",
    emoji: "🎂",
    message: "May 19 — happy birthday to the future! 🎉",
    confetti: true,
  },
  {
    trigger: "lkinnovations",
    emoji: "⚡",
    message: "50+ projects. 4.6★ Trustpilot. Built different.",
    confetti: false,
  },
  {
    trigger: "residency",
    emoji: "🏙️",
    message: "1 of ~60 selected from 3,500+ global applicants. Let that sink in.",
    confetti: true,
  },
  {
    trigger: "laholm",
    emoji: "🇸🇪",
    message: "Laholm represent. Small town, no limits.",
    confetti: false,
  },
  {
    trigger: "veinge",
    emoji: "🌾",
    message: "From Veinge to Silicon Valley. They didn't see that coming.",
    confetti: true,
  },
  {
    trigger: "kattegatt",
    emoji: "🎓",
    message: "Kattegatt Tech — where it all started.",
    confetti: false,
  },

  // ── Tech triggers ──────────────────────────────────────────────────────────
  {
    trigger: "nextjs",
    emoji: "▲",
    message: "Next.js is life. The only framework you'll ever need.",
    confetti: false,
  },
  {
    trigger: "tailwind",
    emoji: "🎨",
    message: "className=\"flex items-center justify-center\" — you know the way.",
    confetti: false,
  },
  {
    trigger: "typescript",
    emoji: "🔷",
    message: "TypeScript: spending 30 min fixing types to save 10 min of bugs.",
    confetti: false,
  },
  {
    trigger: "vercel",
    emoji: "▲",
    message: "Deployed in 30 seconds. Shipped.",
    confetti: true,
  },
  {
    trigger: "claude",
    emoji: "🤖",
    message: "Best coding assistant alive. Built this site with it.",
    confetti: false,
  },
  {
    trigger: "github",
    emoji: "🐙",
    message: "git push origin main — the most satisfying command.",
    confetti: false,
  },
  {
    trigger: "vscode",
    emoji: "🖥️",
    message: "VS Code dark theme. No other way to live.",
    confetti: false,
  },
  {
    trigger: "macbook",
    emoji: "💻",
    message: "MacBook Pro M3. Fastest thing I own. Almost.",
    confetti: false,
  },
  {
    trigger: "supabase",
    emoji: "🟢",
    message: "Open source Firebase. The backend you didn't know you needed.",
    confetti: false,
  },
  {
    trigger: "figma",
    emoji: "🎭",
    message: "Design in Figma. Build in Next.js. Ship with Vercel.",
    confetti: false,
  },

  // ── Out of the box ──────────────────────────────────────────────────────────
  {
    trigger: "sudo",
    emoji: "💻",
    message: "sudo: permission denied. Even here.",
    confetti: false,
  },
  {
    trigger: "404",
    emoji: "🕳️",
    message: "Page not found — but you found this. Paradox.",
    confetti: false,
  },
  {
    trigger: "yolo",
    emoji: "🎲",
    message: "YOLO-driven development. The only methodology that matters.",
    confetti: true,
  },
  {
    trigger: "bitcoin",
    emoji: "₿",
    message: "Have you tried just buying Bitcoin instead?",
    confetti: false,
  },
  {
    trigger: "ycombinator",
    emoji: "🍊",
    message: "Not YC. Better. The Residency, SF 🌁",
    confetti: true,
  },
  {
    trigger: "gpt",
    emoji: "🤖",
    message: "GPT answers. Rankad makes YOUR brand the answer GPT gives.",
    confetti: false,
  },
  {
    trigger: "sleep",
    emoji: "😴",
    message: "Sleep is for people who haven't found product-market fit yet.",
    confetti: false,
  },
  {
    trigger: "boring",
    emoji: "🥱",
    message: "Nothing boring here. Try typing 'matrix'.",
    confetti: false,
  },
  {
    trigger: "sweden",
    emoji: "🇸🇪",
    message: "Laholm → San Francisco. Small town, big moves.",
    confetti: true,
  },
  {
    trigger: "hack",
    emoji: "🔐",
    message: "IT security nerd detected. Don't try anything funny.",
    confetti: false,
    glitch: true,
  },
  {
    trigger: "money",
    emoji: "💸",
    message: "Futures trader + founder + agency. Diversified.",
    confetti: false,
  },
  {
    trigger: "google",
    emoji: "🔍",
    message: "Google is the past. AI search is the present. Rankad is the future.",
    confetti: false,
  },
  {
    trigger: "fire",
    emoji: "🔥",
    message: "🔥🔥🔥 This whole site is fire.",
    confetti: true,
    emojiShower: "🔥",
  },
  {
    trigger: "vim",
    emoji: "📝",
    message: "How do you exit vim? No one knows. No one ever leaves.",
    confetti: false,
  },
  {
    trigger: "vibes",
    emoji: "✨",
    message: "Immaculate vibes only.",
    confetti: true,
  },
  {
    trigger: "nyan",
    emoji: "🌈",
    message: "Nyan nyan nyan nyan nyan nyan nyan~",
    confetti: false,
    nyan: true,
  },
  {
    trigger: "pizza",
    emoji: "🍕",
    message: "Debugging fuel of champions.",
    confetti: false,
    emojiShower: "🍕",
  },
  {
    trigger: "aliens",
    emoji: "👽",
    message: "They asked how. I asked why not.",
    confetti: true,
  },
  {
    trigger: "42",
    emoji: "🌌",
    message: "The answer to life, the universe, and everything. You get it.",
    confetti: false,
  },
  {
    trigger: "poggers",
    emoji: "😲",
    message: "POGGERS in the chat.",
    confetti: true,
  },
  {
    trigger: "based",
    emoji: "💎",
    message: "Extremely based. Thanks.",
    confetti: false,
  },
  {
    trigger: "sigma",
    emoji: "🐺",
    message: "Sigma grindset: ship daily, sleep when funded.",
    confetti: false,
  },
  {
    trigger: "vibe",
    emoji: "🎵",
    message: "Vibe check: passed ✓",
    confetti: false,
  },
  {
    trigger: "slay",
    emoji: "💅",
    message: "Slaying every sprint since 2024.",
    confetti: true,
  },
  {
    trigger: "bruh",
    emoji: "💀",
    message: "Bruh.",
    confetti: false,
  },
  {
    trigger: "gigachad",
    emoji: "🗿",
    message: "Building a startup at 19 from Sweden. Yes, gigachad.",
    confetti: true,
  },
  {
    trigger: "debug",
    emoji: "🐛",
    message: "console.log('why is this not working') — we've all been there.",
    confetti: false,
  },
  {
    trigger: "deployed",
    emoji: "🚀",
    message: "It works on my machine. Ship it.",
    confetti: true,
  },
  {
    trigger: "sprint",
    emoji: "🏃",
    message: "Another sprint, another feature. Velocity: maximum.",
    confetti: false,
  },
  {
    trigger: "2005",
    emoji: "👶",
    message: "Born 2005. Building the future since 2024. Fast learner.",
    confetti: false,
  },
  {
    trigger: "futures",
    emoji: "📈",
    message: "Futures trading at 19. Risk managed.",
    confetti: false,
  },
  {
    trigger: "cisco",
    emoji: "🔗",
    message: "CCNAv7 certified. Networks are just vibes with wires.",
    confetti: false,
  },
  {
    trigger: "harvard",
    emoji: "🎓",
    message: "CS50. The course that broke and rebuilt my brain.",
    confetti: false,
  },
  {
    trigger: "perplexity",
    emoji: "🔭",
    message: "Perplexity is great. Rankad makes sure YOU show up in it.",
    confetti: false,
  },
  {
    trigger: "arc",
    emoji: "🌐",
    message: "Arc Browser. Everyone else is catching up.",
    confetti: false,
  },
  {
    trigger: "notion",
    emoji: "📝",
    message: "My second brain. First brain is also pretty good.",
    confetti: false,
  },
  {
    trigger: "aeo",
    emoji: "🧠",
    message: "AEO — Answer Engine Optimization. The next frontier. Rankad owns it.",
    confetti: true,
  },
  {
    trigger: "konami",
    emoji: "🎮",
    message: "↑↑↓↓←→←→BA — you clearly have too much time. Respect.",
    confetti: true,
  },

  // ── Personal favourites ────────────────────────────────────────────────────
  {
    trigger: "megamare",
    emoji: "🌊",
    message: "Megamare by Orto Parisi. The ocean in a bottle. Impeccable taste.",
    confetti: false,
    emojiShower: "🌊",
  },
  {
    trigger: "orto parisi",
    emoji: "🫧",
    message: "A man who wears Orto Parisi doesn't need to say anything.",
    confetti: false,
  },
  {
    trigger: "taycan",
    emoji: "⚡",
    message: "Porsche Taycan. Electric. Silent. Devastating. The dream.",
    confetti: true,
    emojiShower: "🏎️",
  },
  {
    trigger: "porsche",
    emoji: "🏎️",
    message: "There is no substitute. Especially not a Taycan.",
    confetti: true,
  },
  {
    trigger: "cars",
    emoji: "🚗",
    message: "Cars are sculptures that move at 300 km/h. Pure art.",
    confetti: false,
  },
  {
    trigger: "bikes",
    emoji: "🏍️",
    message: "Two wheels. Full focus. Nothing else exists.",
    confetti: false,
  },
  {
    trigger: "motorcycle",
    emoji: "🏍️",
    message: "The most honest machine ever built.",
    confetti: false,
  },
  {
    trigger: "henry ford",
    emoji: "💡",
    message: "Whether you think you can, or think you can't — you're right. Living by this.",
    confetti: false,
  },
];

const MAX_TRIGGER_LEN = Math.max(...EGGS.map((e) => e.trigger.length));

const EasterEgg = () => {
  const [buffer, setBuffer] = useState("");
  const [konamiBuffer, setKonamiBuffer] = useState([]);
  const [pieces, setPieces] = useState([]);
  const [toast, setToast] = useState(null);
  const [matrix, setMatrix] = useState(false);
  const [glitch, setGlitch] = useState(false);
  const [nyan, setNyan] = useState(false);
  const [emojiShower, setEmojiShower] = useState(null);
  const router = useRouter();

  const fire = useCallback((egg) => {
    if (egg.confetti) setPieces(Array.from({ length: 50 }, (_, i) => i));
    if (egg.matrix) setMatrix(true);
    if (egg.glitch) setGlitch(true);
    if (egg.nyan) setNyan(true);
    if (egg.emojiShower) setEmojiShower(egg.emojiShower);
    setToast({ message: egg.message, emoji: egg.emoji });
  }, []);

  // ── Keyboard buffer (text triggers) ──────────────────────────────────────
  useEffect(() => {
    const handler = (e) => {
      // Ignore when typing in inputs/textareas
      if (["INPUT", "TEXTAREA"].includes(document.activeElement?.tagName)) return;

      const next = (buffer + e.key).slice(-MAX_TRIGGER_LEN);
      setBuffer(next);
      const match = EGGS.find((egg) => next.endsWith(egg.trigger));
      if (match) fire(match);

      // Konami code
      setKonamiBuffer((prev) => {
        const updated = [...prev, e.key].slice(-KONAMI.length);
        if (updated.join(",") === KONAMI.join(",")) {
          fire({
            emoji: "🎮",
            message: "↑↑↓↓←→←→BA — Konami code unlocked. You have too much time. Respect.",
            confetti: true,
            emojiShower: "🎮",
          });
        }
        return updated;
      });
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [buffer, fire]);

  // ── Secret click combos per page ──────────────────────────────────────────
  const clickCount = useRef({});
  useEffect(() => {
    clickCount.current = {};
  }, [router.pathname]);

  useEffect(() => {
    const handleClick = (e) => {
      const target = e.target.closest("[data-egg]");
      if (!target) return;
      const key = target.dataset.egg;
      clickCount.current[key] = (clickCount.current[key] || 0) + 1;
      const count = clickCount.current[key];

      // Profile photo: 5 clicks
      if (key === "profile-photo" && count === 5) {
        clickCount.current[key] = 0;
        fire({ emoji: "📸", message: "You just triple-tapped a founder's face. Bold.", confetti: true });
      }
      // Logo: 3 clicks
      if (key === "site-logo" && count === 3) {
        clickCount.current[key] = 0;
        fire({ emoji: "⚡", message: "Triple-click the logo. You found the secret.", confetti: false, matrix: true });
      }
      // Age counter: 3 clicks
      if (key === "age-counter" && count === 3) {
        clickCount.current[key] = 0;
        fire({ emoji: "⏱️", message: "Time flies when you're building startups.", confetti: false });
      }
      // Spotify widget: 3 clicks
      if (key === "spotify" && count === 3) {
        clickCount.current[key] = 0;
        fire({ emoji: "🎵", message: "Now playing: the sound of shipping fast.", confetti: false, nyan: true });
      }
      // HireMe circle: 7 clicks
      if (key === "hireme" && count === 7) {
        clickCount.current[key] = 0;
        fire({ emoji: "💼", message: "7 clicks to hire me? I'm already impressed.", confetti: true });
      }
      // Footer: click hidden area
      if (key === "footer-secret" && count === 1) {
        fire({ emoji: "👀", message: "You read the footer. No one reads the footer.", confetti: false });
      }
      // Projects page — click all 4 featured projects
      if (key === "project-card") {
        if (count === 4) {
          fire({ emoji: "🗺️", message: "You've seen all the projects. Impressed yet?", confetti: true });
        }
      }
      // Stack page — click every category
      if (key === "stack-category") {
        if (count === 5) {
          clickCount.current[key] = 0;
          fire({ emoji: "🧰", message: "Full stack explorer. You checked every tool.", confetti: true });
        }
      }
      // Media page — click all press cards
      if (key === "press-card") {
        if (count === 4) {
          fire({ emoji: "📰", message: "All press read. You're officially a super fan.", confetti: true, emojiShower: "📰" });
        }
      }
      // About page skills: click 10 skills
      if (key === "skill-tag") {
        if (count === 10) {
          fire({ emoji: "🧠", message: "10 skills clicked. You know the whole arsenal.", confetti: true });
        }
      }
      // Certificates page: click 5 certs
      if (key === "cert-card") {
        if (count === 5) {
          fire({ emoji: "🏆", message: "5 certs deep. There are 23+ total. Keep going.", confetti: false });
        }
        if (count === 23) {
          fire({ emoji: "🎓", message: "You clicked every certificate. Absolute legend.", confetti: true, emojiShower: "🏆" });
        }
      }
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [fire, router.pathname]);

  // ── Birthday check (May 19) ───────────────────────────────────────────────
  useEffect(() => {
    const now = new Date();
    if (now.getMonth() === 4 && now.getDate() === 19) {
      const fired = sessionStorage.getItem("bday_egg");
      if (!fired) {
        sessionStorage.setItem("bday_egg", "1");
        setTimeout(() => {
          fire({
            emoji: "🎂",
            message: "Happy birthday Liam! May 19 — another year, another startup. 🎉",
            confetti: true,
            emojiShower: "🎂",
          });
        }, 2000);
      }
    }
  }, [fire]);

  // ── Idle detect: 60s no interaction ──────────────────────────────────────
  useEffect(() => {
    let idleTimer;
    const reset = () => {
      clearTimeout(idleTimer);
      idleTimer = setTimeout(() => {
        fire({ emoji: "💤", message: "Still there? The site won't build itself.", confetti: false });
      }, 60000);
    };
    window.addEventListener("mousemove", reset);
    window.addEventListener("keydown", reset);
    reset();
    return () => {
      clearTimeout(idleTimer);
      window.removeEventListener("mousemove", reset);
      window.removeEventListener("keydown", reset);
    };
  }, [fire]);

  const remove = (id) => setPieces((p) => p.filter((x) => x !== id));

  return (
    <>
      <style>{`
        @keyframes confettiFall {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(110vh) rotate(720deg); opacity: 0; }
        }
        @keyframes toastIn {
          0% { transform: translateX(-50%) translateY(20px); opacity: 0; }
          100% { transform: translateX(-50%) translateY(0); opacity: 1; }
        }
        @keyframes glitch {
          0%   { filter: hue-rotate(0deg) saturate(3); }
          25%  { filter: hue-rotate(90deg) saturate(5) blur(1px); }
          50%  { filter: hue-rotate(180deg) invert(0.3); }
          75%  { filter: hue-rotate(270deg) saturate(5) blur(2px); }
          100% { filter: hue-rotate(360deg) saturate(3); }
        }
        @keyframes nyanRun {
          0%   { left: -80px; top: 50%; }
          100% { left: calc(100vw + 80px); top: 40%; }
        }
      `}</style>
      {pieces.map((id) => (
        <Confetti key={id} id={id} onDone={() => remove(id)} />
      ))}
      {toast && (
        <Toast
          message={toast.message}
          emoji={toast.emoji}
          onDone={() => setToast(null)}
        />
      )}
      {matrix && <MatrixRain onDone={() => setMatrix(false)} />}
      {glitch && <GlitchOverlay onDone={() => setGlitch(false)} />}
      {nyan && <NyanTrail onDone={() => setNyan(false)} />}
      {emojiShower && <EmojiShower emoji={emojiShower} onDone={() => setEmojiShower(null)} key={emojiShower + Date.now()} />}
    </>
  );
};

export default EasterEgg;
