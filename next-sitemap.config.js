/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://infragenixng.com', // your site’s main URL
  generateRobotsTxt: true, // (optional)
  sitemapSize: 7000,
  changefreq: 'weekly',
  priority: 0.7,
  exclude: ['/admin', '/dashboard'], // add private routes you don’t want indexed
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
    ],
  },
};
