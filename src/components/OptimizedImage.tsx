import { useState, useEffect } from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  loading?: "lazy" | "eager";
}

export default function OptimizedImage({
  src,
  alt,
  className = "",
  width,
  height,
  loading = "lazy",
}: OptimizedImageProps) {
  const [imageSrc, setImageSrc] = useState<string>("");

  useEffect(() => {
    // Create a new image to preload
    const img = new Image();
    img.src = src;

    // When image is loaded, update state
    img.onload = () => {
      setImageSrc(src);
    };
  }, [src]);

  return (
    <img
      src={imageSrc || src}
      alt={alt}
      className={className}
      width={width}
      height={height}
      loading={loading}
    />
  );
}
