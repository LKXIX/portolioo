import { useEffect, useRef } from "react";

const TRAIL_LENGTH = 12;
const COLORS = ["#6366f1", "#818cf8", "#06b6d4", "#a5b4fc"];

const CursorTrail = () => {
  const canvasRef = useRef(null);
  const points = useRef([]);
  const mouse = useRef({ x: -999, y: -999 });
  const raf = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMove);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      points.current.unshift({ ...mouse.current });
      if (points.current.length > TRAIL_LENGTH) points.current.pop();

      points.current.forEach((p, i) => {
        const ratio = 1 - i / TRAIL_LENGTH;
        const r = ratio * 8;
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fillStyle = COLORS[i % COLORS.length] + Math.floor(ratio * 180).toString(16).padStart(2, "0");
        ctx.fill();
      });

      raf.current = requestAnimationFrame(draw);
    };
    draw();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full pointer-events-none z-50"
      style={{ mixBlendMode: "normal" }}
    />
  );
};

export default CursorTrail;
