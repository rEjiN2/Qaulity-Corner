"use client";

import Image, { type ImageProps } from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export function ParallaxImage({
  alt,
  offset = 60,
  ...props
}: ImageProps & { offset?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);

  return (
    <div ref={ref} className="absolute inset-0 overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-x-0 -inset-y-[10%]">
        <Image {...props} alt={alt} fill />
      </motion.div>
    </div>
  );
}
