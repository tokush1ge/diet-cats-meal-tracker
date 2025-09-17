import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'app.lovable.d9167afbdc2d4d89b1d2f86e24137e98',
  appName: 'diet-cats-meal-tracker',
  webDir: 'dist',
  server: {
    url: 'https://d9167afb-dc2d-4d89-b1d2-f86e24137e98.lovableproject.com?forceHideBadge=true',
    cleartext: true
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 0,
    },
  },
};

export default config;