"use client";

import { MotionConfig } from "framer-motion";
import type { ReactNode } from "react";

/**
 * Honour the visitor's "reduce motion" OS setting for every framer-motion
 * animation on the site (transforms and layout animations are disabled,
 * simple fades are kept).
 */
export function MotionProvider({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
