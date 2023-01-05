import { defineConfig } from "cypress";

export default defineConfig({
  projectId: "spdb6n",
  e2e: {
    baseUrl: "http://localhost:3000",
    supportFile: false,
  },
});
