// pages/sitemap.xml.js
export async function getServerSideProps({ res }) {
    // Set the content type to XML
    res.setHeader("Content-Type", "text/xml");
  
    // Define the XML sitemap content
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url>
      <loc>https://acme.com</loc>
      <lastmod>2023-04-06T15:02:24.021Z</lastmod>
      <changefreq>yearly</changefreq>
      <priority>1</priority>
    </url>
    <url>
      <loc>https://acme.com/about</loc>
      <lastmod>2023-04-06T15:02:24.021Z</lastmod>
      <changefreq>monthly</changefreq>
      <priority>0.8</priority>
    </url>
    <url>
      <loc>https://acme.com/blog</loc>
      <lastmod>2023-04-06T15:02:24.021Z</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.5</priority>
    </url>
  </urlset>`;
  
    // Send the response
    res.write(sitemap);
    res.end();
  
    return {
      props: {},
    };
  }
  
  export default function Sitemap() {
    return null;
  }
  