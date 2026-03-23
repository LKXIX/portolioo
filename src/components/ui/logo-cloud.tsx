import { PlusIcon } from "lucide-react";

type Logo = {
  src: string;
  alt: string;
  href: string;
};


type LogoCloudProps = {
  logos: Logo[];
  label?: string;
};

export function LogoCloud({ logos, label = "As seen in" }: LogoCloudProps) {
  const cols = Math.min(logos.length, 6);

  return (
    <div style={{ width: "100%", marginTop: "5rem" }}>
      <p style={{
        fontSize: "0.65rem",
        fontWeight: 600,
        textTransform: "uppercase" as const,
        letterSpacing: "0.15em",
        textAlign: "center" as const,
        marginBottom: 0,
        color: "rgba(130,130,130,0.8)",
      }}>
        {label}
      </p>

      <div style={{
        position: "relative" as const,
        marginTop: "1.5rem",
        borderTop: "1px solid rgba(255,255,255,0.07)",
        borderBottom: "1px solid rgba(255,255,255,0.07)",
      }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: `repeat(3, 1fr)`,
        }}
          className="md:grid-cols-6"
        >
          {logos.map((logo, i) => {
            const isHighlight = i % 2 === 0;
            const isLastInRow3 = i % 3 === 2;
            const isLastInRow6 = i === logos.length - 1 || i % 6 === 5;
            return (
              <a
                key={logo.alt}
                href={logo.href}
                target="_blank"
                rel="noopener nofollow"
                aria-label={logo.alt}
                style={{
                  position: "relative" as const,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "1.75rem 1.25rem",
                  backgroundColor: isHighlight ? "#111111" : "#0a0a0a",
                  borderRight: isLastInRow3 ? "none" : "1px solid rgba(255,255,255,0.07)",
                  transition: "background-color 0.2s",
                  textDecoration: "none",
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = "#1c1c1c";
                  const img = e.currentTarget.querySelector("img") as HTMLImageElement;
                  if (img) img.style.opacity = "1";
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.backgroundColor = isHighlight ? "#111111" : "#0a0a0a";
                  const img = e.currentTarget.querySelector("img") as HTMLImageElement;
                  if (img) img.style.opacity = "0.5";
                }}
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  style={{
                    width: "110px",
                    height: "40px",
                    objectFit: "contain" as const,
                    filter: "brightness(0) invert(1)",
                    opacity: 0.5,
                    display: "block",
                    transition: "opacity 0.2s",
                    pointerEvents: "none" as const,
                    userSelect: "none" as const,
                  }}
                />
                {(i === 2) && (
                  <PlusIcon
                    style={{ position: "absolute" as const, right: -12, bottom: -12, zIndex: 10, width: 24, height: 24, color: "rgba(255,255,255,0.07)" }}
                    strokeWidth={1}
                  />
                )}
              </a>
            );
          })}
        </div>
      </div>
    </div>
  );
}
