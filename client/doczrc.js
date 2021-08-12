module.exports = {
  title: 'Store Page Demo Documentation',
  description: 'A neat documentation for Store Page Demo',
  typescript: true,
  public: './docs/public',
  files: '**/*.{md,markdown,mdx}',
  ignore: ['README.md'],
  menu: [
    { name: 'Getting Started' },
    { name: 'Design Principles' },
    { name: 'Responsive Styles' },
    { name: 'Theme' },
    { name: 'Changelog' },
    { name: 'Components' },
  ],
  htmlContext: {
    head: {
      links: [
        { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700;800&display=swap',
        },
        {
          rel: 'stylesheet',
          href:
            'https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap',
        },
      ],
    },
  },
}
