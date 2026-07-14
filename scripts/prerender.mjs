import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createServer } from "vite";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const distDir = path.join(root, "dist");
const templatePath = path.join(distDir, "index.html");

function outputPathForRoute(route) {
  if (route === "/") {
    return templatePath;
  }

  return path.join(distDir, route.replace(/^\//, ""), "index.html");
}

const template = await readFile(templatePath, "utf8");
const vite = await createServer({
  root,
  appType: "custom",
  logLevel: "error",
  optimizeDeps: {
    noDiscovery: true,
  },
  server: {
    middlewareMode: true,
  },
});

try {
  const { render, routesToPrerender } = await vite.ssrLoadModule("/src/entry-server.jsx");

  for (const route of routesToPrerender) {
    const { head, html } = render(route);
    const output = template.replace("<!--app-head-->", head).replace("<!--app-html-->", html);
    const filePath = outputPathForRoute(route);

    await mkdir(path.dirname(filePath), { recursive: true });
    await writeFile(filePath, output);
    console.log(`prerendered ${route} -> ${path.relative(root, filePath)}`);
  }
} finally {
  await vite.close();
}
