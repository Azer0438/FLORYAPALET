import React from "react";
import { renderToString } from "react-dom/server";
import { HelmetProvider } from "react-helmet-async";
import App, { getSeoForPath, routesToPrerender } from "./App.jsx";

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function renderSeoHead(pathname) {
  const seo = getSeoForPath(pathname);

  return [
    `<title>${escapeHtml(seo.title)}</title>`,
    `<meta name="description" content="${escapeHtml(seo.description)}">`,
    `<link rel="canonical" href="${escapeHtml(seo.canonical)}">`,
    `<meta property="og:title" content="${escapeHtml(seo.ogTitle)}">`,
    `<meta property="og:description" content="${escapeHtml(seo.ogDescription)}">`,
    `<meta property="og:url" content="${escapeHtml(seo.ogUrl)}">`,
    `<meta property="og:type" content="${escapeHtml(seo.ogType)}">`,
    `<meta property="og:image" content="${escapeHtml("https://www.kayserifloryapalet.com.tr/images/florya-palet-og.png")}">`,
  ].join("\n    ");
}

function render(pathname) {
  const html = renderToString(
    <HelmetProvider>
      <App initialPath={pathname} includeSeo={false} />
    </HelmetProvider>,
  );

  return { head: renderSeoHead(pathname), html };
}

export { render, routesToPrerender };
