import { useEffect, useState, useCallback } from "react";

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

const EGGS = [
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
];

const MAX_TRIGGER_LEN = Math.max(...EGGS.map((e) => e.trigger.length));

const EasterEgg = () => {
  const [buffer, setBuffer] = useState("");
  const [pieces, setPieces] = useState([]);
  const [toast, setToast] = useState(null);
  const [matrix, setMatrix] = useState(false);

  const fire = useCallback((egg) => {
    if (egg.confetti) setPieces(Array.from({ length: 50 }, (_, i) => i));
    if (egg.matrix) setMatrix(true);
    setToast({ message: egg.message, emoji: egg.emoji });
  }, []);

  useEffect(() => {
    const handler = (e) => {
      const next = (buffer + e.key).slice(-MAX_TRIGGER_LEN);
      setBuffer(next);
      const match = EGGS.find((egg) => next.endsWith(egg.trigger));
      if (match) fire(match);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [buffer, fire]);

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
    </>
  );
};

export default EasterEgg;
