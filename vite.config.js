import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        VitePWA({
            includeAssets: ["**/*"],
            manifest: {
                name: "Break Time",
                short_name: "Break",
                icons: [
                    {
                        src: "./assets/rest-icon.png",
                        sizes: "192x192",
                        type: "image/png",
                        purpose: "any maskable",
                    },
                    {
                        src: "./assets/rest-icon.png",
                        sizes: "512x512",
                        type: "image/png",
                    },
                ],
                theme_color: "#000",
                background_color: "#000",
                start_url: "https://rest-time.vercel.app/",
                display: "standalone",
                orientation: "portrait",
            },
        }),
    ],
});
