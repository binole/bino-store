module.exports = {
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/products'
      }
    ];
  },
  images: {
    domains: ['nextstore.local']
  }
};
