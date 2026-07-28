module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        primary: ["Poppins", "sans-serif"],
        display: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        // legacy tokens kept so nothing that referenced them breaks
        "light-content": "#A7A7A7",
        "dark-heading": "#1f2428",
        "dark-content": "#666666",
        "light-heading": "#CCCCCC",
        "dark-mode": "#0a0a0d",
        "dark-card": "#15151b",
        "green-text": "#018C0F",
        "greenbg": "#D7FFE0",

        // new design tokens
        bg: "#fafafa",
        "bg-dark": "#0a0a0d",
        surface: "#ffffff",
        "surface-dark": "#131318",
        "surface-2": "#f4f4f6",
        "surface-2-dark": "#1b1b22",
        ink: "#14131a",
        "ink-dark": "#f3f3f6",
        muted: "#68666f",
        "muted-dark": "#98979f",
        borderc: "rgba(20,19,26,0.08)",
        "borderc-dark": "rgba(255,255,255,0.08)",
        indigo: {
          accent: "#6366f1",
        },
        purple: {
          accent: "#a855f7",
        },
        pink: {
          accent: "#ec4899",
        },
      },
      backgroundImage: {
        aurora:
          "radial-gradient(40% 40% at 20% 20%, rgba(99,102,241,0.25) 0%, rgba(99,102,241,0) 100%), radial-gradient(35% 35% at 80% 30%, rgba(236,72,153,0.22) 0%, rgba(236,72,153,0) 100%), radial-gradient(45% 45% at 50% 80%, rgba(168,85,247,0.18) 0%, rgba(168,85,247,0) 100%)",
        "dot-grid":
          "radial-gradient(rgba(20,19,26,0.12) 1px, transparent 1px)",
        "dot-grid-dark":
          "radial-gradient(rgba(255,255,255,0.12) 1px, transparent 1px)",
      },
      backgroundSize: {
        "dot-sm": "18px 18px",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(20,19,26,0.04), 0 8px 24px -8px rgba(20,19,26,0.10)",
        "soft-dark":
          "0 1px 2px rgba(0,0,0,0.3), 0 8px 30px -8px rgba(0,0,0,0.5)",
        glow: "0 0 0 1px rgba(99,102,241,0.15), 0 8px 30px -8px rgba(99,102,241,0.35)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-14px)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%, 49%": { opacity: "1" },
          "50%, 100%": { opacity: "0" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        "float-slow": "float 11s ease-in-out infinite",
        "fade-up": "fade-up 0.8s cubic-bezier(0.16, 1, 0.3, 1) both",
        blink: "blink 1.1s step-end infinite",
        marquee: "marquee 28s linear infinite",
      },
      transitionTimingFunction: {
        premium: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};
