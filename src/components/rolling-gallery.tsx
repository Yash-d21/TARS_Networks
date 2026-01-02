"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  motion,
  useMotionValue,
  useAnimation,
  useTransform,
  PanInfo,
} from "framer-motion";
import "./rolling-gallery.css";
import Image from "next/image";

const IMAGES_DATA = [
  { src: "https://placehold.co/600x400.png", hint: "award certificate" },
  { src: "https://placehold.co/600x400.png", hint: "handshake agreement" },
  { src: "https://placehold.co/600x400.png", hint: "trophy recognition" },
  { src: "https://placehold.co/600x400.png", hint: "partnership deal" },
  { src: "https://placehold.co/600x400.png", hint: "industry award" },
  { src: "https://placehold.co/600x400.png", hint: "signing ceremony" },
  { src: "https://placehold.co/600x400.png", hint: "excellence award" },
  { src: "https://placehold.co/600x400.png", hint: "collaboration meeting" },
  { src: "https://placehold.co/600x400.png", hint: "best startup" },
  { src: "https://placehold.co/600x400.png", hint: "MOU document" },
];


interface RollingGalleryProps {
  autoplay?: boolean;
  pauseOnHover?: boolean;
  images?: { src: string; hint: string }[];
}

const RollingGallery: React.FC<RollingGalleryProps> = ({
  autoplay = false,
  pauseOnHover = false,
  images = IMAGES_DATA,
}) => {
  const [isScreenSizeSm, setIsScreenSizeSm] = useState<boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setIsScreenSizeSm(window.innerWidth <= 640);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cylinderWidth: number = isScreenSizeSm ? 1100 : 1800;
  const faceCount: number = images.length;
  const faceWidth: number = (cylinderWidth / faceCount) * 1.5;
  const dragFactor: number = 0.05;
  const radius: number = cylinderWidth / (2 * Math.PI);

  const rotation = useMotionValue(0);
  const controls = useAnimation();
  const autoplayRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const handleDrag = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ): void => {
    if (autoplayRef.current) clearInterval(autoplayRef.current);
    controls.stop();
    rotation.set(rotation.get() + info.offset.x * dragFactor);
  };

  const handleDragEnd = (
    _: MouseEvent | TouchEvent | PointerEvent,
    info: PanInfo
  ): void => {
    controls.start({
      rotateY: rotation.get() + info.velocity.x * dragFactor,
      transition: {
        type: "spring",
        stiffness: 60,
        damping: 20,
        mass: 0.1,
        ease: "easeOut",
      },
    });
    startAutoplay();
  };

  const transform = useTransform(rotation, (value: number) => {
    return `rotate3d(0, 1, 0, ${value}deg)`;
  });

  const startAutoplay = () => {
    if (autoplay && !pauseOnHover) {
       if (autoplayRef.current) clearInterval(autoplayRef.current);
       autoplayRef.current = setInterval(() => {
        controls.start({
          rotateY: rotation.get() - 360 / faceCount,
          transition: { duration: 2, ease: "linear" },
        });
        rotation.set(rotation.get() - 360 / faceCount, false);
      }, 2000);
    }
  };

  useEffect(() => {
    startAutoplay();
    return () => {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
    };
  }, [autoplay, pauseOnHover, rotation, controls, faceCount]);


  const handleMouseEnter = (): void => {
    if (autoplay && pauseOnHover) {
      if (autoplayRef.current) clearInterval(autoplayRef.current);
      controls.stop();
    }
  };

  const handleMouseLeave = (): void => {
    if (autoplay && pauseOnHover) {
        startAutoplay();
    }
  };

  return (
    <div className="gallery-container">
      <div className="gallery-gradient gallery-gradient-left"></div>
      <div className="gallery-gradient gallery-gradient-right"></div>
      <div className="gallery-content">
        <motion.div
          drag="x"
          className="gallery-track"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          style={{
            transform: transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: "preserve-3d",
          }}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          animate={controls}
        >
          {images.map((imgData, i) => (
            <div
              key={i}
              className="gallery-item"
              style={{
                width: `${faceWidth}px`,
                transform: `rotateY(${(360 / faceCount) * i}deg) translateZ(${radius}px)`,
              }}
            >
              <Image 
                src={imgData.src} 
                alt={`Gallery image ${i + 1}`} 
                width={300}
                height={120}
                className="gallery-img" 
                data-ai-hint={imgData.hint}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default RollingGallery;
