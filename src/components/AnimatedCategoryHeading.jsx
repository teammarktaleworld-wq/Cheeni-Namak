// src\components\Animatedcategoryheading.jsx

import React, { useRef, useEffect } from "react";

export default function AnimatedCategoryHeading({ text }) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current.classList.add("heading-revealed");
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="category-heading-wrap text-center mb-10">
      <h2 className="text-3xl md:text-4xl font-serif font-black text-gray-900 relative inline-block">
        {text}
        <span className="category-underline" />
      </h2>
    </div>
  );
}