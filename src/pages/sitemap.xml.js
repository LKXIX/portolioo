export async function getServerSideProps({ res }) {
  res.setHeader("Content-Type", "text/xml");
  res.setHeader("Cache-Control", "public, s-maxage=86400, stale-while-revalidate");

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://liamkarlsson.se</loc>
    <lastmod>2025-06-01</lastmod>
  </url>
  <url>
    <loc>https://liamkarlsson.se/about</loc>
    <lastmod>2025-06-01</lastmod>
  </url>
  <url>
    <loc>https://liamkarlsson.se/projects</loc>
    <lastmod>2025-06-01</lastmod>
  </url>
  <url>
    <loc>https://liamkarlsson.se/articles</loc>
    <lastmod>2025-06-01</lastmod>
  </url>
  <url>
    <loc>https://liamkarlsson.se/media</loc>
    <lastmod>2026-03-17</lastmod>
  </url>
  <url>
    <loc>https://liamkarlsson.se/blog</loc>
    <lastmod>2026-03-28</lastmod>
  </url>
  <url>
    <loc>https://liamkarlsson.se/blog/what-is-aeo</loc>
    <lastmod>2025-11-14</lastmod>
  </url>
  <url>
    <loc>https://liamkarlsson.se/blog/how-to-get-cited-by-chatgpt</loc>
    <lastmod>2025-12-03</lastmod>
  </url>
  <url>
    <loc>https://liamkarlsson.se/stack</loc>
    <lastmod>2026-03-23</lastmod>
  </url>
</urlset>`;

  res.write(sitemap);
  res.end();

  return { props: {} };
}

export default function Sitemap() {
  return null;
}
