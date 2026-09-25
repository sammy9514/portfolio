import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";

type Props = {
  children: ReactNode;
  className?: string;
  delay?: number;
  /** Animate on mount rather than on scroll into view. */
  onMount?: boolean;
  as?: "div" | "section" | "article" | "h1" | "p" | "form";
};

/**
 * Content is visible by default and only animates when motion is allowed,
 * so a failed or slow animation can never leave the page blank.
 */
const Reveal = ({
  children,
  className = "",
  delay = 0,
  onMount = false,
  as = "div",
}: Props) => {
  const reduced = useReducedMotion();
  const Tag = motion[as] as typeof motion.div;

  if (reduced) {
    const Plain = as as "div";
    return <Plain className={className}>{children}</Plain>;
  }

  const motionProps = onMount
    ? { animate: { opacity: 1, y: 0 } }
    : {
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.15 } as const,
      };

  return (
    <Tag
      initial={{ opacity: 0, y: 18 }}
      transition={{ duration: 0.45, delay }}
      className={className}
      {...motionProps}
    >
      {children}
    </Tag>
  );
};

export default Reveal;
