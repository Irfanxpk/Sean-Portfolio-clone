import { useRef, useEffect } from "react";
import gsap from "gsap";

/**
 * useSheepHover
 * Adds smooth left slide animation to any component on hover.
 *
 * @param {number} distance - How far the element should move left (px or vw)
 * @param {number} duration - Duration of animation in seconds
 */
export const useSheepHover = (distance = "120vw", duration = 3) => {
  const elRef = useRef(null);

  useEffect(() => {
    const element = elRef.current;
    if (!element) return;

    // GSAP timeline
    const tl = gsap.timeline({ paused: true });

    tl.to(element, {
      x: `-${distance}`,
      duration: duration,
      ease: "power1.inOut",
    });

    const handleEnter = () => tl.play();
    const handleLeave = () => tl.reverse();

    element.addEventListener("mouseenter", handleEnter);
    element.addEventListener("mouseleave", handleLeave);

    return () => {
      element.removeEventListener("mouseenter", handleEnter);
      element.removeEventListener("mouseleave", handleLeave);
      tl.kill();
    };
  }, [distance, duration]);

  return elRef;
};
