import react from "@vitejs/plugin-react";
import { resolve } from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import tailwindcss from "tailwindcss";
// import federation from "@originjs/vite-plugin-federation";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      include: ["src/lib"],
    }),
    // federation({
    //   name: "shared_library",
    //   filename: "remoteEntry.js",
    //   exposes: {
    //     "./Button": "./src/lib/components/Button",
    //   },
    //   shared: ["react", "react-dom"],
    // }),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss],
    },
  },
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, "./src/lib/index.ts"),
      // the proper extensions will be added
      formats: ["es", "umd"],
      name: "shared-lib",
      fileName: (format) => `shared-lib.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["react", "react/jsx-runtime", "react-dom", "tailwindcss"],
      output: {
        globals: {
          react: "React",
          "react/jsx-runtime": "react/jsx-runtime",
          "react-dom": "ReactDOM",
          tailwindcss: "tailwindcss",
        },
      },
    },
  },
});
