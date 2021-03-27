module.exports = {
  async rewrites() {
    return [
      {
        source: '/',
        destination: '/products'
      }
    ];
  }
};
