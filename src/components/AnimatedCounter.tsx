import { motion, useMotionValue, animate, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  duration?: number; // in seconds
  className?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  target,
  suffix = "",
  duration = 1,
  className = "",
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const count = useMotionValue(0);
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    if (inView) {
      const controls = animate(count, target, {
        duration,
        ease: "easeOut",
        onUpdate(value) {
          setDisplayCount(Math.floor(value));
        },
      });
      return () => controls.stop();
    }
  }, [count, inView, target, duration]);

  return (
    <motion.span ref={ref} className={className}>
      {displayCount.toLocaleString() + suffix}
    </motion.span>
  );
};

export default AnimatedCounter;
