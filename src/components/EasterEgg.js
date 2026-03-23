import { useEffect, useState } from "react";

const TARGET = "rankad";

const random = (min, max) => Math.random() * (max - min) + min;

const Confetti = ({ id, onDone }) => {
  const style = {
    position: "fixed",
    left: `${random(10, 90)}vw`,
    top: "-20px",
    width: `${random(6, 14)}px`,
    height: `${random(6, 14)}px`,
    borderRadius: Math.random() > 0.5 ? "50%" : "2px",
    background: ["#6366f1", "#06b6d4", "#f59e0b", "#10b981", "#f43f5e", "#818cf8"][Math.floor(random(0, 6))],
    animation: `confettiFall ${random(1.2, 2.4)}s ease-in forwards`,
    zIndex: 9999,
    pointerEvents: "none",
  };
  useEffect(() => {
    const t = setTimeout(onDone, 2500);
    return () => clearTimeout(t);
  }, [onDone]);
  return <div style={style} />;
};

const EasterEgg = () => {
  const [buffer, setBuffer] = useState("");
  const [pieces, setPieces] = useState([]);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      const next = (buffer + e.key).slice(-TARGET.length);
      setBuffer(next);
      if (next === TARGET) {
        setPieces(Array.from({ length: 40 }, (_, i) => i));
        setShow(true);
        setTimeout(() => setShow(false), 3000);
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [buffer]);

  const remove = (id) => setPieces((p) => p.filter((x) => x !== id));

  return (
    <>
      <style>{`
        @keyframes confettiFall {
          0% { transform: translateY(0) rotate(0deg); opacity: 1; }
          100% { transform: translateY(110vh) rotate(720deg); opacity: 0; }
        }
      `}</style>
      {pieces.map((id) => (
        <Confetti key={id} id={id} onDone={() => remove(id)} />
      ))}
      {show && (
        <div
          style={{ position: "fixed", bottom: "2rem", left: "50%", transform: "translateX(-50%)", zIndex: 9999 }}
          className="bg-dark dark:bg-light text-light dark:text-dark px-6 py-3 rounded-xl font-bold text-sm shadow-xl pointer-events-none"
        >
          🚀 You found it. Rankad.ai is the future of search.
        </div>
      )}
    </>
  );
};

export default EasterEgg;
