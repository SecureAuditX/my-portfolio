"use client";

import { useEffect } from "react";
import { motion, useAnimate } from "motion/react";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
  words,
  className,
  filter = true,
  duration = 0.5,
}: {
  words: string;
  className?: string;
  filter?: boolean;
  duration?: number;
}) => {
  const [scope, animate] = useAnimate();
  let wordsArray = words.split(" ");

  useEffect(() => {
    wordsArray.forEach((_, index) => {
      animate(
        "span:nth-child(" + (index + 1) + ")",
        { opacity: 1, filter: filter ? "blur(0px)" : "none" },
        { duration, delay: index * 0.2 }
      );
    });
  }, [scope.current]);

  return (
    <div className={cn("font-bold", className)}>
      <div className="my-4">
        <div className="dark:text-white text-black  leading-snug tracking-wide">
          <motion.div ref={scope}>
            {wordsArray.map((word, idx) => (
              <motion.span
                key={word + idx}
                className={`${idx > 3 ? 'text-purple-light' : 'dark:text-white text-black'}  opacity-0`}
                style={{ filter: filter ? "blur(10px)" : "none" }}
              >
                {word}{" "}
              </motion.span>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};
