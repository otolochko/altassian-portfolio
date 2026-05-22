"use client";

import React, {
  Children,
  forwardRef,
  isValidElement,
  useEffect,
  useMemo,
  useRef,
} from "react";
import gsap from "gsap";

// ─── Card ────────────────────────────────────────────────────────────────────

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  customClass?: string;
}

export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ customClass, className, children, style, ...rest }, ref) => (
    <div
      ref={ref}
      {...rest}
      style={{
        position: "absolute",
        borderRadius: "16px",
        border: "1px solid var(--border)",
        background: "var(--card)",
        transformStyle: "preserve-3d",
        willChange: "transform",
        backfaceVisibility: "hidden",
        overflow: "hidden",
        boxShadow: "0 8px 48px rgba(15, 35, 70, 0.10), 0 2px 8px rgba(15, 35, 70, 0.06)",
        ...style,
      }}
      className={`${customClass ?? ""} ${className ?? ""}`.trim()}
    >
      {children}
    </div>
  )
);
Card.displayName = "Card";

// ─── DoneBadge ───────────────────────────────────────────────────────────────

const DoneBadge = forwardRef<HTMLDivElement>((_, ref) => (
  <div
    ref={ref}
    style={{
      display: "flex",
      alignItems: "center",
      gap: "6px",
      background: "rgba(39, 174, 96, 0.18)",
      border: "1.5px solid rgba(39, 174, 96, 0.55)",
      borderRadius: "9999px",
      padding: "6px 14px",
      backdropFilter: "blur(4px)",
      WebkitBackdropFilter: "blur(4px)",
      transform: "scale(0.75)",
    }}
  >
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <circle cx="7" cy="7" r="6" stroke="rgba(39,174,96,0.9)" strokeWidth="1.5" />
      <path
        d="M4 7L6.5 9.5L10 5"
        stroke="#27ae60"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    <span
      style={{
        color: "#27ae60",
        fontWeight: 700,
        fontSize: "11px",
        letterSpacing: "0.1em",
        textTransform: "uppercase",
        fontFamily: "var(--font-ibm-mono, ui-monospace, monospace)",
      }}
    >
      Done
    </span>
  </div>
));
DoneBadge.displayName = "DoneBadge";

// ─── CardSwap ────────────────────────────────────────────────────────────────

const makeSlot = (i: number, distX: number, distY: number, total: number) => ({
  x: i * distX,
  y: -i * distY,
  z: -i * distX * 1.5,
  zIndex: total - i,
});

const placeNow = (
  el: HTMLElement,
  slot: ReturnType<typeof makeSlot>,
  skew: number
) =>
  gsap.set(el, {
    x: slot.x,
    y: slot.y,
    z: slot.z,
    xPercent: -50,
    yPercent: -50,
    skewY: skew,
    transformOrigin: "center center",
    zIndex: slot.zIndex,
    force3D: true,
  });

interface CardSwapProps {
  width?: number;
  height?: number;
  cardDistance?: number;
  verticalDistance?: number;
  delay?: number;
  pauseOnHover?: boolean;
  onCardClick?: (index: number) => void;
  skewAmount?: number;
  easing?: "elastic" | "power";
  children: React.ReactNode;
}

