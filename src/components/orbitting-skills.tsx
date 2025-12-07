"use client";
import React, { useEffect, useState, memo } from "react";

// --- Type Definitions ---
type IconType =
  | "html"
  | "css"
  | "javascript"
  | "react"
  | "node"
  | "tailwind"
  | "ts"
  | "backend"
  | "cloud"
  | "containers"
  | "devops"
  | "database";

type GlowColor = "cyan" | "purple";

interface SkillIconProps {
  type: IconType;
}

interface SkillConfig {
  id: string;
  orbitRadius: number;
  size: number;
  speed: number;
  iconType: IconType;
  phaseShift: number;
  glowColor: GlowColor;
  label: string;
}

interface OrbitingSkillProps {
  config: SkillConfig;
  angle: number;
}

interface GlowingOrbitPathProps {
  radius: number;
  glowColor?: GlowColor;
  animationDelay?: number;
}

// --- Icon Components (all 12 have visible SVGs now) ---
const iconComponents: Record<
  IconType,
  { component: () => React.JSX.Element; color: string }
> = {
  html: {
    component: () => (
      <svg viewBox="0 0 24 24" className="w-full h-full">
        <path
          fill="#E34F26"
          d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0z"
        />
        <path
          fill="#fff"
          d="M8.53 9.75l-.23-2.72h10.06l.23-2.622H5.41l.70 8.01h9.13l-.33 3.426-2.91.804-2.96-.81-.18-2.11H6.25l.29 3.75L12 19.35l5.38-1.44.74-8.16H8.53z"
        />
      </svg>
    ),
    color: "#E34F26",
  },
  css: {
    component: () => (
      <svg viewBox="0 0 24 24" className="w-full h-full">
        <path
          fill="#1572B6"
          d="M1.5 0h21L20.59 21.56 11.98 24 3.42 21.56z"
        />
        <path
          fill="#fff"
          d="M17.12 7.03H7.09l.21 2.62h9l-.26 2.72h-6.64l.24 2.57h6.19l-.37 3.52L12 19.35l-2.96-.81-.18-2.11H6.25l.29 3.75L12 22l5.38-1.44.74-8.16z"
        />
      </svg>
    ),
    color: "#1572B6",
  },
  javascript: {
    component: () => (
      <svg viewBox="0 0 24 24" className="w-full h-full">
        <rect width="24" height="24" fill="#F7DF1E" rx="3" />
        <text
          x="6.5"
          y="16.5"
          fontSize="10"
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
          fill="#323330"
          fontWeight="700"
        >
          JS
        </text>
      </svg>
    ),
    color: "#F7DF1E",
  },
  react: {
    component: () => (
      <svg viewBox="0 0 24 24" className="w-full h-full" fill="none">
        <g stroke="#61DAFB" strokeWidth="1.4">
          <circle cx="12" cy="12" r="2.2" fill="#61DAFB" />
          <ellipse cx="12" cy="12" rx="9.2" ry="4.0" />
          <ellipse
            cx="12"
            cy="12"
            rx="9.2"
            ry="4.0"
            transform="rotate(60 12 12)"
          />
          <ellipse
            cx="12"
            cy="12"
            rx="9.2"
            ry="4.0"
            transform="rotate(120 12 12)"
          />
        </g>
      </svg>
    ),
    color: "#61DAFB",
  },
  node: {
    component: () => (
      <svg viewBox="0 0 24 24" className="w-full h-full">
        <path
          fill="#3C873A"
          d="M11.7 1.1L3 6v12l8.7 4.9L20.4 18V6z"
        />
        <path
          fill="#fff"
          d="M12 7c-2 0-3.2 1-3.2 2.6 0 1.7 1.5 2.2 3 2.5l.4.1c1 .3 1.6.5 1.6 1 0 .5-.4.8-1.2.8-.9 0-1.4-.3-1.9-1l-1.7 1c.7 1.3 1.9 1.9 3.6 1.9 2.1 0 3.5-1 3.5-2.8 0-1.7-1.4-2.3-3.1-2.7l-.5-.1c-.9-.2-1.4-.4-1.4-.9 0-.4.3-.8 1-.8.7 0 1.2.3 1.6.9l1.6-1c-.6-1.1-1.6-1.6-3.1-1.6z"
        />
      </svg>
    ),
    color: "#3C873A",
  },
  tailwind: {
    component: () => (
      <svg viewBox="0 0 24 24" className="w-full h-full">
        <path
          fill="#06B6D4"
          d="M12 4.5c-3 0-4.9 1.5-5.7 4.4C7.3 7.4 8.7 6.8 10.2 7.2c.8.2 1.4.8 2.1 1.5.9.9 1.9 1.8 3.7 1.8 3 0 4.9-1.5 5.7-4.4-1 .9-2.1 1.3-3.3 1-1-.2-1.6-.8-2.3-1.6C15.1 4.9 14.1 4.5 12 4.5zM6.3 12.9C5.3 12.1 4.2 11.7 3 12c-1 .2-1.8.8-2.4 1.6.8-2.9 2.7-4.4 5.7-4.4 2.1 0 3.1.4 4.2 1.5.7.8 1.3 1.4 2.3 1.6 1.2.3 2.3-.1 3.3-1-.8 2.9-2.7 4.4-5.7 4.4-2.1 0-3.1-.4-4.2-1.5-.7-.7-1.3-1.3-2.3-1.5z"
        />
      </svg>
    ),
    color: "#06B6D4",
  },
  ts: {
    component: () => (
      <svg viewBox="0 0 24 24" className="w-full h-full">
        <rect width="24" height="24" rx="3" fill="#3178C6" />
        <text
          x="6.2"
          y="16.4"
          fontSize="10"
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, sans-serif"
          fill="#fff"
          fontWeight="700"
        >
          TS
        </text>
      </svg>
    ),
    color: "#3178C6",
  },
  backend: {
    component: () => (
      <svg viewBox="0 0 24 24" className="w-full h-full">
        <rect x="3" y="4" width="18" height="6" rx="1.5" fill="#FB923C" />
        <rect x="3" y="10" width="18" height="6" rx="1.5" fill="#FDBA74" />
        <rect x="3" y="16" width="18" height="4" rx="1.5" fill="#FFEDD5" />
      </svg>
    ),
    color: "#FB923C",
  },
  cloud: {
    component: () => (
      <svg viewBox="0 0 24 24" className="w-full h-full">
        <path
          fill="#38BDF8"
          d="M18.5 10.1A4.5 4.5 0 0010 8.8 3.5 3.5 0 005.5 12C3.6 12.1 2 13.7 2 15.7 2 17.8 3.7 19.5 5.8 19.5h11.4c2.1 0 3.8-1.7 3.8-3.8 0-2-1.5-3.5-3.5-3.6z"
        />
      </svg>
    ),
    color: "#38BDF8",
  },
  containers: {
    component: () => (
      <svg viewBox="0 0 24 24" className="w-full h-full">
        <rect x="2" y="8" width="20" height="10" rx="1.5" fill="#0EA5E9" />
        <rect x="4" y="10" width="3" height="6" fill="#E0F2FE" />
        <rect x="9" y="10" width="3" height="6" fill="#E0F2FE" />
        <rect x="14" y="10" width="3" height="6" fill="#E0F2FE" />
      </svg>
    ),
    color: "#0EA5E9",
  },
  devops: {
    component: () => (
      <svg viewBox="0 0 24 24" className="w-full h-full">
        <path
          fill="none"
          stroke="#F97316"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 9c1.2-1.3 2.3-2 3.8-2 2.4 0 3.7 2 4.7 3.5C14.5 12.9 13.3 15 11 15c-1.5 0-2.6-.7-3.8-2M19 15c-1.2 1.3-2.3 2-3.8 2-2.4 0-3.7-2-4.7-3.5C9.5 11.1 10.7 9 13 9c1.5 0 2.6.7 3.8 2"
        />
      </svg>
    ),
    color: "#F97316",
  },
  database: {
    component: () => (
      <svg viewBox="0 0 24 24" className="w-full h-full">
        <ellipse cx="12" cy="5" rx="7" ry="3" fill="#14B8A6" />
        <path
          d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5"
          fill="#0F766E"
        />
        <path
          d="M5 11v5c0 1.7 3.1 3 7 3s7-1.3 7-3v-5"
          fill="#115E59"
        />
      </svg>
    ),
    color: "#14B8A6",
  },
};

