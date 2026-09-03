"use client";

import { useEffect, useRef, useState, CSSProperties } from "react";

type AnimationType = "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale-in";

interface AnimateInProps {
  children: React.ReactNode;
  className?: string;
  /** Delay before animation starts (ms) */
  delay?: number;
  /** Duration of animation (ms) */
  duration?: number;
  /** Animation style */
  animation?: AnimationType;
  /** How much of the element must be visible before triggering (0–1) */
  threshold?: number;
  /** HTML tag to render */
  as?: keyof JSX.IntrinsicElements;
}

const initialTransforms: Record<AnimationType, string> = {
  "fade-up":    "translateY(28px)",
  "fade-in":    "translateY(0)",
  "slide-left": "translateX(-32px)",
  "slide-right":"translateX(32px)",
  "scale-in":   "scale(0.92)",
};

export default function AnimateIn({
  children,
  className = "",
  delay     = 0,
  duration  = 650,
  animation = "fade-up",
  threshold = 0.12,
  as: Tag   = "div",
}: AnimateInProps) {
  const ref     = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const style: CSSProperties = {
    opacity:    shown ? 1 : 0,
    transform:  shown ? "none" : initialTransforms[animation],
    transition: `opacity ${duration}ms cubic-bezier(0.22,1,0.36,1) ${delay}ms,
                 transform ${duration}ms cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
    willChange: "opacity, transform",
  };

  return (
    // @ts-expect-error – dynamic tag with ref
    <Tag ref={ref} className={className} style={style}>
      {children}
    </Tag>
  );
}