const CardSwap = ({
  width = 420,
  height = 300,
  cardDistance = 60,
  verticalDistance = 70,
  delay = 5000,
  pauseOnHover = true,
  onCardClick,
  skewAmount = 6,
  easing = "elastic",
  children,
}: CardSwapProps) => {
  const config =
    easing === "elastic"
      ? {
          ease: "elastic.out(0.6,0.9)",
          durDrop: 2,
          durMove: 2,
          durReturn: 2,
          promoteOverlap: 0.9,
          returnDelay: 0.05,
        }
      : {
          ease: "power1.inOut",
          durDrop: 0.8,
          durMove: 0.8,
          durReturn: 0.8,
          promoteOverlap: 0.45,
          returnDelay: 0.2,
        };

  const childArr = useMemo(() => Children.toArray(children), [children]);

  const refs = useMemo(
    () => childArr.map(() => React.createRef<HTMLDivElement>()),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [childArr.length]
  );

  const overlayRefs = useMemo(
    () => childArr.map(() => React.createRef<HTMLDivElement>()),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [childArr.length]
  );

  const badgeRefs = useMemo(
    () => childArr.map(() => React.createRef<HTMLDivElement>()),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [childArr.length]
  );

  const order = useRef(Array.from({ length: childArr.length }, (_, i) => i));
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const intervalRef = useRef<ReturnType<typeof setInterval> | undefined>(undefined);
  const container = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const total = refs.length;
    refs.forEach((r, i) => {
      if (r.current) placeNow(r.current, makeSlot(i, cardDistance, verticalDistance, total), skewAmount);
    });

    const swap = () => {
      if (order.current.length < 2) return;
      const [front, ...rest] = order.current;
      const elFront = refs[front].current;
      const overlayEl = overlayRefs[front].current;
      const badgeEl = badgeRefs[front].current;
      if (!elFront) return;

      const tl = gsap.timeline();
      tlRef.current = tl;

      // ── "Done" flash before the card leaves ──────────────────────────────
      if (overlayEl && badgeEl) {
        tl.set(overlayEl, { opacity: 0 });
        tl.set(badgeEl, { opacity: 0, scale: 0.75 });
        // Overlay fades in + badge bounces in together
        tl.to(overlayEl, { opacity: 1, duration: 0.2, ease: "power2.out" });
        tl.to(badgeEl, { opacity: 1, scale: 1, duration: 0.28, ease: "back.out(1.5)" }, "<");
        // Hold so user reads "Done"
        tl.to({}, { duration: 0.32 });
        // Fade overlay out as the drop begins
        tl.to(overlayEl, { opacity: 0, duration: 0.25, ease: "power2.in" }, "+=0");
      }

      // ── Drop ─────────────────────────────────────────────────────────────
      tl.to(elFront, { y: "+=500", duration: config.durDrop, ease: config.ease });

      tl.addLabel("promote", `-=${config.durDrop * config.promoteOverlap}`);
      rest.forEach((idx, i) => {
        const el = refs[idx].current;
        if (!el) return;
        const slot = makeSlot(i, cardDistance, verticalDistance, refs.length);
        tl.set(el, { zIndex: slot.zIndex }, "promote");
        tl.to(el, { x: slot.x, y: slot.y, z: slot.z, duration: config.durMove, ease: config.ease }, `promote+=${i * 0.15}`);
      });

      const backSlot = makeSlot(refs.length - 1, cardDistance, verticalDistance, refs.length);
      tl.addLabel("return", `promote+=${config.durMove * config.returnDelay}`);
      tl.call(() => {
        gsap.set(elFront, { zIndex: backSlot.zIndex });
        // Ensure overlay is hidden before card slides back into view
        if (overlayEl) gsap.set(overlayEl, { opacity: 0 });
        if (badgeEl) gsap.set(badgeEl, { opacity: 0, scale: 0.75 });
      }, undefined, "return");
      tl.to(elFront, { x: backSlot.x, y: backSlot.y, z: backSlot.z, duration: config.durReturn, ease: config.ease }, "return");
      tl.call(() => { order.current = [...rest, front]; });
    };

    swap();
    intervalRef.current = setInterval(swap, delay);

    if (pauseOnHover) {
      const node = container.current;
      if (!node) return;
      const pause = () => { tlRef.current?.pause(); clearInterval(intervalRef.current); };
      const resume = () => { tlRef.current?.play(); intervalRef.current = setInterval(swap, delay); };
      node.addEventListener("mouseenter", pause);
      node.addEventListener("mouseleave", resume);
      return () => {
        node.removeEventListener("mouseenter", pause);
        node.removeEventListener("mouseleave", resume);
        clearInterval(intervalRef.current);
      };
    }
    return () => clearInterval(intervalRef.current);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardDistance, verticalDistance, delay, pauseOnHover, skewAmount, easing]);

  const rendered = childArr.map((child, i) => {
    if (!isValidElement(child)) return child;
    const props = child.props as CardProps;
    return (
      <Card
        key={i}
        ref={refs[i]}
        style={{ width, height, ...props.style }}
        onClick={(e) => {
          props.onClick?.(e);
          onCardClick?.(i);
        }}
        customClass={props.customClass}
        className={props.className}
      >
        {props.children}

        {/* "Done" state overlay — animated by GSAP before each swap */}
        <div
          ref={overlayRefs[i]}
          style={{
            position: "absolute",
            inset: 0,
            borderRadius: "16px",
            background: "var(--card)",
            backdropFilter: "blur(10px)",
            WebkitBackdropFilter: "blur(10px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            opacity: 0,
            pointerEvents: "none",
            zIndex: 10,
          }}
        >
          <DoneBadge ref={badgeRefs[i]} />
        </div>
      </Card>
    );
  });

  return (
    <div
      ref={container}
      style={{
        position: "absolute",
        bottom: 0,
        right: 0,
        transform: "translate(5%, 20%)",
        transformOrigin: "bottom right",
        perspective: "900px",
        overflow: "visible",
        width,
        height,
      }}
    >
      {rendered}
    </div>
  );
};

export default CardSwap;
