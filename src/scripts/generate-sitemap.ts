import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { Readable } from 'stream';

// Define your website's URLs
const urls = [
  { url: '/', changefreq: 'weekly', priority: 1.0 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/services', changefreq: 'weekly', priority: 0.9 },
  { url: '/media', changefreq: 'weekly', priority: 0.7 },
  { url: '/contact', changefreq: 'monthly', priority: 0.8 },
];

// Create a sitemap stream
const stream = new SitemapStream({ hostname: 'https://bahtaexpress.com' });

// Return a promise that resolves with your XML string
streamToPromise(Readable.from(urls).pipe(stream))
  .then((data) => {
    // Write the XML to file
    createWriteStream('./dist/sitemap.xml').write(data.toString());
    console.log('Sitemap generated successfully!');
  })
  .catch((error) => {
    console.error('Error generating sitemap:', error);
  });