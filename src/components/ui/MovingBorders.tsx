"use client";

import React, {
  ElementType,
  ReactNode,
  useRef,
  ComponentPropsWithoutRef,
} from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/utils";

// 1. Own props for Button
interface ButtonOwnProps {
  borderRadius?: string;
  containerClassName?: string;
  borderClassName?: string;
  duration?: number;
  className?: string;
  children: ReactNode;
}

// 2. Polymorphic props helper
type PolymorphicComponentProps<
  E extends ElementType,
  P
> = P & Omit<ComponentPropsWithoutRef<E>, keyof P | "as"> & {
    as?: E;
  };

// 3. ButtonProps is PolymorphicComponentProps<"button", ButtonOwnProps>
type ButtonProps<E extends ElementType> = PolymorphicComponentProps<
  E,
  ButtonOwnProps
>;

// 4. The Button component
export const Button = <E extends ElementType = "button">(
  {
    as,
    borderRadius = "1.75rem",
    containerClassName,
    borderClassName,
    duration,
    className,
    children,
    ...restProps
  }: ButtonProps<E>
) => {
  const Component = as || "button";

  return (
    <Component
      className={cn(
        "relative overflow-hidden bg-transparent p-[1px] text-xl",
        containerClassName
      )}
      style={{ borderRadius }}
      {...(restProps as ComponentPropsWithoutRef<E>)}
    >
      <div
        className="absolute inset-0"
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        <MovingBorder duration={duration} rx="30%" ry="30%">
          <div
            className={cn(
              "h-20 w-20 bg-[radial-gradient(#0ea5e9_40%,transparent_60%)] opacity-[0.9]",
              borderClassName
            )}
          />
        </MovingBorder>
      </div>

      <div
        className={cn(
          "relative flex h-full w-full items-center justify-center border border-slate-800 bg-slate-900/[0.8] text-sm text-white antialiased backdrop-blur-xl",
          className
        )}
        style={{ borderRadius: `calc(${borderRadius} * 0.96)` }}
      >
        {children}
      </div>
    </Component>
  );
};

// 5. MovingBorder stays as-is
export const MovingBorder = ({
  children,
  duration = 3000,
  rx,
  ry,
  ...otherProps
}: {
  children: ReactNode;
  duration?: number;
  rx?: string;
  ry?: string;
} & Omit<React.SVGProps<SVGSVGElement>, "ref">) => {
  const pathRef = useRef<SVGRectElement | null>(null);
  const progress = useMotionValue(0);

  useAnimationFrame((t) => {
    const len = pathRef.current?.getTotalLength() ?? 0;
    const pxPerMs = len / duration;
    progress.set((t * pxPerMs) % len);
  });

  const x = useTransform(progress, (v) =>
    pathRef.current?.getPointAtLength(v).x ?? 0
  );
  const y = useTransform(progress, (v) =>
    pathRef.current?.getPointAtLength(v).y ?? 0
  );

  const transform = useMotionTemplate`
    translateX(${x}px)
    translateY(${y}px)
    translateX(-50%)
    translateY(-50%)
  `;

  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute h-full w-full"
        width="100%"
        height="100%"
        {...otherProps}
      >
        <rect
          fill="none"
          width="100%"
          height="100%"
          rx={rx}
          ry={ry}
          ref={pathRef}
        />
      </svg>
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          display: "inline-block",
          transform,
        }}
      >
        {children}
      </motion.div>
    </>
  );
};
