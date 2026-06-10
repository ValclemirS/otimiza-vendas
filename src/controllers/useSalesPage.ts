import { useState, useEffect, useCallback } from "react";

export function useSalesPage() {
  const [openFaq, setOpenFaq] = useState<number>(0);
  const [gallery, setGallery] = useState<{ images: string[]; index: number } | null>(null);

  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach((e) => e.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    els.forEach((e) => io.observe(e));
    return () => io.disconnect();
  }, []);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!gallery) return;
      if (e.key === "ArrowRight") setGallery((g) => g && { ...g, index: (g.index + 1) % g.images.length });
      if (e.key === "ArrowLeft")  setGallery((g) => g && { ...g, index: (g.index - 1 + g.images.length) % g.images.length });
      if (e.key === "Escape")     setGallery(null);
    },
    [gallery]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  function toggleFaq(index: number) {
    setOpenFaq((prev) => (prev === index ? -1 : index));
  }

  function openGallery(images: string[], startIndex = 0) {
    setGallery({ images, index: startIndex });
  }

  function closeGallery() {
    setGallery(null);
  }

  function galleryNext() {
    setGallery((g) => g && { ...g, index: (g.index + 1) % g.images.length });
  }

  function galleryPrev() {
    setGallery((g) => g && { ...g, index: (g.index - 1 + g.images.length) % g.images.length });
  }

  return { openFaq, toggleFaq, gallery, openGallery, closeGallery, galleryNext, galleryPrev };
}
