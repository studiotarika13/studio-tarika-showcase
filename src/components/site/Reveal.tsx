import { useEffect, useRef, useState, type CSSProperties, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface RevealProps {
  as?: ElementType;
  className?: string;
  delay?: number;
  children: ReactNode;
  id?: string;
}

/** Fades content up as it scrolls into view. Content stays visible without JS. */
export function Reveal({ as: Tag = "div", className, delay = 0, children, id }: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setVisible(true);
          io.disconnect();
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
    );
    io.observe(node);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      id={id}
      className={cn("reveal", visible && "is-visible", className)}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
