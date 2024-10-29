// pages/sitemap.xml.js
export async function getServerSideProps({ res }) {
    // Set the content type to XML
    res.setHeader("Content-Type", "text/xml");
  
    // Define the XML sitemap content
    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://liamkarlsson.com</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>yearly</changefreq>
        <priority>1.0</priority>
      </url>
      <url>
        <loc>https://liamkarlsson.com/about</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>
      <url>
        <loc>https://liamkarlsson.com/projects</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>weekly</changefreq>
        <priority>0.5</priority>
      </url>
      <url>
        <loc>https://liamkarlsson.com/articles</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>monthly</changefreq>
        <priority>0.7</priority>
      </url>
      <!-- Add more URLs as needed -->
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
