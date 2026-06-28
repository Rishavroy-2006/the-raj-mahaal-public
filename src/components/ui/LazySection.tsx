import { useState, useEffect, useRef, ReactNode } from "react";

export function LazySection({ children, minHeight = "100vh" }: { children: ReactNode, minHeight?: string }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (ref.current) observer.unobserve(ref.current);
        }
      },
      { rootMargin: "400px" }
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, []);

  return <div ref={ref}>{isVisible ? children : <div style={{ minHeight }} />}</div>;
}
