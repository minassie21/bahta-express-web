import { useState, useEffect } from "react";
import { motion, useMotionValue, animate } from "framer-motion";
import useMeasure from "react-use-measure";
import { getClients } from "@/apis/client";

// Import your data-fetching function

interface Logo {
  name: string;
  logo: string;
}

const ProgressiveBlur = ({
  direction = "left",
  blurIntensity = 1,
  className = "",
  ...props
}: any) => {
  const gradientDirection = direction === "left" ? "to right" : "to left";

  return (
    <div
      className={`${className}`}
      style={{
        background: `linear-gradient(${gradientDirection}, 
          rgba(249, 250, 251, 1) 0%, 
          rgba(249, 250, 251, ${0.9 * blurIntensity}) 30%, 
          rgba(249, 250, 251, ${0.4 * blurIntensity}) 60%, 
          rgba(249, 250, 251, 0) 100%)`,
      }}
      {...props}
    />
  );
};

const InfiniteSlider = ({
  children,
  gap = 16,
  speed = 100,
  speedOnHover,
  direction = "horizontal",
  reverse = false,
  className = "",
  ...props
}: any) => {
  const [currentSpeed, setCurrentSpeed] = useState(speed);
  const [ref, { width, height }] = useMeasure();
  const translation = useMotionValue(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [key, setKey] = useState(0);

  useEffect(() => {
    let controls;
    const size = direction === "horizontal" ? width : height;
    const contentSize = size + gap;
    const from = reverse ? -contentSize / 2 : 0;
    const to = reverse ? 0 : -contentSize / 2;

    const distanceToTravel = Math.abs(to - from);
    const duration = distanceToTravel / currentSpeed;

    if (isTransitioning) {
      const remainingDistance = Math.abs(translation.get() - to);
      const transitionDuration = remainingDistance / currentSpeed;

      controls = animate(translation, [translation.get(), to], {
        ease: "linear",
        duration: transitionDuration,
        onComplete: () => {
          setIsTransitioning(false);
          setKey((prevKey) => prevKey + 1);
        },
      });
    } else {
      controls = animate(translation, [from, to], {
        ease: "linear",
        duration: duration,
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0,
        onRepeat: () => {
          translation.set(from);
        },
      });
    }

    return controls?.stop;
  }, [
    key,
    translation,
    currentSpeed,
    width,
    height,
    gap,
    isTransitioning,
    direction,
    reverse,
  ]);

  const hoverProps = speedOnHover
    ? {
        onHoverStart: () => {
          setIsTransitioning(true);
          setCurrentSpeed(speedOnHover);
        },
        onHoverEnd: () => {
          setIsTransitioning(true);
          setCurrentSpeed(speed);
        },
      }
    : {};

  return (
    <div className={`overflow-hidden ${className}`} {...props}>
      <motion.div
        className="flex w-max"
        style={{
          ...(direction === "horizontal"
            ? { x: translation }
            : { y: translation }),
          gap: `${gap}px`,
          flexDirection: direction === "horizontal" ? "row" : "column",
        }}
        ref={ref}
        {...hoverProps}
      >
        {children}
        {children}
      </motion.div>
    </div>
  );
};

export default function InfiniteLogoSlider() {
  const [clientsLogo, setClientsLogo] = useState<Logo[]>([]);

  useEffect(() => {
    const fetchClients = async () => {
      const clients = await getClients();
      setClientsLogo(clients);
    };

    fetchClients();
  }, []);

  return (
    <div className="relative overflow-hidden w-full py-6">
      <InfiniteSlider
        speed={40}
        speedOnHover={20}
        gap={40}
        className="relative py-6 w-full"
      >
        {clientsLogo.map((logo, index) => (
          <div key={index} className="flex flex-shrink-0 items-center">
            <img
              className="w-auto h-16 sm:h-16 object-contain opacity-80 hover:opacity-100 transition-all duration-300"
              src={`${import.meta.env.VITE_API_URL}/public/uploads/images/ClientLogos/${logo.logo}`}
              alt={logo.name}
            />
          </div>
        ))}
      </InfiniteSlider>

      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-gray-50 to-transparent hidden sm:absolute"></div>
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-gray-50 to-transparent"></div>

      <ProgressiveBlur
        className="pointer-events-none absolute left-0 top-0 h-full w-6 sm:w-20"
        direction="left"
        blurIntensity={1}
      />
      <ProgressiveBlur
        className="pointer-events-none absolute right-0 top-0 h-full w-6 sm:w-20"
        direction="right"
        blurIntensity={1}
      />
    </div>
  );
}
