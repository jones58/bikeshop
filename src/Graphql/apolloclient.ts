import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";
const SHOPIFY_STOREFRONT_ACCESS_TOKEN = import.meta.env
  .VITE_SHOPIFY_STOREFRONT_ACCESS_TOKEN;

const client = new ApolloClient({
  link: new HttpLink({
    uri: `https://jacksbikeshop.myshopify.com/api/graphql`,
    headers: {
      "X-Shopify-Storefront-Access-Token": `${SHOPIFY_STOREFRONT_ACCESS_TOKEN}`,
    },
  }),
  cache: new InMemoryCache(),
});
export default client;
