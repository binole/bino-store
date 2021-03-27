const WooCommerceRestApi = require("@woocommerce/woocommerce-rest-api").default;

const api = new WooCommerceRestApi({
  url: process.env.API_URL,
  consumerKey: process.env.API_CONSUMER_KEY,
  consumerSecret: process.env.API_CONSUMER_SECRET,
  version: 'wc/v3'
});

export default api