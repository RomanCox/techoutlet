/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://techoutlet.by',    // <- поменяй на свой домен
  generateRobotsTxt: true,               // создает robots.txt
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,                     // по умолчанию
  // exclude: ['/secret-page'],
  // transform: async (config, path) => ({ loc: path, changefreq: 'daily', priority: 0.9 })
}
