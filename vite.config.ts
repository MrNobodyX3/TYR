import vinext from "vinext";
import { defineConfig } from "vite";

export default defineConfig(() => {
  const basePath = process.env.PAGES_BASE_PATH ?? "";

  return {
    base: basePath ? `${basePath}/` : "/",
    plugins: [vinext()],
  };
});