// --- Memoized Icon ---
const SkillIcon = memo(({ type }: SkillIconProps) => {
  const IconComponent = iconComponents[type].component;
  return <IconComponent />;
});
SkillIcon.displayName = "SkillIcon";

// --- 12 Skills / 3 Orbit Rings ---
const skillsConfig: SkillConfig[] = [
  // Inner Orbit (3)
  {
    id: "html",
    orbitRadius: 100,
    size: 40,
    speed: 1,
    iconType: "html",
    phaseShift: 0,
    glowColor: "cyan",
    label: "HTML5",
  },
  {
    id: "css",
    orbitRadius: 100,
    size: 40,
    speed: 1,
    iconType: "css",
    phaseShift: (2 * Math.PI) / 3,
    glowColor: "cyan",
    label: "CSS3",
  },
  {
    id: "javascript",
    orbitRadius: 100,
    size: 40,
    speed: 1,
    iconType: "javascript",
    phaseShift: (4 * Math.PI) / 3,
    glowColor: "cyan",
    label: "JavaScript",
  },

  // Middle Orbit (4)
  {
    id: "react",
    orbitRadius: 170,
    size: 50,
    speed: -0.7,
    iconType: "react",
    phaseShift: 0,
    glowColor: "purple",
    label: "React",
  },
  {
    id: "node",
    orbitRadius: 170,
    size: 48,
    speed: -0.7,
    iconType: "node",
    phaseShift: (2 * Math.PI) / 4,
    glowColor: "purple",
    label: "Node.js",
  },
  {
    id: "tailwind",
    orbitRadius: 170,
    size: 44,
    speed: -0.7,
    iconType: "tailwind",
    phaseShift: (4 * Math.PI) / 4,
    glowColor: "purple",
    label: "Tailwind CSS",
  },
  {
    id: "ts",
    orbitRadius: 170,
    size: 44,
    speed: -0.7,
    iconType: "ts",
    phaseShift: (6 * Math.PI) / 4,
    glowColor: "purple",
    label: "TypeScript",
  },

  // Outer Orbit (5)
  {
    id: "backend",
    orbitRadius: 240,
    size: 48,
    speed: 0.5,
    iconType: "backend",
    phaseShift: 0,
    glowColor: "cyan",
    label: "Backend",
  },
  {
    id: "cloud",
    orbitRadius: 240,
    size: 48,
    speed: 0.5,
    iconType: "cloud",
    phaseShift: (2 * Math.PI) / 5,
    glowColor: "cyan",
    label: "Cloud",
  },
  {
    id: "containers",
    orbitRadius: 240,
    size: 48,
    speed: 0.5,
    iconType: "containers",
    phaseShift: (4 * Math.PI) / 5,
    glowColor: "cyan",
    label: "Containers",
  },
  {
    id: "devops",
    orbitRadius: 240,
    size: 52,
    speed: 0.5,
    iconType: "devops",
    phaseShift: (6 * Math.PI) / 5,
    glowColor: "cyan",
    label: "DevOps",
  },
  {
    id: "database",
    orbitRadius: 240,
    size: 48,
    speed: 0.5,
    iconType: "database",
    phaseShift: (8 * Math.PI) / 5,
    glowColor: "cyan",
    label: "Database",
  },
];

