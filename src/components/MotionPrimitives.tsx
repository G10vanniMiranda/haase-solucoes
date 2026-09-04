"use client";

import type { ReactNode } from "react";
import { MotionConfig, motion, type HTMLMotionProps } from "framer-motion";

export function ReducedMotion({ children }: { children: ReactNode }) {
    return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

export function MotionDiv(props: HTMLMotionProps<"div">) {
    return <motion.div {...props} />;
}

export function MotionH1(props: HTMLMotionProps<"h1">) {
    return <motion.h1 {...props} />;
}

export function MotionP(props: HTMLMotionProps<"p">) {
    return <motion.p {...props} />;
}

export function MotionA(props: HTMLMotionProps<"a">) {
    return <motion.a {...props} />;
}

export function MotionSection(props: HTMLMotionProps<"section">) {
    return <motion.section {...props} />;
}
