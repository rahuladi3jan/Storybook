module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },

  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/configs/theme-config/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      colors: {
        "storybook-blue-80": "#365069",
        "storybook-blue-100": "#253746",
        "storybook-orange-60": "#f37e62",
        "storybook-orange-80": "#f26941",
        "storybook-orange-100": "#eb5752",
        "storybook-red-20": "#fce6e5",
        "storybook-white-110": "#ebeef0",
        "storybook-white-130": "#b3b3b3",
        "storybook-white-140": "#666666",
        "storybook-white-150": "#808080",
        "storybook-white-170": "#4d4d4d",
        "storybook-black-30": "#333333",
      },
      backgroundColor: {
        primary: "var(--color-bg-primary)",
      },
      textColor: {
        primary: "var(--color-text-primary)",
        secondary: "var(--color-text-secondary)",
      },
    },
  },

  plugins: [require("tailwindcss"), require("autoprefixer")],
};