// --- Orbit Ring ---
const GlowingOrbitPath = memo(
  ({ radius, glowColor = "cyan" }: GlowingOrbitPathProps) => (
    <div
      className="absolute rounded-full pointer-events-none"
      style={{
        width: radius * 2,
        height: radius * 2,
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        border: `1px solid ${
          glowColor === "cyan" ? "#06B6D4" : "#A855F7"
        }40`,
        boxShadow: `0 0 25px ${
          glowColor === "cyan" ? "#06B6D4" : "#A855F7"
        }80`,
      }}
    />
  )
);
GlowingOrbitPath.displayName = "GlowingOrbitPath";

// --- Orbiting Skill Icon ---
const OrbitingSkill = memo(({ config, angle }: OrbitingSkillProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { orbitRadius, size, iconType, label } = config;

  const x = Math.cos(angle) * orbitRadius;
  const y = Math.sin(angle) * orbitRadius;

  return (
    <div
      className="absolute top-1/2 left-1/2 transition-all duration-300 ease-out"
      style={{
        width: `${size}px`,
        height: `${size}px`,
        transform: `translate(calc(${x}px - 50%), calc(${y}px - 50%))`,
        zIndex: isHovered ? 20 : 10,
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`relative w-full h-full p-2 bg-gray-900/90 backdrop-blur-sm rounded-full flex items-center justify-center transition-all duration-300 cursor-pointer ${
          isHovered ? "scale-125 shadow-2xl" : "shadow-lg hover:shadow-xl"
        }`}
        style={{
          boxShadow: isHovered
            ? `0 0 25px ${iconComponents[iconType].color}80,
               0 0 50px ${iconComponents[iconType].color}60,
               inset 0 0 25px ${iconComponents[iconType].color}30`
            : `0 0 12px ${iconComponents[iconType].color}30`,
        }}
      >
        <SkillIcon type={iconType} />

        {isHovered && (
          <div
            className="
              absolute -bottom-8 left-1/2 -translate-x-1/2
              px-2 py-1 bg-gray-900/95 backdrop-blur-sm rounded
              text-xs text-white whitespace-nowrap pointer-events-none
              opacity-0 animate-fadeIn
            "
          >
            {label}
          </div>
        )}
      </div>
    </div>
  );
});
OrbitingSkill.displayName = "OrbitingSkill";

// --- Main Component ---
export default function OrbitingSkills() {
  const [time, setTime] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    let frame: number;
    const animate = (t: number) => {
      setTime(t / 600);
      frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [isPaused]);

  return (
    <main className="w-full flex items-center justify-center overflow-hidden py-14">
      <div
        className="relative w-[450px] h-[450px] flex items-center justify-center"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Center Core */}
        <div className="w-24 h-24 bg-gray-900 rounded-full flex items-center justify-center shadow-2xl z-10 border border-gray-700">
          <span className="text-lg font-semibold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Skills
          </span>
        </div>

        {/* Orbit Rings */}
        <GlowingOrbitPath radius={100} glowColor="cyan" />
        <GlowingOrbitPath radius={170} glowColor="purple" />
        <GlowingOrbitPath radius={240} glowColor="cyan" />

        {/* Skill Icons */}
        {skillsConfig.map((cfg) => (
          <OrbitingSkill
            key={cfg.id}
            config={cfg}
            angle={time * cfg.speed + cfg.phaseShift}
          />
        ))}
      </div>
    </main>
  );
}
